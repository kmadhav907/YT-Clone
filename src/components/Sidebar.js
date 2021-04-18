import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import {
  ExpandMoreOutlined,
  OndemandVideo,
  ThumbUpAltOutlined
} from '@material-ui/icons';
function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected title='Home' Icon={HomeIcon} />
      <SidebarRow title='Trending' Icon={WhatshotIcon} />
      <SidebarRow title='Subscription' Icon={SubscriptionsIcon} />
      <hr />
      <SidebarRow title='Library' Icon={VideoLibraryIcon} />
      <SidebarRow title='History' Icon={HistoryIcon} />
      <SidebarRow title='Your Videos' Icon={OndemandVideo} />
      <SidebarRow title='Liked Videos' Icon={ThumbUpAltOutlined} />
      <SidebarRow title='Show More' Icon={ExpandMoreOutlined} />
    </div>
  );
}

export default Sidebar;
