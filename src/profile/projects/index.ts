import astro from "./astro"
import golang from "./golang"
import nodejs from "./nodejs"
import python from "./python"
import react from "./react"

const projects: Record<string, Project[]> = {
  astro,
  golang,
  nodejs,
  python,
  react
}

export default projects;