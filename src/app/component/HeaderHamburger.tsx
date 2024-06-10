"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function HeaderHamburger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button className="focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src="/images/icon/hamburger.png"
          alt="Menu"
          width={30}
          height={30}
          className="w-8 h-8"
        />
      </button>
      {isOpen && (
        <div className="absolute top-16 right-4 bg-gray-700 text-white shadow-lg rounded-lg py-2 w-48 flex flex-col space-y-2 z-50">
          <Link
            href="/"
            className="px-4 py-2 hover:bg-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            Top
          </Link>
          <Link
            href="/profile"
            className="px-4 py-2 hover:bg-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            Profile
          </Link>
          <Link
            href="/gallery"
            className="px-4 py-2 hover:bg-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            Gallery
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 hover:bg-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 hover:bg-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default HeaderHamburger;
