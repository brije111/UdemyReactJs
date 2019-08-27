import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return <Menu pointing secondary>
            <Link to='/' className='item'>
                Streamy
        </Link>

        <Menu.Menu position='right'>
                <Link to='/' className='item'>
                    All Streams
        </Link>
        <Link to='/' className='item'>
                    <GoogleAuth />
        </Link>
        </Menu.Menu>
    </Menu>
}

export default Header;