import { gql } from "@apollo/client";

export const Query_LaunchList = gql`
  query launchList($limit: Int!) {
    launchesPast(limit: $limit) {
      mission_name
      id
      links {
        flickr_images
        video_link
      }
    }
  }
`;
