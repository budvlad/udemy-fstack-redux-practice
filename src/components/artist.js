import React from "react";
import { Link } from "react-router-dom";

// /import ArtistContainer from '../containers/artist_container';

const Artist = props => {
  const { data } = props;
  return (
    <div className="artist_view">
      <div
        className="artist_background"
        style={{
          background: `url((/home/vladymyr/Рабочий стол/project/web/udemy/udemy_mern_full_stack_/redux-app-practice/src/images/${data.artistData[0].cover})`
        }}
      >
        <Link to="/">Back home</Link>
        <div className="name">{data.artistData[0].name}</div>
      </div>
      <div className="artist_description">
        <p>{data.artistData[0].bio}</p>
        <div className="tags">
          <div>
            <strong>Style:</strong> {data.artistData[0].style}
          </div>
        </div>
      </div>
      <div className="artist_album_list">
        {data.artistData[0].albums
          ? data.artistData[0].albums.map(item => (
              <div key={item.cover} className="albums">
                <div
                  className="cover"
                  style={{
                    background: `url((/home/vladymyr/Рабочий стол/project/web/udemy/udemy_mern_full_stack_/redux-app-practice/src/images/${item.cover})`
                  }}
                ></div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Artist;
