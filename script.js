// ================================
// Hamburger Toggle
// ================================
const toggler = document.querySelector('.custom-toggler');
if (toggler) {
  toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
  });
}

// ================================
// Search Produk (jika ada)
// ================================
const searchInput = document.getElementById("searchInput");
const produkItems = document.querySelectorAll(".produk-item");
if (searchInput && produkItems.length > 0) {
  searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    produkItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? "" : "none";
    });
  });
}

// ================================
// Form Kontak (Simulasi Toast)
// ================================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // stop default form submit

    const toastEl = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastEl);
    const toastMessage = document.getElementById('toastMessage');

    // Simulasi 80% sukses
    const isSuccess = Math.random() > 0.2;

    if (isSuccess) {
      toastMessage.innerText = "Pesan berhasil dikirim!";
      toastEl.classList.remove("text-bg-danger");
      toastEl.classList.add("text-bg-success");
      this.reset();
    } else {
      toastMessage.innerText = "Gagal mengirim pesan!";
      toastEl.classList.remove("text-bg-success");
      toastEl.classList.add("text-bg-danger");
    }

    toast.show();
  });
}
