/********************************************************
 * Three.js 3D Scene for the Hero Section
 ********************************************************/
const container = document.getElementById('three-canvas-container');

// Set up Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.z = 4;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Add a basic ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add directional light
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(5, 5, 5);
scene.add(dirLight);

// Create a rotating geometry (e.g., Torus)
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 60);
const material = new THREE.MeshStandardMaterial({ color: 0x007bff });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the torus
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});



/********************************************************
 * "Read More" Button for Testimonials
 ********************************************************/
const readMoreButtons = document.querySelectorAll('.read-more-btn');
readMoreButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const testimonial = btn.closest('.testimonial');
    const shortText = testimonial.querySelector('.short-text');
    const fullText = testimonial.querySelector('.full-text');

    // Toggle hidden class on the full text
    fullText.classList.toggle('hidden');

    // Toggle the short text from visible to hidden by changing line clamp
    if (fullText.classList.contains('hidden')) {
      shortText.style.display = '-webkit-box';
      btn.textContent = 'Read More';
    } else {
      shortText.style.display = 'none';
      btn.textContent = 'Show Less';
    }
  });
});

/********************************************************
 * Basic Contact Form Behavior
 ********************************************************/
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
  });
}

/********************************************************
 * Work Experience - Toggle "Show Details"
 ********************************************************/
const toggleButtons = document.querySelectorAll('.exp-toggle-btn');
toggleButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const expItem = btn.closest('.experience-item');
    const content = expItem.querySelector('.experience-content');
    content.classList.toggle('hidden');
    
    if (content.classList.contains('hidden')) {
      btn.textContent = 'Show Details';
    } else {
      btn.textContent = 'Hide Details';
    }
  });
});

