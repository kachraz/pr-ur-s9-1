import NewProject from "./co/NewProj";
import ProjectSidebar from "./co/ProjSide";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NewProject />
    </main>
  );
}

export default App;
