// Code for adding the side bar

export default function ProjectSidebar() {
  return (
    <aside className=" w-1/3 px-8 py-16 bg-emerald-950 text-emerald-300 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl ">YourPanty</h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-indigo-900 text-indigo-400 hover:text-indigo-100 hover:bg-indigo-600">
          +AddPanty
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
