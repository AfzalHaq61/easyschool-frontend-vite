// myFunctions.js

// Function to handle the click event
export function myClickHandler() {
  // Adding and removing classes for elements with class "right-side-contact" and "video-right-sidebar"
  var rightSideContacts = document.getElementsByClassName("right-side-contact");
  var videoRightSidebars = document.getElementsByClassName(
    "video-right-sidebar"
  );

  for (var j = 0; j < rightSideContacts.length; j++) {
    rightSideContacts[j].classList.add("hide-right-sidebar");
    rightSideContacts[j].classList.remove("show-right-sidebar");
  }

  for (var k = 0; k < videoRightSidebars.length; k++) {
    videoRightSidebars[k].classList.add("hide-right-sidebar");
    videoRightSidebars[k].classList.remove("show-right-sidebar");
  }

  // Check window width and apply CSS accordingly
  if (window.innerWidth > 991 && window.innerWidth < 1201) {
    var chatElements = document.getElementsByClassName("chat");
    for (var l = 0; l < chatElements.length; l++) {
      chatElements[l].style.marginLeft = "0";
    }
  }
  
  if (window.innerWidth < 992) {
    /* eslint-disable vue/no-reserved-component-names */
    chatElements = document.getElementsByClassName("chat"); // Reusing the variable
    for (var m = 0; m < chatElements.length; m++) {
      chatElements[m].classList.remove("hide-chatbar");
    }
  }
  
  
  
}
