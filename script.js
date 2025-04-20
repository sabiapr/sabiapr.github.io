// Ejemplo básico con Intersection Observer
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Mostrar botón al hacer scroll
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  topBtn.style.display = (document.documentElement.scrollTop > 200) ? "block" : "none";
};

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function responder(valor) {
    const mensaje = {
      bien: "¡Excelente! Sigue compartiendo buenas prácticas. ✅",
      mejorar: "¡Está bien! Reconocerlo es el primer paso. 💪",
      no: "¡Genial que lo quieras mejorar! Te invitamos a seguir explorando sabIA. 💡"
    };
    document.getElementById("respuesta").textContent = mensaje[valor];
  }