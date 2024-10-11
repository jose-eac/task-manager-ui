import { useState } from "react"; // Import useState for state management
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [hideSidebar, setHideSidebar] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn((prev) => !prev); // Toggle login state
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
        <Button color="inherit" onClick={handleLoginClick}>
          {isLoggedIn ? "Logout" : "Login"} {/* Change label based on state */}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
