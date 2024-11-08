

interface ProjectOverviewValues {
    summary: string [],
    duration?: string,
    role?: string [],
    team?: string [],
    deliverables?: string[],
    skills?: string [],
}

const ProjectOverview = ({summary, duration, role, team, deliverables, skills}: ProjectOverviewValues) => {

    return (
        <div className="w-full h-auto box-border bg-white rounded-3xl drop-shadow-xl overflow-hidden">
            <div className="w-full h-auto px-12 py-3 bg-slate-100">
                <h1 className="font-light text-5xl">Overview</h1>
            </div>
            <div className="w-full h-auto flex flex-row">
                <div className="basis-11/12 h-auto pl-12 pr-8 pt-10 pb-11 box-border flex flex-col gap-12 text-base">
                    <div className="w-full h-auto flex flex-col gap-3"> 
                        {/* <h1 className="font-semibold">Summary</h1> */}
                        {summary.map((text, key) => <p className="leading-6" key={key}>{text}</p>)}
                    </div>
                    <div className="w-full h-auto">
                        <h1 className="font-semibold float-left">Skills: &nbsp;</h1>
                        {skills?.map((skill, key) => <p className="float-left" key={key}>{key !== 0 ? ", " : ""} {skill}</p>)}
                    </div>
                </div>
                <div className=" h-auto pl-6 pr-12 pt-10 pb-11  box-border flex flex-col gap-4 flex-grow">
                    <div>
                        <h1 className="font-semibold float-left">Duration: &nbsp;</h1>
                        <p className="float-left leading-6">{duration}</p>
                    </div>
                    <div>
                        <h1 className="font-semibold float-left">Role: &nbsp;</h1>
                        {role?.map((title, key) => <p className="float-left leading-6" key={key}>{title}{key === (role.length-1) ?  "": ","} &nbsp;</p>)}
                    </div>
                    <div>
                        <h1 className="font-semibold">Team: &nbsp;</h1>
                        {team?.map((members, key) => <p className="float-left leading-6" key={key}>{members}{key === (team.length-1) ?  "": ","} &nbsp;</p>)}
                    </div>
                    <div>
                        <h1 className="font-semibold">Deliverables: &nbsp;</h1>
                        {deliverables?.map((item, key) => <p className="float-left leading-6" key={key}>{item}{key === (deliverables.length-1) ?  "": ","} &nbsp;</p>)}
                    </div>
                </div>
            </div>
            


        </div>


    )

}

export default ProjectOverview