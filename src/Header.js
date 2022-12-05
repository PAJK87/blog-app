import React from 'react';

const Header = () => {
    const myStyle = {
        color: 'black',
        textAlign: "center",
        fontSize: "50px",
        display: "grid"

    }
    return (
        <h1 style={myStyle}>Jimmy's Blog</h1>
    );
}

export default Header;