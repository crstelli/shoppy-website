"use client";

import { useState } from "react";

import { TextLogo } from "../../TextLogo";
import { Menu, X } from "lucide-react";
import { Item } from "./Item";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <X
          size={42}
          className="min-[520px]:hidden absolute top-4 left-2 z-3"
          onClick={() => setIsOpen((open) => !open)}
        />
      ) : (
        <Menu
          size={42}
          className="min-[520px]:hidden absolute top-4 left-2 z-3"
          onClick={() => setIsOpen((open) => !open)}
        />
      )}
      <div className="min-[520px]:hidden flex">
        <span className="mx-auto">
          <TextLogo />
        </span>
      </div>
      {isOpen && (
        <nav className="fixed w-screen h-screen top-0 left-0 backdrop-blur-sm backdrop-brightness-80 z-2">
          <ul
            className="w-full flex flex-col gap-6 items-center justify-center h-full"
            onClick={() => setIsOpen(false)}
          >
            <Item link="/">Home</Item>
            <Item link="/shop">Shop</Item>
            <Item link="/about">About</Item>
            <Item link="/cart">Cart</Item>
            <Item link="/account/home">Account</Item>
          </ul>
        </nav>
      )}
    </>
  );
}

export { MobileNavbar };
