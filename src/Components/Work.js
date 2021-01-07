
import React from 'react';

export default function Work(){

    return (
        <div className='work-component'>

            <div className='work-and-projects'>
            <div className='apple-project'>
                <h2>E-Commerce Website: Apple Clone</h2>
            <a href='http://apple.janiekim.dev/'><img alt='apple-logo' className='apple-logo' src={`/assets/apple-logo.png`}/></a>
            </div>

            <div className='group-project'>
                <h2>Social Media Website: DevBook</h2>
                <a href='http://devbook.network/'><img alt='apple-logo' className='apple-logo' src={`/assets/devbook-logo.png`}/></a>
            </div>
            
            </div>


        </div>
    )
}