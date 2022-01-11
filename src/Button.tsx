import React from 'react';

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
}

const Button: React.FC<ButtonPropsType> =
    ({
         title,
         onClickHandler,
     }) => {
        return (
            <div>
                <button onClick={onClickHandler}>{title}</button>
            </div>
        );
    }
export default Button;