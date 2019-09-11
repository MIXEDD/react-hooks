import React from 'react';

const Button = (props) => {

    const {
        title,
        onclick
    } = props;

    console.log('button component render' + title);

    return (
        <button onClick={onclick}>{title}</button>
    );
};

export default React.memo(Button);
