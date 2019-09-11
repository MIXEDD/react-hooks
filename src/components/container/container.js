import React, {useState, useCallback, useMemo, useRef, useEffect} from 'react';
import Button from '../../atoms/button/button';
import Title from '../../atoms/Title/Title';

const Container = () => {
    const inputEl = useRef(null);

    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);

    const incrementValue = useCallback(() => {
        setValue(value + 1);
    }, [value]);

    const incrementValue2 = useCallback(() => {
        setValue2(value2 + 1);
    }, [value2]);

    const isEven = useMemo(() => {
        console.log('isEven');
        return value % 2 === 0;
    }, [value]);

    useEffect(() => {
        console.log((inputEl));
        inputEl.current.focus();
    }, [inputEl]);

    return(
        <React.Fragment>
            <Title title={'title'} />
            <Title title={'title2'} />
            <Button title={'first button'} onclick={incrementValue}/>
            <Button title={'second button'} onclick={incrementValue2}/>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <input ref={inputEl} type="text" />
        </React.Fragment>
    );
};

export default Container;
