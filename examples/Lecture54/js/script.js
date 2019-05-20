// Event handling

// The DOMContentLoaded event is fired when the document has been completely loaded 
// and parsed, without waiting for stylesheets, images, and subframes to finish loading
  // document.addEventListener("DOMContentLoaded", function(event) {

  // });
  document.addEventListener("DOMContentLoaded", function(event) { // "DOMContentLoaded" -> event name
    function sayHello (event) {
      // cosole.log(this) // -> <button> ~ </button>
      // By doing "this.textContent" as written below, I can change the button title
      this.textContent = "Said it!";
      var name =
      document.getElementById("name").value;
      var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "student") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title += " & Lovin' it!";
        document
            .querySelector("h1")
            .textContent = title;
      }
    }
  }) 
    // Unobtrusive event binding
    document.querySelector("button")
     .addEventListener("click", sayHello);
     // I want you to listen for the click event
     // When that happens, I want you to use this function(sayHello)
      

  // }
// );



// document.querySelector("button").onclick = sayHello;




