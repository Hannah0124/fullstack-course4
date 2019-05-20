// ** important **
// => When clicking on the ouside of the navBar(blur), the navlist is hidden.

$(function () { // Same as document.addEventListener("DOMContentLoaded"...)

  // Same as document.querySelector("#navbarToggle").addEventListener("blur", )...
  // => When "blur happens," the following function executes.
  $(".navbar-toggle").blur(function(event) {
    var screenWidth = window.innerWidth;
    // The window.innerWidth property is read only;
    if (screenWidth < 768) {
      $('#collapsable-nav').collapse('hide');
      // => When we select "#collapsable-nav", it collapses.
    }
  });
});

(function(global) {
  var dc = {};
  var homeHtml = "snippets/home-snippet.html";

  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  var showLoading = function(selector) {
    var html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  }

document.addEventListener("DOMContentLoaded", function (event) {
 
  // On first load, show home view
    showLoading("#main-content");
    
    $ajaxUtils.sendGetRequest(homeHtml, function(responseText) {
      document.querySelector("#main-content").innerHTML = responseText;
    },false);
});

  global.$dc = dc;
})(window);