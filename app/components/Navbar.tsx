import {
  Navbar as NextNav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { json, useLoaderData } from "@remix-run/react";
import { getUser } from "~/utils/session.server";

export const loader = async ({ request }) => {
  const user = await getUser(request);
  console.log(user);
  return json({
    user,
  });
};

const Navbar = () => {
  const { user } = useLoaderData() || {};

  return (
    <NextNav shouldHideOnScroll>
      <NavbarBrand>
        <Link className="font-bold text-white">WoW optimize</Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        {user ? (
          <form action="/logout" method="post">
            <NavbarItem className="hidden lg:flex">
              <Button type="submit">Logout</Button>
            </NavbarItem>
          </form>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="login" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </NextNav>
  );
};
export default Navbar;
