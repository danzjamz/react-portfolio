import React, { Component } from 'react';
import axios from 'axios';
import PortfolioSidebarList from './portfolio-sidebar-list';
import PortfolioForm from './portfolio-form';

export default class PortfolioManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItems: [ ]
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleSuccessfulFormSubmission(portfolioItem) {
     this.setState({
       portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
     });
    }

    handleFormSubmissionError(error) {
      console.log('form error', error)
    }

    handleDeleteClick(portfolioItem) {
      axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, { withCredentials: true })
        .then(response => {
          this.setState({ portfolioItems: this.state.portfolioItems.filter(item => {
            return item.id !== portfolioItem.id;
          }) });
          return response.data;
        }).catch(error => {
          console.log(error);
        });
    }

    getPortfolioItems() {
        axios
          .get("https://danzjamz.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {
            withCredentials: true
          })
          .then(response => {
            this.setState({
              portfolioItems: [...response.data.portfolio_items]
            });
          })
          .catch(error => {
            console.log("error in getPortfolioItems", error);
          });
      }
    
      componentDidMount() {
        this.getPortfolioItems();
      }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm 
                      handleSuccessfulFormSubmission={ this.handleSuccessfulFormSubmission }
                      handleFormSubmissionError={ this.handleFormSubmissionError }
                    />
                </div>

                <div className="right-column">
                  <h1>Portfolio sidebar....</h1>
                  <PortfolioSidebarList data={ this.state.portfolioItems } handleDeleteClick={ this.handleDeleteClick }/>
                </div>
            </div>
        )
    }
}