document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('#job-search-form');
    const jobListings = document.querySelector('#job-listings');
  
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchTerm = document.querySelector('#search-input').value.toLowerCase();
      
      const jobs = jobListings.querySelectorAll('.job-card');
      jobs.forEach(job => {
        const title = job.querySelector('h3').textContent.toLowerCase();
        const description = job.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          job.style.display = 'block';
        } else {
          job.style.display = 'none';
        }
      });
    });
  });

  
  function submitApplication(jobId) {
    const applicationForm = document.querySelector(`#application-form-${jobId}`);
    
    applicationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(applicationForm);
      
      // Simulating an API call
      fetch('/api/submit-application', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Application submitted successfully!');
          applicationForm.reset();
        } else {
          alert('There was an error submitting your application. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again later.');
      });
    });
  }

  
  let currentPage = 1;
const jobsPerPage = 10;

function loadMoreJobs() {
  const loadMoreButton = document.querySelector('#load-more-button');
  
  loadMoreButton.addEventListener('click', () => {
    currentPage++;
    
    // Simulating an API call to fetch more jobs
    fetch(`/api/jobs?page=${currentPage}&limit=${jobsPerPage}`)
      .then(response => response.json())
      .then(data => {
        const jobListings = document.querySelector('#job-listings');
        
        data.jobs.forEach(job => {
          const jobCard = createJobCard(job);
          jobListings.appendChild(jobCard);
        });
        
        if (data.jobs.length < jobsPerPage) {
          loadMoreButton.style.display = 'none';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to load more jobs. Please try again.');
      });
  });
}

function createJobCard(job) {
  const card = document.createElement('div');
  card.classList.add('job-card');
  card.innerHTML = `
    <h3>${job.title}</h3>
    <p>${job.company}</p>
    <p>${job.location}</p>
    <button onclick="submitApplication(${job.id})">Apply Now</button>
  `;
  return card;
}

loadMoreJobs();


document.addEventListener('DOMContentLoaded', () => {
    const jobPostForm = document.querySelector('#job-post-form');
    
    jobPostForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(jobPostForm);
      
      fetch('/api/post-job', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Job posted successfully!');
          jobPostForm.reset();
        } else {
          alert('There was an error posting the job. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again later.');
      });
    });
  });
  