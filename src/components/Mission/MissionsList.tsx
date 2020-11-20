import React from "react";
import { LaunchesInfoQuery } from "./../../generated/graphql";
import ListGroup from "react-bootstrap/listGroup";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./index.css";

export interface idProps {
  handlePassId: (newId: number) => void;
}

interface Props extends idProps {
  data: LaunchesInfoQuery;
}

const MissionList: React.FC<Props> = ({ data, handlePassId }) => {
  return (
    <Container>
      <InputGroup className="mb-3">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          {data.launches?.map((launchObj, id) => {
            let key = id + 1;

            return (
              <Dropdown.Item
                className="listItem"
                key={id}
                onClick={() => handlePassId(key)}
              >
                {launchObj?.mission_name}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </InputGroup>
    </Container>
  );
};

export default MissionList;
