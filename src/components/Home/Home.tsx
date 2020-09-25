import React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import LaunchList from "../launchList/launchList";

const Home = () => {
  const { data } = useLaunchListQuery({
    variables: { limit: 5 },
  });
  return <LaunchList data={data?.launchesPast} />;
};

export default Home;
