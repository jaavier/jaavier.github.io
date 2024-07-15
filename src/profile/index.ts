import country from "./country"
import resume from "./resume"
import technologies from "./technologies"

type Profile = {
  name: string;
  country: Country; // location.en, location.es
  resume: Resume;
  github: string;
  linkedin: string;
  technologies: Technology;
}

const profile: Profile = {
  name: "Javier Guajardo",
  github: "https://github.com/jaavier",
  linkedin: "https://www.linkedin.com/in/javier-gj/",
  country,
  resume,
  technologies
}

export default profile