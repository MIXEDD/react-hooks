import React, {useState} from 'react';

const Title = (props) => {

    const {
        title,
        onclick
    } = props;
    console.log('title component render');

    return (
        <p>{title}</p>
    );

};

export default React.memo(Title);
