// iifi
(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  if (global.XMLHttpRequest) {
    // Use XMLHttpRequest (XHR) objects to interact with servers
    // You can retrieve data from a URL without having to do a full page refresh. 
    // This enables a Web page to update just part of a page without disrupting 
    // what the user is doing.
    return (new XMLHttpRequest());
  } 
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
// defining .sendGetRequest as function below
  function(requestUrl, responseHandler) {
    var request = getRequestObject();


    // This function(onreadystatechange) will be used to catch the data that is returned by the server. 
    // The XMLHttpRequest object has a special property called onreadystatechange. 
    // onreadystatechange "stores the function" that will process the response from 
    // the server.
    request.onreadystatechange = 
      function() { 
        handleResponse(request, responseHandler); 
        };
        // Make the open command, with a get request. 
        // e.g.) XMLHttpRequest.open(method, url, async)
        // And if you pass false here below, it will make this request a synchronous request, 
        // which means the browser will freeze, and will wait for the response before doing anything else.
        request.open("GET", requestUrl, true);
        // XMLHttpRequest.send(body)
        // if you wanted to have named value pairs for the request parameters, you would put that string right here(body part)
        // To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:
        request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler) {
  if ((request.readyState == 4) && // The readyState property holds the status of the XMLHttpRequest.
    //  4: request finished and response is ready
     (request.status == 200)) { // The status property and the statusText property holds the status of the XMLHttpRequest object.
    // 200: "OK"
    responseHandler(request);
  }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);

