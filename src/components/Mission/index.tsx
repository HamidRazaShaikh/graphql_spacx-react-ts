import React, { useState } from "react";
import { useLaunchesInfoQuery } from "./../../generated/graphql";
import MissionsList from "./MissionsList";
import MissionDetail from "./../MissionInfo/index";
import Loading from './loading';

import "./index.css";





const MissionsContainer = () => {
  const [id, setId] = useState(16);

  const handlePassId = (newId: number) => {
    setId(newId);
  };

  const { data, error, loading } = useLaunchesInfoQuery();

  if (loading)
    return (
      
      <Loading/>
      
    );

  if (error || !data) return <h1> error...</h1>;

  console.log(data);

  return (
    <div className = 'mainDiv'>
      <MissionsList data={data} handlePassId={handlePassId} />
      <MissionDetail id={id}  />
    </div>
  );
};

export default MissionsContainer;
