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

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log({[e.target.name]: e.target.value})
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
            name="firstName"
            onChange={handleChange}
          />
          <TextField 
            required 
            label="Last Name" 
            name="lastName"
            onChange={handleChange}
          />
          <TextField 
            required 
            label="Email" 
            type="email"
            name="email"
            onChange={handleChange}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          <Button variant="contained" onClick={processClick}>Next</Button>
        </Box>
      </Layout>
    </div>
  )
}

export default Personal