import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });
  const services = [
    {
      title: "Website Design",
      href: "/website-design",
    },
    {
      title: "Website Development",
      href: "/website-development",
    },
    {
      title: "Software and Application Development",
      href: "/software-and-application-development",
    },
    {
      title: "Shopify Development Services",
      href: "/shopify-development-services",
    },
    {
      title: "Content Writing Services",
      href: "/content-writing-services",
    },
    {
      title: "Search Engine Optimization",
      href: "/search-engine-optimization",
    },
    {
      title: "Graphics Design",
      href: "/graphics-design",
    },
    {
      title: "Data Analytics and Machine Learning",
      href: "/data-analytics-and-machine-learning",
    },
    {
      title: "2D and 3D Animations",
      href: "/animations",
    },
    {
      title: "PPC Advertising",
      href: "/ppc-advertising",
    },
    {
      title: "Social Media Marketing",
      href: "/social-media-marketing",
    },
  ];
  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header id="header" className="headroom">
        <div className="startp-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img className="main-logo" src="/images/logo.png" alt="logo" />
                <span className="logo-span">Technologies</span>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      href="/"
                      onClick={toggleNavbar}
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href=""
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/about/" && "active"
                      }`}
                    >
                      Services <Icon.ChevronDown />
                    </Link>{" "}
                    <ul className="dropdown-menu">
                      {services?.map(({ title, href }) => (
                        <li className="nav-item">
                          <Link
                            href={href}
                            onClick={toggleNavbar}
                            className={`nav-link ${
                              currentPath == href && "active"
                            }`}
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/about/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/about/" && "active"
                      }`}
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="others-option">
                <Link href="/contact" className="btn btn-primary">
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
