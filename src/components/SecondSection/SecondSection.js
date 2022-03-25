import styled from 'styled-components'
import ImageMainSecond from '../../assets/images/sectionFotos/1.png'
import ImageSmallFirstSecond from '../../assets/images/sectionFotos/2.png'
import ImageSmallSecond from '../../assets/images/sectionFotos/3.png'
import ImageSmallThird from '../../assets/images/sectionFotos/4.png'
import ImageSmallFourth from '../../assets/images/sectionFotos/5.png'

const SecondBlock=styled.div`
    width:100;
    max-width:144rem;
    margin:0 auto;
    padding-left:2.6rem;
    padding-right:2.6rem;
    display:flex;
    flex-wrap:wrap;
    gap:1.6rem;
    line-height:0;
    @media(max-width:700px){
        gap:0.63rem;
        padding-left:0;
        padding-right:0;
    }
`;
const SecondBlockMain=styled.img`
    max-width:100%;
    line-height:0;
`

const SecondBlockSmallPhotos=styled.div`
    display:flex;
    gap:1.6rem;
    position:relative;
    @media(max-width:700px){
        gap:0.63rem;
    }
    
`;
const SecondBlockSmallPhotosBlock=styled.div`
    display:flex;
    margin-top:1.6rem;
    gap:1.6rem;
    line-height:0;
    position:relative;
    z-index:100;
    @media(max-width:700px){
        gap:0.63rem;
        margin-top:0.63rem;
    }
`;

const SecondBlockImgSmall=styled.img`
max-width:100%;
`;



function SecondSection(){
    return(
        <>
        <SecondBlock>
            <div><SecondBlockMain src={ImageMainSecond} alt=""></SecondBlockMain></div>
            <div>
            <SecondBlockSmallPhotos>
                <div className="hoverSvg" style={{background:"#333"}} >
                    <SecondBlockImgSmall className="imageHover" src={ImageSmallFirstSecond} alt=""></SecondBlockImgSmall>
                    <svg className="svgCart" style={{position:"absolute", top:"50%", left:"22%", zIndex:"1000"}} width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.752161 10.9953C0.638177 9.54198 1.78674 8.2998 3.24451 8.2998H28.7555C30.2133 8.2998 31.3618 9.54198 31.2478 10.9953L29.5851 32.1953C29.4831 33.4962 28.3976 34.4998 27.0927 34.4998H4.90725C3.60235 34.4998 2.51694 33.4962 2.41491 32.1953L0.752161 10.9953Z" stroke="white"/>
                                            <path d="M7.004 18.4857C7.004 18.4857 6.54373 1 15.5 1C24.4563 1 23.996 18.4857 23.996 18.4857" stroke="white"/>
                                            </svg>
                </div>
                <div className="hoverSvg" style={{background:"#333"}}>
                    <SecondBlockImgSmall className="imageHover" src={ImageSmallThird} alt=""></SecondBlockImgSmall>
                    <svg className="svgCart" style={{position:"absolute", top:"50%", right:"22%", zIndex:"1000"}} width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.752161 10.9953C0.638177 9.54198 1.78674 8.2998 3.24451 8.2998H28.7555C30.2133 8.2998 31.3618 9.54198 31.2478 10.9953L29.5851 32.1953C29.4831 33.4962 28.3976 34.4998 27.0927 34.4998H4.90725C3.60235 34.4998 2.51694 33.4962 2.41491 32.1953L0.752161 10.9953Z" stroke="white"/>
                                            <path d="M7.004 18.4857C7.004 18.4857 6.54373 1 15.5 1C24.4563 1 23.996 18.4857 23.996 18.4857" stroke="white"/>
                                            </svg>
                </div>
            </SecondBlockSmallPhotos>
            <SecondBlockSmallPhotosBlock>
                <div className="hoverSvg" style={{background:"#333"}}>
                    <SecondBlockImgSmall className="imageHover" src={ImageSmallSecond} alt=""></SecondBlockImgSmall>
                    <svg className="svgCart" style={{position:"absolute", top:"50%", left:"22%", zIndex:"1000"}} width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.752161 10.9953C0.638177 9.54198 1.78674 8.2998 3.24451 8.2998H28.7555C30.2133 8.2998 31.3618 9.54198 31.2478 10.9953L29.5851 32.1953C29.4831 33.4962 28.3976 34.4998 27.0927 34.4998H4.90725C3.60235 34.4998 2.51694 33.4962 2.41491 32.1953L0.752161 10.9953Z" stroke="white"/>
                                            <path d="M7.004 18.4857C7.004 18.4857 6.54373 1 15.5 1C24.4563 1 23.996 18.4857 23.996 18.4857" stroke="white"/>
                                            </svg>
                </div>
                <div className="hoverSvg" style={{background:"#333"}}>
                    <SecondBlockImgSmall className="imageHover" src={ImageSmallFourth} alt=""></SecondBlockImgSmall>
                    <svg className="svgCart" style={{position:"absolute", top:"50%", right:"22%", zIndex:"1000"}} width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.752161 10.9953C0.638177 9.54198 1.78674 8.2998 3.24451 8.2998H28.7555C30.2133 8.2998 31.3618 9.54198 31.2478 10.9953L29.5851 32.1953C29.4831 33.4962 28.3976 34.4998 27.0927 34.4998H4.90725C3.60235 34.4998 2.51694 33.4962 2.41491 32.1953L0.752161 10.9953Z" stroke="white"/>
                                            <path d="M7.004 18.4857C7.004 18.4857 6.54373 1 15.5 1C24.4563 1 23.996 18.4857 23.996 18.4857" stroke="white"/>
                                            </svg>
                    </div>
            </SecondBlockSmallPhotosBlock>
            </div>
        </SecondBlock>
        </>
    )
}
export default SecondSection