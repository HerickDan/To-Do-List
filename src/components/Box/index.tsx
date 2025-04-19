import { ReactNode } from "react";
import Box from "@mui/material/Box";

export const ListSection = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fffee1",
        width: "40%",
        height: "60%",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "solid 1px #b3c9c1",
        borderRadius:"20px"
      }}
    >
      {children}
    </Box>
  );
};
