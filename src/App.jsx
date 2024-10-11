import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleToggleSidebar = (newOpen) => () => {
    setOpenSidebar(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar onToggleSidebar={handleToggleSidebar} />
      <Container maxWidth="sm">
        <Typography variant="h2">Hello!</Typography>
      </Container>
      <Sidebar open={openSidebar} onToggleSidebar={handleToggleSidebar} />
    </Box>
  );
}
