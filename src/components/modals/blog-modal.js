import React, { Component } from 'react';
import ReactModal from 'react-modal';

import BlogForm from '../blog/blog-form';

ReactModal.setAppElement('.app-wrapper');

export default class BlogModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '800px'
            },
            overlay: {
                backgroundColor: 'rgba(1, 1, 1, .75)'
            }
        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
    }

    handleSuccessfulFormSubmission(blog) {
        console.log('blog form', blog)
    }
    
    render() {
        return (
            <ReactModal 
                style={this.customStyles}
                onRequestClose={ () => { this.props.handleModalClose() } } 
                isOpen={this.props.modalIsOpen} >
                <h1>In a modal</h1>
                <BlogForm handleSuccessfulFormSubmission={ this.handleSuccessfulFormSubmission } />
            </ReactModal>
        )
    }
}