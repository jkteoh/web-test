import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";

const DOB = () => {
  const navigate = useNavigate()

  const processClick = () => {
    navigate("/agreement")
  }

  return (
    <div>
      <Box>
        <Typography variant="h6" textAlign="center" marginY={2}>MoneyLion</Typography>
        <LinearProgress variant="determinate" value={75} />
      </Box>
      <Layout>
        <Typography variant="h2" textAlign={'center'} gutterBottom>What's your date of birth?</Typography>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            '& .MuiTextField-root': { m: 1 },
          }}
        >
          <TextField 
            required 
            label="DOB"
            type="date" 
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
        >
          <Button variant="contained" onClick={processClick}>Next</Button>
        </Box>
      </Layout>
    </div>
  )
}

export default DOB