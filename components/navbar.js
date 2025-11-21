class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        * { box-sizing: border-box; }
        .navbar {
          position: fixed;
          top: 0; left: 0; width: 100%;
          background-color: rgba(255,255,255,0.95);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          z-index: 50;
        }
        .navbar.scrolled { box-shadow: 0 2px 12px rgba(0,0,0,0.1); }
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #6366f1;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .mobile-menu { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; }
        .mobile-menu.open { max-height: 500px; }
        .cta-button { transition: all 0.3s ease; }
        .cta-button:hover { background-color: #4f46e5; }
      </style>

      <nav class="navbar">
        <div class="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="index.html" class="flex items-center font-bold text-xl text-gray-800">ProcureMatch AI</a>

          <div class="hidden md:flex items-center space-x-6">
            <a href="index.html" class="nav-link text-gray-700">Home</a>
            <a href="demo.html" class="nav-link text-gray-700">Demo</a>
            <a href="about.html" class="nav-link text-gray-700">Architecture</a>
            <a href="documentation.html" class="nav-link text-gray-700">Documentation</a>
            <a href="demo.html" class="cta-button bg-blue-600 text-white px-4 py-2 rounded-lg">Try Demo</a>
          </div>

          <div class="md:hidden">
            <button id="mobile-menu-button" class="text-gray-700"><i data-feather="menu"></i></button>
          </div>
        </div>

        <div id="mobile-menu" class="mobile-menu md:hidden bg-white shadow-lg">
          <div class="flex flex-col px-4 py-4 space-y-2">
            <a href="index.html" class="block px-4 py-2 rounded-lg hover:bg-gray-100">Home</a>
            <a href="demo.html" class="block px-4 py-2 rounded-lg hover:bg-gray-100">Demo</a>
            <a href="about.html" class="block px-4 py-2 rounded-lg hover:bg-gray-100">Architecture</a>
            <a href="documentation.html" class="block px-4 py-2 rounded-lg hover:bg-gray-100">Documentation</a>
            <a href="demo.html" class="block px-4 py-2 mt-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700">Try Demo</a>
          </div>
        </div>
      </nav>

      <script>
        const menuButton = this.shadowRoot.getElementById('mobile-menu-button');
        const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
        const navbar = this.shadowRoot.querySelector('.navbar');

        menuButton.addEventListener('click', () => mobileMenu.classList.toggle('open'));

        window.addEventListener('scroll', () => {
          if (window.scrollY > 10) navbar.classList.add('scrolled');
          else navbar.classList.remove('scrolled');
        });

        feather.replace();
      </script>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
