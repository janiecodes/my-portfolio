import {Link} from 'react-router-dom';
import React from 'react';

export default function Header(){

    return (
        <div className='header-component'>
            

            <nav className='header-links'>
                <Link to='/' className='home-link'>Home</Link>
                <Link to='/resume' className='resume-link'>Resume</Link>
                <Link to='/work' className='work-link'>Work</Link>
                <Link to='/connect' className='connect-link'>Connect</Link>
            </nav>
            <div className='header-name'>
                <h1>JANIE KIM</h1>
            </div>
            
        </div>
    )
}