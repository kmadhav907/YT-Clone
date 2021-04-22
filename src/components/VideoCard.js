import { Avatar } from '@material-ui/core';
import React from 'react';
import './VideoCard.css';

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className='videoCard'>
      <img src={image} alt='' className='videoCard__thumbnail' />
      <div className='videoCard__info'>
        <Avatar
          src={channelImage}
          alt={channel}
          className='videoCard__avatar'
        />
        <div className='videoCard__text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
