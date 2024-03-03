import {
  Navbar as NextNav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const Navbar = () => {
  return (
    <NextNav shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-white text-">Shirt.com</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Why Our shirts
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Funnys
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextNav>
  );
};
export default Navbar;
