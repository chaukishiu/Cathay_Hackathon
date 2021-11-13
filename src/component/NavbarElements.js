import styled from 'styled-components';

export const Nav = styled.nav`
background: #ffffff;
display: flex;
align-items: center;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;


export const NavLogo = styled.img`
  width: 100%;
  heigth: 100%;
  margin: 0.5rem;
  margin-left:0;
`

export const NavLeftItem = styled.div`
flex: 1;
font-size: 1.3em;
`
export const NavMidItem = styled.div`
flex: 1;
`
export const NavRightItem = styled.div`
flex: 1;
flex-direction: row-reverse;
display: flex;
font-size: 1.3em;
`
export const NavLeftIconList = styled.div`
width: 100%;
heigth: 100%;
margin: 0.5rem;
padding-top: 8px;
`

export const NavRightIconList = styled.div`
flex-direction: row-reverse;
display: flex;
width: 100%;
heigth: 100%;
margin: 0.5rem;
padding-top: 8px;
`
export const NavIcon = styled.div`
margin: 0.3rem;
`

export const Line = styled.hr`
  border: 2px solid #005D63;
  margin: 0;
`;