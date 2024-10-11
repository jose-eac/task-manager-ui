import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Container maxWidth="sm">
        <Typography variant="h2">Hello!</Typography>
      </Container>
    </Box>
  );
}
