import React, { PureComponent } from 'react';
import { Link } from 'src/routes';

export class Header extends PureComponent {
  render() {
    return (
      <header>
        <Link route='home' passHref>
          <a>Home</a>
        </Link>
        <Link route='about' passHref>
          <a>About</a>
        </Link>
        <Link route='blog' passHref>
          <a>Blog</a>
        </Link>
      </header>
    )
  }
}

export default Header;
