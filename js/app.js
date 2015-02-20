// App module
//
// The app module will contain all of the components the app needs (directives,
// controllers, services, etc.). Since it will be using the components within
// the elasticsearch module, define it a dependency.
var SearchApp = angular.module('SearchApp', ['elasticsearch']);