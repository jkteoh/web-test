# Web On Site Test

This project is built with ReactJs v18 and React Router v6. It contains 4 pages, which is a sign up flow.
Reference: https://www.figma.com/file/awHuIluCer7SQnWUCBTxPy/onboarding-test?node-id=0%3A1

You're required to complete the following **tasks** within 30min.

1. Collect data from each pages and store it using state management.
2. To allow users to resume to last page they visited after drop off.
3. Send collected data on **Agreement Screen** to
```
https://5f79819fe402340016f93139.mockapi.io/api/user
Body:
{
  "firstName": ​"string"​,  
  "lastName": ​"string"​,  
  "email":​"string"​, 
  "dob": "string",
  "agreement1": ​"boolean"​,  
  "agreement2":​"boolean"
}
Method: POST

```

### Notes:
* node_modules is committed to the repository to speed up the test process, no initial installation required
* this project is built on top of Nodejs v16


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.