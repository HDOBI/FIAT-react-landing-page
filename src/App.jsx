import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import Header from "./components/Header";
import Home from "./components/Home";
import Mixtape from "./components/Mixtape";

function App() {
  return (
    <>
      <Header />
      <Home/>
      <Mixtape />
      <AudioPlayer />
    </>
  );
}

export default App;
