import { Link } from "react-router-dom";
import AdminCard from "../components/AdminCard";
import Nav from "../components/Nav";
function About() {
    return (
      <>
        <Nav />
        <p><Link to="/">Home</Link></p>
        <div className="About">
          <header className="About-header">
            <h1>About</h1>
          </header>
          <div className="About-card">
            <AdminCard 
              profilePic="foto de perfil"
              name="Maria Camila Recuero"
              description="Full-stack developer from Make It Real camp."
              email= "zeldacamila0913@gmail.com"
              githubLink="https://github.com/zeldacamila"
            />
          </div>
        </div>
      </>

    );
  }
  
  export default About;


