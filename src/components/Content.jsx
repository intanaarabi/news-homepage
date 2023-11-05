import PropTypes from 'prop-types';

function Trending({src,alt,number,title,message}) {
    return (
        <div className="flex flex-row">
            <img alt={alt} src={src} className="w-1/3 md:w-14 xl:w-16 2xl:w-20 object-cover"></img>
            <div className="flex flex-col justify-between px-4 xl:px-6 gap-2">
                <h1 className="text-neutral-grayish-blue text-xl xl:text-2xl 2xl:text-3xl font-bold">{number}</h1>
                <h2 className="hover:cursor-pointer hover:text-primary-soft-red transition-hover duration-300 md:text-[10px] lg:text-[12px] xl:text-xs 2xl:text-lg font-extrabold">{title}</h2>
                <div className='flex-grow'></div>
                <p className="text-neutral-dark-grayish-blue md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm">{message}</p>
            </div>
        </div>
    )
}

Trending.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

function New() {
    const articleLinkClassName = "hover:text-primary-soft-orange transition-hover duration-300 text-lg md:text-xs xl:text-lg 2xl:text-xl font-bold text-white"
    const articlePreviewClassName = "text-neutral-grayish-blue text-sm md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm font-normal text-white"
    return (
        <div className="bg-neutral-very-dark-blue flex flex-col justify-center py-4 px-6 gap-4 min-h-full">
            <h1 className="text-2xl xl:text-3xl 2xl:text-4xl 2xl:mb-4 font-bold text-primary-soft-orange">New</h1>
            <div className="flex flex-col gap-2"> 
                <a className={articleLinkClassName} href="#">Hydrogen VS Electric Cars</a>
                <p className={articlePreviewClassName}>Will hydrogen-fueled cars ever catch up to EVs?</p>
                <hr className="my-4 md:my-2 xl:my-4"></hr>
            </div>
            <div className="flex flex-col gap-2"> 
                <a className={articleLinkClassName} href="#">The Downsides of AI Artistry</a>
                <p className={articlePreviewClassName}>What are the possible adverse effects of on-demand AI image generation?</p>
                <hr className="my-4  a7a remd:my-2 xl:my-4"></hr>
            </div>
            <div className="flex flex-col gap-2 mb-5"> 
                <a className={articleLinkClassName} href="#">Is VC Funding Drying Up?</a>
                <p className={articlePreviewClassName} >Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>
    )
}


function Content() {
    return (    
            <>

                <div className="grid grid-cols-1 grid-flow-row md:grid-cols-3 gap-6 md:gap-4 2xl:gap-8">
                    <div className="row-span-2 col-span-1 md:col-span-2 md:row-span-2">
                        <img alt="Web 3 Image" src="./images/image-web-3-desktop.jpg" className="md:block hidden md:object-cover md:h-full"></img>
                        <img alt="Web 3 Image" src="./images/image-web-3-mobile.jpg" className="md:hidden block object-cover h-full"></img>
                    </div>
                     <div className="row-span-1 col-span-1 md:row-start-3">
                        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold ">The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className="row-span-1 col-span-1 md:row-start-3">
                        <div className="flex flex-col h-full justify-between">
                            <p className="text-neutral-dark-grayish-blue font-regular md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-base">
                                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                            </p>
                            <div className="h-4 xl:h-10"></div>
                            <button className="max-w-[100%] bg-primary-soft-red text-neutral-off-white hover:bg-neutral-very-dark-blue transition-hover duration-300 tracking-[3px] lg:tracking-[5px] uppercase  py-4 md:py-1 xl:py-3 xl:px-4 2xl:py-4 text-sm md:text-[8px] xl:text-[10px] 2xl:text-xs w-[200px] md:w-[100px] lg:w-[125px] xl:w-[150px] 2xl:w-[200px]">Read More</button>
                        </div>
                    </div>
                    <div className="row-span-3 col-span-1">
                        <New/>
                    </div>
                   <div className="row-span-1 col-span-1 ">
                        <Trending src="./images/image-retro-pcs.jpg" alt="Retro PCs" number="01" title="Reviving Retro PCs"
                        message="What happens when old PCs are given modern upgrades?"/>
                    </div>
                    <div className="row-span-1 col-span-1 ">
                        <Trending src="./images/image-top-laptops.jpg" alt="Top laptops" number="02" title="Top 10 Laptops of 2022"
                            message="Our best picks for various needs and budgets."/>
                    </div>
                    <div className="row-span-1 col-span-1 ">
                        <Trending src="./images/image-gaming-growth.jpg" alt="Gaming Growth" number="03" title="The Growth of Gaming"
                            message="How the pandemic has sparked fresh opportunities."/>
                    </div>
                </div>  
        </>
    )
}

export default Content
