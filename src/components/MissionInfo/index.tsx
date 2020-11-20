import React from "react";
import { useMissionInfoQuery } from "./../../generated/graphql";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

interface Props {
  id: number;
}

const MissionDetail: React.FC<Props> = ({ id }) => {
  const { data, error, loading } = useMissionInfoQuery({
    variables: { id: String(id) },
  });

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 300,
        }}
      >
        <Spinner
          animation="border"
          style={{
            height: 50,
            width: 50,
            borderWidth: 5,
            color: "blue",
          }}
        />
      </div>
    );

  if (error || !data) return <h1> error</h1>;
  const info = data.launch;

 

  const images = () => {
    const imageUrl: any = info?.links?.flickr_images;

    if (imageUrl.length == 0) {
      return <h4> Images Not found </h4>;
    } else if (info?.links?.flickr_images?.length !== 0) {
      return (
        <div style = {{ margin : 'auto'}}>
          {imageUrl.map((url: String, id: number) => {
            return (
              <Image
                key={id}
                src={String(url)}
                rounded
                fluid
                style={{ height: 400, width: 300, padding: 5 }}
              />
            );
          })}
        </div>
      );
    }
  };

  return (
    <div>
      <h3> Mission Name : {info?.mission_name} </h3>
      <h4> Year : {info?.launch_year} </h4>
      <h4> Site : {info?.launch_site?.site_name} </h4>    
      <h4> Rocket name : {info?.rocket?.rocket_name} </h4>
      <h4> Rocket type : {info?.rocket?.rocket_type} </h4>
      <h4> Misssion Details : </h4>
      <h6> {info?.details}</h6>
      <h4> Images </h4>
      <div> {images()}</div>
    </div>
  );
};

export default MissionDetail;
