import { styled } from "@mui/system";

export const Card = styled("div")((props) => ({
  boxShadow: "0px 12px 27px 0px rgb(227 226 227)",
  borderRadius: props.radius,
  width: props.width,
  overflow: "hidden",
  position: "relative",
}));

export const Content = styled("div")({
  padding: 20,
  color: "black",
  textAlign: "left",
  fontFamily: "'Nunito', sans-serif",
});
export const Img = styled("img")({
  width: "100%",
});

export const Photo = styled("img")({
  width: 50,
  height: 50,
  marginRight: 20,
  borderRadius: "50%",
});
export const Area = styled("div")({
  borderBottom: "2px solid #e8eaee",
  padding: 20,
  color: "#595e62",
  textAlign: "left",
});
export const AreaName = styled("p")({
  textTransform: "uppercase",
  fontWeight: 700,
  letterSpacing: "1px",
  marginBottom: 10,
});
export const RoomIcon = styled("img")({
  width: 30,
  height: 30,
  opacity: 0.6,
});
//#f5f9fc
