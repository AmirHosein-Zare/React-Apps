import './App.css'
import Tagname from './tagname';
import Title from './Title';

function App(){
  return(
    <div id='Header'>
      {/* Navbar */}
      <nav className="navbar">
        <div id="title">
          <i class="fa-solid fa-snowflake"></i>
          <h1>اسنو</h1>
        </div>
        <ul id='header-text'>
          <Tagname name="صفحه اصلی" class="fa-solid fa-house-user"/>
          <Tagname name="درباره ما" class="fa-solid fa-address-card"/>
          <Tagname name="خدمات" class="fa-brands fa-aws"/>
          <Tagname name="نمونه کارها" class="fa-solid fa-earth-africa"/>
          <Tagname name="پلن ها" class="fa-regular fa-map"/>
          <Tagname name="بازخوردها" class="fa-solid fa-comment"/>
          <Tagname name="تماس باما" class="fa-solid fa-address-book"/>
        </ul>
      </nav>
      {/*Header Title*/}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Title id='header-title'/>
    </div>
  );
}

export default App;