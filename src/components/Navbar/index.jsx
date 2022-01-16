import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logos/MG-Logo.svg";
import HamburgerIcon from "./components/HamburgerIcon";
import MobileMenu from "./components/MobileMenu";
import "./index.scss";

const Navbar = () => {
  const pages = [
    { name: "Home", slug: "/" },
    { name: "About Us", slug: "/about-us" },
    { name: "Core Services", slug: "/services" },
    { name: "Projects", slug: "/projects" },
    { name: "Contact Us", slug: "/contact-us" },
  ];

  const allNavLinks = useRef([]);
  const [activeMenu, setActiveMenu] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // console.log(location.pathname);

    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }

    if (allNavLinks.current.length > 1) {
      allNavLinks.current.forEach((link) =>
        link.classList.remove("activeLink")
      );

      allNavLinks.current
        .find((el) => el.getAttribute("href") === pathname)
        ?.classList.add("activeLink");
    }
  }, [pathname, hash]);

  const MobileMenuHandler = () => {
    !activeMenu ? setActiveMenu(true) : setActiveMenu(false);
  };

  return (
    <nav>
      <div className="nav-bg"></div>
      <div className="content d-flex align-items-center justify-content-between">
        <Link className="site-logo" to="/#">
          <img src={Logo} alt="" />
        </Link>

        <div className="d-flex">
          <div className="navWrapper d-none d-lg-flex">
            {pages.map((page, i) => (
              <Link
                ref={(el) => (allNavLinks.current[i] = el)}
                key={page.slug}
                to={page.slug}
              >
                <span className="text-uppercase">{page.name}</span>
              </Link>
            ))}
            <Link
              className="btn-main"
              to={{
                pathname: "/contact-us",
                hash: "#register",
              }}
            >
              Register
            </Link>
          </div>
          <div className="hamburger-wrapper d-block d-lg-none">
            <HamburgerIcon {...{ MobileMenuHandler }}></HamburgerIcon>
            <MobileMenu
              {...{ pages, activeMenu, MobileMenuHandler }}
            ></MobileMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
