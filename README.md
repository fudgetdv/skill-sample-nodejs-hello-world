# skill-sample-nodejs-hello-world

# Local Test for Alexa Skills Kit SDK for Node.js

Locally test the Alexa Skill Service Component.  Testing the AWS Lambda function is relatively simply from AWS console, locally testing the integration is more efficient.  The individual does not have to bring up and down their code from AWS console to make changes from alexa-sdk.

The test utilizes npm packages to quickly build the integration test locally.

### Installing and Working with the HelloWorldIntent Test

````bash
npm install  --save alexa-sdk lodash mocha chai
````

Follow steps to create a [local test using mocha](https://www.bignerdranch.com/blog/developing-alexa-skills-locally-with-nodejs-setting-up-your-local-environment/).  Then create hello world program with a HelloWorldIntent.

Create a javascript test file in the test directory and then import the index.js in the prior directory

````baselinetest
var HelloWorld = require("../index.js");

describe('HelloWorld', function() {
  context('run the hello world program', function(){
    it('returns hello world', function() {
    
    });
  });
});
````

Call the alexa-sdk handler within the test case

````handler
it('returns hello world', function() {
  HelloWorld.handler(event, context, callback);    
});
````

The event and context needs to contain stub data.  For the event, grab the JSON in the Alexa interface and paste the object in the file.

````eventStub
var event = 
{ 
	"request" : { 	"locale" : "en-us" ,
					"type" : "IntentRequest",
					"requestId" : "1",
					"intent": {
					  "name": "HelloWorldIntent",
					  "slots": {}
					}
					
				},
	"session" : {   
					"sessionId" : "1",
					"application" : { "applicationId" : "1" },
					"user" : { "userId" : "1" }
				}
};
````

For the context create a empty object stub in the context of the test suite.  Placing it outside will cause problems.

````contextStub
it('returns hello world', function() {
			var context = {};
});
````

Utilize the [callback](http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html#nodejs-prog-model-handler-callback) in the handler to retrieve the JSON from the handler.

````callback
it('returns hello world', function() {
			var context = {};
      var callback = function(error, result) {
				var actual = _.get(result, 'response.outputSpeech.ssml'); 
			};
});
````

Utilize the chai assertion library to compare the actual and expected

```assertion
var callback = function(error, result) {
				var actual = _.get(result, 'response.outputSpeech.ssml'); 
        expect(actual).to.eq('<speak> Hello World! </speak>');
			};
````

The local test for alexa-sdk has now been setup!  All that is left is to run the test program

```run
npm test
```
