import styled from 'styled-components'
import {Link} from 'react-router-dom'

const DescriptionLinks=styled.div`
    margin-top:2.4rem;
    display:flex;
    width:16.7rem;
    height:8.4rem;
    flex-wrap:wrap;
    line-height:2rem;
`;
const Icon=styled.svg`
    margin-right:0.65rem;
`;

const IconBlock=styled.div`
    display:flex;
    align-items:center;
`;

function Description(){
    return (
        <DescriptionLinks>
            <IconBlock>
                <Icon width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/Icon">
                    <circle cx="8" cy="8" r="7" stroke="#333333"/>
                    <path d="M4 6C4.24928 6 6.75787 4.5 6.75787 4.5H8.00429H9.25071C9.25071 4.5 11.7507 6 12 6" stroke="#333333"/>
                    <path d="M4.01577 5.39283L4.01576 7.17806L5.76075 7.4756L5.76075 11.9386" stroke="#333333"/>
                    <path d="M11.9842 5.39283L11.9842 7.17806L10.2393 7.4756L10.2478 11.9386" stroke="#333333"/>
                    <line x1="5.51145" y1="11.4385" x2="10.4971" y2="11.4385" stroke="#333333"/>
                    <path d="M6.50859 4.5C6.50859 4.5 7.00716 6.28522 8.00429 6.28522C9.00142 6.28522 9.49999 4.5 9.49999 4.5" stroke="#333333"/>
                </Icon>
                    <Link style={{textDecoration:"underline", fontSize:"1.4rem", color:"#333", letterSpacing:"0.04em", textDecorationSkipInk:"none"}} to="/">Описание товара</Link>
            </IconBlock>
            <IconBlock>
                <Icon  width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="7" fill="white" stroke="#333333"/>
                    <path d="M8.55453 4.5L8.55453 9.70613L12.5 12" stroke="#333333"/>
                </Icon>
                   <Link style={{textDecoration:"underline", fontSize:"1.4rem", color:"#333", letterSpacing:"0.04em", textDecorationSkipInk:"none"}} to="/">Доставка и возврат</Link>
            </IconBlock>
            <IconBlock>
                <Icon style={{paddingLeft:"0.1rem"}} width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="13" height="9" rx="0.5" stroke="#333333"/>
                    <rect x="1" y="3" width="12" height="2" fill="#333333"/>
                </Icon>
                    <Link style={{textDecoration:"underline", fontSize:"1.4rem", color:"#333", letterSpacing:"0.04em", textDecorationSkipInk:"none"}} to="/">Способы оплаты</Link>
            </IconBlock>
        </DescriptionLinks>
    )
}

export default Description