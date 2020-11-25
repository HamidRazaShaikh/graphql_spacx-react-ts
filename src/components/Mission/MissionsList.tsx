import React from "react";
import { LaunchesInfoQuery } from "./../../generated/graphql";

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
    <div className="appBar">
      <div className="nav">
        <h3> spaceX-app</h3>
      </div>

      <div className="button">
        <InputGroup className="inputButtton">
          <DropdownButton title="Select Mission" variant="danger">
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
      </div>
    </div>
  );
};

export default MissionList;
