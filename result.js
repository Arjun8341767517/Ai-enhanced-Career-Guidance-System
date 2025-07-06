// 1. Career Database with detailed descriptions
const careerDatabase = {
  Technology: {
    "High School": [
      { title: "Technical Support", description: "Help users troubleshoot and resolve technology issues." },
      { title: "IT Assistant", description: "Assist with IT tasks such as hardware setup and software installation." },
      { title: "Computer Operator", description: "Monitor and control computer systems and networks." }
    ],
    "Diploma": [
      { title: "Web Developer", description: "Build and maintain websites and web applications." },
      { title: "Junior Programmer", description: "Assist in developing and testing software programs." },
      { title: "QA Tester", description: "QA Testers evaluate software applications to identify bugs and ensure they meet quality standards before release.", }
    ],
    "Bachelor's Degree": [
      { title: "Software Engineer", description: "Designs and builds software applications." },
      { title: "Data Analyst", description: "Analyzes data to provide insights and support decision-making." },
      { title: "Cybersecurity Specialist", description: "an organization’s information systems by implementing security measures, monitoring networks for breaches, and responding to cyber threats. They need to be vigilant, detail-oriented, and constantly updated on the latest security trends." }
    ],
    "Master's Degree": [
      { title: "AI Engineer", description: "Develops intelligent systems using machine learning and AI." },
      { title: "Solutions Architect", description: "Designs and oversees software solutions for businesses." },
      { title: "Tech Lead", description: "Leads technology strategy and innovation in a company." }
    ]
  },
  Health: {
    "High School": [
      { title: "Medical Assistant", description: "Supports doctors with clinical tasks and patient care." },
      { title: "Pharmacy Clerk", description: "Helps pharmacists prepare and dispense medication." }
    ],
    "Diploma": [
      { title: "Lab Technician", description: "Conducts lab tests and reports results to doctors." },
      { title: "Nursing Assistant", description: "Provides basic care and support to patients." }
    ],
    "Bachelor's Degree": [
      { title: "Nurse", description: "Provides medical care and emotional support to patients." },
      { title: "Nutritionist", description:"Nutritionists advise on diet and nutrition for better health and disease prevention"},
      { title: "Physiotherapist", description: "Helps patients recover physical strength and mobility." }
    ],
    "Master's Degree": [
      { title: "Public Health Analyst", description: "Studies health trends and evaluates healthcare programs." },
      { title: "Medical Researcher", description: "Conducts studies to advance medical knowledge and treatment." }
    ]
  },
  Art: {
    "High School": [
      { title: "Crafts Maker", description: "Assists in creating handmade goods and artistic items." },
      { title: "Freelance Artist", description: "Draws illustrations or likenesses by hand or digitally." }
    ],
    "Diploma": [
      { title: "Illustrator", description: "Creates visual images to communicate ideas or stories." },
       { title: "Graphic Designer", description: "Creates visual content using digital tools." },
      //{ title: "Photography Assistant", description: "Helps with equipment setup and editing photographs." }
    ],
    "Bachelor's Degree": [
      //{ title: "Graphic Designer", description: "Creates visual content using digital tools." },
      { title: "Animator", description: "Designs and animates characters and environments." },
        { title: "Art Director", description: "Oversees artistic aspects of visual projects or media campaigns." },
         { title: "Fine Artist", description:"Create original works of art such as paintings, sculptures."}
    ],
    "Master's Degree": [
       { title:"Museum Curator", description: "Museum Curators manage collections of artwork and artifacts."},
          {title:"Art Professor",description: "Art Professors teach students about art theory, techniques, and history in universities and art schools."},
          {title: "Senior Art Consultant", description: "Senior Art Consultants advise clients on art acquisitions, investments, and curation."}
       
    ]
  },
  Business: {
    "High School": [
        { title: "Sales Assistant",description: "Sales Assistants help customers find products, process transactions, and maintain a clean store environment." },
          {title: "Cashier",description: "Cashiers handle payments, issue receipts, and assist customers during checkout in retail or food establishments."}
       
      ],
    "Diploma": [
      { title:  "Junior Assistant",description: "Junior Assistants provide clerical support within departments, assisting with paperwork, scheduling, and internal coordination." },
          { title: "HR Assistant",description: "HR Assistants support HR departments in recruitment, onboarding, record-keeping, and employee relations." }
    ],
    "Bachelor's Degree": [
      { title: "Marketing Executive", description: "Develops marketing strategies and manages promotional campaigns." },
      { title: "Business Analyst", description: "Analyzes business performance and suggests improvements." },
      {title:"Operations Manager",description: "Oversees business processes to improve efficiency and productivity." }
        
    ],
    "Master's Degree": [
               { title: "Finance Director", description: "Advises individuals or companies on financial planning." },
          {title: "Management Consultant",description: "Management Consultants help businesses improve performance through analysis, strategic planning, and restructuring."},
          {title:"Business Strategist",description: "Business Strategists analyze market trends, set long-term goals, and create actionable plans to grow a company."}

    ]
  },
  Law: {
    "High School": [
      { title: "Legal Assistant", description: "Provides administrative support in legal offices" },
      { title: "Court Clerk", description: "Assists in maintaining records and courtroom procedures." }
    ],
    "Diploma": [
      { title: "Paralegal", description: "Assists lawyers by preparing documents and conducting research." },
      {title:"Document Reviewer",description: "Document Reviewers examine legal documents for relevance and confidentiality during litigation and investigations."}
    ],
    "Bachelor's Degree": [
      { title: "Lawyer", description: "Represents clients in legal matters and court cases." },
      { title: "Legal Advisor", description: "Provides legal guidance to individuals or companies." }
    ],
    "Master's Degree": [
       { title: "Lawyer", description: "Represents clients in legal matters and court cases." },
      { title: "Legal Advisor", description: "Provides legal guidance to individuals or companies." },
      { title: "Judge", description: "Presides over court cases and ensures legal proceedings are fair." }
    ]
  },
   Design: {
  "High School": [
    { title: "Sketch Artist", "description": "Creates detailed drawings by hand or digitally, often used in art, advertising, or concept design." },
    { title: "DIY Product Creator", "description": "Designs and makes handmade or customized products, often sold online or at craft fairs." }
  ],
  Diploma: [
    { title: "UI Designer", "description": "Creates user-friendly interfaces for websites and apps, focusing on layout, color, and interaction design." },
    { title: "Fashion Illustrator", "description": "Produces artistic representations of clothing designs to communicate ideas to clients and design teams." }
  ],
  "Bachelor's Degree": [
    { title: "Graphic Designer", "description": "Designs visual content like logos, brochures, and digital graphics to communicate messages effectively." },
    { title: "Interior Designer", "description": "Plans and designs interior spaces for aesthetics, functionality, and safety." },
    { title: "Web Designer", "description": "Designs the layout and visual elements of websites to enhance user experience and brand identity." }
  ],
  "Master's Degree": [
    { title: "Design Strategist", "description": "Combines design thinking with business strategy to create innovative solutions and guide product development." },
    { title: "Creative Director", "description": "Leads a creative team in developing concepts for advertising, media, or design projects." },
    { title: "UX Manager", "description": "Oversees user experience design teams, ensuring digital products meet user needs and business goals." }
  ]
}
};

