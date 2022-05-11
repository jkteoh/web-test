import { Button, Display, Paragraph } from '@moneylion/mlds-web'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import Progress from '../components/Progress'

const Welcome = () => 
  <div>
    <Progress step={0} />
    <Layout>
      <Display className='text-center'>Welcome To MoneyLion</Display>
      <Paragraph style={{padding: '16px 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis aliquet scelerisque. Nam maximus sodales egestas. Morbi consectetur mauris vel mauris maximus rhoncus. Aliquam at dui quam. In non neque lectus. Integer a imperdiet tellus. Donec rhoncus urna at tempus eleifend. Sed ligula ex, condimentum at mollis et, scelerisque consectetur urna. Sed at lectus quis erat sagittis rhoncus non at mi. Sed consectetur eu risus viverra fringilla. Sed aliquam placerat faucibus. Maecenas varius aliquet arcu at mollis. Aliquam nec tincidunt elit. Nulla venenatis ipsum sit amet neque finibus egestas et malesuada leo. Mauris ac dictum orci.</Paragraph>
      <div className="text-center">
        <Link style={{'textDecoration': 'none'}} to="/personal">
          <Button>Apply Now</Button>
        </Link>
      </div>
    </Layout>
  </div>

export default Welcome