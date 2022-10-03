import { FilterHeader, SideBar } from "./components";
import { FilterResultPage } from "./pages";
import {Routes, Route} from 'react-router-dom'
import { TopCats } from "./components/top-cats";
function App() {
  return (
    <div className="relative flex">
      <SideBar />
      <div className="flex-1 flex flex-col pl-4 pr-4">
        <FilterHeader/>
        <div className="px-6 h-screen hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<FilterResultPage />} />{/* 
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} /> */}
            </Routes>
          </div>
          <div className="relative top-0 h-fit">
            <TopCats/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
