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



    //   view details images animation 

          const modal = document.getElementById("imageModal");
          const modalImg = document.getElementById("modalImage");
          const captionText = document.getElementById("caption");
          const closeBtn = document.getElementById("closeModal");

          document.querySelectorAll(".gallery-img").forEach((img) => {
            img.onclick = function () {
              modal.style.display = "block";
              modalImg.src = this.src;
              captionText.innerHTML = this.alt;
              modalImg.style.animation = "zoomIn 0.5s ease-in-out";
            };
          });

          closeBtn.onclick = function () {
            modalImg.style.animation = "zoomOut 0.5s ease-in-out";
            setTimeout(() => {
              modal.style.display = "none";
            }, 500);
          };
     

