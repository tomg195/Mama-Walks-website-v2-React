import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Accordion,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import { Email } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import AboutUsContent from "./AboutUs";

import "./App.css";

const pages = ["About Us", "Walks", "Track Your Walks", "Events", "Blog"];

export const AppHeader = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const openInstagramLink = () => {
    window.open("https://www.instagram.com/mamawalks_/", "_blank");
  };

  const sendEmail = () => {
    const email = "mama_walks@outlook.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#F8E0C5" }}>
        <Container>
          <Toolbar>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: " rgb(245, 170, 123)",
                  fontFamily: "kepler-std",
                  textDecoration: "none",
                }}
              >
                Mama Walks
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => {
                      setSelectedPage(page);
                    }}
                    sx={{
                      my: 2,
                      fontFamily: "kepler-std",
                      color: "#504043",
                      display: "block",
                      textTransform: "none",
                    }}
                  >
                    {page}
                  </Button>
                ))}
                <IconButton onClick={openInstagramLink}>
                  <Instagram />
                </IconButton>
                <IconButton onClick={sendEmail}>
                  <Email />
                </IconButton>
              </Box>
            </Toolbar>
          </Toolbar>
        </Container>
      </AppBar>
      {selectedPage === "About Us" && <AboutUsContent />}
    </>
  );
};
