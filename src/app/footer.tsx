const Footer=()=>{
    return(
        <nav className="bg-white border-gray-200 dark:bg-gray-200">
            <div className="max-w-screen-xl h-14 flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse align-right">
                        {/* <img 
                            src="/favicon.ico"
                            width={40}
                            height={40}
                            className="stroke-cyan-500"
                        /> */}
                    <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-black">
                        {/* APEXTRADE VENTURES INCORPORATION */}
                    </span>
                </a>
            </div>
        </nav>
    )
}
export default Footer