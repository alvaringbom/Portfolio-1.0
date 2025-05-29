import ProfilePicture from "../images/selfie.png";

const Intro = () => {
  return (
    <>
      <div className="intro-content">
        <div className="profile-picture-container">
          <img
            src={ProfilePicture}
            alt="Bild på mitt ansikte"
            className="profile-picture"
          />
        </div>

        <div className="intro-text">
          <h1>Hej! Välkommen till min portfolio.</h1>
          <p className="intro-typewriter">
            Jag heter <span className="alva-ringbom">Alva Ringbom</span> och gör
            användarcentrerade upplevelser med kompetens inom UX, UI och
            frontend{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
