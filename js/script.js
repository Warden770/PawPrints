let totalPets = 100;
let availablePets = 20;
let adoptedPets = 20;

function updatePetCounts() {
  const totalEl = document.getElementById('total-pets');
  const availEl = document.getElementById('pets-available');
  const adoptedEl = document.getElementById('pets-adopted');
  if (totalEl) totalEl.innerText = totalPets;
  if (availEl) availEl.innerText = availablePets;
  if (adoptedEl) adoptedEl.innerText = adoptedPets;
}

function uploadPet(){
  totalPets += 1;
  availablePets += 1;
  updatePetCounts();
}

function adoptPet(){
  availablePets -= 1;
  adoptedPets += 1;
  totalPets -= 1;
  updatePetCounts();
}

/* Sidebar behaviour: only control it when viewport <= 400px */
window.addEventListener('DOMContentLoaded', () => {
  updatePetCounts();

  const nav = document.getElementById('sidebar');
  if (!nav) return;

  const mq = window.matchMedia('(max-width: 400px)');

  // initial state: mobile -> hidden, desktop -> allow CSS to control it
  if (mq.matches) {
    nav.style.width = '55px';
  } else {
    nav.style.removeProperty('width');
  }

  // keep it consistent when crossing the breakpoint
  mq.addEventListener('change', (e) => {
    if (e.matches) {
      nav.style.width = '55px';
    } else {
      nav.style.removeProperty('width');
    }
  });
});

function toggleSidebar() {
  const nav = document.getElementById('sidebar');
  if (!nav) return;

  const isMobile = window.matchMedia('(max-width: 400px)').matches;
  if (!isMobile) return; // do nothing on desktop

  nav.style.width = nav.style.width === '250px' ? '55px' : '250px';
}
