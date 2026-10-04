/**
* Template Name: Workfolio
* Template URL: https://bootstrapmade.com/workfolio-bootstrap-portfolio-template/
* Updated: Jun 09 2026 with Bootstrap v5.3.8
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on link click, with special handling for dropdown parent
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', (e) => {
      const isDropdownParent = navmenu.parentElement.classList.contains('dropdown');
      if (document.querySelector('.mobile-nav-active')) {
        if (isDropdownParent) {
          e.preventDefault();
          navmenu.classList.toggle('active');
          if (navmenu.nextElementSibling) {
            navmenu.nextElementSibling.classList.toggle('dropdown-active');
          }
          return;
        }
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns on chevron icon click
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(toggleBtn => {
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const parentLink = this.closest('a');
      if (parentLink) {
        parentLink.classList.toggle('active');
        if (parentLink.nextElementSibling) {
          parentLink.nextElementSibling.classList.toggle('dropdown-active');
        }
      }
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader - remove immediately to allow instant FCP
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    preloader.remove();
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('load', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter (safe check)
   */
  if (typeof PureCounter === 'function') {
    new PureCounter();
  }

  /**
   * Animate the skills items on reveal (Native IntersectionObserver - zero reflow)
   */
  const skillsAnimation = document.querySelectorAll('.skills-animation');
  if (skillsAnimation.length > 0) {
    if ('IntersectionObserver' in window) {
      const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progress = entry.target.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      skillsAnimation.forEach(item => skillsObserver.observe(item));
    } else {
      skillsAnimation.forEach(item => {
        const progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      });
    }
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Multi-page & Section Scrollspy
   */
  const navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    // Current page filename / slug normalized
    const rawPath = window.location.pathname.replace(/\/$/, '') || '/';
    const currentSlug = rawPath.replace(/\.html$/, '').split('/').pop() || 'index';
    
    // Find section matching active hash in navmenu if any
    let currentHash = null;
    const position = window.scrollY + 200;

    navmenulinks.forEach(link => {
      if (link.hash && link.hash.startsWith('#')) {
        try {
          const section = document.querySelector(link.hash);
          if (section) {
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
              currentHash = link.hash;
            }
          }
        } catch (err) {
          // ignore invalid selectors
        }
      }
    });

    navmenulinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (!linkHref) return;
      
      const linkClean = linkHref.split('#')[0].replace(/\/$/, '') || '/';
      const linkSlug = linkClean.replace(/\.html$/, '').split('/').pop() || 'index';

      const isTopLevel = link.closest('ul') === document.querySelector('.navmenu > ul');
      const isDropdownChild = !!link.closest('.dropdown ul');

      const isServiceSubpage = rawPath.includes('/layanan/') || rawPath.includes('layanan');
      const isPortfolioSubpage = rawPath.includes('/portofolio/') || rawPath.includes('portofolio');
      const isBlogSubpage = rawPath.includes('/blog/') || rawPath.includes('blog');

      // Check if this link represents the current page
      const isHomeLink = linkClean === '/' || linkSlug === 'index';
      const isAtHome = rawPath === '/' || currentSlug === 'index';

      const isCurrentPage = (isHomeLink && isAtHome) ||
                            (!isHomeLink && (linkClean === rawPath || linkSlug === currentSlug)) || 
                            (isServiceSubpage && linkSlug === 'layanan' && isTopLevel) ||
                            (isPortfolioSubpage && linkSlug === 'portofolio' && isTopLevel) ||
                            (isBlogSubpage && linkSlug === 'blog' && isTopLevel);

      if (isTopLevel) {
        if (isCurrentPage) {
          link.classList.add('active');
        } else {
          if (currentHash && link.hash === currentHash) {
            link.classList.add('active');
          } else if (!link.hash) {
            link.classList.remove('active');
          }
        }
      } else if (isDropdownChild) {
        if ((linkClean === rawPath || linkSlug === currentSlug) && !link.hash) {
          link.classList.add('active');
        } else if (currentHash && link.hash === currentHash) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('load', navmenuScrollspy);

  /**
   * Unified, high-performance throttled scroll runner (Zero forced reflow)
   */
  let isScrollTicking = false;
  function onScrollThrottled() {
    if (!isScrollTicking) {
      window.requestAnimationFrame(() => {
        toggleScrolled();
        toggleScrollTop();
        navmenuScrollspy();
        isScrollTicking = false;
      });
      isScrollTicking = true;
    }
  }
  document.addEventListener('scroll', onScrollThrottled, { passive: true });

  /**
   * Table of Contents Toggle Text (Buka / Tutup)
   */
  document.querySelectorAll('.article-toc-box').forEach(toc => {
    const toggleText = toc.querySelector('.toc-toggle-text');
    if (toggleText) {
      toc.addEventListener('toggle', () => {
        toggleText.textContent = toc.open ? 'Tutup' : 'Buka';
      });
    }
  });

})();