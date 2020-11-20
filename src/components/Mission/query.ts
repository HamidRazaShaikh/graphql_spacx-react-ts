import gql from "graphql-tag";

export const LaunchesInfo = gql`
  query launchesInfo {
    launches {
      mission_id
      mission_name
      launch_year
      launch_success
    }
  }
`;
