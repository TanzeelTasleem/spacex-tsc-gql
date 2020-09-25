import React from "react";
import { useParams } from "react-router-dom";
import { useLaunchDetailsQuery } from "../../generated/graphql";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Hidden } from "@material-ui/core";
import "./launchDetails.css";
import ReactPlayer from "react-player";

const LaunchDetails = () => {
  const { launchID } = useParams();
  const { data } = useLaunchDetailsQuery({
    variables: { id: launchID },
  });
  return (
    <div>
      {data?.launch?.links?.flickr_images?.[0] && (
        <div>
          <div
            key={data?.launch?.id}
            className="bg"
            style={{
              backgroundImage: `url(${data?.launch?.links?.flickr_images})`,
            }}
          >
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-end"
              className="section-inner"
            >
              <Grid item container md={1} xs={1} />
              <Grid item>
                <div className="text">
                  <h3>mission completed</h3>
                  <h1>{data?.launch?.mission_name}</h1>
                  <Button
                    style={{ color: "white", border: "1px solid white" }}
                    size="large"
                    variant="outlined"
                    href="#youtube"
                  >
                    Replay
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
          <Box className="detail-box">
            <Box
              pt={8}
              textAlign="center"
              display="flex"
              justifyContent="center"
            >
              <h2>{data.launch.mission_name}</h2>
            </Box>
            <Box
              pl={5}
              pr={5}
              height="400px"
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <Box width="500px" alignSelf="center">
                <p>{data.launch.details}</p>
              </Box>
              <Hidden mdDown>
                <Box alignSelf="center" className="player-wrapper">
                  <ReactPlayer
                    id="youtube"
                    controls={true}
                    light={true}
                    width="800px"
                    height="400px"
                    url={data?.launch?.links?.video_link + ""}
                  />
                </Box>
              </Hidden>
            </Box>
          </Box>
          <Box className="tab">
            <table>
              <tr>
                <td>mission name</td>
                <td>{data?.launch?.mission_name}</td>
              </tr>
              <tr>
                <td>launch success</td>
                <td>{data?.launch?.launch_success + " "}</td>
              </tr>
              <tr>
                <td>launch year</td>
                <td>{data?.launch?.launch_year}</td>
              </tr>
              <tr>
                <td>launch site </td>
                <td>{data?.launch?.launch_site?.site_name_long}</td>
              </tr>
              <tr>
                <td>rocket name </td>
                <td>{data?.launch?.rocket?.rocket_name}</td>
              </tr>
              <tr>
                <td> rocket type</td>
                <td>{data?.launch?.rocket?.rocket_type}</td>
              </tr>
              <tr>
                <td>article link</td>
                <td>
                  {" "}
                  <a href={data?.launch?.links?.article_link + ""}>link</a>
                </td>
              </tr>
              <tr>
                <td>upcoming</td>
                <td>{data.launch.upcoming + ""}</td>
              </tr>
            </table>
          </Box>
        </div>
      )}
    </div>
  );
};

export default LaunchDetails;
