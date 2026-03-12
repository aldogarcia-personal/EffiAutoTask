# Frontend Architecture

## Layout General de la Aplicación

La aplicación seguirá un **App Layout persistente**, donde el sidebar y topbar permanecen montados y únicamente cambia el contenido central.

## Estructura conceptual

Sidebar | Topbar  
 | Content

## Layout visual

┌──────── Sidebar ────────┬──────── Topbar ──────────────┐
│ Search │ 🌐 Language 👤 Profile │
│ Dashboard │ │
│ Tasks │ │
│ Automations │ Content │
│ Notes │ │
│ Insights │ │
│ Notifications │ │
│ │ │
│ Settings │ │
└─────────────────────────┴──────────────────────────────┘

---

## Acciones del Topbar

La Topbar tendrá acciones globales de usuario.

Estructura:

Language Selector  
Profile Menu

### Language Selector

Permitirá cambiar idioma directamente desde la interfaz.

El selector también estará disponible dentro de:

Settings → Language
