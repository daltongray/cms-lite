import { sizes } from "config";
import Typography from "@mui/material/Typography";
import { FlexColumn } from "@change-my-story/component-library";

export const AboutPage = () => {
  const isMobile = true;

  return (
    <FlexColumn
      alignItems={"center"}
      paddingTop={20}
      paddingRight={15}
      paddingLeft={15}
      paddingBottom={isMobile ? 150 : 0}
    >
      <FlexColumn
        gap={10}
        maxWidth={isMobile ? sizes.aboutBody - 100 : sizes.aboutBody}
      >
        <Typography variant={"h3"}>About Change My Story</Typography>

        <Typography>placeholder content</Typography>
      </FlexColumn>
    </FlexColumn>
  );
};
