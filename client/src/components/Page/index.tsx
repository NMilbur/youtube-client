import { Container, Toolbar } from "@mui/material";
import FlexBox from "components/FlexBox";
import TopNav from "components/TopNav";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => (
  <Container style={{ maxWidth: "90%" }}>
    <TopNav />
    <Toolbar />
    <FlexBox p={3}>{children}</FlexBox>
  </Container>
);

export default Page;
