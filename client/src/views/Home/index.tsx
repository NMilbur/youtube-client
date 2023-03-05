import MediaBox from "../../components/MediaBox";
import Page from "components/Page";

const Home = () => {
  return (
    <Page>
      {[1, 2, 3, 4].map((el) => (
        <MediaBox key={el} />
      ))}
    </Page>
  );
};

export default Home;
