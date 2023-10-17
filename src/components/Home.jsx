import { Container } from "@mui/material";
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown';

function Home() {
  return (
    <div className="home-wrapper" id="home">
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        color: "white",
      }}
    >
      <p className="text-center heading">ROCÍO GIRARDINI</p>
      <p className="text-center subheading pb-5">Full Stack Developer</p>
      <div className="py-5 arrow-wrapper" >
        <a href="#experience">
          <UseAnimations animation={arrowDown} size={56} strokeColor="white"/>
        </a>
      </div>
    </Container>
    </div>
  );
}

export default Home;
