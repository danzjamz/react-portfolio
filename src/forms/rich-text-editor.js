import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

export default class RichTextEditor extends Component {
    constructor() {
        super();

        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    render() {
        return (
            <div>
                <Editor 
                    editorState={this.state.editorState}
                    wrapperClassName='demo-wrapper'
                    editorClassname='demo-editor'
                />
            </div>
        )
    }
}