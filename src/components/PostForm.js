import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class PostForm extends Component {
    handlePostForm = e => {
        e.preventDefault();
        if(this.state.title) {
            const post = {
                title: this.state.title,
                content: this.state.content
            };
            this.props.addNewPost(post);
            this.setState({ saved: true});
        } else {
            console.log('error state');
        }
    };
    state = {
        title: "",
        content: "",
        saved: false
    }
    render() {
        // Redirect to home is change is successful
        if (this.state.saved === true) {
            return <Redirect to="/" />
        }
        return (
            <form className="container" onSubmit={this.handlePostForm}>
                <h1>Add a New Post</h1>
                <label htmlFor="form-title">Title:</label><br/>
                <input 
                    id="form-title" 
                    value={this.state.title} 
                    onChange={ e => this.setState({ title: e.target.value })}
                />
                <Quill 
                    onChange={ (content, delta, source, editor) => {
                        this.setState({ content: editor.getContents() });
                    }}
                />
                <p>
                    <button type="submit">Save</button>
                </p>
            </form>
        );
    }
}

export default PostForm;