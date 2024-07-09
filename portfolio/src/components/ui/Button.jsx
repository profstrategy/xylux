import classNames from 'classnames';
import React from 'react';

const Button = ({ styles, children }) => {
    const className = classNames(
        'rounded-[4px]',
        'border-[1px]',
        styles,
        
    );
    return (
        <div>
            <button className={className}>{children}</button>
        </div>
    );
};

export default Button;

