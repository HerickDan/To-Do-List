
import { ReactNode } from "react"
import Box from '@mui/material/Box';


export const ListSection = ({ children }: { children: ReactNode }) =>{
    return (
     <Box sx={{
        backgroundColor:"white", width:"40%", height:"40%", padding:"40px",
        display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        {children}

    </Box>)
}