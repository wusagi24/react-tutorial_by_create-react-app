import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment_box'

ReactDOM.render(
    <CommentBox url="http://localhost:3001/api/comments" pollInterval={2000} />,
    document.getElementById('content')
);
