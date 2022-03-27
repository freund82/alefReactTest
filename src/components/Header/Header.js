import styled from 'styled-components';
import {Link} from 'react-router-dom'

const HeaderBlock=styled.header`
    width:100%;
    height:4rem;
    display:flex;
    margin:0 auto;
    position:fixed;
    z-index:5000;
    box-shadow: 0 0.5rem 0.2rem rgba(237, 237, 237, 0.8);
    background:#fff;
    @media(max-width:700px){
        box-shadow:none;
    }
`;
const HeaderInner=styled.div`
    width:144rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:0 auto;
    padding-left:2.6rem;
    padding-right:2.6rem;
`;

const MobileMenu=styled.nav`
display:none;
position:absolute;
top:0%;
right:0%;
z-index:6000;
width:37.5rem;
height:27.7rem;
background:#fff;

`;

const MenuNav=styled.div`
position:relative:
z-index:5000;
    width:16.8rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:4.95rem;
    @media(max-width:700px){
        padding-left:0;
    }
`;

const CartIcon=styled.span`
display:none;
width:0.6rem;
height:0.6rem;
border: 0.6rem solid red;
background:red;
border-radius:50%;
margin-left:1rem;
cursor:pointer;
position:absolute;
top:20%;

`;


const MenuClose=styled.svg`
 position:absolute;
 top:1rem;
 right:1rem;
 z-index:6000;
`;

const LinkMobileItem=styled(Link)`
    text-decoration:none;
    font-size:1.4rem;
    color:#333;
    letter-spacing:0.04em;
    &:hover{
        font-weight:bold;
    }
`;

const List=styled.ul`
    list-style:none;
    margin-top:7rem;
    line-height: 5rem;
    font-size:1.2rem;
`;

const BurgerMenu=styled.div`
    display:none;
   @media(max-width:700px){
       display:block;
       &:hover ${MobileMenu}{
        display:block;
    }
   }
`;



function Header(){
 
    document.addEventListener('DOMContentLoaded', () => {

        const onScrollHeader = () => {
      
          const header = document.querySelector('.header') 
      
          let prevScroll = window.pageYOffset 
          let currentScroll 
      
          window.addEventListener('scroll', () => { 
      
            currentScroll = window.pageYOffset 
      
            const headerHidden = () => header.classList.contains('header_hidden') 
      
            if (currentScroll > prevScroll && !headerHidden()) { 
              header.classList.add('header_hidden')
            }
            if (currentScroll < prevScroll && headerHidden()) {
              header.classList.remove('header_hidden')
            }

            prevScroll = currentScroll
      
          })
      
        }
      
        onScrollHeader()
      
      });
    return(
       <>
            <HeaderBlock className="header">
                <HeaderInner>
                <h1>LOGO</h1>
                <MenuNav>
                <Link to="/"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.45945" cy="4.18919" r="3.68919" stroke="#333333"/>
                            <path d="M0.5 15.3379H15.5" stroke="#333333"/>
                            <path d="M0.5 15.84C0.5 12.4347 4.84699 9.91339 8.21429 10.0023C11.4328 10.0872 15.5 12.4347 15.5 15.84" stroke="#333333"/>
                            </svg>
                        </Link>
                        <Link to="/"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.90002 3.0948C6.69981 -2.52108 -2.59119 1.90389 1.76037 7.60175C6.11193 13.2996 8.40002 15.4908 8.40002 15.4908" stroke="#333333"/>
                            <path d="M7.89415 3.0948C9.09435 -2.52108 18.7304 1.90389 14.3789 7.60175C10.0273 13.2996 7.70001 15.5 7.70001 15.5" stroke="#333333"/>
                            <path d="M7.39099 2.70752L8.4043 2.70757L8.38337 3.24079H7.39099V2.70752Z" fill="#333333"/>
                            </svg>
                        </Link>
                        <div>
                            <Link to="/"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.25468 10.5659C5.13958 9.11201 6.2884 7.86865 7.74689 7.86865H16.2531C17.7116 7.86865 18.8604 9.11201 18.7453 10.566L18.2203 17.1975C18.1174 18.4977 17.0323 19.5002 15.7281 19.5002H8.27189C6.96769 19.5002 5.88261 18.4977 5.77968 17.1975L5.25468 10.5659Z" stroke="#333333"/>
                                <path d="M7.99999 12.5C7.99999 12.5 7.78329 4 12 4C16.2167 4 16 12.5 16 12.5" stroke="#333333"/>
                                </svg>
                            </Link>
                            <CartIcon className="cart"></CartIcon>
                        </div>
                        <BurgerMenu>
                        <Link to="/"><svg  width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="18" y2="0.5" stroke="#333333"/>
                            <line y1="12.5" x2="18" y2="12.5" stroke="#333333"/>
                            <line y1="6.5" x2="18" y2="6.5" stroke="#333333"/>
                        </svg></Link>
                        <MobileMenu>
                            <Link to="/"><MenuClose width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="5.01046" y1="18.2822" x2="18.6464" y2="4.6462" stroke="#333333"/>
                                    <line y1="-0.5" x2="19.2842" y2="-0.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 19 18.6357)" stroke="#333333"/>
                                </MenuClose>
                            </Link>
                                <List>
                                    <LinkMobileItem to="/"><li>ПОСТЕЛЬНОЕ БЕЛЬЕ</li></LinkMobileItem>
                                    <LinkMobileItem to="/"><li>ОДЕЖДА ДЛЯ ДОМА</li></LinkMobileItem>
                                    <LinkMobileItem to="/"><li>ОДЕЖДА ДЛЯ УЛИЦЫ</li></LinkMobileItem>
                                    <LinkMobileItem to="/"><li>ВЫХОД</li></LinkMobileItem>
                                </List>
                        </MobileMenu>
                        </BurgerMenu>
                </MenuNav>
                </HeaderInner>
            </HeaderBlock>
        </>
    )
}

export default Header