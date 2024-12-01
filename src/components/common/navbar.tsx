import { Link } from "@tanstack/react-router"
import UserNav from "./userNav"

interface INavLink {
  label: string
  href: string
  children?: INavLink[]
}

const Navbar = () => {
  const navLinks: INavLink[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
      children: [
        {
          label: "Our Mission",
          href: "/about/our-mission",
        },
      ],
    },
    {
      label: "Services",
      href: "/service",
    },
  ]

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavList
              links={navLinks}
              menuType="mobile"
            />
          </ul>
        </div>
        <a className="text-xl font-bold ">DaisyBlog</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavList
            links={navLinks}
            menuType="desktop"
          />
        </ul>
      </div>
      <div className="navbar-end">
        <UserNav />
      </div>
    </div>
  )
}

const NavList = ({
  links,
  menuType,
}: {
  links: INavLink[]
  menuType: "mobile" | "desktop"
}) => {
  return (
    <>
      {links.map(link => (
        <li key={link.href}>
          {menuType === "mobile" ? (
            <>
              <Link to={link.href}>{link.label}</Link>
              {link.children && link.children.length > 0 && (
                <ul className="p-2">
                  {link.children?.map(childLink => (
                    <li key={childLink.href}>
                      <Link to={childLink.href}>{childLink.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <>
              {link.children && link.children.length > 0 ? (
                <details>
                  <summary>
                    <Link to={link.href}>{link.label}</Link>
                  </summary>
                  <ul className="p-2">
                    {link.children?.map(childLink => (
                      <li key={childLink.href}>
                        <Link to={childLink.href}>{childLink.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link to={link.href}>{link.label}</Link>
              )}
            </>
          )}
        </li>
      ))}
    </>
  )
}

export default Navbar
