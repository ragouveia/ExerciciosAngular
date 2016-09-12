module.exports = function(config){

 config.set({
   basePath: '../',
   files: [
	"js/libs/angular.min.js",
	"js/libs/angular-mocks.js",
	"js/libs/angular-route.min.js",
	"js/libs/*.js",
	"test/**/*Spec.js"
   ],

   exclude: [],

   autoWatch: true,
   frameworks: ["jasmine"],

   browsers: ["Firefox"] ,
   plugins: [
	"karma-junit-reporter",
	"karma-chrome-launcher",
	"karma-firefox-launcher",
	"karma-jasmine"]
 });	


};
