import React from 'react';
import Header from '../components/Header';
import SearchedVideos from '../components/SearchedVideos';
import Sidebar from '../components/Sidebar';

function SearchPage() {
  return (
    <>
      <Header />
      <div className='app__page'>
        <Sidebar />
        <SearchedVideos />
      </div>
    </>
  );
}

export default SearchPage;
