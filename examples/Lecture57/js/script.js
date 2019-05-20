// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding (to the button below)
    document.querySelector("button")
    // once the button is clicked, we one this next function to be executed
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.txt", 
            function (request) {
              // responseText: get the response data as a string
              var name = request.responseText;
              console.log(self.name);
            
              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
          }); 
      });
  }
);





