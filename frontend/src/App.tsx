import { FilterHeader, SideBar } from "./components";
import { FilterResultPage } from "./pages";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="relative flex">
      <SideBar />
      <div className="flex-1 flex flex-col pl-4 pr-4">
        <FilterHeader/>
        <div className="px-6 h-screen hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<FilterResultPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
