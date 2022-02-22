import { styled } from "@mui/system";
export const Body = styled("div")((props) => ({
  width: "100%",
  height: "100%",
  transform:
    `translateY(-${(props.page - props.touchtranslate) * 100}%)` ||
    "translateY(0%)",
  transition: props.transition || "0.7s ease-out",
}));

export const Page = styled("div")((props) => ({
  width: "100%",
  height: "100%",
  backgroundColor: props.bg || "wheat",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10vw",
  h1: {
    fontSize: "8vw",
    "@media (max-width:780px)": {
      fontSize: "15vw",
    },
  },
}));
export const Nav = styled("div")((props) => ({
  position: "absolute",
  right: 10,
  top: "50%",
  transform: "translateY(-50%)",
}));
export const Circle = styled("div")((props) => ({
  borderRadius: "50%",
  background: "white",
  width: 12,
  height: 12,
  transform: `scale(${props.size})`,
  transition: "0.1s ease-out",
  margin: "0 10px",
  cursor: "pointer",
  "&:hover": {
    transform: `scale(0.9)`,
  },
}));
export const SubTitle = styled("p")((props) => ({
  fontSize: "2vw",
  padding: "10px 30px",
  opacity: 0.9,
  "@media (max-width:780px)": {
    fontSize: "4vw",
  },
}));
