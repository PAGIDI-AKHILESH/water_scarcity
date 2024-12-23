// Select all elements with the class 'animated-element'
const elements = document.querySelectorAll('.section','.sols','.section1','.section2','.section3');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view'); // Add animation class
      observer.unobserve(entry.target); // Stop observing after it's animated
    }
  });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Observe each element
elements.forEach(element => observer.observe(element));
