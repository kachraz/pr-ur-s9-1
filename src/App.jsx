import NewProject from "./co/NewProj";
import NoProjectSelected from "./co/NoProj";
import ProjectSidebar from "./co/ProjSide";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
