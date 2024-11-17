import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import BlessingCover from "./components/BlessingCover";
import Bottom from "./components/Bottom";
import Header from "./components/Header";
import Home from "./components/Home";
import Mixtape from "./components/Mixtape";
import Socialicons from "./components/Socialicons";
import WhereTo from "./components/WhereTo";

function App() {
  return (
    <div class='max-w-[1200px] mx-auto overflow-x-hidden'>
      <Header />
      <Home/>
      <Mixtape />
      <AudioPlayer />
      <Socialicons/>
      <BlessingCover/>
      <WhereTo/>
      <Bottom/>
    </div>
  );
}

export default App;
