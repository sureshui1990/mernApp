import React, { Component } from 'react';

export default class CommentBox extends Component {
    constructor(){
        super();
        this.state = {
            comment:''
        }
    }
    handleCommentBox = event => {
        this.setState({comment: event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();

        // ToDO - action creator

        // Reset after the comment save
        this.setState({comment:''})
    }
    render() {

        let {comment} = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <h3>Add a Comment</h3>
                    <textarea rows="5" cols="80" onChange={this.handleCommentBox} value={comment} />
                    <div>
                        <button type="submit" >Post your comment</button>
                    </div>
                </form>
                
            </div>
        )
    }
}
