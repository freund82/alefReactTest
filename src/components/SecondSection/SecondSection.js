import styled from 'styled-components'
import ImageMainSecond from '../../assets/images/sectionFotos/1.png'
import ImageSmallFirstSecond from '../../assets/images/sectionFotos/2.png'
import ImageSmallSecond from '../../assets/images/sectionFotos/3.png'
import ImageSmallThird from '../../assets/images/sectionFotos/4.png'
import ImageSmallFourth from '../../assets/images/sectionFotos/5.png'
import {Link} from 'react-router-dom'

const SecondBlock=styled.div`
    width:100;
    max-width:144rem;
    margin:0 auto;
    padding-left:2.6rem;
    padding-right:2.6rem;
    padding-bottom:14.2rem;
    display:flex;
    flex-wrap:wrap;
    gap:1.6rem;
    line-height:0;
    @media(max-width:1200px){
        display:flex;
        justify-content:space-around;
        gap:0.63rem;
        padding-left:0;
        padding-right:0;
        padding-bottom:4.2rem;
    }
    @media(max-width:700px){
        gap:0.63rem;
        padding-left:0;
        padding-right:0;
        padding-bottom:4.2rem;
    }
`;
const SecondBlockMain=styled.img`
    max-width:100%;
    line-height:0;
`

const SecondBlockSmallPhotos=styled.div`
    display:flex;
    gap:1.6rem;
  
    @media(max-width:700px){
        gap:0.63rem;
    }
    
`;
const SecondBlockSmallPhotosBlock=styled.div`
    display:flex;
    margin-top:1.6rem;
    gap:1.6rem;
    line-height:0;
    @media(max-width:700px){
        gap:0.63rem;
        margin-top:0.63rem;
    }
`;

const SecondBlockImgSmall=styled.img`
max-width:100%;
$:hover{
    filter:opacity(0.7);
}
`;


const LinkStyleText=styled(Link)`
    display:none;
    position:absolute;
    top:65%;
    left:50%;
    z-index:1000;
    transform:translateX(-50%);
    text-decoration:none;
    font-size:1.4rem;
    color:#fff;
    letter-spacing:0.04em;
    pointer-events: none;
    @media(max-width:700px){
        top:71%;
        font-size:0.9rem;
    }
`;

const CartIcon=styled.svg`
    position:absolute;
    top:50%;
    left:50%;
    transform:translateX(-50%);
    z-index:1000;
    display:none;
    pointer-events: none;
    @media(max-width:700px){
        width:15%;
        height:15%;
    }
`;


const LikeSvg=styled.svg`
    position:absolute;
    bottom:2%;
    left:45%;
    z-index:1000;
    display:none;
    pointer-events: none;
    @media(max-width:700px){
        width:5%;
        height:5%;
    }
`;

const LikesNumber=styled.span`
    position:absolute;
    bottom:5%;
    left:55%;
    transform:translateX(-50%);
    z-index:1000;
    color:#fff;
    font-size:1.4rem;
    letter-spacing: 0.04em;
    display:none;
    pointer-events: none;
    @media(max-width:700px){
        bottom:4%;
        font-size:0.9rem;
        left:56%;
    }
`;

const MoreInfo=styled.svg`
    position:absolute;
    top:2%;
    right:2%;
    z-index-1000;
    pointer-events: none;
    display:none;
    @media(max-width:700px){
     width:8%;
     height:8%;
    }
`;

const PhotoSmall=styled.div`
    position:relative;
    background:#333;
    cursor:pointer;
    &:hover ${LinkStyleText}, &:hover ${CartIcon}, &:hover ${LikeSvg}, &:hover ${LikesNumber}, &:hover ${MoreInfo} {
    display:block;
}
`;


