import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div>
            <h3>
                Place a LOGO file
            </h3>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to='./Features'>Features</Link>
                </li>
                <li>
                    <Link to='./News'>News</Link>
                </li>
                <li>
                    <Link to='./Players'>Players</Link>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Header