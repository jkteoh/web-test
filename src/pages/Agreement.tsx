import { Button, Checkbox, Heading, SEMANTIC_COLOR } from "@moneylion/mlds-web";
import styled from "styled-components";
import { InputWrapper, Layout } from "../components/Layout";
import Progress from "../components/Progress";

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
  & a {
    display: block;
    color: ${SEMANTIC_COLOR.CONTENT_ACCENT};
    text-decoration: none;
    font-weight: 400;
  }
`

const InputBlock = styled.div`
  display: flex;
  justify-content: center;
`

const Agreement = () => {
  const processSubmit = () => {

  }

  return (
    <div>
      <Progress step={3} />
      <Layout>
        <Heading className='text-center'>One Last Step!</Heading>
        <InputBlock>
          <InputWrapper>
            <div>I agree to</div>
            <CheckboxWrapper>
              <Checkbox />
              <label><a href="https://cdn.moneylion.com/onboarding/Consent+to+ESIGN+and+Electronic+Communications.pdf">Electronic Transaction Consent</a></label>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <Checkbox />
              <label>and the following agreements
                <a href="https://www.moneylion.com/privacy-notification/">Privacy Notice</a>
                <a href="https://www.moneylion.com/terms-and-conditions/">Terms and Conditions</a>
                <a href="https://network.moneylion.com/membership-agreement">Membership Agreement</a>
              </label>
            </CheckboxWrapper>
          </InputWrapper>
        </InputBlock>
        <div className="text-center"><Button onClick={processSubmit}>Submit</Button></div>
      </Layout>
    </div>
  )
}

export default Agreement