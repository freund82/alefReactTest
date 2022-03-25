import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useState } from 'react';


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
`;

const Like=styled.span`
    width:4.4rem;
    height:4.4rem;
    background:#333;
`;

function Buttons(){
    

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
        alert('Товар добавлен в корзину')
    }

    function addToFavorite(){
        alert('Товар добавлен в избранное')
    }
    return(
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
    )
}

export default Buttons