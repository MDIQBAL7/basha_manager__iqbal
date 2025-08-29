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