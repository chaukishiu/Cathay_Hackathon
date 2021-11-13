import React from 'react';
import { HomeBannerContainer, HomeContainer, HomeTargetContainer } from '../component/Home/HomeComponent';

const Home = (props) => {
return (
    <HomeContainer>
        <HomeBannerContainer>
                Banner
        </HomeBannerContainer>
        <HomeTargetContainer>
                Target
        </HomeTargetContainer>
    </HomeContainer>
  )
};

export default Home;