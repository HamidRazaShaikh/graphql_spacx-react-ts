import React, { useState } from "react";
import { useLaunchesInfoQuery } from "./../../generated/graphql";
import MissionsList from "./MissionsList";
import MissionDetail from "./../MissionInfo/index";
import Spinner from "react-bootstrap/Spinner";
import NavBar from "./Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';


const MissionsContainer = () => {
  const [id, setId] = useState(16);

  const handlePassId = (newId: number) => {
    setId(newId);
  };

  const { data, error, loading } = useLaunchesInfoQuery();

  if (loading)
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems : 'center', marginTop :300}}>
        <Spinner
          animation="border"
          style={{
            height: 100,
            width: 100,
            borderWidth: 8,
            color : 'blue'
          }}
        />
      </div>
    );

  if (error || !data) return <h1> error...</h1>;

  console.log(data);

  return (
    <div>
      <Row>
        <Col sm = {12}>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col sm = { 3 }>
          <MissionsList data={data} handlePassId={handlePassId} />
        </Col>
        <Col sm = { 9 }>
          <MissionDetail id={id} />
        </Col>
      </Row>
    </div>
  );
};

export default MissionsContainer;
