import "./ProjectMemberStyle.css";

function ProjectMemberData(props){
    return(
        <div className="pcard">
        <div className="imgBx">
            <img src={props.img} alt="img"/>
        </div>
        <div className='pcontent'>
            <div className="pdetails">
                <h2>{props.name}<br/><span>{props.title}</span></h2>
                <div className="pdata">
                    <h3>{props.post}<br/><span>Posts</span></h3>
                    <h3>{props.follower}<br/><span>Followers</span></h3>
                    <h3>{props.following}<br/><span>Following</span></h3>
                </div>
                <div className="pactionBtn">
                    <button>Follow</button>
                    <button>Message</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProjectMemberData;