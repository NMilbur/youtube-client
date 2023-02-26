import { Box } from "@mui/material";
import MediaBox from "../../components/MediaBox";

const Home = () => {
  return (
    <Box display="flex">
      {[1, 2, 3, 4].map((el) => (
        <MediaBox key={el} />
      ))}
    </Box>
  );
};

export default Home;
