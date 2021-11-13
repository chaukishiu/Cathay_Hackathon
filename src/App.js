import React from 'react';
import './App.css';
import { useNavigate, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';
import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css'
import {HomeOutlined, SearchOutlined, BellOutlined}from '@ant-design/icons'
import TopNavbar from './component/TopNavBar';

function App() {
  const navigate = useNavigate()
  const bottomNavItems = [
    {
      title: 'Home',
  
      ref: '/',

      icon: <HomeOutlined style={{ fontSize: '18px' }} />,

      activeIcon: <HomeOutlined style={{ fontSize: '18px', color: '#005D63' }} />
    },

    {
      title: 'Search',

      ref: '/search',

      icon: <SearchOutlined style={{ fontSize: '18px' }} />,

      activeIcon: <SearchOutlined style={{ fontSize: '18px', color: '#005D63' }} />
    },

    {
      title: 'login',

      ref: '/login',

      icon: <BellOutlined style={{ fontSize: '18px' }} />,

      activeIcon: <BellOutlined style={{ fontSize: '18px', color: '#005D63' }} 
      
      />
    }
  ]
  return (
    <div>
        <TopNavbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <BottomNavigation
        items={bottomNavItems}
        defaultSelected={0}
        onItemClick={(item) =>  navigate(`${item.ref}`)}
      />
    </div>
  );
}

export default App;