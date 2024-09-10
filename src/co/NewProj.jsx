import Input from "./Input.jsx";

// new Project component here
export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <Input label="Titty" />
      <Input label="Depanty" textarea />
      <Input label="DueLick" />
    </div>
  );
}
