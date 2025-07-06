// This function is used in index.html
function handleSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const interest = document.getElementById("interest").value;
  const education = document.getElementById("education").value;

  if (!name || !interest || !education) {
    alert("Please fill in all fields.");
    return;
  }

  localStorage.setItem("careerData", JSON.stringify({
    name,
    interest,
    education
  }));

  window.location.href = "result.html";
}

// This function is used in result.html
function generateSuggestions() {
  const data = JSON.parse(localStorage.getItem("careerData"));
  if (!data) return;

  const { name, interest, education } = data;
  document.getElementById("user-name").textContent = name;
  document.getElementById("user-interest").textContent = interest;
  document.getElementById("user-education").textContent = education;

  // Define suggestion data
   const careerData = {
  Technology: {
    "High School": ["Computer Technician", "IT Support Assistant"],
    "Diploma": ["Web Developer", "Junior Software Engineer"],
    "Bachelor's Degree": ["Software Engineer", "Data Analyst", "System Administrator"],
    "Master's Degree": ["AI Specialist", "Solutions Architect", "CTO"]
  },
  Health: {
    "High School": ["Health Assistant", "Caregiver"],
    "Diploma": ["Medical Lab Technician", "Nursing Assistant"],
    "Bachelor's Degree": ["Registered Nurse", "Physiotherapist"],
    "Master's Degree": ["Public Health Analyst", "Medical Researcher"]
  },
  Art: {
    "High School": ["Art Assistant", "Craft Maker"],
    "Diploma": ["Graphic Designer", "Illustrator"],
    "Bachelor's Degree": ["Animator", "Visual Artist", "Art Director"],
    "Master's Degree": ["Creative Director", "Art Professor"]
  },
  Business: {
    "High School": ["Retail Associate", "Office Clerk"],
    "Diploma": ["Sales Executive", "Marketing Assistant"],
    "Bachelor's Degree": ["Business Analyst", "Marketing Manager", "Accountant"],
    "Master's Degree": ["Business Consultant", "Financial Analyst", "CEO"]
  },
  Law: {
    "High School": ["Court Clerk", "Legal Assistant"],
    "Diploma": ["Paralegal", "Legal Secretary"],
    "Bachelor's Degree": ["Lawyer", "Legal Advisor", "Compliance Officer"],
    "Master's Degree": ["Corporate Lawyer", "Judge", "Legal Consultant"]
  },
  Design: {
    "High School": ["Design Intern", "Creative Assistant"],
    "Diploma": ["Interior Designer", "UX Designer"],
    "Bachelor's Degree": ["UI/UX Designer", "Industrial Designer", "Fashion Designer"],
    "Master's Degree": ["Design Strategist", "Creative Director"]
  }
};

  

  const resultContainer = document.getElementById("suggestions-box");
  resultContainer.innerHTML = "";

  const suggestions = (careerData[interest] && careerData[interest][education]) || [];

  if (suggestions.length === 0) {
    resultContainer.innerHTML = `
      <div class="suggestion-card">
        <h3>No Suggestions</h3>
        <p>Please refine your interest or education level.</p>
      </div>
    `;
  } else {
    suggestions.forEach(career => {
      const card = document.createElement("div");
      card.className = "suggestion-card";
      card.innerHTML = `
        <h3>${career}</h3>
        <p>Description for ${career} will go here. You can add real descriptions in the JS file later.</p>
      `;
      resultContainer.appendChild(card);
    });
  }
}

// Optional: Call this on result.html load
if (window.location.pathname.includes("result.html")) {
  window.onload = generateSuggestions;
}
