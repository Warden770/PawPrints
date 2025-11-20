let totalPets = 0;
let availablePets = 0;
let adoptedPets = 0;

function loadPetCounts() {
  totalPets = parseInt(localStorage.getItem('totalPets')) || 0;
  availablePets = parseInt(localStorage.getItem('availablePets')) || 0;
  adoptedPets = parseInt(localStorage.getItem('adoptedPets')) || 0;
}

function savePetCounts() {
  localStorage.setItem('totalPets', totalPets);
  localStorage.setItem('availablePets', availablePets);
  localStorage.setItem('adoptedPets', adoptedPets);
}

function updatePetCounts() {
  document.getElementById('total-pets').innerText = totalPets;
  document.getElementById('pets-available').innerText = availablePets;
  document.getElementById('pets-adopted').innerText = adoptedPets;
}

function uploadPet() {
  totalPets += 1;
  availablePets += 1;
  savePetCounts();
  updatePetCounts();
}

function adoptPet() {
  if (availablePets > 0) {
    availablePets -= 1;
    adoptedPets += 1;
    totalPets -= 1; 
    savePetCounts();
    updatePetCounts();
  }
}

// Load counts on page load
document.addEventListener('DOMContentLoaded', () => {
  loadPetCounts();
  updatePetCounts();
});



