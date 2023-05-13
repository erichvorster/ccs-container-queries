import Cards from "./components/Cards";
import cam1 from "./assets/cam1.jpg";
import cam2 from "./assets/cam2.jpg";
import cam3 from "./assets/cam3.jpg";

function App() {
  return (
    <>
      <main className="m-4 grid gap-12 bg-slate-100 xl:grid-cols-2">
        <Cards img={cam1} title={"This is ma blog"} />
        <Cards img={cam2} title={"This is ma blog"} />
        <Cards img={cam3} title={"This is ma blog"} />
      </main>
    </>
  );
}

export default App;
