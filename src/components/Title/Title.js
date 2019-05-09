import React from 'react';

const Title = (props) => {
    return (
        <>
          <h1 style={{'position': 'relative', 'top': '1vh', 'fontSize': '1.2rem'}}>{props.children}</h1>   
        </>
    );
};

export default Title;