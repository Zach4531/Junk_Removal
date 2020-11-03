/*Remove no-js class*/
var toggle = document.getElementById("nav-toggle"); //Navigation Toggle

var mainForm = document.getElementById("main-form");

mainForm.addEventListener("submit", formSubmit);

function navToggle() {
  if (window.innerWidth > 968) {
    toggle.checked = false;
  }
}

function formValidation() {
  var pass = true;
  var formElements = document.querySelectorAll(
    "#main-form input, #main-form textarea"
  );

  formElements.forEach(function (item) {
    if (item.value == "") {
      item.closest(".form-input").classList.add("error");
    } else {
      item.closest(".form-input").classList.remove("error");
    }
  });

  var formErrors = document.querySelectorAll("#main-form > .error");

  if (formErrors.length != 0) {
    pass = false;
  }

  return pass;
}

function formSubmit(e) {
  e.preventDefault();

  var formName = document.getElementById("name").value;
  var formEmail = document.getElementById("email").value;
  var formPhone = document.getElementById("phone").value;
  var formReason = document.getElementById("reason").value;

  if (!formValidation()) {
    return false;
  }

  var params =
    "name=" +
    formName +
    "&email=" +
    formEmail +
    "&phone=" +
    formPhone +
    "&reason=" +
    formReason;

  var ajax = new XMLHttpRequest();

  ajax.open("POST", "assets/form.php", true);
  ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert("yeah!");
    }
  };

  ajax.send(params);
}
