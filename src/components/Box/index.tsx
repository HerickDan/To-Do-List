import { ReactNode } from "react"
import styled from "styled-components"

const BoxStyled = styled.div`
    background-color:white;
    width:40%;
    height:40%;
    padding: 20px 0 20px 0;
    border-radius: 10px
`
export const Box = ({ children }: { children: ReactNode }) =>{
    return (
     <BoxStyled>
        {children}
    </BoxStyled>)
}