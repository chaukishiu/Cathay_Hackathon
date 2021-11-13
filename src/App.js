import React from 'react';
import './App.css';
import { useNavigate, BrowserRouter, Routes, Route,  Link } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';
import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css'
import {HomeOutlined, SearchOutlined, BellOutlined, MenuOutlined}from '@ant-design/icons'
import TopNavbar from './component/TopNavBar';

function App() {
  const navigate = useNavigate()
  const bottomNavItems = [
    {
      title: 'Home',
  
      ref: '/',

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
      title: 'login',

      ref: '/login',

      icon: <Link to="/login"><BellOutlined style={{ fontSize: '18px' }} /></Link>,

      activeIcon: <BellOutlined style={{ fontSize: '18px', color: '#fff' }} 
      
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