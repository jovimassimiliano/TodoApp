var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");


//load foundation

$(document).foundation();

//app css
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <h1>Boilerplate v2.0</h1>,
  document.getElementById("app")
);
