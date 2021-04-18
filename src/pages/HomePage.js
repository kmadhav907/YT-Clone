import React from 'react';
import Header from '../components/Header';
import RecommendedVideos from '../components/RecommendedVideos';
import Sidebar from '../components/Sidebar';

function HomePage() {
  return (
    <>
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />
      </div>
    </>
  );
}

export default HomePage;
