import { Card, Img, Photo, AreaName, Area, RoomIcon } from "./styled.js";

export function CardB() {
  const house = {
    years: "5Y",
    price: 750000,
    place: "742 Evergreen Terrace",
    rooms: [
      { type: "BedRooms", num: 3, pic: `${process.env.PUBLIC_URL}/bed.png` },
      { type: "BathRooms", num: 2, pic: `${process.env.PUBLIC_URL}/bath.png` },
    ],
    realtor: {
      name: "Tiffany Heffner",
      phoneNum: "(555) 555-4321",
    },
  };
  return (
    <Card
      width={400}
      radius={10}
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <Img
        src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="house picture"
      />
      <i
        className="fa-regular fa-heart"
        style={{
          color: "white",
          fontSize: "1.5em",
          position: "absolute",
          top: 20,
          right: 20,
        }}
      ></i>
      <Area>
        <AreaName>detached house • {house.years} old</AreaName>
        <p style={{ marginBottom: 10, color: "black", fontSize: "2em" }}>
          ${Intl.NumberFormat("en-US").format(house.price)}
        </p>
        <p>{house.place}</p>
      </Area>
      <Area style={{ display: "flex", justifyContent: "space-around" }}>
        {house.rooms.map((ele) => (
          <RoomDiv room={ele} key={ele.type} />
        ))}
      </Area>
      <Area style={{ backgroundColor: "#f5f9fc", letterSpacing: "1px" }}>
        <AreaName
          style={{
            fontSize: "0.1em",
            color: "#76828c",
          }}
        >
          REALTOR
        </AreaName>
        <div style={{ display: "flex" }}>
          <Photo
            src="https://img.ltn.com.tw/Upload/news/300/2015/12/01/phpCohgOF.jpg"
            alt="photo"
          />
          <div>
            <div style={{ fontWeight: 700, color: "black" }}>
              {house.realtor.name}
            </div>
            <p>{house.realtor.phoneNum}</p>
          </div>
        </div>
      </Area>
    </Card>
  );
}
const RoomDiv = ({ room }) => {
  return (
    <div style={{ display: "flex", padding: "0px 10px", alignItems: "center" }}>
      <RoomIcon src={room.pic}></RoomIcon>
      <p style={{ fontWeight: 700, padding: "0px 10px ", color: "black" }}>
        {room.num}
      </p>
      <p>{room.type}</p>
    </div>
  );
};
