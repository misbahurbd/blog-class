import { Link } from "@tanstack/react-router"

import { useCurrentUser } from "../../hooks/useCurrentUser"
import { getToken, removeToken } from "../../utils/authUtils"

const UserNav = () => {
  const token = getToken()

  return <>{token ? <UserMenu /> : <AuthActions />}</>
}
export default UserNav

const AuthActions = () => {
  return (
    <div className="join">
      <Link to="/auth/login">
        <button className="btn join-item ">Login</button>
      </Link>
      <button className="btn join-item btn-primary ">Register</button>
    </div>
  )
}

const UserMenu = () => {
  const { data: currentUser } = useCurrentUser()

  const handleLogout = () => {
    removeToken()
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1"
      >
        <img
          src={currentUser?.image}
          className="size-8 rounded-full border border-primary"
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <div className="flex flex-col items-start text-start">
            <h3 className="font-medium text-start">
              {currentUser?.firstName} {currentUser?.lastName}
            </h3>
            <p className="text-sm">{currentUser?.email}</p>
          </div>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  )
}
