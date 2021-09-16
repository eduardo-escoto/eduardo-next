import * as React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EdIcon from "../../svg/edlogoFinal_circle_clipped_thick.svg";
import socialLinks from "../config/socialLinks";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

const pageNavigationLinks = (router) => [
  { text: "About", uri: "/", onClick: returnToHome(router) },
  { text: "Projects", uri: "/#projects" },
  // { text: "Notebooks", }
  // { text: "Featured Blogs", uri: "/#projects", customClasses: ""},
  // { text: "Blogs", uri:"/blogs", customClasses: " disabled"}
];

const siteNavigationLinks = [
  { text: "All Projects", uri: "/projects" },
  { text: "All Notebooks", uri: "/notebooks" },
  // { text: "Blogs", uri: "/projects", customClasses: ""},
];

const PageNavigationListItem = ({ text, uri, customClasses, onClick }) => (
  <li className="nav-item">
    <Link href={uri}>
      <a
        aria-current="page"
        className={`nav-link ${customClasses}`}
        onClick={onClick}
      >
        {text}
      </a>
    </Link>
  </li>
);

function SocialsLinksListItem({ type, uri, icon, isPageWide }) {
  return (
    <li className="nav-item me-2">
      <a
        className="nav-link"
        aria-current="page"
        href={uri}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={`icon-desc me-2 ${isPageWide ? "hide-text" : ""}`}>
          {type}
        </span>
        <FontAwesomeIcon
          icon={icon}
          style={{ fontSize: `${isPageWide ? "28px" : "18px"}` }}
        />
      </a>
    </li>
  );
}

function returnToHome(router) {
  return (e) => {
    e.preventDefault();
    router.push("/").then(() => window.scrollTo(0, 0));
  };
}

const Navbar = () => {
  const router = useRouter();
  const isPageWide = useMediaQuery("(min-width: 767px)");
  const siteNavigationLinksList = siteNavigationLinks.map((navLink) => (
    <PageNavigationListItem {...navLink} key={navLink.text} />
  ));
  const pageNavigationLinksList = pageNavigationLinks(router).map((navLink) => (
    <PageNavigationListItem {...navLink} key={navLink.text} />
  ));
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top border-bottom">
      <div className="container-lg">
        <Link href="/" >
          <a
            style={{ fontSize: "25px" }}
            className="navbar-brand"
            onClick={returnToHome(router)}
          >
            <EdIcon
              width="60"
              className="d-inline-block align-text-center edIcon me-3"
            />
            Eduardo Escoto
          </a>
          </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav_dropdown"
          aria-controls="nav_dropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav_dropdown">
          <ul
            className="navbar-nav me-auto ms-auto"
            style={{ fontSize: "18px" }}
          >
            {pageNavigationLinksList}
            <li className="icon-desc" key="divider">
              <hr className="dropdown-divider" />
            </li>
          </ul>
          <ul
            className="navbar-nav me-auto ms-auto"
            style={{ fontSize: "18px" }}
          >
            {siteNavigationLinksList}
            <li className="icon-desc" key="divider2">
              <hr className="dropdown-divider" />
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            {socialLinks.map((socialLink) => (
              <SocialsLinksListItem
                {...socialLink}
                key={socialLink.type}
                isPageWide={isPageWide}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
