import { ReactNode } from "react"
import styled from "styled-components"

const BoxStyled = styled.div`
    background-color:white;
    width:40%;
    height:40%
`
export const Box = ({ children }: { children: ReactNode }) =>{
    return (
     <BoxStyled>
        {children}
    </BoxStyled>)
}