(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  const alert = document.querySelector(".alert");
  if (alert) {
    setTimeout(() => {
      alert.classList.remove("show");
      alert.classList.add("fade");

      setTimeout(() => {
        alert.remove();
      }, 500);
    }, 1500);
  }
});
