import GoogleFontLoader from "react-google-font-loader";
import Framing from "./components/Framing";

function App() {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Inconsolata",
            weights: [700],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <div className="App" style={{ padding: "25px" }}>
        <Framing />
      </div>
    </>
  );
}

export default App;
