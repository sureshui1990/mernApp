import React, { Component } from 'react';
import  { connect } from 'react-redux';
import * as actions from 'actions';

import { Form, TextArea,Button } from 'semantic-ui-react';

class CommentBox extends Component {
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
        this.props.addComment(this.state.comment);
        // Reset after the comment save
        this.setState({comment:''})
    }
    render() {
        let {comment} = this.state;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <h3>Add a Comment</h3>
                    <TextArea rows="5" cols="80" onChange={this.handleCommentBox} value={comment} >
                    </TextArea>
                    <Button color="green" type="submit" >Post your comment</Button>
                </Form>
            </div>
        );
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addComment: (comment) => dispatch(actions.addComment(comment)),
    }
}
export default connect(null, mapDispatchToProps )(CommentBox);
