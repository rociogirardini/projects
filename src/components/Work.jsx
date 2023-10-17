import { Container } from "@mui/material";
import Slide from "./Slide";

function Work() {
  return (
    <Container
      className="section-wrapper"
      sx={{
        height: "100vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}
      id="work"
    >
      <p className="heading">Works</p>
      <Slide />
    </Container>
  );
}

export default Work;
