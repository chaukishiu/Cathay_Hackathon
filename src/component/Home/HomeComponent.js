import styled from 'styled-components';
import banner from '../../images/banner.png'
import '../../index'

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
`

export const HomeBannerContainer = styled.div`
min-width: 100%;
flex:0.3;
`

export const HomeBanner = styled.img`
position: fixed;
z-index:-1
`

export const HomeBannerH1 = styled.div`
width: 100%;
height: 177px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 30px;
text-align: center;
color: #FFFFFF;
position: relative;
background-image: url(${banner});
`

export const HomeSearchInputContainer = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
width: 311px;
height: 52px;
left: 36px;
margin-top: -20px;
box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
`
export const HomeSearchInputIcon = styled.div`
color: #005D63;
margin: 0.1rem;
padding-top: 4px;
font-size: 1.5em;
margin-right: 0.5rem;
`
export const HomeSearchInputPlaceHolder= styled.input`
width: 243px;
margin: 0.1rem;
font-size: 14px;
color: #D2D6E1;
border: 0;
`

export const HomeTargetContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
min-width: 100%;
flex:0.7;
`
export const HomeTargetTitle1 = styled.div`

font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 36px;
text-align: center;
margin-top: 3rem;
color: #005D63;
`
export const TitleLine = styled.hr`
  border: 2px solid #005D63;
  width: 15%;
  margin: 0;
`;

export const HomeTargetCard = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 275px;
height: 278px;
margin-top: 2rem;
box-shadow: 2px 2px 30px 4px rgba(0, 0, 0, 0.06);
border-radius: 12px;
`

export const HomeTargetCardImage = styled.img`
margin-top: 2.5rem;
`

export const HomeTargetCardImageTitle = styled.h4`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;

color: #414652;
`
export const HomeTargetCardProgressWrapper = styled.div`
display: flex;
flex-direction: row
`

export const HomeTargetCardProgress = styled.progress`
flex: 9;
margin-top: 10px;
margin-right: 10px;
background-color: white;
`

export const HomeTargetCardIconContainer = styled.div`
flex: 1
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const HomeTargetCardIcon = styled.img`
width: 10px;
height: 15px;
margin-left: 1rem;

`

export const HomeTargetCardIconCaption = styled.h4`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 15px;
text-align: center;
color: #414652;
margin: 0;
margin-left: 0.2rem;
`

export const HomeTargetCardPromotionWrapper = styled.div`
display: flex;
flex-direction: row;
margin-top: 0.5rem;
`
export const HomeTargetCardPromotionIcon = styled.div`
color: #005D63;
`

export const HomeTargetCardPromotionCaption = styled.div`
margin-left: 0.5rem;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;

text-align: center;

color: #005D63;
`