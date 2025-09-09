  // <======================== faq functionality start  ========================>
  function toggleFAQ(element) {
      const card = element.closest(".faq-card");

      // একসাথে একাধিক open করতে চাইলে নিচের দুই লাইনের কমেন্ট করে দিতে হবে
      document.querySelectorAll(".faq-card").forEach(faq => {
        if (faq !== card) faq.classList.remove("open");
      });

      card.classList.toggle("open");
    }

    function filterFAQs() {
      const searchValue = document.getElementById("faqSearch").value.toLowerCase();
      const faqs = document.querySelectorAll(".faq-card");

      faqs.forEach(faq => {
        const question = faq.querySelector(".faq-question span").innerText.toLowerCase();
        const answer = faq.querySelector(".faq-answer").innerText.toLowerCase();

        if (question.includes(searchValue) || answer.includes(searchValue)) {
          faq.style.display = "block";
        } else {
          faq.style.display = "none";
        }
      });
    }
// <======================== faq functionality end  ========================>


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


                // < = model  forgat pass word start  =>
const forgotModalEl = document.getElementById('forgotPasswordModal');
forgotModalEl.addEventListener('show.bs.modal', function () {
  const modalContent = forgotModalEl.querySelector('.auth-modal');
  modalContent.style.transform = 'scale(0.8)';
  modalContent.style.opacity = '0';
  setTimeout(() => {
    modalContent.style.transform = 'scale(1)';
    modalContent.style.opacity = '1';
  }, 10);
});

// Optional: Handle form submit
document.getElementById('forgotPasswordForm').addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('forgotEmail').value;
  alert(`Password reset link sent to ${email}`);
  const modal = bootstrap.Modal.getInstance(forgotModalEl);
  modal.hide();
});

                    // <== model for forgat pass word end =>


    // <======================== sweet alert for add to card end ========================>


// details image animation  

document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("to-let-d-img-modal");
  const modalImg = document.getElementById("to-let-d-img-modal-image");
  const caption = document.getElementById("to-let-d-img-caption");
  const closeBtn = document.getElementById("to-let-d-img-close-btn");

  document.querySelectorAll(".to-let-d-img-gallery-img").forEach(img => {
    img.addEventListener("click", function() {
      modal.style.display = "flex";
      modalImg.src = this.src;
      caption.innerHTML = this.alt;
    });
  });

  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  document.addEventListener("keydown", function(event) {
    if(event.key === "Escape") {
      modal.style.display = "none";
    }
  });
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


// checkout paage funtionality 
    function copyNumber(id) {
      const number = document.getElementById(id).innerText;
      navigator.clipboard.writeText(number).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Copied!',
          text: number + ' copied to clipboard',
          timer: 1500,
          showConfirmButton: false
        });
      });
    }