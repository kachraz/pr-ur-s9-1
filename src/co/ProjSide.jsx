// Code for adding the side bar

import Button from "./Butt.jsx";

export default function ProjectSidebar({ onStartAddProject }) {
  return (
    <aside className=" w-1/3 px-8 py-16 bg-emerald-950 text-emerald-300 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl ">YourPanty</h2>
      <div>
        <Button onClick={onStartAddProject}>+AddPanty</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
