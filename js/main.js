window.onload = function () {
  //java script for make button active by clicking it in sideMenu
  var header = document.getElementById("myDIV");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  //java script for closing menu when click out side it

  const mobileMenuToggler = () => {
    if (window.screen.width >= 992) {
      const sideMenu = document.getElementById("side-menu1");
      const submenuTrigger = document.getElementById("submenu-trigger");
      document.onclick = function (e) {
        if (e.target.id !== "side-menu") {
          sideMenu.classList.remove("show");
        }
      };
    }
  };
  mobileMenuToggler();
  /*window.addEventListener("resize", desktopMenuToggler);
  const mobileMenuToggler = () => {
    if (window.screen.width < 992) {
      $("li.navitem").click(function (e) {
        if (this === e.target)
          $(this).find(".subsubmenu").toggleClass("visible");
      });
      $(document).ready(function () {
        // Toggle sidebar on button click
        $("#sidebarToggle").click(function () {
          $("#side-menu1").toggleClass("show");
          $("#overlay").toggle();
        });

        // Close sidebar when clicking on overlay
        $("#overlay").click(function () {
          $("#side-menu1").removeClass("show");
          $(this).hide();
        });
      });
    }
  };
  mobileMenuToggler();
  window.addEventListener("resize", mobileMenuToggler);*/

  function getVals() {
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
      let tmp = slide2;
      slide2 = slide1;
      slide1 = tmp;
    }

    let displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }

  window.onload = function () {
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
    for (let x = 0; x < sliderSections.length; x++) {
      let sliders = sliderSections[x].getElementsByTagName("input");
      for (let y = 0; y < sliders.length; y++) {
        if (sliders[y].type === "range") {
          sliders[y].oninput = getVals;
          // Manually trigger event first time to display values
          sliders[y].oninput();
        }
      }
    }
  };
};
//java script for category slider
// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 100000
// })

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

//javascript for make overlay entire screen when I click side menu
$("li.navitem").click(function (e) {
  if (this === e.target) $(this).find(".subsubmenu").toggleClass("visible");
});
$(document).ready(function () {
  // Toggle sidebar on button click
  $("#sidebarToggle").click(function () {
    $("#side-menu1").toggleClass("show");
    $("#overlay-sidemenu").toggle();
  });

  // Close sidebar when clicking on overlay
  $("#overlay-sidemenu").click(function () {
    $("#side-menu1").removeClass("show");
    $(this).hide();
  });
});
//showing popup
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
//showing popup
function showLoader() {
  document.getElementById("loader").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function showPopup() {
  showLoader();
  setTimeout(function () {
    hideLoader();
    document.getElementById("popup").style.display = "block";
  }, 2000); // Simulating a delay of 2 seconds
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
// jQuery code to switch to address book when the button is clicked
$(document).ready(function () {
  $("#target-address-book").click(function () {
    $("#v-pills-address-book-tab").tab("show");
  });
});
$(document).ready(function () {
  $("#target-account-information").click(function () {
    $("#v-pills-account-information-tab").tab("show");
  });
});
$(document).ready(function () {
  $("#target-account-information1").click(function () {
    $("#v-pills-account-information-tab").tab("show");
  });
});
$(document).ready(function () {
  $("#target-account-information2").click(function () {
    $("#v-pills-account-information-tab").tab("show");
  });
});
// the selector will match all input controls of type :checkbox
// and attach a click event handler
$("input:checkbox").on("click", function () {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});
//wishlist information options
function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("checkbox-change-phone");
  // Get the output text
  var text = document.getElementById("change-phone-num");
  var checkBox1 = document.getElementById("checkbox-change-email");
  var text1 = document.getElementById("change-email1");
  var checkBox2 = document.getElementById("checkbox-change-password");
  var text2 = document.getElementById("change-password");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    text1.style.display = "none";
    text2.style.display = "none";
  } else if (checkBox1.checked == true) {
    text.style.display = "none";
    text1.style.display = "block";
    text2.style.display = "none";
  } else if (checkBox2.checked == true) {
    text.style.display = "none";
    text1.style.display = "none";
    text2.style.display = "block";
  }
}
//function for increasing and decreasing product quantity
function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
}
var buttonPlus = $(".qty-btn-plus");
var buttonMinus = $(".qty-btn-minus");

var incrementPlus = buttonPlus.click(function () {
  var $n = $(this).parent(".qty-container").find(".input-qty");
  $n.val(Number($n.val()) + 1);
});

var incrementMinus = buttonMinus.click(function () {
  var $n = $(this).parent(".qty-container").find(".input-qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount - 1);
  }
});
