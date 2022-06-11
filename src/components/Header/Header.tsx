import Logo from "../Logo/Logo";
import {AiOutlineWallet} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { useRouter } from "next/router";
import NavItem from "../Navigation/NavItem/NavItem";
import { useCallback } from "react";
import Search from "../Search/Search";
const exploreOptions = [
  {
    href: "/assets",
    label: "ALL NFTs",
  },
  {
    href: "/solana-collections",
    label: "Solana NFTs",
  },
  {
    href: "/collection/art",
    label: "Art",
  },
];

const Header = () => {
  const router = useRouter();

  const handleNavigation = useCallback((href) => router.push(href), [router]);

  return (
    <div className="flex justify-between p-4">
      <Logo />
      {/*<div className="flex flex-row-reverse">*/}
      {/*  <div className="flex">*/}
      {/*    <NavItem*/}
      {/*      handleNavigation={handleNavigation}*/}
      {/*      href="explore"*/}
      {/*      className="font-semibold"*/}
      {/*      options={exploreOptions}*/}
      {/*    >*/}
      {/*      Explore*/}
      {/*    </NavItem>*/}
      {/*    <NavItem*/}
      {/*      handleNavigation={handleNavigation}*/}
      {/*      href="stats"*/}
      {/*      className="font-semibold"*/}
      {/*      options={exploreOptions}*/}
      {/*    >*/}
      {/*      Stats*/}
      {/*    </NavItem>*/}
      {/*    <NavItem*/}
      {/*      handleNavigation={handleNavigation}*/}
      {/*      href="resources"*/}
      {/*      className="font-semibold"*/}
      {/*      options={exploreOptions}*/}
      {/*    >*/}
      {/*      Resources*/}
      {/*    </NavItem>*/}
      {/*    <NavItem*/}
      {/*      handleNavigation={handleNavigation}*/}
      {/*      href="create"*/}
      {/*      className="font-semibold"*/}
      {/*      options={exploreOptions}*/}
      {/*    >*/}
      {/*      Create*/}
      {/*    </NavItem>*/}
      {/*    <NavItem*/}
      {/*      handleNavigation={handleNavigation}*/}
      {/*      href="icon1"*/}
      {/*      options={exploreOptions}*/}
      {/*    >*/}
      {/*      <CgProfile className="w-8 h-8"/>*/}
      {/*    </NavItem>*/}
      {/*    <NavItem*/}
      {/*      handleNavigation={handleNavigation}*/}
      {/*      href="icon2"*/}
      {/*      options={exploreOptions}*/}
      {/*    >*/}
      {/*      <AiOutlineWallet className="w-8 h-8" />*/}
      {/*    </NavItem>*/}
      {/*  </div>*/}
      {/*  <Search />*/}
      {/*</div>*/}
    </div>
  );
};

export default Header;