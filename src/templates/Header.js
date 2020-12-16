const Header = () => {


  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="#">
            100tifi.co
          </a>
        </h1>
      </div>
      <div class="Header-nav">
       <a href="#/about/">
        About  
       </a>
       <button class="switch" id="switch">
        <span><i class="fas fa-sun"></i></span>
        <span><i class="fas fa-moon"></i></span>
       </button>
      </div>
    </div>`;

    return view;
}

export default Header;