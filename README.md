# skill-sample-nodejs-hello-world

# Local Test for Alexa Skills Kit SDK for Node.js

Locally test the Alexa Skill Service Component.  Testing the AWS Lambda function is relatively simply from AWS console, locally testing the integration is more efficient.  The individual does not have to bring up and down their code from AWS console to make changes from alexa-sdk.

The test utilizes npm packages to quickly build the integration test locally.

### Installing and Working with the HelloWorldIntent Test

````bash
npm install  --save alexa-sdk lodash mocha chai
````

Follow steps to create a [local test using mocha] (https://www.bignerdranch.com/blog/developing-alexa-skills-locally-with-nodejs-setting-up-your-local-environment/).  Then create hello world program with a HelloWorldIntent.


