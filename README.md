# skill-sample-nodejs-hello-world

# Local Test for Alexa Skills Kit SDK for Node.js

Locally test the integration between an Alexa Skill Interface and Skill Service.  Testing between the interface and skill service in an AWS Lambda function is relatively simply, locally testing the integration is more efficient.  The individual does not have to bring up and down their code from AWS console to make simple changes.

The test utilizes npm packages to quickly build the integration test locally.

### Installing and Working with the HelloWorldIntent test

````bash
npm install  --save alexa-sdk lodash mocha chai
````
