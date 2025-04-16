import { height, padding } from "@mui/system"
import { ReactNode } from "react"
import styled from "styled-components"
import Box from '@mui/material/Box';


export const ListSection = ({ children }: { children: ReactNode }) =>{
    return (
     <Box sx={{backgroundColor:"white", width:"40%", height:"40%", padding:"20px 0 20px 0"}}>
        {children}
    </Box>)
}