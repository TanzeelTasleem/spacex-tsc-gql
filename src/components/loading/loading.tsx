import React from "react";
import { Box } from "@material-ui/core";
export const Loading = () => {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    width = "100%"
    color = "white"
    margin = "0"
    padding="0"
    bgcolor="black"
    >
      <span>loading...</span>
    </Box>
  );
};
