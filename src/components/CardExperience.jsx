import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Box,
  Modal,
} from "@mui/material";
import { useState, Fragment } from "react";
import frontExp from '../assets/images/front-experience.png';
import PMExp from '../assets/images/PM_experience.png'

const CardExperience = ({ name, desc, btn, icon, color, idx }) => {
  const h3 = "<h3>"
  const h3_end = "</h3>";
  const experience_images = [frontExp, PMExp]
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
    borderRadius: '5px',
    boxShadow: 24,
  };

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
                <img style={{borderRadius:'5px'}} src={experience_images[idx]} alt='experience'/>
              </Box>
            </Modal>
          </CardContent>
        </Card>
      </Box>
    </Fragment>
  );
};

export default CardExperience;
