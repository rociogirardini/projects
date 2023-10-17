import { useState } from "react";
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";

const pages = ["home", "experience", "work", "studies", "contact"];

function NavBar() {
  const [currentPage, setCurrentPage] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const generateHref = (page) => {
    return `#${page}`;
  };

  const generateMenuItem = (page) => {
    return `// ${page}`
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ background: "#1c1c1c", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeIcon
            sx={{ display: { xs: "none", md: "flex", color: "violet" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "cyan",
              textDecoration: "none",
            }}
          >
            ROCÍO GIRARDINI._
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component="a"
                  href={generateHref(page)}
                >
                  <Typography textAlign="center"> {generateMenuItem(page)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CodeIcon
            sx={{ display: { xs: "flex", md: "none", color: "violet" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "cyan",
              textDecoration: "none",
            }}
          >
            RG._
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page}
                component="a"
                href={generateHref(page)}
                onClick={() => {
                  handleCloseNavMenu();
                }}
                onMouseEnter={() => setCurrentPage(page)}
                onMouseLeave={() => setCurrentPage(null)}
                sx={{
                  p: 2,
                  color:
                    page === currentPage || currentPage === null
                      ? "white"
                      : "green",
                  display: "block",
                  cursor: "pointer",
                }}
              >
                {generateMenuItem(page)}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
