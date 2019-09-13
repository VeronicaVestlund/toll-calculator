import React from 'react';

const TimeStamp = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>        
    </div>
);

export default TimeStamp;