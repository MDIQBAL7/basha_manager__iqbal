document.addEventListener("DOMContentLoaded", function () {
  const includes = [
    { id: "header-include", file: "include/header.html" },
    { id: "navbar-include", file: "include/navbar.html" },
    { id: "top-footer-include", file: "include/top-footer.html" },
    { id: "footer-include", file: "include/footer.html" },
    { id: "login-modal-include", file: "include/login-modal.html" },
    { id: "registration-modal-include", file: "include/registration-modal.html" }
  ];

  includes.forEach(({ id, file }) => {
    const container = document.getElementById(id);
    if (container) {
      fetch(file)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
          return res.text();
        })
        .then(data => {
          container.innerHTML = data;
        })
        .catch(err => {
          console.error(`Error loading ${file} into #${id}:`, err);
        });
    }
  });
});
