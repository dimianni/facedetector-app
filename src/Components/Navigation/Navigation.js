import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {


    if (isSignedIn) {
        return (
            <nav>
                <p className='navEl' onClick={() => onRouteChange('signout')}>Sign Out</p>
            </nav>
        )

    } else {
        return (
            <nav className='nav'>
                <p className='navEl' onClick={() => onRouteChange('signin')}>Sign In</p>
                <p className='navEl' onClick={() => onRouteChange('register')}>Register</p>
            </nav>
        )

    }


}

export default Navigation;