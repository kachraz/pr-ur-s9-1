import { useRef } from "react";
import Input from "./Input.jsx";

// new Project component here
export default function NewProject({ onAdd }) {
  const titty = useRef();
  const depanty = useRef();
  const duelick = useRef();

  function handleSave() {
    const enteredTitty = titty.current.value;
    const enteredDepanty = depanty.current.value;
    const enteredDuelick = duelick.current.value;

    //validation...
    onAdd({
      titty: enteredTitty,
      depanty: enteredDepanty,
      duelick: enteredDuelick,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-emerald-300 hover:bg-cyan-400 hover:text-rose-900 bg-indigo-700 px-6 py-2 rounded-md ">
            Cancel
          </button>
        </li>
        <li>
          <button
            className=" px-6 py-2 rounded-md bg-stone-800 text-emerald-50 hover:bg-emerald-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <Input type="text" ref={titty} label="Titty" />
      <Input ref={depanty} label="Depanty" textarea />
      <Input type="date" ref={duelick} label="DueLick" />
    </div>
  );
}
