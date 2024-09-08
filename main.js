const courses = [
    { title: "Web Development", description: "Learn how to build websites from scratch.", price: "Rs.20,000" },
    { title: "Data Science", description: "Master data analysis and machine learning.", price: "Rs.15,000" },
    { title: "Digital Marketing", description: "Become an expert in SEO, PPC, and social media marketing.", price: "Rs.10,000" }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const courseList = document.querySelector('.course-list');
  
    courses.forEach(course => {
      const courseDiv = document.createElement('div');
      courseDiv.classList.add('course');
      courseDiv.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p><strong>${course.price}</strong></p>
        <button onclick="enroll('${course.title}')">Enroll Now</button>
      `;
      courseList.appendChild(courseDiv);
    });
  });
  
  function viewCourses() {
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
  }
  
  function enroll(courseTitle) {
    alert(`You have enrolled in the ${courseTitle} course!`);
  }
  
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for contacting us. We will get back to you soon!');
    contactForm.reset();
  });
  