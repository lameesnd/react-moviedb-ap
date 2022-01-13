import styled from "styled-components";

export const Wrapper = styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
    height:70px;
    width:100%;
    background : var(--medGrey);
    color: var(--white);
`;

export const Content = styled.div `
    display: flex;
    width:100%;
    max-width: var(--maxWidth);
    padding: 0 20px;

    span{
        font-size: var(--fontMed);
        color: var(--white);
        padding-right: 10px;

        @media screen and (max-width: 768px){
            font-size: var(--fontSmall);
        }
    }
`;