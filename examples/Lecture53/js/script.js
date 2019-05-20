// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);


function sayHello() {

  // store the value of the ID to the variable named, name.
  var name = document.getElementById("name").value;

  // create a new message variable and assign the value.
  var message = "<h2>Hello " + name + "!</h2>";

  // // get the empty "content" ID and by using ".textContent" and assign "message"
  // document.getElementById("content").textContent = message;


  // get the empty "content" ID and by using ".innerHTML" and assign "message"
  // ".innerHTML" will help "message" interpreted as HTML
  document.getElementById("content").innerHTML = message;

  if (name === "student") {
    var title = document.querySelector("#title").textContent;
    title += " & Lovin's it!"

    // JavaScript primitive types(e.g. string) are copied by value.
    // Therefore, we need to explicitly say it as written below.
    // If there are more than one <h1>, "querySelector" will choose the first element.
    document.querySelector("h1").textContent = title;
  }
}



// function sayHello () {
//   var name =
//    document.getElementById("name").value;
//    var message = "<h2>Hello " + name + "!</h2>";

//   // document
//   //   .getElementById("content")
//   //   .textContent = message;

//   document
//     .getElementById("content")
//     .innerHTML = message;

//   if (name === "student") {
//     var title = 
//       document
//         .querySelector("#title")
//         .textContent;
//     title += " & Lovin' it!";
//     document
//         .querySelector("h1")
//         .textContent = title;
//   }
// }