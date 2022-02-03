import imageInSrc from "./imageInSrc.jpg";
import "./style.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="webone" style="border:solid 1px black;max-width:100vw">
        <h1 className="title red">Othmen El</h1>
        <img src="./imageInSrc.jpg" />
        <br />
        <img src="/image/imageInPublic.png" />
        <br />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default App;
