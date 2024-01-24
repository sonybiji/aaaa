// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Check if the screen width is larger than 768px (adjust this value as needed)
    if (window.innerWidth > 768) {
      // Select the elements you want to animate
      var heroContent = document.querySelector('.hero .content');
      var aboutText = document.querySelector('.about-text');
      var servicesContainer = document.querySelector('.services-container');
      var keyFeaturesContainer = document.querySelector('.key-features-container');
      var contactText = document.querySelector('.contact-text');
  
      // Set up animations using anime.js
      var heroAnimation = anime({
        targets: heroContent,
        translateY: ['-50%', '0'],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        autoplay: false
      });
  
      var aboutAnimation = anime({
        targets: aboutText,
        translateX: ['-100%', '0'],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        autoplay: false
      });
  
      var servicesAnimation = anime({
        targets: servicesContainer,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        autoplay: false
      });
  
      var keyFeaturesAnimation = anime({
        targets: keyFeaturesContainer,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        autoplay: false
      });
  
      var contactAnimation = anime({
        targets: contactText,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        autoplay: false
      });
  
      // Function to check if an element is in the viewport
      function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
      }
  
      // Function to handle scroll events
      function handleScroll() {
        if (isInViewport(heroContent)) {
          heroAnimation.play();
        }
        if (isInViewport(aboutText)) {
          aboutAnimation.play();
        }
        if (isInViewport(servicesContainer)) {
          servicesAnimation.play();
        }
        if (isInViewport(keyFeaturesContainer)) {
          keyFeaturesAnimation.play();
        }
        if (isInViewport(contactText)) {
          contactAnimation.play();
        }
      }
  
      // Attach the handleScroll function to the scroll event
      window.addEventListener('scroll', handleScroll);
  
      // Initial check on page load
      handleScroll();
    }
  });
 