// 2. Suggestion Logic
function getCareerSuggestions(interest, education) {
  return careerDatabase[interest]?.[education] || [{ title: "No suggestions available", description: "" }];
}

// 3. Load user data
const data = JSON.parse(localStorage.getItem("careerData"));
const resultDiv = document.getElementById("result");

if (!data) {
  resultDiv.innerHTML = "<p>No data found. Please go back and fill the form.</p>";
} else {
  const { name, interest, education } = data;
  const suggestions = getCareerSuggestions(interest, education);

  resultDiv.innerHTML = `
    <h2>Hello, ${name}!</h2>
    <p>Based on your interest in <strong>${interest}</strong> and your education level <strong>${education}</strong>, here are some career suggestions:</p>
    <div class="card-container">
      ${suggestions.map(career => `
        <div class="card">
          <a href="career-details.html?career=${encodeURIComponent(career.title)}" class="career-link">
            <h3>${career.title}</h3>
            <p>${career.description}</p>
          </a>
        </div>
      `).join("")}
    </div>
    <canvas id="careerChart" width="400" height="200"></canvas>
    <br/>
    <button id="logoutBtn" class="logout-btn">Logout</button>
  `;

  // 4. Career Chart
  const categories = ["Technology", "Health", "Art", "Business", "Law", "Design"];
  const scores = categories.map(cat => (cat === interest ? 95 : Math.floor(Math.random() * 60 + 20)));

  const ctx = document.getElementById("careerChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: categories,
      datasets: [{
        label: "Career Match Score (%)",
        data: scores,
        backgroundColor: categories.map(cat => cat === interest ? "#4CAF50" : "#888")
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });

  // 5. Logout button
  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("careerData");
    window.location.href = "login.html";
  });
}
