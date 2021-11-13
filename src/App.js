import React from 'react';
import './App.css';
import { useNavigate, BrowserRouter, Routes, Route,  Link } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';
import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css'
import {HomeOutlined, SearchOutlined, BellOutlined, MenuOutlined}from '@ant-design/icons'

function App() {
  const bottomNavItems = [
    {
      title: 'Home',
  
      ref: '/home',

      icon: <Link to="/"><HomeOutlined style={{ fontSize: '18px' }} /></Link>,

      activeIcon: <HomeOutlined style={{ fontSize: '18px', color: '#fff' }} />
    },

    {
      title: 'Search',

      ref: '/search',

      icon: <Link to="/search"><SearchOutlined style={{ fontSize: '18px' }} /></Link>,

      activeIcon: <SearchOutlined style={{ fontSize: '18px', color: '#fff' }} />
    },

    {
      title: 'Notifications',

      ref: '/notifications',

      icon: <Link to="/login"><BellOutlined style={{ fontSize: '18px' }} /></Link>,

      activeIcon: <BellOutlined style={{ fontSize: '18px', color: '#fff' }} 
      
      />
    }
  ]
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <BottomNavigation
        items={bottomNavItems}
        defaultSelected={0}
        onItemClick={(item) =>  console.log('hi')}
      />
      </BrowserRouter>
    </div>
  );
}

export default App;