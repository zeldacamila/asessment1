
const AdminCard = ({name, description, profilePic, email, githubLink}) => {

    return (
        <>
            <div className="profile">
                <div className="profile-picture">
                    <img src={require(`../../public/${profilePic}.jpeg`)} alt="" />
                </div>
                <div className="profile-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Github:</strong> <a href={githubLink}>{githubLink}</a></p>
                </div>
            </div>
        </>
    )
}

export default AdminCard;