const header = document.getElementById('header');
const contentfulClient = contentful.createClient({
  space: 'YOUR_CONTENTFUL_SPACE_ID', // Replace with your Contentful space ID
  accessToken: 'YOUR_CONTENTFUL_ACCESS_TOKEN' // Replace with your Contentful access token
});

// Fetch content from Contentful
async function fetchContent() {
  const aboutResponse = await contentfulClient.getEntries({ content_type: 'about' });
  const aboutContent = aboutResponse.items[0].fields.content;
  document.querySelector('.about-content').innerHTML = aboutContent;

  const servicesResponse = await contentfulClient.getEntries({ content_type: 'services' });
  const servicesContent = servicesResponse.items[0].fields.content;
  document.querySelector('.services-content').innerHTML = servicesContent;

  const contactResponse = await contentfulClient.getEntries({ content_type: 'contact' });
  const contactContent = contactResponse.items[0].fields.content;
  document.querySelector('.contact-content').innerHTML = contactContent;
}

fetchContent();

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.getElementById(this.getAttribute('href').slice(1));
    const targetPosition = targetSection.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Add parallax scrolling effect
const sections = document.querySelectorAll('main section');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const backgroundImage = section.querySelector('img');
    const backgroundImageY = (scrollY - section.offsetTop) / 5;

    backgroundImage.style.transform = `translateY(${backgroundImageY}px)`;
  });
});

// Update header background color on scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY >= 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
