import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Layout } from "../components/Layout";

const Agreement = () => {
  const processSubmit = () => {

  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log({[e.target.name]: e.target.checked})
  }

  return (
    <div>
      <Box>
        <Typography variant="h6" textAlign="center" marginY={2}>MoneyLion</Typography>
        <LinearProgress variant="determinate" value={100} />
      </Box>
      <Layout>
        <Typography variant="h2" textAlign={'center'} gutterBottom >One Last Step!</Typography>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            sx={{ m: 1 }}
          >
            <Typography variant="body1">I agree to</Typography>
            <FormGroup>
              <FormControlLabel 
                control={
                  <Checkbox 
                    name="agreement1" 
                    onChange={handleChange} 
                  />
                } 
                label={
                  <Link underline="none" href="https://cdn.moneylion.com/onboarding/Consent+to+ESIGN+and+Electronic+Communications.pdf">Electronic Transaction Consent</Link>
                } 
              />
              <FormControlLabel 
                control={
                  <Checkbox 
                    name="agreement2" 
                    onChange={handleChange} 
                  />
                } 
                label={
                  <Typography variant="body1" component="div">and the following agreements
                    <Stack spacing={1}>
                      <Link underline="none" href="https://www.moneylion.com/privacy-notification/">Privacy Notice</Link>
                      <Link underline="none" href="https://www.moneylion.com/terms-and-conditions/">Terms and Conditions</Link>
                      <Link underline="none" href="https://network.moneylion.com/membership-agreement">Membership Agreement</Link>
                    </Stack>
                  </Typography>
                } 
              />
            </FormGroup>
          </Box>
          <Button variant="contained" onClick={processSubmit}>Submit</Button>
        </Box>
      </Layout>
    </div>
  )
}

export default Agreement