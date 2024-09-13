import "./style.css"
import githubicon from "./gitHub-black.svg"

const buttonGitHub = () => {
    return (
         <a href="#!" className="btn-outline">
        <img src={githubicon} alt=""/>
        GitHub repo
    </a>
     );
}
 
export default buttonGitHub;