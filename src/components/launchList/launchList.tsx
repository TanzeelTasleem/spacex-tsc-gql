import React from "react";
import "./launchList.css";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { LaunchesPastResult } from "../../generated/graphql";
import { useNavigate } from "react-router-dom";

const LaunchList: React.FC<LaunchesPastResult> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      {data?.map((launch, index) => {
        console.log(
          launch?.links?.video_link,
          typeof launch?.links?.video_link
        );
        return (
          launch?.links?.flickr_images?.[0] && (
            <div
              key={index}
              className="bg"
              style={{
                backgroundImage: `url(${launch?.links?.flickr_images})`,
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
                    <h1>{launch?.mission_name}</h1>
                    <Button
                      style={{ color: "white", border: "1px solid white" }}
                      size="large"
                      variant="outlined"
                      href={launch.links.video_link + ""}
                      target="_blank"
                    >
                      Replay
                    </Button>
                    {data?.length > 5 && (
                      <Button
                        style={{
                          color: "white",
                          border: "1px solid white",
                          marginLeft: "10px",
                        }}
                        size="large"
                        variant="outlined"
                        onClick={() => {
                          navigate(`/launches/${launch.id}`);
                        }}
                      >
                        Details
                      </Button>
                    )}
                  </div>
                </Grid>
              </Grid>
            </div>
          )
        );
      })}
    </div>
  );
};
export default LaunchList;
