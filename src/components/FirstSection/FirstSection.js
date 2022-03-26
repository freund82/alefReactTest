import styled from 'styled-components'
import ImageMain from '../../assets/images/oder/boy.png'
import {Link} from 'react-router-dom';
import Responces from './Responces';
import Select from './Select';
import {useState} from 'react'
import Description from './Description';


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


const ButtonsBlock=styled.div`
    margin-top:4rem;
    margin-bottom:1.2rem;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    font-size:1.4rem;
    @media(max-width:700px){
        width:30rem;
    }
`;
const Counter=styled.p`
    width:14.5rem;
    height:4.4rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    background:#F2F2F2;
    margin-right:1.2rem;
    @media(max-width:700px){
        margin-bottom:1.5rem;
    }
`;
const Minus=styled.span`
   font-size:1.8rem;
   cursor:pointer;
`;
const Plus=styled.span`
   font-size:1.4rem;
   cursor:pointer;
`;

const AddtoCart=styled.span`
    width:20.3rem;
    height:4.4rem;
    background:#333;
    margin-right:0.4rem;
    &:hover{
        background:black;
    }
`;

const Like=styled.span`
    width:4.4rem;
    height:4.4rem;
    background:#333;
    &:hover{
        background:black;
    }
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

function FirstSection(){
      
     let art="Арт. 02765/46"

     let[value, setState]=useState(1)

    function addGood(){
        setState(value+=1)
    }

    function deleteGood(){
        if(value>1){
            setState(value-=1)
        }
    }
    function addToCart(){
        alert(`Товар ${art} в количестве ${value} шт. добавлен в корзину`)
       
    }
    function addToFavorite(){
        alert(`Товар ${art} добавлен в избранное`)
    }

    return(
        <>
        <MainPhoto>
            <Photo src={ImageMain}></Photo>
            <OderDescription>
            <Title>Пижама для девочек</Title>
            <Art>{art}</Art>
            <Responces></Responces>
            <Price>800 &#8381;</Price><OldPrice>1 500 &#8381;</OldPrice>
            <ActionsBlock>
                <Discount><span>cкидка <span>-36%</span></span></Discount><Action>акция <span>-20%</span></Action>
            </ActionsBlock>
                           <Select></Select>
                                <Link style={{textDecoration:"underline", fontSize:"1.4rem", color:"#333", letterSpacing:"0.04em",  textDecorationSkipInk:"none"}} to="/">Определить размер</Link>
                                <ButtonsBlock>
                                    <Counter>
                                        <Plus onClick={addGood}>+</Plus>
                                        <span>{value}</span>
                                        <Minus onClick={deleteGood}>-</Minus>  
                                    </Counter>
                                        <AddtoCart onClick={addToCart}><Link style={{display:"block", color:"#fff", textDecoration:"none", letterSpacing:"0.04em", textAlign:"center", marginTop:"1rem"}} to="/">Добавить в корзину</Link></AddtoCart>
                                        <Like onClick={addToFavorite}><Link style={{display:"block", textAlign:"center", marginTop:"1.3rem"}} to="/"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.90002 3.0948C6.69981 -2.52108 -2.59119 1.90389 1.76037 7.60175C6.11193 13.2996 8.40002 15.4908 8.40002 15.4908" stroke="#fff"/>
                                        <path d="M7.89415 3.0948C9.09435 -2.52108 18.7304 1.90389 14.3789 7.60175C10.0273 13.2996 7.70001 15.5 7.70001 15.5" stroke="#fff"/>
                                        <path d="M7.39099 2.70752L8.4043 2.70757L8.38337 3.24079H7.39099V2.70752Z" fill="#fff"/>
                                        </svg></Link>
                                        </Like>
                                </ButtonsBlock>
                            <Link style={{display:"block", textDecoration:"underline", fontSize:"1.4rem", color:"#333", letterSpacing:"0.04em",  textDecorationSkipInk:"none", marginBottom:"2.9rem"}} to="/">Купить в 1 клик</Link>
                            <LineBlock></LineBlock>
                            <Description></Description>
            </OderDescription>
            <Link style={{display:"block", margin:"auto", textDecoration:"underline", fontSize:"1.4rem", color:"#333", letterSpacing:"0.04em",  textDecorationSkipInk:"none", paddingTop:"1.2rem", marginBottom:"3.2rem",}} to="/">Посмотреть все стили</Link>
        </MainPhoto>
        </>
    )
}

export default FirstSection