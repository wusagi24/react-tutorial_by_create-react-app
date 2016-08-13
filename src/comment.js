import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div className="commnet">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
}

export default Comment;
