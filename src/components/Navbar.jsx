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
            <div className="flex flex-row gap-12">
                <a href="/" className={navbarLinkClassName}>Home</a>
                <a href="/" className={navbarLinkClassName}>New</a>
                <a href="/" className={navbarLinkClassName}>Popular</a>
                <a href="/" className={navbarLinkClassName}>Trending</a>
                <a href="/" className={navbarLinkClassName}>Categories</a>
            </div>
        </div>
    )
}

export default Navbar
