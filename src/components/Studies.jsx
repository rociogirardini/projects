import {
  Box,
  Stepper,
  Step,
  StepButton,
  StepContent,
  Typography,
  Container,
} from "@mui/material";
import { useState } from "react";

const steps = [
  {
    label: "Data Science and Artificial Intelligence Technician",
    place: `Polytechnic Institute of Córdoba`,
    link: null,
    date: "2024/Ongoing",
  },
  {
    label: "Full Stack Developer CORE",
    place: `TecMilenio University`,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7115422155848228864/",
    date: "2023/23",
  },
  {
    label: "Node.js: From zero to expert",
    place: "Udemy",
    link: "https://www.udemy.com/certificate/UC-c2f9c03d-9d3e-4cd4-af96-54207004f5eb/",
    date: "2023/23",
  },
  {
    label: "React Js",
    place: `CoderHouse`,
    link: "https://www.coderhouse.es/certificados/627dadee86189600192bea38",
    date: "2022/22",
  },
  {
    label: "JavaScript",
    place: `CoderHouse`,
    link: "https://www.coderhouse.com/certificados/622e0fc2b4a59500264db3bd",
    date: "2021/22",
  },
  {
    label: "Web Development",
    place: `CoderHouse`,
    link: "https://www.coderhouse.com/certificados/61c2215cced938006bd86345",
    date: "2021/21",
  },
];

function Studies() {
  const [activeStep, setActiveStep] = useState(-1);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Container
    className="section-wrapper"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:'space-evenly',
      }}
      id="studies"
    >
      <p className="text-center heading">My Studies</p>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label} onMouseEnter={handleStep(index)} onMouseLeave={() => setActiveStep(-1)}>
              <StepButton color="inherit">
                {step.label}
              </StepButton>
              <StepContent>
                <Typography sx={{ fontWeight: 'bold' }}>{step.place}</Typography>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary'}}>{step.date}</Typography>
                {step.link ? (
                  // <button className="bg-green-900 hover:bg-green-800 p-1 mt-1 rounded-md">
                    <a href={step.link} target='_blank' rel="noreferrer" className="text-purple-500 font-bold hover:text-purple-300">{`See certificate`}</a>
                  // </button>
                ) : (
                  ""
                )}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Container>
  );
}

export default Studies;
