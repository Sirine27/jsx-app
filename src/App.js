import imageInSrc from "./imageInSrc.jpg"
import './style.css';



function App() {
  return (
    <div className="App-header">
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">My Name is Mathlouthi Sirine</h1>
      <br />
      <img src= {imageInSrc}  className="myImage" alt='imageInSrc' />
      <br />
      <img src="/imageInPublic.jpg" className="myImage" alt="imageInPublic" />
    </div>
    <vidéo width={320} height={240} contrôles>
    <source src="myVideo.mp4" type="video/mp4" />
    </vidéo>
  </div>
  );
}

export default App;
