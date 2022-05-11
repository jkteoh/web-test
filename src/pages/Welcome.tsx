import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

const Welcome = () => 
  <div>
    <Box>
      <Typography variant="h6" textAlign="center" marginY={2}>MoneyLion</Typography>
      <LinearProgress variant="determinate" value={25} />
    </Box>
    <Layout>
      <Typography variant='h2' textAlign={'center'} gutterBottom>Welcome To MoneyLion</Typography>
      <Typography variant='body1' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis aliquet scelerisque. Nam maximus sodales egestas. Morbi consectetur mauris vel mauris maximus rhoncus. Aliquam at dui quam. In non neque lectus. Integer a imperdiet tellus. Donec rhoncus urna at tempus eleifend. Sed ligula ex, condimentum at mollis et, scelerisque consectetur urna. Sed at lectus quis erat sagittis rhoncus non at mi. Sed consectetur eu risus viverra fringilla. Sed aliquam placerat faucibus. Maecenas varius aliquet arcu at mollis. Aliquam nec tincidunt elit. Nulla venenatis ipsum sit amet neque finibus egestas et malesuada leo. Mauris ac dictum orci.</Typography>
      <Box
        display='flex'
        justifyContent='center'
      >
        <Link style={{'textDecoration': 'none'}} to="/personal">
          <Button variant='contained'>Apply Now</Button>
        </Link>
      </Box>
    </Layout>
  </div>

export default Welcome