function saveSession(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

function getSession(key) {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

const exitButton = document.getElementById('exitBtn');
exitButton.onclick = exitFunction;

function exitFunction() {
  Swal.fire({
  title: "Pretende sair da aplicação?",
  showCancelButton: true,
  confirmButtonText: "Sim",
  cancelButtonText: "Não",
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire("Até breve.", "");
  }
});
}

const homeButton = document.getElementById('homeBtn');
homeButton.onclick = goHome;

function goHome() {
  location.href = 'index.html';
}