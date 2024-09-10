//Selected Projects

export default function SelectedProject({ project }) {
  const formattedDate = new Date(project.duelick).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-10">
      <header className="pb-4 mb-4 border-b-2 border-emerald-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-emerable-600 mb-2">
            {project.titty}
          </h1>
          <button className="text-emerald-600 hover:text-emerald-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-emerald-400">{formattedDate}</p>
        <p className="text-emerald-600 whitespace-pre-wrap">
          {project.depanty}
        </p>
      </header>
      TASKS
    </div>
  );
}
