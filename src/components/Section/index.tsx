import {  ReactNode } from "react"
import styled from "styled-components"

const Section = styled.section`
    width: 100vw;  
    height: 100vh;
    background-color: blue;
    position: absolute;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column
`

export const Sectionlist = ({ children }: { children: ReactNode }) =>{
    return <Section>
        {children}
    </Section>
}