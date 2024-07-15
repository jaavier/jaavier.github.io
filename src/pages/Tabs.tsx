import { useState } from "react";

type Params = {
  projects: Project[];
  lang: string
}

export default function Tabs(props: Params) {
  if (!props) return
  const { projects, lang = "en" } = props
  if (!projects || !projects.length) return
  const [projectSelected, setProjectSelected] = useState<Project>(projects[0])

  return (
    <div
      className="font-fredoka border rounded-ss-xl rounded-ee-xl border-orange-600/50 mt-5 bg-gray-900/60"
    >
      <div className="flex">
        <div className="border-r border-orange-600/50 w-full">
          {
            projects && projects.map((project: Project, index) => (
              <div
                key={index}
                className="hover:bg-gray-900 first:hover:rounded-ss-xl p-5 flex items-center justify-center border-b last:border-b-0 border-orange-600/50 w-full"
                onClick={() => setProjectSelected(project)}
              >
                {project.name}
              </div>
            ))
          }
        </div>
        <div className="p-5 space-y-3 overflow-y-scroll">
          <div className="py-10 h-56">
            <h1 className="text-xl font-base">Description</h1>
            <div>
              {
                projectSelected.description[lang]
              }
            </div>
            <h1 className="text-xl font-base">Features</h1>
            <div>
              {
                projectSelected.features &&
                projectSelected.features.map((feature: string, index: number) => (
                  <div key={index} className="font-light flex gap-2 mb-1">
                    <div className="text-xl">
                      ✔
                    </div>
                    <div className="text-lg">{feature}</div>
                  </div>
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}