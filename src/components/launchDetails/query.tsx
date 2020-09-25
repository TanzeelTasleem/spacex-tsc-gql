import { gql } from "@apollo/client";

export const Query_LaunchDetails = gql`
  query launchDetails($id: ID!) {
    launch(id: $id) {
      mission_name
      details
      id
      launch_year
      launch_success
      links {
        flickr_images
        video_link
        article_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      upcoming
      ships {
        name
      }
      launch_site {
        site_name
        site_name_long
      }
    }
  }
`;
