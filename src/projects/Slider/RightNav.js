import { useState } from "react";
import { Nav, Circle } from "./styled";
import { content } from "./content";

export function RightNav({ page, setPage }) {
  return (
    <Nav>
      {content.map((ele, i) => (
        <Option
          key={ele.title}
          title={ele.title}
          i={i}
          page={page}
          setPage={setPage}
        ></Option>
      ))}
    </Nav>
  );
}
const Option = ({ title, i, page, setPage }) => {
  const [hover, setHover] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div style={{ opacity: hover ? 1 : 0, transition: "0.2s ease-out" }}>
        {title.split(" ")[0]}
      </div>
      <Circle
        size={page === i ? 1 : 0.4}
        onClick={() => setPage(i)}
        onMouseOver={() => setHover(1)}
        onMouseLeave={() => setHover(0)}
      ></Circle>
    </div>
  );
};
