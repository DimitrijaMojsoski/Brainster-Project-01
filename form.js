// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menuButton");
  var menuIcon = document.querySelector(".menu-icon");
  var closeIcon = document.querySelector(".close-icon");

  menuButton.addEventListener("click", function () {
    menuIcon.classList.toggle("d-none");
    closeIcon.classList.toggle("d-none");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menuButton");
  var mainNavbar = document.getElementById("mainNavbar");

  menuButton.addEventListener("click", function () {
    mainNavbar.classList.toggle("navbar-red");
  });
});

$(document).ready(function () {
  $("#menuButton").click(function () {
    $(".navbar-brand .logo").toggleClass("hidden");
    $(".navbar-brand .logo-font").toggleClass("hidden");
  });
});
