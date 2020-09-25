import React, { Suspense } from "react";
import { useLaunchListQuery } from "../../generated/graphql";

const LaunchList = React.lazy(() => import("../launchList/launchList"));

const Launches = () => {
  const { data } = useLaunchListQuery({ variables: { limit: 10 } });
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <LaunchList data={data?.launchesPast} />
    </Suspense>
  );
};

export default Launches;
