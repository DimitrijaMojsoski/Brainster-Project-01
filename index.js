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

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cardItems = document.querySelectorAll(".item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");

      cardItems.forEach((item) => {
        const category = item.getAttribute("data-category");

        if (filterValue === "all" || filterValue === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      // Add an "active" class to the clicked button for styling
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });
});

$(document).ready(function () {
  $("#menuButton").click(function () {
    $(".navbar-brand .logo").toggleClass("hidden");
    $(".navbar-brand .logo-font").toggleClass("hidden");
  });
});

let itemCount = 3; // Number of items to show initially
const items = document.querySelectorAll(".item");
const mobileButton = document.getElementById("showMoreButton");

// Function to handle pagination
function handlePagination() {
  // Check if it's a mobile device
  if (window.innerWidth <= 575) {
    for (let i = 0; i < items.length; i++) {
      if (i < itemCount) {
        items[i].style.display = "block";
      } else {
        items[i].style.display = "none";
      }
    }

    // Show the "Show More" button if there are more items to display
    if (itemCount < items.length) {
      mobileButton.style.display = "block";
    } else {
      mobileButton.style.display = "none";
    }
  } else {
    // Display all items on larger screens
    items.forEach((item) => {
      item.style.display = "block";
    });

    // Hide the "Show More" button
    mobileButton.style.display = "none";
  }
}

// Event listener to handle window resizing
window.addEventListener("resize", handlePagination);

// Event listener for "Show More" button on mobile
mobileButton.addEventListener("click", function () {
  itemCount += 3;

  // Display the next 3 items
  for (let i = 0; i < itemCount; i++) {
    if (items[i]) {
      items[i].style.display = "block";
    }
  }

  // Check if all items are now visible and hide the button
  if (itemCount >= items.length) {
    mobileButton.style.display = "none";
  }
});

// Initial pagination setup
handlePagination();


