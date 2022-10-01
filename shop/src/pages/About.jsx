import AdminCard from "../components/AdminCard";

function About() {
    return (
      <div className="About">
        <header className="About-header">
          <h1>The greatest e-commerce ever - About</h1>
        </header>
      <AdminCard 
        profilePic="foto de perfil"
        name="Maria Camila Recuero"
        description="Full-stack developer from Make It Real camp."
        email= "zeldacamila0913@gmail.com"
        githubLink="https://github.com/zeldacamila"
      />
      </div>
    );
  }
  
  export default About;


