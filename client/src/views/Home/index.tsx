import { Box, Grid } from "@mui/material";
import MediaBox from "../../components/MediaBox";
import Page from "components/Page";

const Home = () => {
  return (
    <Page>
      <Grid container columnGap={2}>
        <Grid item xs={9}>
          <MediaBox />
        </Grid>
        <Grid item xs={2}>
          <Box display="flex" flexDirection="column" rowGap={2} justifyContent="space-between">
            {[1, 2, 3, 4, 5].map((el) => (
              <MediaBox key={el} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Home;
