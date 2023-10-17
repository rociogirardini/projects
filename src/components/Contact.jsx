import { useState } from "react";
import { Container, Popover, Typography } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  const [stateClipboard, setStateClipboard] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Container
      className="section-wrapper"
      sx={{
        height: "90vh",
        marginBottom: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
      id="contact"
    >
      <div className="contact-background"></div>
      <p className="text-center heading">Stay in contact!</p>
      <div className="grid grid-cols-4 gap-4">
        <a
          href="https://www.linkedin.com/in/rocio-girardini/"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://wa.link/h4190g" rel="noreferrer" target="_blank">
          <WhatsAppIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/rociogirardini/"
          rel="noreferrer"
          target="_blank"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <CopyToClipboard
          text="rogirardini@gmail.com"
          onCopy={() => setStateClipboard(true)}
        >
          <EmailIcon
            fontSize="large"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            sx={{ cursor: 'pointer' }}
          />
        </CopyToClipboard>
        <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>{stateClipboard ? 'Copied!' : 'Copy to clipboard'}</Typography>
          </Popover>
      </div>
    </Container>
  );
}

export default Contact;
