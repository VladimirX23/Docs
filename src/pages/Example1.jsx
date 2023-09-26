// import { Menu } from "@mui/material";
import MiddlePaper from "../components/MiddlePaper";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Manual from "../components/manuals/Manual";

export default function Example1() {
  const Manual = "4222234242";
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Menu />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MiddlePaper
            text="Это заголовок для новой страницы"
            component={Manual}
            // imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQluBZbSeapLPqbXaxOs1qe_zA1x0-Q5d64NmJ6eRVuFQaxch6VRn7tNUT90yKTM4uUao&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
}
