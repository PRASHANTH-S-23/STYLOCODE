const teamMembers = [
    {
      name: "Dimitris Strouthou",
      role: "Founder, CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      image: "https://via.placeholder.com/100",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Milan",
      role: "Lead Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      image: "https://via.placeholder.com/100",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Smith",
      role: "Marketing Executive",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      image: "https://via.placeholder.com/100",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Bella Audrey",
      role: "Senior Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      image: "https://via.placeholder.com/100",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "John Doe",
      role: "Software Engineer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      image: "https://via.placeholder.com/100",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];
  
  const container = document.getElementById("team-container");
  
  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.className = "team-card";
  
    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}" class="profile-image">
      <div class="profile-name">${member.name}</div>
      <div class="profile-role">${member.role}</div>
      <div class="profile-description">${member.description}</div>
      <div class="social-icons">
        <a href="${member.social.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      </div>
    `;
  
    container.appendChild(card);
  });
  