import React, { useState, useEffect } from 'react';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import './Header.css';
import headerLogo from '../assets/youtube.svg';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router';
const Header = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const [message, setMessage] = useState('');
  const history = useHistory();

  const searchHandler = (e) => {
    setSearchClicked(true);
    e.preventDefault();
    if (!inputSearch) {
      history.push('/');
      setMessage('Your Search is Empty');
    } else {
      history.push('/search/' + inputSearch);
    }
  };
  useEffect(() => {
    if (searchClicked) {
      alert(message);
      setSearchClicked(!searchClicked);
    }
  }, [searchClicked, message]);
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuSharpIcon />
        <img src={headerLogo} className='header__logo'></img>
      </div>
      <div className='header__input'>
        <input
          type='text'
          placeholder='Search'
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <SearchIcon className='header__inputButton' onClick={searchHandler} />
      </div>
      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationIcon className='header__icon' />
        <Avatar src='https://avatars.githubusercontent.com/u/54632221?s=400&u=fc5ff7e6b154de2827b496c3ed1340a93ee25c25&v=4' />
      </div>
    </div>
  );
};

export default Header;
