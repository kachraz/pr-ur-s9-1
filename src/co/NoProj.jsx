// Fallback content when no content

import npo from "../assets/np.png";
import Button from "./Butt";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={npo}
        alt="nothingBastard"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-emerald-500 mt-4 my-4">
        Nothing Nigaz
      </h2>
      <p className="text-indigo-400 mb-4">SelectSomethingIdiot</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>CreatePanty</Button>
      </p>
    </div>
  );
}
