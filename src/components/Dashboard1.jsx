import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 2,
          width: 628,
          height: 728,
        },
      }}
    >
      <Paper elevation={3}>
        <div style={{ marginLeft: "20px" }}>
          <h2>Какой то заголовок </h2>
          <h3>Заголовок поменьше</h3>
          <h4>Еще меньше</h4>
          <ul>
            <li>Текст 1</li>
            <li>Текст 2</li>
            <li>Текст 3</li>
            <li>Текст 4</li>
            <li>Текст 5</li>
            <li>Текст 6</li>
            <li>Текст 7</li>
            <li>Текст 8</li>
            <li>Текст 9</li>
            <li>Текст 10</li>
          </ul>
        </div>
      </Paper>
      <Paper elevation={3}>
        <div style={{ textAlign: "center" }}>
          <h1>Матрица</h1>
          <img
            src="https://cdnn21.img.ria.ru/images/155969/17/1559691709_0:171:1736:1148_600x0_80_0_0_aa8b7fb01147657acb3896d7416a7926.jpg.webp"
            alt="Картинка для пример"
          />
        </div>
      </Paper>
    </Box>
  );
}
