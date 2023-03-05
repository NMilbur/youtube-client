import { Box, Container, Toolbar } from "@mui/material";
import TopNav from "components/TopNav";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => (
  <Container style={{ maxWidth: "90%" }}>
    <TopNav />
    <Toolbar />
    <Box p={3} display="flex">
      {children}
    </Box>
  </Container>
);

export default Page;
