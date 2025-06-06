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

// Botón "Ir arriba"
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
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


// Agua 
const usageRange = document.getElementById('usageRange');
  const water = document.getElementById('water');
  const wordCount = document.getElementById('wordCount');

  usageRange.addEventListener('input', () => {
    const words = usageRange.value;
    wordCount.textContent = words;
    // Asumiendo que 100 palabras consumen hasta 1,408 ml, escalamos la altura del agua en consecuencia
    const heightPercentage = (words / 100) * 100; // Escala lineal
    water.style.height = `${heightPercentage}%`;
  });
