
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';

class CommandList extends Component {
    render() {
        const { comments } = this.props;
        console.log('this.props', comments);
        return (
            <div>
                <h2>here the commandlist area</h2>
                <List>
                {comments && comments.map((comment,index, commentsArr) => {
                    return <List.Item key={index}>
                                {comment}
                            </List.Item>
                })}
                </List>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}


export default connect(mapStateToProps, null)(CommandList);