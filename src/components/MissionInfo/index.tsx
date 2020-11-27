import React from "react";
import { useMissionInfoQuery } from "./../../generated/graphql";
import Spinner from "react-bootstrap/Spinner";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

import "./index.css";

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
            color: "blue",
          }}
        />
      </div>
    );

  if (error || !data)
    return (
      <h5 className="error">
        {" "}
        Oops! something went wrong. check your internet conncection.
      </h5>
    );

  const info = data.launch;

  const images = () => {
    const imageUrl: any = info?.links?.flickr_images;

    if (imageUrl.length === 0) {
      return <h6> Images dont exist for this mission. </h6>;
    } else if (info?.links?.flickr_images?.length !== 0) {
      return (
        <Carousel style={{ margin: "auto" }} slide={false} fade={false}>
          {imageUrl.map((url: String, id: number) => {
            return (
              <Carousel.Item key={id}>
                <img
                  className="d-block w-100"
                  src={String(url)}
                  alt="First slide"
                  style={{ height: 400, width: 300, padding: 5 }}
                />
                <Carousel.Caption>
                  <h6>slid # {id + 1}</h6>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      );
    }
  };

  return (
    <div>
      <Card border="info" className="main" bg="info">
        <Card.Header>launch Year : {info?.launch_year}</Card.Header>
        <Card.Header>launch Site : {info?.launch_site?.site_name} </Card.Header>
        <Card.Header>Rocket name : {info?.rocket?.rocket_name} </Card.Header>
        <Card.Header>Rocket type : {info?.rocket?.rocket_type} </Card.Header>
        <Card.Body>
          <Card.Title>{info?.mission_name}</Card.Title>
          <Card.Text>{info?.details}</Card.Text>
          <h5> Gallery </h5>
          <div> {images()}</div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MissionDetail;
