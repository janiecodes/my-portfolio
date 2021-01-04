
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Connect(){

    return (
        <div className='connect-component'>

                <h1>Let's connect!</h1>
                <div className='connect-links'>
                    <a href='https://www.linkedin.com/in/janie-kim/'><FontAwesomeIcon size='4x' icon={["fab", "linkedin"]} /></a>
                    <a href='https://github.com/janiecodes'><FontAwesomeIcon size='4x' icon={["fab", "github"]} /></a>
                </div>
            
        </div>
    )
}