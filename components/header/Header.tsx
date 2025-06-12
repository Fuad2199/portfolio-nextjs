import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";


const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-backgroun fixed top-0 left-0 border z-50">
        <div className="max-w-6xl mx-auto py-4 px-4 flex items-center justify-between">
            <div className="font-bold text-xl">
                MY <span className="text-amber-500">PORTFOLIO</span>
            </div>
            <nav className="hidden md:flex space-x-6 font-medium"></nav>
            <div className="flex items-center space-x-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white cursor-pointer">
                    Download CV
                </Button>
                <ModeToggle/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
