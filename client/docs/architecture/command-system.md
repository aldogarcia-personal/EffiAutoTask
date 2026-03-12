# Command System Architecture

## Command Palette

EAT implementará un **Command Palette global desde la primera versión del sistema**.

Shortcut global:

Ctrl + K

El mismo componente se abrirá mediante:

- Ctrl + K
- botón Search del Sidebar

---

# Arquitectura del Command System

El sistema se basará en un **Command Registry Pattern**.

Concepto:

Command Palette  
↓  
Command Registry  
↓  
Action Handlers

Cada comando será un objeto que describe:

- identificador
- título
- descripción
- palabras clave
- acción a ejecutar
