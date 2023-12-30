import "./App.css";

function App() {
  return (
    <div>
      <div class="modal-form">
        <span class="close-btn"></span>
      </div>
      <div className="container pt-4 ">
        <h4 className="container heading pb-5">
          Epic Games : An American video game and software developer and
          publisher based in Cary, North Carolina.
        </h4>
        <div className="banner"></div>
        <h5 className="bannersub p-5">
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite ... Drop In.
        </h5>
        <div className="center pb-4 mb-4">
          <button className="btnn1 ">Visit Website</button>
        </div>
        <div className="row container mt-5 pt-5 p-5 center">
          <div className="col-md-4 ">
            <img
              className="txtimg1 "
              alt="textimg"
              src={require("./images/Fortnite.png")}
            />
            <h4 className="txtnew p-4 ">
              Explore large, destructible environments where no two games are
              ever the same.
            </h4>
          </div>
          <div className="col-md-4">
            <img
              className="txtimg1"
              alt="textimg"
              src={require("./images/game.png")}
            />
            <h4 className="txtnew p-4">
              Team Up With friends by sprinting, climbing and smashing your way
              to earn your Victory Royale
            </h4>
          </div>
          <div className="col-md-4">
            <img
              className="txtimg1"
              alt="textimg"
              src={require("./images/game1.png")}
            />
            <h4 className="txtnew p-4">
              Discover even more ways to play across thousands of creator-made
              game genres
            </h4>
          </div>
        </div>
        <h4 className="midhead center  mt-5  pt-5">Our Contribution</h4>
        <h5 className="midsub ">
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user community. Collaborating
          with us represents an investment, rather than a mere expenditure. Our
          dedication to providing distinctive digital interactions guarantees
          unparalleled benefits for our clientele.
        </h5>
        <div className="row pt-3">
          <div className="col-md-4 ">
            <h3 className="numberss p-3">5M</h3>
            <h4 className="numtxt">
              Daily User <br /> Engagements
            </h4>
          </div>
          <div className="col-md-4">
            <h3 className="numberss p-3">$500K</h3>
            <h4 className="numtxt">
              Revenue Surge for an <br /> Platform
            </h4>
          </div>
          <div className="col-md-4">
            <h3 className="numberss p-3">10X</h3>
            <h4 className="numtxt">
              ROAS on all our <br /> marketing campaigns
            </h4>
          </div>
        </div>
        <h3 className="lasttext margintop">
          Interested in delving deeper into the project?
        </h3>
        <div>
          <h4 className="lastsub  padding">
            If you'd like to explore further details about our initiatives or
            any of our affiliated brands, don't hesitate to connect. You can
            reach out to us via email at hello@abc.com or give us a call at +91
            480 20802730.
          </h4>
          <div className="row centers ">
            <div className="col-md-3 col-sm-12 ">
              <button className="btnn2">Rate us on skype</button>
            </div>
            <div className="col-md-3 col-sm-12">
              <button className="btnn3">Contact Us</button>
            </div>
          </div>
        </div>
        <div>
          <h4 className="footer center pb-5 mb-3">
            © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
