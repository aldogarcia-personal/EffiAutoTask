# Command System Implementation

## Definición del Tipo Command

Archivo:

src/commands/types.ts

Ejemplo:

export type Command = {
id: string
title: string
description?: string
keywords?: string[]
group?: string
action: () => void
}

---

## Command Registry

Archivo:

src/commands/registry.ts

Ejemplo:

import { Command } from "./types"

export const commands: Command[] = [
{
id: "open-dashboard",
title: "Open Dashboard",
group: "Navigation",
action: () => router.push("/dashboard")
},

{
id: "create-task",
title: "Create Task",
group: "Create",
action: () => openTaskModal()
}
]

---

## Estructura de Carpetas

src
├ commands
│ ├ types.ts
│ ├ registry.ts
│ ├ navigationCommands.ts
│ ├ taskCommands.ts
│ └ automationCommands.ts

Esto permite escalar el sistema sin centralizar todo en un solo archivo.
