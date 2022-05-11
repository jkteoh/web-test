import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";

const Personal = () => {
  const navigate = useNavigate()

  const processClick = () => {
    navigate("/dob")
  }

  const foo = (e:ChangeEvent) => {
    console.log(e)
  }

  return (
    <div>
      <Box>
        <Typography variant="h6" textAlign="center" marginY={2}>MoneyLion</Typography>
        <LinearProgress variant="determinate" value={50} />
      </Box>
      <Layout>
        <Typography variant="h2"  textAlign={'center'} gutterBottom>Create Your Account</Typography>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            '& .MuiTextField-root': { m: 1 },
          }}
        >
          <TextField 
            required 
            label="First Name" 
          />
          <TextField 
            required 
            label="Last Name" 
          />
          <TextField 
            required 
            label="Email" 
            type="email"
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

export default Personal