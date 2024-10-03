import { useState } from "react";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import { Container, Grid2 } from "@mui/material";

function App() {
  
  const [a, setA] = useState(15);

  setA(30);


  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Grid2 container spacing={5}>
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <SliderSelect />
            <TenureSelect />
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Result />
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
}

export default App;
