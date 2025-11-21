class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        footer { font-family: sans-serif; }
        .footer-links a {
          transition: color 0.3s ease, transform 0.3s ease;
          display: block;
          color: #cbd5e1;
          text-decoration: none;
        }
        .footer-links a:hover {
          color: #6366f1;
          transform: translateX(3px);
        }
        .social-icon {
          transition: transform 0.3s ease, color 0.3s ease;
          font-size: 1.25rem;
          color: #cbd5e1;
        }
        .social-icon:hover {
          transform: scale(1.2);
          color: #6366f1;
        }
      </style>

      <footer class="bg-gray-900 text-gray-300 py-12">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4 text-white">ProcureMatch AI</h3>
              <p>Smart AI solution for procurement document verification.</p>
            </div>
            <div>
              <h4 class="font-semibold mb-4 text-white">Quick Links</h4>
              <div class="footer-links space-y-2">
                <a href="index.html">Home</a>
                <a href="demo.html">Demo</a>
                <a href="about.html">Architecture</a>
                <a href="documentation.html">Documentation</a>
              </div>
            </div>
            <div>
              <h4 class="font-semibold mb-4 text-white">Resources</h4>
              <div class="footer-links space-y-2">
                <a href="#">GitHub</a>
                <a href="#">API Docs</a>
                <a href="#">Case Studies</a>
              </div>
            </div>
            <div>
              <h4 class="font-semibold mb-4 text-white">Connect</h4>
              <div class="flex space-x-4">
                <a href="#" class="social-icon"><i data-feather="twitter"></i></a>
                <a href="#" class="social-icon"><i data-feather="github"></i></a>
                <a href="#" class="social-icon"><i data-feather="linkedin"></i></a>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; <span class="current-year"></span> ProcureMatch AI. All rights reserved.</p>
          </div>
        </div>
        <script>
          feather.replace();
          this.shadowRoot.querySelector('.current-year').textContent = new Date().getFullYear();
        </script>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
