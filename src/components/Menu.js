import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/foo">About Foo</Link></li>
                <li><Link to="/detail">Detail</Link></li>
                <li><Link to="/detail/view">Detail View</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;