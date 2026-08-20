// Ajustá esta URL cuando despliegues el backend (por ahora, desarrollo local)
const API_URL = 'http://localhost:4000';

// --- Menú móvil ---
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// --- Login con Google ---
const googleBtn = document.getElementById('googleLoginBtn');
const googleLabel = document.getElementById('googleBtnLabel');

async function checkSession() {
  try {
    const res = await fetch(`${API_URL}/auth/me`, { credentials: 'include' });
    const data = await res.json();
    if (data.user) {
      googleLabel.textContent = data.user.nombre ? `Hola, ${data.user.nombre.split(' ')[0]}` : 'Mi cuenta';
    }
  } catch (err) {
    console.warn('No se pudo verificar la sesión (¿backend corriendo?):', err.message);
  }
}

googleBtn.addEventListener('click', () => {
  window.location.href = `${API_URL}/auth/google`;
});

checkSession();

// --- Formulario de contacto ---
const leadForm = document.getElementById('leadForm');
const formStatus = document.getElementById('formStatus');

leadForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  formStatus.textContent = 'Enviando...';

  const formData = new FormData(leadForm);
  const intereses = formData.getAll('intereses');

  const payload = {
    nombre: formData.get('nombre'),
    empresa: formData.get('empresa'),
    cargo: formData.get('cargo'),
    email: formData.get('email'),
    telefono: formData.get('telefono'),
    intereses,
    mensaje: formData.get('mensaje'),
  };

  try {
    const res = await fetch(`${API_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    if (data.ok) {
      formStatus.textContent = 'Consulta enviada. Te voy a responder a la brevedad.';
      leadForm.reset();
    } else {
      formStatus.textContent = data.error || 'No se pudo enviar la consulta.';
    }
  } catch (err) {
    formStatus.textContent = 'No se pudo conectar con el servidor. Intentá de nuevo más tarde.';
  }
});

// --- Chat en vivo (socket.io) ---
const socket = io(API_URL, { autoConnect: true });

const chatToggle = document.getElementById('chatToggle');
const chatPanel = document.getElementById('chatPanel');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

chatToggle.addEventListener('click', () => {
  chatPanel.hidden = !chatPanel.hidden;
});

function addMessageToPanel(texto, tipo) {
  const div = document.createElement('div');
  div.className = 'msg';
  div.style.alignSelf = tipo === 'propio' ? 'flex-end' : 'flex-start';
  div.textContent = texto;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = chatInput.value.trim();
  if (!texto) return;

  socket.emit('chat_mensaje', { texto, nombre: 'Visitante web' });
  addMessageToPanel(texto, 'propio');
  chatInput.value = '';
});

socket.on('chat_mensaje_ack', () => {
  // Podría mostrar un check de "enviado" si se quiere afinar la UX
});

socket.on('connect_error', () => {
  console.warn('No se pudo conectar al servidor de sockets (¿backend corriendo?).');
});
