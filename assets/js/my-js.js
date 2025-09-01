
// <======================== sweet alert for add to card ‍ start ========================>  

      function showDetails() {
      Swal.fire({
        title: "House Availability",
        html: `
          <div class="add-card-status-line">
            <button class="add-card-btn">
              <i class="fas fa-wifi add-card-online"></i> 
              <span class="add-card-online">Online</span>
            </button>
            <button class="add-card-btn">
              <i class="fas fa-user-slash add-card-offline"></i> 
              <span class="add-card-offline">Offline</span>
            </button>
          </div>
        `,
        confirmButtonText: "Close",
        background: "rgba(0,0,0,0.55)", 
        color: "#fff",
        customClass: {
          popup: "add-card-custom-popup",
          title: "add-card-custom-title",
          htmlContainer: "add-card-custom-text",
        },
      });
    }

    // <======================== sweet alert for add to card end ========================>  

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


// <====================== user login  start =====================> 

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
// <====================== user login  end =====================> 


// <====================== profile slider function start =====================> 
const profileToggle = document.getElementById("profileToggle");
const profileToggleDesktop = document.getElementById("profileToggleDesktop");
const profilePanel = document.getElementById("profilePanel");
const profileClose = document.getElementById("profileClose");
const overlay = document.getElementById("overlay");

function openProfilePanel() {
  profilePanel.classList.add("show");
  overlay.classList.add("show");
}
function closeProfilePanel() {
  profilePanel.classList.remove("show");
  overlay.classList.remove("show");
}

profileToggle.addEventListener("click", openProfilePanel);
profileToggleDesktop.addEventListener("click", openProfilePanel);
profileClose.addEventListener("click", closeProfilePanel);
overlay.addEventListener("click", closeProfilePanel);
// <====================== profile slider  function end =====================> 


               // <=========== page Loader ===============>

  // window.addEventListener("load", () => {
  //   const loader = document.getElementById("pageLoader");
  //   setTimeout(() => {
  //     loader.classList.add("hidden");
  //   }, 500); // 0.5s delay before hide
  // });
