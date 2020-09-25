import { Box } from "@material-ui/core";
import React from "react";

export const Footer = () => {
  return (
    <Box
      color="white"
      display="flex"
      justifyContent="center"
      height="70px"
      width="100%"
      bgcolor="black"
      alignItems="center"
    >
      <span>SpaceX © 2020</span>
    </Box>
  );
};
