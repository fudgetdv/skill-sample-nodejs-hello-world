var HelloWorld = require("../index.js");
var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');

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
//var context = {};
//var callback = function(error, result) {console.log(result); };

describe('HelloWorld', function() {
	context('Run the hello world program', function() {
		it('returns hello world', function() {
			var context = {};
			var callback = function(error, result) {
				var actual = _.get(result, 'response.outputSpeech.ssml');
				//console.log(actual); 
				expect(actual).to.eq('<speak> Hello World! </speak>');
			};
			
			HelloWorld.handler(event, context, callback);			
        });
	});
	
});
