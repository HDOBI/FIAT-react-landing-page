import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import BlessingCover from "./components/BlessingCover";
import Header from "./components/Header";
import Home from "./components/Home";
import Mixtape from "./components/Mixtape";
import Socialicons from "./components/Socialicons";

function App() {
  return (
    <>
      <Header />
      <Home/>
      <Mixtape />
      <AudioPlayer />
      <Socialicons/>
      <BlessingCover/>
    </>
  );
}

export default App;
