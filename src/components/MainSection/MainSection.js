import styled from 'styled-components'
import ImageMain from '../../assets/images/oder/boy.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Responces from './Responces';
import Select from './Select';
import Buttons from './Buttons'


const MainPhoto=styled.div`
    width:100%;
    max-width:144rem;
    padding-top:6.4rem;
    padding-left:2.6rem;
    padding-right:2.6rem;
    display:flex;
    margin:0 auto;
    flex-wrap:wrap;
    gap:1.6rem;
    @media(max-width:700px){
        width:100%;
       margin:0 auto;
        padding-left:0;
        padding-right:0;
    }
`;

const Photo=styled.img`
    max-width:100%;
    margin:0 auto;
    @media(max-width:700px){
        width:100%;
       margin:0 auto;
        padding-left:0;
        padding-right:0;
    }
`;

const OderDescription=styled.div`
    width:68.6rem;
    padding-top:2.4rem;
    @media(max-width:1200px){
        margin:0 auto;
    }
    @media(max-width:700px){
      padding-left:2.6rem;
      padding-right:2.6rem;
    }
`;

const Title=styled.h1`
    font-size:1.8rem;
    margin-bottom:0.8rem;
`;

const Art=styled.p`
 font-size:1.2rem;
 color:#828282;
 margin-bottom:1.8rem;
`;


const Price=styled.span`
    font-size:2.4rem;
    font-weight:bold;
    margin-right:1.2rem;
    
`;
const OldPrice=styled.span`
    text-decoration:line-through;
    font-size:1.4rem;
    color:#828282;
    &:after{
        content:"";
        display:inline-block;
        width:1rem;
        height:1rem;
        border-top:0.1rem solid #333;
        border-left:0.1rem solid #333;
        margin-left:2rem;
        transform: rotate(135deg);
        cursor:pointer;
    }
`;
const ActionsBlock=styled.div`
display:flex;
align-items:center;
gap:0.8rem;
margin-bottom:3.2rem;
`;

const Discount=styled.p`
    font-size:1.2rem;
    border:1px solid #333333;
    margin-top:1.2rem;
    width:8.5rem;
    height:2.4rem;
    text-align:center;
    padding-top:0.5rem;
`;
const Action=styled.span`
    font-size:1.2rem;
    border:1px solid #333333;
    margin-top:1.2rem;
    width:8.5rem;
    height:2.4rem;
    text-align:center;
    padding-top:0.5rem;
`;

const LineBlock=styled.hr`
width:100%;
height:0.1rem;
background:rgba(196, 196, 196, 1);
border:none;
@media(max-width:700px){
    width:100%;
   padding-left:0;
   padding-right:0;
}
`;

function MainSection(){
      
     let ar="Арт. 02765/46"



    return(
        <>
        <MainPhoto>
        <Router>
            <Photo src={ImageMain}></Photo>
            <OderDescription>
            <Title>Пижама для девочек</Title>
            <Art>{ar}</Art>
            <Responces></Responces>
            <Price>800 &#8381;</Price><OldPrice>1 500 &#8381;</OldPrice>
            <ActionsBlock>
                <Discount><span>cкидка <span>-36%</span></span></Discount><Action>акция <span>-20%</span></Action>
            </ActionsBlock>
                           <Select></Select>
                                <Link style={{textDecoration:"underline", fontSize:"1.4rem", color:"#333", letterSpacing:"0.04em",  textDecorationSkipInk:"none"}} to="/">Определить размер</Link>
                                <Buttons></Buttons>
                            <Link style={{display:"block", textDecoration:"underline", fontSize:"1.4rem", color:"#333", letterSpacing:"0.04em",  textDecorationSkipInk:"none", marginBottom:"2.9rem"}} to="/">Купить в 1 клик</Link>
                            <LineBlock></LineBlock>
            </OderDescription>
            </Router>
        </MainPhoto>
        </>
    )
}

export default MainSection