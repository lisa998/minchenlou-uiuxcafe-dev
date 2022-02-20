import { Card, Content, Img } from "./styled.js";

export function CardA() {
  const title = "Card Grid Layout";
  const content =
    "Demo of pixel perfect pure CSS simple responsive card grid layout";
  return (
    <Card width={500} radius={5}>
      <Img
        src="https://www.fotobeginner.com/wp-content/uploads/2015/04/lake-sunset-2021-08-26-18-27-36-utc-1.jpg"
        alt="風景照"
      />
      <Content style={{ paddingRight: 70 }}>
        <h1>{title}</h1>
        <p style={{ fontSize: 22 }}>{content}</p>
      </Content>
    </Card>
  );
}
