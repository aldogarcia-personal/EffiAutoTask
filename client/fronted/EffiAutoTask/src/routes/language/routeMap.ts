// Mapa de rutas traducidas para cada idioma, facilitando la implementación y manejo
// de paths localizados en la aplicación según el idioma del usuario.

// src/config/routeMap.ts

export const routeMap = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  SETTINGS: "/settings",
} as const

export type RouteKey = keyof typeof routeMap
export type RoutePath = (typeof routeMap)[RouteKey]
