import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Album from './Album';
import VerticalMenu from './VerticalMenu';
import { client } from '../Client';

const ALBUM_IDS = [
  '23O4F21GDWiGd33tFN3ZgI',
  '3AQgdwMNCiN7awXch5fAaG',
  '1kmyirVya5fRxdjsPFDM05',
  '6ymZBbRSmzAvoSGmwAFoxm',
  '4Mw9Gcu1LT7JaipXdwrq1Q',
];

class AlbumsContainer extends Component {
  state = {
    fetched: false,
    albums: [],
  };

  componentDidMount() {
    this.getAlbums();
  }

  getAlbums = () => {
    // client.setToken('D6W69PRgCoDKgHZGJmRUNA'); // token is now set in client.js after login
    client.getAlbums(ALBUM_IDS)
      .then((albums) => (
        this.setState({
          fetched: true,
          albums: albums,
        })
       ));
  };

  render() {
    if (!this.state.fetched) {
      return (
        <div className='ui active centered inline loader' />
      );
    } else {
      // <Route> always pass the following three props to component
      // 1. history
      // 2. location
      // 3. match

      // get current route path from router props
      const matchPath = this.props.match.path;

      return (
        <div className='ui two column divided grid'>
          <div
            className='ui six wide column'
            style={{ maxWidth: 250 }}
          >
            <VerticalMenu
              albums={this.state.albums}
              albumsPathname={matchPath}
            />
          </div>
          <div className='ui ten wide column'>
            <Route
              path={`${matchPath}/:albumId`}
              render={routeData => {
                /* get route match data */
                /* routeData always has the following three props */
                /* 1. history */
                /* 2. location */
                /* 3. match */
                const match = routeData.match;

                /* route path params are in 'match.params' */
                const matchingAlbum = this.state.albums.find(album => album.id === match.params.albumId);

                return <Album
                  album={matchingAlbum}
                  albumsPathname={matchPath}
                />;
              }}
            />
          </div>
        </div>
      );
    }
  }
}

export default AlbumsContainer;
