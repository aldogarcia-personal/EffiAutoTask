# Advanced Command Features

## Comandos Dinámicos

El sistema permitirá registrar comandos dinámicos generados a partir de datos del usuario.

Ejemplo:

Open task: Study networking  
Open task: Buy groceries

Concepto:

const taskCommands = tasks.map(task => ({
id: `task-${task.id}`,
title: `Open task: ${task.title}`,
group: "Tasks",
action: () => openTask(task.id)
}))

Estos comandos se agregarán dinámicamente al registry.

---

## Soporte para Comandos de Texto

En el futuro el Command Palette podrá interpretar comandos tipo texto:

task buy groceries tomorrow  
note linux commands  
automation start focus mode

Esto permitirá convertir el Command Palette en un **sistema de control rápido de la aplicación**.
