import styled from 'styled-components'

const Responses=styled.p`
display:flex;
align-items:center;
font-size:1.4rem;
margin-bottom:4.6rem;
`;

const Stars=styled.span`
    font-size:0.95rem;
    margin-left:1.3rem;
    margin-top:0.3rem;
    margin-right:0.5rem;
`;

const ResponcesNumber=styled.span`
    &:after{
        content:"";
        display:inline-block;
        width:1rem;
        height:1rem;
        border-top:0.1rem solid #333;
        border-left:0.1rem solid #333;
        margin-left:0.6rem;
        transform: rotate(135deg);
        cursor:pointer;
    }
`;

function Responces(){
    return(
        <Responses><span>Отзывы</span><Stars><i className="fas fa-star"></i><i className="fas fa-star"></i>
        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></Stars>
        <ResponcesNumber>14 отзывов</ResponcesNumber>
        </Responses>
    )
}

export default Responces