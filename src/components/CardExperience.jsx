import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Box,
  Modal,
} from "@mui/material";
import { useState, Fragment } from "react";
import frontExp1 from "../assets/images/CorpCapExperience.png";
import frontExp2 from "../assets/images/WhalemateExperience.png";
import PMExp from "../assets/images/PM_experience.png";
import Carousel from "react-material-ui-carousel";

const CardExperience = ({ name, desc, btn, icon, color, idx }) => {
  const h3 = "<h3>";
  const h3_end = "</h3>";
  const [open, setOpen] = useState(false);
  const handleOpen = (idx) => {
    setOpen(idx);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 790,
    bgcolor: "background.paper",
    border: "2px solid white",
    borderRadius: "5px",
    boxShadow: 24,
  };
  // let experience = [
  //   {
  //     position: "Front End Developer",
  //     company: "Corporación Cápsula",
  //     company_type: "Fintech",
  //     date: "From OCT 2022 to NOV 2023",
  //     project: "Criptocurrency wallet",
  //     tasks: [
  //       {
  //         1: "Refactoring and maintaining code in web applications.",
  //         2: "Evaluate and collaborate with UX UI design team for technical feasibility.",
  //         3: "Consumption of own and third party APIs.",
  //         4: "Development of quality testable code.",
  //         5: "Working in an agile environment with scrum methodology.",
  //       },
  //     ],
  //   },
  //   {
  //     position: "Front End Developer",
  //     company: "Whalemate",
  //     company_type: "Cybersecurity",
  //     date: "From NOV 2023 to currently",
  //     project: "Cybersecurity learning platform",
  //     tasks: [
  //       {
  //         1: "Application of SOLID principles in code restructuring for optimized code and subsequent maintenance.",
  //         2: "Effective styling with UX UI design in focus.",
  //         3: "API consumption.",
  //         4: "Working in an agile environment with scrum methodology.",
  //       },
  //     ],
  //   },
  // ];

  const frontEndImg = [frontExp2, frontExp1];

  return (
    <Fragment>
      <Box sx={{ width: 345, mr: 2, mb: 2, borderRadius: 5 }}>
        <Card variant="outlined">
          <CardContent
            sx={{
              height: 360,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" sx={{ fontSize: 18 }} component="div">
              <span className="font-extrabold">
                <span className={`text-${color}-500`}>{h3}</span> {name}{" "}
                <span className={`text-${color}-500`}>{h3_end}</span>
              </span>
            </Typography>
            <Typography>{desc}</Typography>
            <CardActions sx={{ alignSelf: "center" }}>
              <button
                onClick={() => handleOpen(idx)}
                className={`bg-${color}-600 hover:bg-${color}-800 p-2 mr-2 rounded-md`}
              >
                {btn} {icon}
              </button>
              <span />
            </CardActions>
            <Modal
              open={open === idx}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {idx === 0 ? (
                  <Carousel autoPlay={false}>
                    {frontEndImg.map((img) => (
                      <img
                        style={{ borderRadius: "5px" }}
                        src={img}
                        alt="experience"
                      />
                    ))}
                  </Carousel>
                ) : (
                  <img
                    style={{ borderRadius: "5px" }}
                    src={PMExp}
                    alt="experience"
                  />
                )}
              </Box>
            </Modal>
          </CardContent>
        </Card>
      </Box>
    </Fragment>
  );
};

export default CardExperience;
