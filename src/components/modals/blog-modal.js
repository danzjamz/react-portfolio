import React, { Component } from 'react';
import ReactModal from 'react-modal';


export default class BlogModal extends Component {

    
    render() {
        return (
            <ReactModal isOpen={true} >
                <h1>In a modal</h1>
            </ReactModal>
        )
    }
}