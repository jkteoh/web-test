import { ProgressList } from "@moneylion/mlds-web";

type ProgressProp = {
  step: number
}

const Progress = (props: ProgressProp) => 
  <ProgressList 
    horizontal
    activeStep={props.step}
  >
    <ProgressList.Step>
      <ProgressList.Label>
        Welcome
      </ProgressList.Label>
    </ProgressList.Step>
    <ProgressList.Step>
      <ProgressList.Label>
        Personal
      </ProgressList.Label>
    </ProgressList.Step>
    <ProgressList.Step>
      <ProgressList.Label>
        DOB
      </ProgressList.Label>
    </ProgressList.Step>
    <ProgressList.Step>
      <ProgressList.Label>
        Agreement
      </ProgressList.Label>
    </ProgressList.Step>
  </ProgressList>

  export default Progress