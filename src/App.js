import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section class="header-section">
        <div>    |עלינו</div>
        <div>|בחירת תאריך</div>
        <div>לוגו </div>
      </section>
      <section class="intro">
        <div class="container-into-text">
          <div class="text">
            ברוכים הבאים לאתר
            <span class="Bria-name">
            &nbsp; בריאה
            </span>
            <br/>
            <br/>
            מתחם נופש ברמת הגולן במיוחד בשבילכם
          </div>
        </div>
      </section>
      <div class="about">
        הצימר ממוקם בחווה גלילית ברמת הגולן, במקום פסטורלי ונעים לחוויה מדהימה עבורכם
        <br/>
        יש לנו צימרים לכל המשפחה, לזוגות במיוחד עבור הנאה מיטבית עבורכם
        <br/>
        הצימרים מאובזרים במחבתות, כלים על מנת לחוות הרגשה ביתית ככל האפשר תוך אווירת טבע ורוגע שלא הכרתם
      </div>

      <img src="" alt="" />
      <section className="gallery">
        <div className="gallery-item">
          <img src={require('./assets/images/img1.jpg')} onclick="enlargeImg()" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={require('./assets/images/img2.jpg')} onclick="enlargeImg()" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={require('./assets/images/img3.jpg')} onclick="enlargeImg()" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={require('./assets/images/img4.jpg')} onclick="enlargeImg()" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={require('./assets/images/img5.jpg')} onclick="enlargeImg()" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={require('./assets/images/img6.jpg')} onclick="enlargeImg()" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={require('./assets/images/img1.jpg')} onclick="enlargeImg()" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={require('./assets/images/img2.jpg')} onclick="enlargeImg()" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={require('./assets/images/img3.jpg')} onclick="enlargeImg()" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={require('./assets/images/img4.jpg')} onclick="enlargeImg()" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={require('./assets/images/img5.jpg')} onclick="enlargeImg()" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={require('./assets/images/img6.jpg')} onclick="enlargeImg()" className="gallery-img" />
        </div>
        
      </section>
      <script src="./index.js"></script>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
