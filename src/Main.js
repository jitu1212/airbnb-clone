import React from "react";
import Card from "./ReactCart";
import "./Main.css";
import ReactSearchBar from "./ReactSearchBar";

export default function Main() {
  return (
    <>
    <div className="home">
      <ReactSearchBar />
      <div className="home__section">
        <Card
          src="https://th.bing.com/th/id/OPAN.203CB65800B76AE69E81180732A9E06B?w=388&h=180&c=8&rs=1&pid=Attractions"
          title="Taj Mahal"
          description="The Taj Mahal ,[4][5][6] is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra."
          price="$130/night"
        />
        <Card
          src="https://images.musement.com/cover/0061/92/thumb_6091386_cover_header.jpeg?w=1200&h=630&q=95&fit=crop"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://th.bing.com/th/id/OIP.WxmeM9C0_fbUW7wcweublAHaE9?w=258&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          title="Taj Mahal"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://static.toiimg.com/photo/75601271/oie_714028Gm1HMscL.jpg?width=748&resize=4"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://th.bing.com/th/id/OIP.3TlSqB7VgAfI6-9CsCDQMQHaDt?w=347&h=175&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://th.bing.com/th/id/OIP.gPVSYLFa7aFPLfzBAMFMSQHaFj?pid=ImgDet&w=201&h=150&c=7&dpr=1.25"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
      </div>
    </div>
    </>
  );
}
