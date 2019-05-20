$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...

  // When .blur happens, I want you to execute thie function(event)
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth; // window -> width of the brower itself(not the entire screen)
    if (screenWidth < 768) {

      // if the screen width is less than 768, we will select "collapsable-nav" ID with the collapase function (with 'hide' value)
      $("#collapsable-nav").collapse('hide');
      // if we click other place(blur) other than the menu, the blur event will fire and the menu will be collapsed( = disappeared)
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});
