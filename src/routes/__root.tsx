import { createRootRoute, Outlet } from "@tanstack/react-router"
import Navbar from "../components/common/navbar"

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export const Route = createRootRoute({
  component: MainLayout,
})
