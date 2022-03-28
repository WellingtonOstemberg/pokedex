import styled from "styled-components";
type ButtonProp = {
    bg?: string
    color?: string
}
export const Button = styled.button<ButtonProp>`
  background-color: ${props => props.bg ? props.bg : 'white'};
  color:  ${props => props.color ? props.color : 'black'};
  height: 35px;
  width: 85px;
`;

type SectionProp = {
    bg?: string
    active?: boolean
}

export const Section = styled.section<SectionProp>`
    background-color: ${props => props.bg ? props.bg : "#aaa"};
    ${props => props.active ? 'color: red;' : ''}
`;

export const TitleH5 = styled.div`
    color: blue;
    button {
        color: red;
        span {
           color: green; 
        }
    }
`;