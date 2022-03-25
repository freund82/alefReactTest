import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const HeaderBlock=styled.header`
    width:100%;
    height:4rem;
    display:flex;
    margin:0 auto;
    position:fixed;
    box-shadow: 0 0.5rem 0.2rem rgba(237, 237, 237, 0.8);
    background:#fff;
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

const MenuNav=styled.div`
    width:16.8rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:4.95rem;
`;

function Header(){
    return(
       <>
            <HeaderBlock>
                <HeaderInner>
                <h1>LOGO</h1>
                <MenuNav>
                    <Router>
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
                        </div>
                        </Router>
                </MenuNav>
                </HeaderInner>
            </HeaderBlock>
        </>
    )
}

export default Header