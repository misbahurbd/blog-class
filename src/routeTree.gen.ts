/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from "@tanstack/react-router"

// Import Routes

import { Route as rootRoute } from "./routes/__root"

// Create Virtual Routes

const ServiceLazyImport = createFileRoute("/service")()
const AboutLazyImport = createFileRoute("/about")()
const IndexLazyImport = createFileRoute("/")()
const AuthLoginLazyImport = createFileRoute("/auth/login")()

// Create/Update Routes

const ServiceLazyRoute = ServiceLazyImport.update({
  id: "/service",
  path: "/service",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/service.lazy").then(d => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/about.lazy").then(d => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/index.lazy").then(d => d.Route))

const AuthLoginLazyRoute = AuthLoginLazyImport.update({
  id: "/auth/login",
  path: "/auth/login",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/auth/login.lazy").then(d => d.Route))

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/"
      path: "/"
      fullPath: "/"
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    "/about": {
      id: "/about"
      path: "/about"
      fullPath: "/about"
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    "/service": {
      id: "/service"
      path: "/service"
      fullPath: "/service"
      preLoaderRoute: typeof ServiceLazyImport
      parentRoute: typeof rootRoute
    }
    "/auth/login": {
      id: "/auth/login"
      path: "/auth/login"
      fullPath: "/auth/login"
      preLoaderRoute: typeof AuthLoginLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  "/": typeof IndexLazyRoute
  "/about": typeof AboutLazyRoute
  "/service": typeof ServiceLazyRoute
  "/auth/login": typeof AuthLoginLazyRoute
}

export interface FileRoutesByTo {
  "/": typeof IndexLazyRoute
  "/about": typeof AboutLazyRoute
  "/service": typeof ServiceLazyRoute
  "/auth/login": typeof AuthLoginLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  "/": typeof IndexLazyRoute
  "/about": typeof AboutLazyRoute
  "/service": typeof ServiceLazyRoute
  "/auth/login": typeof AuthLoginLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: "/" | "/about" | "/service" | "/auth/login"
  fileRoutesByTo: FileRoutesByTo
  to: "/" | "/about" | "/service" | "/auth/login"
  id: "__root__" | "/" | "/about" | "/service" | "/auth/login"
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  ServiceLazyRoute: typeof ServiceLazyRoute
  AuthLoginLazyRoute: typeof AuthLoginLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  ServiceLazyRoute: ServiceLazyRoute,
  AuthLoginLazyRoute: AuthLoginLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/service",
        "/auth/login"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/service": {
      "filePath": "service.lazy.tsx"
    },
    "/auth/login": {
      "filePath": "auth/login.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
