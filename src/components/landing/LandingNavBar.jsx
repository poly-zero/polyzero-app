import { NavLink } from "react-router-dom";
import { Navbar, Button } from "flowbite-react";

const LandingNavBar = () => {
  return (
    <nav className="">
      <Navbar fluid={true} rounded={true} border={true}>
        <Navbar.Brand href="/">
          <div className="flex mt-2">
            <img
              src="https://raw.githubusercontent.com/poly-zero/polyzero/main/public/images/favicon64.ico"
              className="mt-1 ml-2 mr-3 h-14"
              alt="PolyZero Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              PolyZero
            </span>
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-2">
          <Button>
            <NavLink to={"/footprint"} exact={"true"}>
              Get started
            </NavLink>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/">Reduce Plastic</Navbar.Link>
          <Navbar.Link href="/resources">Further Reading</Navbar.Link>
          <Navbar.Link href="/">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default LandingNavBar;