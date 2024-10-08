import { useState } from "react";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import { Container, Grid2 } from "@mui/material";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Grid2 container spacing={5} alignItems="center">
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Result data={data} />
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
}

export default App;
