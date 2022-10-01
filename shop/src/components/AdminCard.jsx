
const AdminCard = ({name, description, profilePic, email, githubLink}) => {

    return (
        <><div className="profile-picture">
            <img src={profilePic} alt="pic" />
        </div>
        <div className="profile-info">""
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Email: {email}</p>
            <p>Github: <a href={githubLink}>{githubLink}</a></p>
        </div>
        </>
    )
}

export default AdminCard;