import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
const Navbar = () => {
  const navItems = [
    {
      actionTitle: "category",
      linkTo: "/category",
    },
    {
      actionTitle: "about us",
      linkTo: "/about us",
    },
    {
      actionTitle: "helping hand",
      linkTo: "/helping-hands",
    },
    {
      actionTitle: "contact us",
      linkTo: "/contact-us",
    },
    {
      actionTitle: "on going campaign",
      linkTo: "/campaign",
    },
    {
      actionTitle: "report injured animal",
      linkTo: "/injured-report",
    },
  ];
  return (
    <>
      <nav className="border border-black w-screen bg-black text-white flex gap-8 items-center justify-around h-26">
        <div id="nav-left" className="w-24">
          <div>
            <Image src={logo} alt="WEb logo" />
          </div>
        </div>
        <div className="" id="nav-right">
          {navItems.map((item) => (
            <Link
              href={item.linkTo}
              key={item.linkTo}
              className="p-4 uppercase hover:text-red-400"
            >
              {item.actionTitle}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
