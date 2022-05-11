import { Button, Heading, Input } from "@moneylion/mlds-web";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { InputWrapper, Layout } from "../components/Layout";
import Progress from "../components/Progress";

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
      <Progress step={1} />
      <Layout>
        <Heading className='text-center'>Create Your Account</Heading>
        <InputWrapper>
          <Input
            label="First Name"
            value=""
            onChange={foo}
          ></Input>
          <Input
            label="Last Name"
            value=""
            onChange={foo}
          ></Input>
          <Input
            label="Email"
            type="email"
            rules={[
              (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Email Not Valid'
            ]}
            value=""
            onChange={foo}
          ></Input>
          <div className="text-center"><Button onClick={processClick}>Next</Button></div>
        </InputWrapper>
      </Layout>
    </div>
  )
}

export default Personal