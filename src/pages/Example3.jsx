import MiddlePaper from "../components/MiddlePaper";
import Header from "../components/Header";
import Menu from "../components/Menu";
export default function Example3() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Menu />
        <MiddlePaper третья страница />
      </div>
    </div>
  );
}
