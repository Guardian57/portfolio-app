


const Postcard = () => {
    let overlay = true; //temporarily disables overlay for WIP


    return (
        <>
            {/* BACKGROUND OVERLAY - for when the contact form is expanded */}
            <div className={`fixed w-full h-full bottom-4 bg-logo-blue opacity-90 z-50 ${overlay ? "hidden" : ""}`}>
            </div>

            {/* TRIGGER ZONE - for triggering the expansion and hover effects */}

            <div className={"fixed w-full h-full bg-teal-400 -bottom-[90vh] z-50 group flex content-center justify-center"}>
                <div className={"w-1/2 h-auto bottom-0 bg-yellow-100  group-hover:-translate-y-28 transition"}>

                </div>

            </div>

        </>
        


    )
}

export default Postcard