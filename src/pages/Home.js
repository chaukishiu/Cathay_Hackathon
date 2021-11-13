import React from 'react';
import camera from '../images/camera.png'
import asia_miles from '../images/asia_miles.png'
import { 
    HomeBannerContainer, 
    HomeContainer, 
    HomeTargetContainer, 
    HomeBannerH1, 
    HomeSearchInputContainer, 
    HomeSearchInputIcon, 
    HomeSearchInputPlaceHolder, 
    HomeTargetTitle1, TitleLine, HomeTargetCard,HomeTargetCardImage, HomeTargetCardImageTitle, HomeTargetCardProgress, HomeTargetCardProgressWrapper,HomeTargetCardIconContainer, HomeTargetCardIcon, HomeTargetCardIconCaption, HomeTargetCardPromotionWrapper, HomeTargetCardPromotionIcon, HomeTargetCardPromotionCaption} from '../component/Home/HomeComponent';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
const Home = (props) => {
return (
    <HomeContainer>
        <HomeBannerContainer>
        <HomeBannerH1>
        Merry Christmas , Andrew! <br/>
        Any Gift Searching Today?
        </HomeBannerH1>
        <HomeSearchInputContainer>
            <HomeSearchInputIcon>
                <AiOutlineSearch/>
            </HomeSearchInputIcon>
            <HomeSearchInputPlaceHolder type="text" placeholder="What do you want to shop?"/>
        </HomeSearchInputContainer>
        </HomeBannerContainer>
        <HomeTargetContainer>
            <HomeTargetTitle1>
                My Goal
            </HomeTargetTitle1>
            <TitleLine/>
            <HomeTargetCard>
                <HomeTargetCardImage src={camera} alt={camera}/>
                <HomeTargetCardImageTitle>
                    V-LUX 5 Digital Camera
                </HomeTargetCardImageTitle>
                <HomeTargetCardProgressWrapper>
                <HomeTargetCardProgress id="file" max="100" value="70"/>
                <HomeTargetCardIconContainer>
                    <HomeTargetCardIcon src={asia_miles} alt={asia_miles}/>
                    <HomeTargetCardIconCaption>
                        200,000
                    </HomeTargetCardIconCaption>
                </HomeTargetCardIconContainer>
                </HomeTargetCardProgressWrapper>
                <HomeTargetCardPromotionWrapper>
                    <HomeTargetCardPromotionIcon>
                        <AiOutlineShoppingCart/>
                    </HomeTargetCardPromotionIcon>
                    <HomeTargetCardPromotionCaption>
                        Or get now with $4,000
                    </HomeTargetCardPromotionCaption>
                </HomeTargetCardPromotionWrapper>
            </HomeTargetCard>    
        </HomeTargetContainer>
    </HomeContainer>
  )
};

export default Home;