
// sweet alert for add to card   
    

function showDetails() {
        Swal.fire({
          title: "House Availability",
          html: `
      <div class="custom-text status-line gap-3">
        <button class="status-line btn-custom btn w-50">
          <i class="fas fa-wifi online"></i> 
          <span class="online">Online</span>
        </button>
        <button class="status-line btn-custom btn w-50">
          <i class="fas fa-user-slash offline"></i> 
          <span class="offline">Offline</span>
        </button>
      </div>
    `,
          confirmButtonText: "Close",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            htmlContainer: "custom-text",
          },
        });
      }




// details image animation  
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
}

// Esc press for cut model
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});


// <====================== user login =====================> 
const loginModalEl = document.getElementById('loginModal');
loginModalEl.addEventListener('show.bs.modal', function () {
  const modalContent = loginModalEl.querySelector('.auth-modal');
  modalContent.style.transform = 'scale(0.8)';
  modalContent.style.opacity = '0';
  setTimeout(() => {
    modalContent.style.transform = 'scale(1)';
    modalContent.style.opacity = '1';
  }, 10);
});

               // <=========== page Loader ===============>

  // window.addEventListener("load", () => {
  //   const loader = document.getElementById("pageLoader");
  //   setTimeout(() => {
  //     loader.classList.add("hidden");
  //   }, 500); // 0.5s delay before hide
  // });
