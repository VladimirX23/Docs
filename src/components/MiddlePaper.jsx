import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { formControlClasses } from "@mui/material";
export default function MiddlePaper(props) {
  const { text, component } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 728,
          height: 1000,
        },
      }}
    >
      <Paper elevation={3}>
        <h1>{text}</h1>
        {component}
        {/* <img src={imageSrc} alt="к" /> */}
      </Paper>
    </Box>
  );
}
