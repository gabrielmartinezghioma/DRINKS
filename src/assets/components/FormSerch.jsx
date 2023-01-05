import React from 'react';

const FormSerch = ({ setHook, textInput, textButton,dataId }) => {

    const serchTerm = (e) => {
        e.preventDefault()
        setHook(e.target[0].value)
    }

    return (
            <form onSubmit={(e) => serchTerm(e)}>
                <input type="text" list={dataId} placeholder={`${textInput}`} />
                <button type='submit'>{textButton}</button>
            </form>   
    );
};

export default FormSerch;