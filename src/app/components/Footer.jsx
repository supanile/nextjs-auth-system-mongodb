import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center"></div>
        <hr className="my-6 border-gray-700" />
        <p className="text-center text-sm">
          Copyright © {new Date().getFullYear()} Your Company. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
