// Navigation par onglets
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});

// Gestion de la fenêtre modale (photo)
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const avatar = document.querySelector(".avatar");

function openModal() {
  modal.style.display = "block";
  modalImg.src = "image.jpeg";
}

function closeModal() {
  modal.style.display = "none";
}

avatar.addEventListener("click", openModal);
// --- Image modale (agrandissement de la photo) ---


// Quand on clique sur l’avatar, on ouvre la modale
avatar.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Quand on clique sur le bouton de fermeture
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Ferme la modale si on clique à l’extérieur de l’image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

