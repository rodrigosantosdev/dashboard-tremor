import LeftColumns from "./components/LeftColumns";
import Navbar from "./components/Navbar";
import RightColumns from "./components/RightColumns";
import Sidebar from "./components/SIdebar";

function App() {
  return (
    <>
      <main className="flex bg-dark-tremor-brand-faint text-dark-tremor-background-emphasis">
        <Sidebar />
        <div className="flex flex-col w-full p-8">
          <Navbar />
          <div className="grid w-full grid-cols-3 gap-4 mt-4">
            <div className="col-span-2">
              <LeftColumns />
            </div>
            <div className="w-full">
              <RightColumns />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
