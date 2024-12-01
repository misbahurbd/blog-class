import { createLazyFileRoute, Navigate } from "@tanstack/react-router"
import { getToken } from "../utils/authUtils"

export const Route = createLazyFileRoute("/service")({
  component: RouteComponent,
})

function RouteComponent() {
  const token = getToken()

  if (!token) {
    return <Navigate to="/auth/login" />
  }

  return <div>Hello "/service"!</div>
}
