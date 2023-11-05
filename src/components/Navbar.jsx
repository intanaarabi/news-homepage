import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"


function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const mobileNavLink = "p-4 block font-regular"
    
    return (
      <div className="relative ">
        <button onClick={toggleMenu} className="p-4">
         <AiOutlineMenu size="32"/>
        </button>
  
        {/* Menu overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50" onClick={toggleMenu}></div>
        )}
  
        {/* Menu content */}
        <div
          className={`fixed top-0 right-0 h-full z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out w-[250px] bg-neutral-off-white`}
        >
          <div className="flex flex-col">
            {/* Close button */}
            <div className="flex">
                <div className="flex-grow"></div>
                <button onClick={toggleMenu} className="p-4">
                    <AiOutlineClose size="32"  className="text-neutral-dark-grayish-blue"/>
                </button>
            </div>

            {/* Add your navigation links/items here */}
            <nav>
              {/* Example navigation content here - customize as needed */}
                <a href="#" className={mobileNavLink}>Home</a>
                <a href="#" className={mobileNavLink}>New</a>
                <a href="#" className={mobileNavLink}>Popular</a>
                <a href="#" className={mobileNavLink}>Trending</a>
                <a href="#" className={mobileNavLink}>Categories</a>
            </nav>
          </div>
        </div>
      </div>
    );
}

const navbarLinkClassName = "hover:text-primary-soft-red transition-hover duration-300 md:text-xs xl:text-base 2xl:text-lg"


function Navbar() {
    return (
        <div 
        className="
            w-full
            flex
            flex-row
            justify-between
            items-center
        ">
            <img alt="News Page Icon" src="./images/logo.svg" className="md:w-8 lg:w-10 xl:w-12 2xl:w-auto"></img>
            <div className="flex-grow"></div>
            <div className="md:block hidden">
                <div className="flex flex-row gap-12">
                    <a href="#" className={navbarLinkClassName}>Home</a>
                    <a href="#" className={navbarLinkClassName}>New</a>
                    <a href="#" className={navbarLinkClassName}>Popular</a>
                    <a href="#" className={navbarLinkClassName}>Trending</a>
                    <a href="#" className={navbarLinkClassName}>Categories</a>
                </div>
            </div>
            <div className="md:hidden block"> 
            <MobileNav/>
            </div>

        
        </div>
    )
}

export default Navbar
