import { Grid, Typography } from "@mui/material";
import MediaBox from "../../components/MediaBox";
import Page from "components/Page";
import FlexBox from "components/FlexBox";

const Home = () => {
  return (
    <Page>
      <Grid container columnGap={2}>
        <Grid item xs={9}>
          <FlexBox flexDirection="column" rowGap={2}>
            <MediaBox />
            <FlexBox flexDirection="column">
              <Typography variant="h4">Recommended</Typography>

              <FlexBox columnGap={2} justifyContent="space-between">
                {[1, 2, 3, 4, 5].map((el) => (
                  <MediaBox key={el} />
                ))}
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </Grid>
        <Grid item xs={2}>
          <FlexBox flexDirection="column" rowGap={2} justifyContent="space-between">
            {[1, 2, 3, 4, 5].map((el) => (
              <MediaBox key={el} />
            ))}
          </FlexBox>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Home;
