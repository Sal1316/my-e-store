import "../home/Home.css";
import backgroundVideo from "../../assets/welding-vid.mp4";

function Home() {
  return (
    <div className="home">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="headerContainer">
        <h3>
          BTR1 is a certified welding services provider. We excel in
          quality assurance and adherence to tolerances. We believe that when
          components are built correctly, it makes everyone’s job down the line
          easier.
        </h3>
      </div>
    </div>
  );
}

export default Home;
