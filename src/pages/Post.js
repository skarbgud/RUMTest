import React from 'react';
import axios from 'axios';

const Post = ({match}) => {
    axios.get('fdsfdsfss/fdsfs');
    return (
        <div>
            Post {match.params.id}
        </div>
    );
};

export default Post;