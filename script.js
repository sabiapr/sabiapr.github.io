// Scroll reveal usando Intersection Observer
const sections = document.querySelectorAll('.section');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
}

// Mostrar botón "Ir arriba" al hacer scroll
const topBtn = document.getElementById("topBtn");
if (topBtn) {
  window.onscroll = function () {
    topBtn.style.display = (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) ? "block" : "none";
  };

  topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

// Función para el cuestionario reflexivo
function responder(valor) {
  const mensaje = {
    bien: "¡Excelente! Sigue compartiendo buenas prácticas. ✅",
    mejorar: "¡Está bien! Reconocerlo es el primer paso. 💪",
    no: "¡Genial que lo quieras mejorar! Te invitamos a seguir explorando sabIA. 💡"
  };

  const respuesta = document.getElementById("respuesta");
  if (respuesta) {
    respuesta.textContent = mensaje[valor];
  }
}
