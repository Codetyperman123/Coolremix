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
        <Link className="font-bold text-white">Shirt.com</Link>
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="center">
        <NavbarItem className="hidden sm:block">
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:block">
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
