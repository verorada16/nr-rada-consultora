require('dotenv').config();

const path = require('path');
const express = require('express');
const http = require('http');
const cors = require('cors');
const session = require('express-session');
const { Server } = require('socket.io');

const passport = require('./config/passport');
const authRoutes = require('./routes/auth');
const buildLeadsRoutes = require('./routes/leads');
const registerSockets = require('./sockets');

const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5500';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: FRONTEND_URL,
    credentials: true,
  },
});

// --- Middlewares base ---
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'dev_secret_cambiar',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production' },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// --- Rutas API ---
app.use('/auth', authRoutes);
app.use('/api/leads', buildLeadsRoutes(io));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, servicio: 'NR Rada backend', hora: new Date().toISOString() });
});

// --- Sirve el frontend estático (opcional: podés servirlo separado con Live Server) ---
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// --- Sockets ---
registerSockets(io);

server.listen(PORT, () => {
  console.log(`NR Rada backend corriendo en http://localhost:${PORT}`);
});
