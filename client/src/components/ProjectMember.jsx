import siam from "../assets/siam.jpg";
import sumu from "../assets/sumu.jpg";
import zitu from "../assets/zitu.jpg";
import ProjectMemberData from "./ProjectMemberData";
import "./ProjectMemberStyle.css";

function ProjectMember(){
    return(<div className='pBg'>
        <h2 className="pheading">Meet our Team members</h2>
        <div className="mother">
        <ProjectMemberData 
        img={siam}
        name="Siam Ur Rahman"
        title="Manager, West-Region"
        post="248"
        follower="72k"
        following="187"/>
        <ProjectMemberData 
        img={zitu}
        name="Zitu Hoque"
        title="Founder"
        post="124"
        follower="58k"
        following="67"/>
        <ProjectMemberData 
        img={sumu}
        name="Afsara Sumaiya"
        title="Manager, East-Region"
        post="342"
        follower="90k"
        following="218"/>
       
    </div>
    </div>
    );
}

export default ProjectMember;