document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/mleyypyg", true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        // Success; you can redirect or do something else
        window.location.href = "thank-you.html";
      } else {
        // Error; handle accordingly
        console.error("Form submission failed!");
      }
    };
    xhr.send(data);
  });
});