function SecondSection(){
    return(
        <>
        <SecondBlock>
            <div><SecondBlockMain src={ImageMainSecond} alt=""></SecondBlockMain></div>
            <div>
            <SecondBlockSmallPhotos>
                <PhotoSmall className="hoverSvg" style={{background:"#333", cursor:"pointer"}} >
                    <SecondBlockImgSmall className="imageHover" src={ImageSmallFirstSecond} alt=""></SecondBlockImgSmall>
                                    <MoreInfo width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="2.5" width="13" height="13" rx="1.5" stroke="white"/>
                                        <path d="M2.33784 2.63126L2.33784 2.49958C2.33784 1.39501 3.23327 0.499584 4.33784 0.499585L13.5 0.49959C14.6045 0.49959 15.5 1.39502 15.5 2.49959L15.5 11.9382C15.5 12.9853 14.5159 13.7537 13.5 13.4997V13.4997" stroke="white"/>
                                    </MoreInfo>
                                <CartIcon width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.752161 10.9953C0.638177 9.54198 1.78674 8.2998 3.24451 8.2998H28.7555C30.2133 8.2998 31.3618 9.54198 31.2478 10.9953L29.5851 32.1953C29.4831 33.4962 28.3976 34.4998 27.0927 34.4998H4.90725C3.60235 34.4998 2.51694 33.4962 2.41491 32.1953L0.752161 10.9953Z" stroke="white"/>
                                <path d="M7.004 18.4857C7.004 18.4857 6.54373 1 15.5 1C24.4563 1 23.996 18.4857 23.996 18.4857" stroke="white"/>
                                </CartIcon>
                                <LinkStyleText to="/">Узнай, что на мне</LinkStyleText>
                                <LikeSvg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.42873 3.25725L9.76116 1.03654L13.1965 1.46595L14.5 3.63849V6.32062L8.01449 14.1959L1.93878 6.2507L1.05633 4.04458L2.34555 1.89588L5.35443 0.606363L7.61587 3.32009L8.06654 3.86089L8.42873 3.25725Z" fill="white" stroke="white"/>
                                            <path d="M7.9 3.0948C6.6998 -2.52108 -2.59121 1.90389 1.76035 7.60175C6.11191 13.2996 8.40001 15.4908 8.40001 15.4908" stroke="white"/>
                                            <path d="M7.89413 3.0948C9.09434 -2.52108 18.7304 1.90389 14.3788 7.60175C10.0273 13.2996 7.7 15.5 7.7 15.5" stroke="white"/>
                                            <path d="M7.39098 2.70752L8.40429 2.70757L8.38335 3.24079H7.39098V2.70752Z" fill="white"/>
                                        </LikeSvg>
                                        <LikesNumber>200</LikesNumber>
                </PhotoSmall>
                <PhotoSmall className="hoverSvg" style={{background:"#333", cursor:"pointer"}}>
                    <SecondBlockImgSmall className="imageHover" src={ImageSmallThird} alt=""></SecondBlockImgSmall>
                                    <MoreInfo width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="2.5" width="13" height="13" rx="1.5" stroke="white"/>
                                        <path d="M2.33784 2.63126L2.33784 2.49958C2.33784 1.39501 3.23327 0.499584 4.33784 0.499585L13.5 0.49959C14.6045 0.49959 15.5 1.39502 15.5 2.49959L15.5 11.9382C15.5 12.9853 14.5159 13.7537 13.5 13.4997V13.4997" stroke="white"/>
                                    </MoreInfo>
                                <CartIcon width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.752161 10.9953C0.638177 9.54198 1.78674 8.2998 3.24451 8.2998H28.7555C30.2133 8.2998 31.3618 9.54198 31.2478 10.9953L29.5851 32.1953C29.4831 33.4962 28.3976 34.4998 27.0927 34.4998H4.90725C3.60235 34.4998 2.51694 33.4962 2.41491 32.1953L0.752161 10.9953Z" stroke="white"/>
                                <path d="M7.004 18.4857C7.004 18.4857 6.54373 1 15.5 1C24.4563 1 23.996 18.4857 23.996 18.4857" stroke="white"/>
                                </CartIcon>
                                <LinkStyleText to="/">Узнай, что на мне</LinkStyleText>
                                <LikeSvg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.42873 3.25725L9.76116 1.03654L13.1965 1.46595L14.5 3.63849V6.32062L8.01449 14.1959L1.93878 6.2507L1.05633 4.04458L2.34555 1.89588L5.35443 0.606363L7.61587 3.32009L8.06654 3.86089L8.42873 3.25725Z" fill="white" stroke="white"/>
                                            <path d="M7.9 3.0948C6.6998 -2.52108 -2.59121 1.90389 1.76035 7.60175C6.11191 13.2996 8.40001 15.4908 8.40001 15.4908" stroke="white"/>
                                            <path d="M7.89413 3.0948C9.09434 -2.52108 18.7304 1.90389 14.3788 7.60175C10.0273 13.2996 7.7 15.5 7.7 15.5" stroke="white"/>
                                            <path d="M7.39098 2.70752L8.40429 2.70757L8.38335 3.24079H7.39098V2.70752Z" fill="white"/>
                                        </LikeSvg>
                                        <LikesNumber>200</LikesNumber>
                </PhotoSmall>
            </SecondBlockSmallPhotos>
            <SecondBlockSmallPhotosBlock>
                <PhotoSmall>
                    <SecondBlockImgSmall className="imageHover" src={ImageSmallSecond} alt=""></SecondBlockImgSmall>
                                    <MoreInfo width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="2.5" width="13" height="13" rx="1.5" stroke="white"/>
                                        <path d="M2.33784 2.63126L2.33784 2.49958C2.33784 1.39501 3.23327 0.499584 4.33784 0.499585L13.5 0.49959C14.6045 0.49959 15.5 1.39502 15.5 2.49959L15.5 11.9382C15.5 12.9853 14.5159 13.7537 13.5 13.4997V13.4997" stroke="white"/>
                                    </MoreInfo>
                                <CartIcon width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.752161 10.9953C0.638177 9.54198 1.78674 8.2998 3.24451 8.2998H28.7555C30.2133 8.2998 31.3618 9.54198 31.2478 10.9953L29.5851 32.1953C29.4831 33.4962 28.3976 34.4998 27.0927 34.4998H4.90725C3.60235 34.4998 2.51694 33.4962 2.41491 32.1953L0.752161 10.9953Z" stroke="white"/>
                                            <path d="M7.004 18.4857C7.004 18.4857 6.54373 1 15.5 1C24.4563 1 23.996 18.4857 23.996 18.4857" stroke="white"/>
                                </CartIcon>
                                <LinkStyleText to="/">Узнай, что на мне</LinkStyleText>
                                <LikeSvg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.42873 3.25725L9.76116 1.03654L13.1965 1.46595L14.5 3.63849V6.32062L8.01449 14.1959L1.93878 6.2507L1.05633 4.04458L2.34555 1.89588L5.35443 0.606363L7.61587 3.32009L8.06654 3.86089L8.42873 3.25725Z" fill="white" stroke="white"/>
                                            <path d="M7.9 3.0948C6.6998 -2.52108 -2.59121 1.90389 1.76035 7.60175C6.11191 13.2996 8.40001 15.4908 8.40001 15.4908" stroke="white"/>
                                            <path d="M7.89413 3.0948C9.09434 -2.52108 18.7304 1.90389 14.3788 7.60175C10.0273 13.2996 7.7 15.5 7.7 15.5" stroke="white"/>
                                            <path d="M7.39098 2.70752L8.40429 2.70757L8.38335 3.24079H7.39098V2.70752Z" fill="white"/>
                                        </LikeSvg>
                                        <LikesNumber>200</LikesNumber>
                </PhotoSmall>
                <PhotoSmall>
                    <SecondBlockImgSmall className="imageHover" src={ImageSmallFourth} alt=""></SecondBlockImgSmall>
                                    <MoreInfo width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="2.5" width="13" height="13" rx="1.5" stroke="white"/>
                                        <path d="M2.33784 2.63126L2.33784 2.49958C2.33784 1.39501 3.23327 0.499584 4.33784 0.499585L13.5 0.49959C14.6045 0.49959 15.5 1.39502 15.5 2.49959L15.5 11.9382C15.5 12.9853 14.5159 13.7537 13.5 13.4997V13.4997" stroke="white"/>
                                    </MoreInfo>
                    <CartIcon width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.752161 10.9953C0.638177 9.54198 1.78674 8.2998 3.24451 8.2998H28.7555C30.2133 8.2998 31.3618 9.54198 31.2478 10.9953L29.5851 32.1953C29.4831 33.4962 28.3976 34.4998 27.0927 34.4998H4.90725C3.60235 34.4998 2.51694 33.4962 2.41491 32.1953L0.752161 10.9953Z" stroke="white"/>
                                            <path d="M7.004 18.4857C7.004 18.4857 6.54373 1 15.5 1C24.4563 1 23.996 18.4857 23.996 18.4857" stroke="white"/>
                                            </CartIcon>
                                <LinkStyleText to="/">Узнай, что на мне</LinkStyleText>
                                
                                <LikeSvg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.42873 3.25725L9.76116 1.03654L13.1965 1.46595L14.5 3.63849V6.32062L8.01449 14.1959L1.93878 6.2507L1.05633 4.04458L2.34555 1.89588L5.35443 0.606363L7.61587 3.32009L8.06654 3.86089L8.42873 3.25725Z" fill="white" stroke="white"/>
                                            <path d="M7.9 3.0948C6.6998 -2.52108 -2.59121 1.90389 1.76035 7.60175C6.11191 13.2996 8.40001 15.4908 8.40001 15.4908" stroke="white"/>
                                            <path d="M7.89413 3.0948C9.09434 -2.52108 18.7304 1.90389 14.3788 7.60175C10.0273 13.2996 7.7 15.5 7.7 15.5" stroke="white"/>
                                            <path d="M7.39098 2.70752L8.40429 2.70757L8.38335 3.24079H7.39098V2.70752Z" fill="white"/> 
                                        </LikeSvg>
                                        <LikesNumber>200</LikesNumber>                          
                </PhotoSmall>
            </SecondBlockSmallPhotosBlock>
            </div>
        </SecondBlock>
        </>
    )
}
export default SecondSection