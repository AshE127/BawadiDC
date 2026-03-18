/* ── Bawadi — Shared nav & footer (injected into every page) ── */
(function () {

  const NAV_HTML = `
<nav class="nav" id="main-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="https://bawadidc.com/wp-content/uploads/2019/11/New-Bawadi-logo-for-menu-184x69.jpg" alt="Bawadi Mediterranean Grill" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <div class="nav-logo-text" style="display:none">Bawadi<span>Mediterranean Grill</span></div>
    </a>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="menu.html">Menu</a>
      <a href="buffet.html">Buffet</a>
      <a href="catering.html">Catering</a>
    </div>
    <div class="nav-order-btns">
      <a href="https://www.toasttab.com/bawadi-mediterranean-grill/v2/online-order#!/" target="_blank" rel="noopener" class="nav-btn-pickup">Order Pickup</a>
      <a href="https://www.toasttab.com/bawadi-mediterranean-grill/v2/online-order#!/" target="_blank" rel="noopener" class="nav-btn-delivery">Delivery</a>
      <a href="https://www.halal.delivery/order/restaurant/bawadi-mediterranean-grill--menu/3" target="_blank" rel="noopener" class="nav-btn-halal">Halal Delivery</a>
    </div>
    <button class="nav-hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-mobile">
  <a href="index.html">Home</a>
  <a href="about.html">About Us</a>
  <a href="menu.html">Menu</a>
  <a href="buffet.html">Buffet</a>
  <a href="catering.html">Catering</a>
  <div class="mobile-order-btns">
    <a href="https://www.toasttab.com/bawadi-mediterranean-grill/v2/online-order#!/" target="_blank" rel="noopener" class="mob-btn-pickup">&#x1F6D2; Order Pickup</a>
    <a href="https://www.toasttab.com/bawadi-mediterranean-grill/v2/online-order#!/" target="_blank" rel="noopener" class="mob-btn-delivery">&#x1F6F5; Bawadi Delivery</a>
    <a href="https://www.halal.delivery/order/restaurant/bawadi-mediterranean-grill--menu/3" target="_blank" rel="noopener" class="mob-btn-halal">&#x2605; Halal Delivery</a>
  </div>
</div>`;

  const FOOTER_HTML = `
<div class="tatreez-stripe"></div>
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <h4>Bawadi Mediterranean Grill</h4>
        <p>Authentic Mediterranean &amp; Palestinian cuisine, served with love and tradition since 2018. Fully Halal.</p>
        <div class="footer-social">
          <a href="https://www.facebook.com/Bawadimediterraneangrillandsweetscafe/" target="_blank" rel="noopener" title="Facebook">&#x1F426;</a>
          <a href="https://www.yelp.com/biz/bawadi-mediterranean-grill-falls-church-2" target="_blank" rel="noopener" title="Yelp">&#x2665;</a>
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="menu.html">Menu</a>
          <a href="buffet.html">Buffet</a>
          <a href="catering.html">Catering</a>
        </div>
      </div>
      <div>
        <h4>Order Online</h4>
        <div class="footer-links">
          <a href="https://www.toasttab.com/bawadi-mediterranean-grill/v2/online-order#!/" target="_blank" rel="noopener">Order Pickup (Toast)</a>
          <a href="https://www.toasttab.com/bawadi-mediterranean-grill/v2/online-order#!/" target="_blank" rel="noopener">Bawadi Delivery</a>
          <a href="https://www.halal.delivery/order/restaurant/bawadi-mediterranean-grill--menu/3" target="_blank" rel="noopener">Halal Delivery</a>
          <a href="https://www.toasttab.com/catering/bawadi-mediterranean-grill" target="_blank" rel="noopener">Catering Order (Toast)</a>
        </div>
      </div>
      <div>
        <h4>Visit Us</h4>
        <span class="footer-col-label">Address</span>
        <p>6304 Leesburg Pike<br>Falls Church, VA 22044</p>
        <span class="footer-col-label">Phone</span>
        <p><a href="tel:7038451600">(703) 845-1600</a></p>
        <span class="footer-col-label">Hours</span>
        <p style="color:rgba(255,255,255,.4);font-size:.8rem;">⚠ Confirm with restaurant — hours vary</p>
        <p>Sun–Thu: 11am – 12am<br>Fri–Sat: 11am – 1am</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 Bawadi Mediterranean Grill. All rights reserved.</span>
      <span>6304 Leesburg Pike, Falls Church, VA 22044</span>
    </div>
  </div>
</footer>
<button class="scroll-top" aria-label="Back to top">&#x2191;</button>`;

  /* Inject nav before body content */
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  /* Inject footer at end of body */
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

})();
