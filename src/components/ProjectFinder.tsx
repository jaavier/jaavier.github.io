import { useState } from "react"
import projects from "../profile/projects"
import Card from "./Card.astro"
import CardReact from "./CardReact"
import CardReactSeeAll from "./CardReactSeeAll"

const alias: Record<string, string> = {
  astro: "Astro",
  "react": "React.js",
  nodejs: "Node.js",
  golang: "Go",
  python: "Python",
  solidity: "Solidity",
}

export default function ProjectFinder() {
  const [languages, setLanguages] = useState<string[]>(() => Object.keys(projects))
  const [languageSelected, setLanguageSelected] = useState<string>("All")

  const ButtonLanguage = ({ text, children, onClick }: { children?: React.ReactNode, text: string, onClick: () => void }) => (
    <div
      onClick={onClick}
      className={`flex gap-2 items-center justify-center hover:cursor-pointer flex-1 border border-orange-600/50 bg-gray-900/60 px-1 py-2 text-center rounded-ss-xl rounded-ee-xl hover:bg-orange-600 ${languageSelected === text && "bg-orange-600"}`}
    >
      {children}
      {alias[text] || "All"}
    </div>
  )
  return <div>
    <div className="mt-5 text-3xl font-fredoka">Projects</div>
    <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 my-3">
      <ButtonLanguage
        onClick={() => setLanguageSelected("All")} text="All" />
      {
        languages && languages.map((language: string, index: number) => (
          <ButtonLanguage
            key={index}
            onClick={() => setLanguageSelected(language)}
            text={language}
          >
            <div
              className={`h-5 w-5 rounded-md`}
              style={{ background: `url(/assets/${language}.svg)` }}
            />

          </ButtonLanguage>
        ))
      }
    </div>
    <div
      className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mt-5 gap-5"
    >
      {
        languages && languages.map((language: string, index: number) => (
          projects[language].slice(0, languageSelected === "All" ? 1 : 2).filter(project => language === languageSelected || languageSelected === "All").map((project: Project, index: number) => {
            return ((
              <div key={index}>
                <CardReact  {...project} description={project.description["en"].slice(0, 100) + "..."} path={language} title={project.name} />
              </div>
            ))
          })
        ))

      }
      {
        languageSelected !== "All" && projects[languageSelected] && projects[languageSelected].length > 2 ? <div>
          <CardReactSeeAll language={alias[languageSelected]} url={`/${languageSelected}`} />
        </div> : null
      }
    </div>
  </div >
}