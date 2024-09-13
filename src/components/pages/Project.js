import githubicon from "./../btngithub/gitHub-black.svg"
import { useParams } from "react-router-dom"
import { projects } from "../../helpers/ProjectsList"

const Project = () => {
    const {id} = useParams();
    const project = projects[id];
    console.log(project)
    return ( 
    <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>
                

                <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>{project.skills}</p>
                </div>

                {project.gitHubLink && (<a href="https://github.com" target="_blank" rel="noreferrer" className="btn-outline">
                    <img src={githubicon} alt=""/>
                    GitHub repo
                </a>)}

            

                

            </div>
        </div>
    </main>
     );
}
 
export default Project;