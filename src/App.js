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

const pages = ["About Us", "Walks", "Track Your Walks", "Events", "Blog"];

export const AppHeader = () => {
  const [showData, setShowData] = useState(null);

  const openInstagramLink = () => {
    window.open("https://www.instagram.com/mamawalks_/", "_blank");
  };

  const sendEmail = () => {
    const email = "mama_walks@outlook.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#F5AA7B" }}>
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
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
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
                      setShowData(true);
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
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
      {showData && <div>AKAOHFHDFHSJDPJFSPODFKO</div>}
    </>
  );
};
