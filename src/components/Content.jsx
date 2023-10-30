function Trending({src,alt,number,title,message}) {
    return (
        <div className="flex flex-row mt-2">
            <img alt={alt} src={src} className="object-cover w-20"></img>
            <div className="flex flex-col justify-between px-6 gap-2">
                <h1 className="text-3xl font-bold">{number}</h1>
                <h2 className="text-lg font-extrabold">{title}</h2>
                <p className="text-sm">{message}</p>
            </div>
        </div>
    )
}

function New() {
    const articleLinkClassName = "text-xl font-bold text-white hover:text-red-100"
    const articlePreviewClassName = "text-sm font-normal text-white"
    return (
        <div className="bg-slate-900 flex flex-col justify-center py-4 px-6 gap-4 min-h-full">
            <h1 className="text-white text-4xl font-bold mb-4">New</h1>
            <div className="flex flex-col gap-2"> 
                <a className={articleLinkClassName} href="/">Hydrogen VS Electric Cars</a>
                <p className={articlePreviewClassName} href="/">Will hydrogen-fueled cars ever catch up to EVs?</p>
                <hr className="my-4"></hr>
            </div>
            <div className="flex flex-col gap-2"> 
                <a className={articleLinkClassName} href="/">The Downsides of AI Artistry</a>
                <p className={articlePreviewClassName} href="/">What are the possible adverse effects of on-demand AI image generation?</p>
                <hr className="my-4"></hr>
            </div>
            <div className="flex flex-col gap-2 mb-5"> 
                <a className={articleLinkClassName} href="/">Is VC Funding Drying Up?</a>
                <p className={articlePreviewClassName} href="/">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>
    )
}


function Content() {
    return (    
            <>
            <div className="grid grid-cols-3 grid-flow-row gap-8 ">
                <div className="col-span-2 row-span-2">
                    <img alt="Web 3 Image" src="./images/image-web-3-desktop.jpg" className="object-cover w-full"></img>
                </div>
                <div className="col-span-1 row-span-3 ">
                    <New/>
                </div>
                <div className="col-span-1 row-span-1">
                    <h1 className="text-5xl font-extrabold ">The Bright Future of Web 3.0?</h1>
                </div>
                <div className="col-span-1 row-span-1 ">
                    <div className="flex flex-col h-full justify-between">
                        <p className="font-regular text-sm">
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                        </p>
                        <div className="h-10"></div>
                        <button className="bg-purple-200 tracking-widest uppercase px-4 py-3 w-[200px]">Read More</button>
                    </div>
                </div>
                <div className="col-span-1 row-span-1">
                    <Trending src="./images/image-retro-pcs.jpg" alt="Retro PCs" number="01" title="Reviving Retro PCs"
                     message="What happens when old PCs are given modern upgrades?"/>
                </div>
                <div className="col-span-1 row-span-1">
                    <Trending src="./images/image-top-laptops.jpg" alt="Top laptops" number="02" title="Top 10 Laptops of 2022"
                        message="Our best picks for various needs and budgets."/>
                </div>
                <div className="col-span-1 row-span-1">
                    <Trending src="./images/image-gaming-growth.jpg" alt="Gaming Growth" number="03" title="The Growth of Gaming"
                        message="How the pandemic has sparked fresh opportunities."/>
                </div>
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-4">
              
            </div>
        </>
    )
}

export default Content
