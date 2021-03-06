import styled from 'styled-components'
import ImageMain from '../../assets/images/oder/boy.png'
import {Link} from 'react-router-dom';
import Responces from './Responces';
import Select from './Select';
import {useState} from 'react'
import Description from './Description';
import image1 from '../../assets/images/oder/oderSmall/2-1.png'
import image2 from '../../assets/images/oder/oderSmall/3-1.png'
import image3 from '../../assets/images/oder/oderSmall/4-1.png'
import image4 from '../../assets/images/oder/oderSmall/5-1.png'



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
       padding-top:4rem;
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
position:relative;
z-index:100;
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
    position:absolute;
    z-index:1000;
    width:37.5rem;
    left:0%;
   margin:0 auto;
}
`;

const PhotoBlock=styled.div`
    position:relative;
    z-index:100;
    margin:auto;
`;

const SmallPhotoBlock=styled.div`
width:7.1rem;
height:48.6rem;
position:absolute;
top:2.6rem;
left:2.4rem;
z-index:1000;
display:flex;
flex-wrap:wrap;
@media(max-width:700px){
    display:none;
}
`
const SmallPhoto=styled.img`
opacity:0.7;
&:hover {
    opacity:1;
}
`;

const Buy=styled(Link)`
    margin-top:2.1rem;
    display:block;
    text-decoration:underline;
    font-size:1.4rem;
    color:#333;
    letter-spacing:0.04em;
    text-decoration-skip-ink:none;
    margin-bottom:2.9rem;
`;

const FindSize=styled(Link)`
text-decoration:underline;
font-size:1.4rem;
color:#333;
letter-spacing:0.04em;
text-decoration-skip-ink:none;
`;




function FirstSection(){
      
     let art="??????. 02765/46"

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
        alert(`?????????? ${art} ?? ???????????????????? ${value} ????. ???????????????? ?? ??????????????`)
        var cartOder=document.querySelector(".cart")
        cartOder.style.display="block"
       
    }
    function addToFavorite(){
        alert(`?????????? ${art} ???????????????? ?? ??????????????????`)
    }

    function changePhoto(){
        let div = document.querySelectorAll('.small')
        let mainImage=document.querySelector('.main')

    Array.from(div).forEach((item) => {
        item.addEventListener('mouseover', (e)=>{
        
          var attribute=e.target.getAttribute('src')
          mainImage.setAttribute('src', attribute)
                
        });
      });
    }

    return(
        <>
        <MainPhoto>
            <PhotoBlock>
            <Photo className="main" src={ImageMain}></Photo>
            <SmallPhotoBlock onMouseMove={changePhoto}>
                <SmallPhoto className="small" src={ImageMain} width="71" height="91" alt=""></SmallPhoto>
                <SmallPhoto className="small" src={image1} width="71" height="91" alt=""></SmallPhoto>
                <SmallPhoto className="small" src={image2} width="71" height="91" alt=""></SmallPhoto>
                <SmallPhoto className="small" src={image3} width="71" height="91" alt=""></SmallPhoto>
                <SmallPhoto className="small" src={image4} width="71" height="91" alt=""></SmallPhoto>
            </SmallPhotoBlock>
            </PhotoBlock>
            <OderDescription>
            <Title>???????????? ?????? ??????????????</Title>
            <Art>{art}</Art>
            <Responces></Responces>
            <Price>800 &#8381;</Price><OldPrice>1 500 &#8381;</OldPrice>
            <ActionsBlock>
                <Discount><span>c?????????? <span>-36%</span></span></Discount><Action>?????????? <span>-20%</span></Action>
            </ActionsBlock>
                           <Select></Select>
                                <FindSize style={{}} to="/">???????????????????? ????????????</FindSize>
                                <ButtonsBlock>
                                    <Counter>
                                        <Plus onClick={addGood}>+</Plus>
                                        <span>{value}</span>
                                        <Minus onClick={deleteGood}>-</Minus>  
                                    </Counter>
                                        <AddtoCart onClick={addToCart}><Link style={{display:"block", color:"#fff", textDecoration:"none", letterSpacing:"0.04em", textAlign:"center", marginTop:"1rem"}} to="/">???????????????? ?? ??????????????</Link></AddtoCart>
                                        <Like onClick={addToFavorite}><Link style={{display:"block", textAlign:"center", marginTop:"1.3rem"}} to="/"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.90002 3.0948C6.69981 -2.52108 -2.59119 1.90389 1.76037 7.60175C6.11193 13.2996 8.40002 15.4908 8.40002 15.4908" stroke="#fff"/>
                                        <path d="M7.89415 3.0948C9.09435 -2.52108 18.7304 1.90389 14.3789 7.60175C10.0273 13.2996 7.70001 15.5 7.70001 15.5" stroke="#fff"/>
                                        <path d="M7.39099 2.70752L8.4043 2.70757L8.38337 3.24079H7.39099V2.70752Z" fill="#fff"/>
                                        </svg></Link>
                                        </Like>
                                </ButtonsBlock>
                            <Buy to="/">???????????? ?? 1 ????????</Buy>
                            <LineBlock></LineBlock>
                            <Description></Description>
            </OderDescription>
            <Link style={{display:"block", margin:"auto", textDecoration:"underline", fontSize:"1.4rem", color:"#333", letterSpacing:"0.04em",  textDecorationSkipInk:"none", paddingTop:"1.2rem", marginBottom:"3.2rem",}} to="/">???????????????????? ?????? ??????????</Link>
        </MainPhoto>
        </>
    )
}

export default FirstSection