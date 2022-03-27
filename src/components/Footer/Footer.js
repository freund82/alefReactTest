import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FooterSection=styled.footer`
    display:flex;
    justify-content:space-between;
    margin:auto;
    margin-bottom:12.6rem;
    max-width:144rem;
    padding-left:14.3rem;
    padding-right:14.3rem;
    flex-wrap:wrap;
    font-size:1.6rem;
    letter-spacing:0.04em;
    color:#333;
    @media(max-width:700px){
        justify-content:flex-start;
        padding-left:2.6rem;
        padding-right:2.6rem;
        gap:4.6rem;
    }
    
`;
const FooterHeadText=styled.p`
    margin-bottom:1.6rem;
`;

const FooterLinksText=styled(Link)`
    display:block;
    font-size:1.4rem;
    line-height:2.8rem;
    text-decoration:none;
    color:#333;
    letter-spacing:0.04em;
`;
const MailBlock=styled.div`
    position:relative;
    z-index:100;
    width:45.2rem;
    @media(max-width:900px){
        margin-top:5.8rem;
    }
    @media(max-width:700px){
        margin-top:0;
    }
`;
const Mail=styled.input`
    width:100%;
    max-width:45.2rem;
    height:4.4rem;
    padding-left:1.6rem;
    font-size:1.4rem;
    letter-spacing:0.04em;
    line-height:2rem;
    margin-top:1.9rem;
    border:none;
    border-bottom:0.1rem solid #C4C4C4;
    outline:none;
    
`;
const MailDelete=styled.svg`
    position:absolute;
    bottom:30%;
    right:3%;
    z-index:1000;
    cursor:pointer;
`;
const MailButton=styled.button`
    position:absolute;
    z-index:1000;
    top:83%;
    right:0%;
    width:15rem;
    height:3.6rem;
    margin-top:3.5rem;
    background:#fff;
    outline:none;
    border: 1px solid #333333;
    cursor:pointer;
    font-size:1.4rem;
    letter-spacing: 0.04em;
    &:hover{
        background:#F2F2F2;
    }
`;

function Footer(){
        const [value, setValue]=useState('')
function handleChange(event){
	setValue(event.target.value);
      
}
function validMail(){
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let valid=re.test(value)
    if (!valid){
        alert('Адрес электронной почты введен неправильно!')
    } else{
        alert('Спасибо!')
    }
}

    return (
        <>
        <FooterSection>
            <div>
                <FooterHeadText>ПОКУПАТЕЛЯМ</FooterHeadText>
                <FooterLinksText to="/">Каталог</FooterLinksText>
                <FooterLinksText to="/">Акции</FooterLinksText>
                <FooterLinksText to="/">Бренды</FooterLinksText>
            </div>
            <div>
                <FooterHeadText>О НАС</FooterHeadText>
                <FooterLinksText to="/">О компании</FooterLinksText>
                <FooterLinksText to="/">Новости</FooterLinksText>
                <FooterLinksText to="/">Команда</FooterLinksText>
            </div>
            <MailBlock>
            <FooterHeadText className="mailSign">УЗНАЙТЕ ПЕРВЫМИ О НОВИНКАХ И АКЦИЯХ</FooterHeadText>
            <Mail onChange={handleChange} type="email" name="email" placeholder="Адрес электронной почты"></Mail>
                <MailDelete width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.700012 9.06641L9.05007 0.88337" stroke="#C4C4C4"/>
                    <path d="M9.25165 9.06641L0.901606 0.883353" stroke="#C4C4C4"/>
                </MailDelete>
                <MailButton type="button" className="mail" onClick={validMail}>Подписаться</MailButton>
            </MailBlock>
        </FooterSection>
        </>
    )
}

export default Footer;