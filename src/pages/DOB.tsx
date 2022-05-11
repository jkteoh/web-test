import { Button, Heading, Input } from "@moneylion/mlds-web";
import { useNavigate } from "react-router-dom";
import { InputWrapper, Layout } from "../components/Layout";
import Progress from "../components/Progress";

const DOB = () => {
  const navigate = useNavigate()

  const processClick = () => {
    navigate("/agreement")
  }

  return (
    <div>
      <Progress step={2} />
      <Layout>
        <Heading className='text-center'>What's your date of birth?</Heading>
        <InputWrapper>
          <Input
            label="DOB"
            type="date"
            value=""
          ></Input>
          <div className="text-center"><Button onClick={processClick}>Next</Button></div>
        </InputWrapper>
      </Layout>
    </div>
  )
}

export default DOB