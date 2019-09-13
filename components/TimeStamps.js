import React from 'react';
import TimeStamp from './TimeStamp';

const TimeStamps = (props) => (    
    <div>
    <div className="widget-header">
        <h3 className="widget-header__title">Your timestamps</h3>
    
    </div>        
        {
            props.timeStamps.map((timeStamp, index) => (
                <TimeStamp 
                    key = {timeStamp} 
                    optionText = {timeStamp}
                    count={index+1}
                />
            ))
        }
    </div>
);

export default TimeStamps;