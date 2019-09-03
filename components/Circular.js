import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Head from 'next/head';
import '../assets/style.css';
import React, { useState, useEffect } from 'react';

const Circular = ( { per, text} ) => {
    const [percentage, updatePercentage] = useState(0);
    useEffect( () => {
        updatePercentage(per);
    }, [percentage])
    return (
        <CircularProgressbarWithChildren 
                value={percentage} 
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    // rotation: 0.25,
                 
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                 
                    // Text size
                    textSize: '7px',
                    textColor: '#000',
                 
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                 
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',
                 
                    // Colors
                    pathColor: `rgba(53, 111, 0, ${percentage / 100})`,
                    trailColor: '#d6d6d6',
                    backgroundColor: 'rgb(236, 234, 234)',
                  })}
        >
            <h2>{text}</h2>
            <span>{percentage}%</span>
        </CircularProgressbarWithChildren>
    )
}

export default Circular;