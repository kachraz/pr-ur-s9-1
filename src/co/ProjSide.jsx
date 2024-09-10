// Code for adding the side bar

import Button from "./Butt.jsx";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className=" w-1/3 px-8 py-16 bg-emerald-950 text-emerald-300 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl ">YourPanty</h2>
      <div>
        <Button onClick={onStartAddProject}>+AddPanty</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-emerable-200 hover:bg-emerald-800";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-emerald-800 text-emerald-200";
          } else {
            cssClasses += " text-emerald-400";
          }

          return (
            <li key={project.id}>
              <button className={cssClasses} onClick={onSelectProject}>
                {project.titty}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
