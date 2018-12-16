import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/VerticalMenu.css';

const VerticalMenu = ({ albums, albumsPathname }) => (
  <div className='ui secondary vertical menu'>
    <div className='header item'>
      Albums
    </div>
    {/* Render album menu here */}
    {
      albums.map(album => {
        return (<NavLink
          className='item'
          activeClassName='active'
          key={album.id}
          to={`${albumsPathname}/${album.id}`}
        >
          {album.name}
        </NavLink>);
      })
    }
  </div>
);

export default VerticalMenu;