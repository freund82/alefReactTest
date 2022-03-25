import styled from 'styled-components'
import Line from '../../assets/images/line.png'

const SelectBlock=styled.div`
    position:relative;
    margin-bottom:1.2rem;
`;

const SelectSize=styled.select`
    width:31.5rem;
    height:4.4rem;
    outline:none;
    padding-left:1.6rem;
    font-size:1.4rem;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 0.04em;
    appearance: none;
    cursor:pointer;
`;

const SelectLine=styled.img`
    position:absolute;
    left:28rem;
    top:1.8rem;
    pointer-events: none;
`;

function Select(){
    return(
        <SelectBlock>
        <SelectSize name="size" size="1">
            <option value="">Выбрать размер</option>
            <option value="32">32</option>
            <option value="34">34</option>
        </SelectSize>
        <SelectLine src={Line} alt=""></SelectLine>
        </SelectBlock>
    )
}

export default Select