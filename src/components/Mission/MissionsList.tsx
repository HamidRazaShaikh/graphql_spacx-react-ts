import React from "react";
import { LaunchesInfoQuery } from "./../../generated/graphql";
import ListGroup from 'react-bootstrap/listGroup';
import Container from "react-bootstrap/Container";
import './index.css';



export interface idProps {

  handlePassId : ( newId : number)=> void
}


interface Props extends idProps {
  data: LaunchesInfoQuery
 
}

const MissionList: React.FC<Props> = ({ data , handlePassId}) => {
  return (
    <Container>
      <ListGroup className = 'list'>
        {data.launches?.map((launchObj, id) => {

          let key = id + 1
      
          return <ListGroup.Item className = 'listItem' key = {id} onClick = { ()=> handlePassId(key)}>{launchObj?.mission_name}</ListGroup.Item>;
        })}
      </ListGroup>
    </Container>
  );
};

export default MissionList;


