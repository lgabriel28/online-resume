
// Define all objects needed to hold the data that will be displayed on the page.
var bio = {
	name: "Luis Santiago",
	role: "Web Application Engineer",
	contacts: {
		mobile: "415-401-5894",
		email: "luis.santiagoayala@gmail.com",
		github: "https://github.com/lgabriel28",
		location: "San Francisco",
		twitter:"@signumsantiago"
	},
	picture:"images/profilePic.jpg",
	welcome: "Welcome to my online resume! I am passionate about the fusion of creativity and science through the "+
			 "creation of beautiful and robust web applications. Take a look around, learn a little more about me, and feel free to connect.",
	skills: ["Web application development","C#", "PHP", "Java", "HTML", "JavaScript", "CSS"]
};

var work = {
	"jobs":[{
			"title": "Software Engineer",
			"employer": "OpenTable",
			"dates": "2013 - 2015",
			"location": "San Francisco, CA, US",
			"description": "Write solutions for online restaurant applications to consume internal API’s for user "+
							"validation, password reset, and photo resources. (C# / ASP.NET)"
			},
			{
			"title": "Lead Technology Adminitrator",
			"employer": "Premier Inc.",
			"dates": "2010 - 2013",
			"location": "Fort Lauderdale, FL, US",
			"description": "Designed and developed new specialty disease treatment web applications, generating a revenue growth " +
							   "of approximately $10,000 per month. Developed web applications and Oracle 11g database table design to " +
							   "expedite productivity and reduce 30% of business processing time spent in the Sales and Marketing departments."
			},
			{
			"title": "Software Engineer",
			"employer": "NASA Langley Research Center",
			"dates": "2008-2009",
			"location": "Hampton, VA, US",
			"description": "Developed educational video game using bio-cybernetic technology for ADHD patients. Researched the use of brainwave " +
							   "biofeedback in game-based learning environments to improve teaching and learning techniques."
			}]
};

var projects = {
	"projects":[{
		"title": "Portfolio Mockup to HTML",
		"description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
		"images": ["images/project.png"],
		"dates": "2015"
		}
	]};

var education = {
	"schools":[{
		"name": "Interamerican University",
		"location": "San Juan, PR, US",
		"degree": "BA",
		"majors": ["Computer Science"],
		"dates": 2009,
		"url": "www.inter.edu"
	    },
	    {
	    "name": "Nova Southeastern University",
	    "location": "Fort Lauderdale, FL, US",
	    "degree": "MS",
	    "majors": ["Management Information Systems"],
	    "dates": 2015,
	    "url":"www.nsu.edu"
		}],
	"onlineCourses":[{
		"title": "Front-end Developer Nanodegree",
		"school": "Udacity",
		"date": "2015",
		"url": "www.udacity.com"
	}]
};

/**
* @description Display header, skills, and contacts on either top or 
			   footer sections depending on the arguments beign passed. 
*/
bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name) ;
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcome);

	if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
		for(var i = 0; i < bio.skills.length; i++){
			var fortmattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(fortmattedSkills);
		}
	}

	// Initialize posible sections
	var sectionId = ["#topContacts", "#footerContacts"];
	var sections = ["top", "footer"];

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail =  HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	sectionId.forEach(function(val){
		$(val).append(formattedMobile);
		$(val).append(formattedEmail);
		$(val).append(formattedGitHub.replace("%url%", bio.contacts.github));
		$(val).append(formattedLocation);
	});

};

/**
* @description Display work experience.
*/
work.display = function(){
	if(work.jobs.length > 0){
		for(var key = 0; key < work.jobs.length; key++){
			$("#workExperience").append(HTMLworkStart);
			var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[key].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[key].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[key].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[key].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[key].description);
			$(".work-entry:last").append(formattedemployer + formattedWorkTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

/**
* @description Display projects and images.
*/
projects.display = function(){

	for(var key = 0; key < projects.projects.length; key++){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[key].images.length > 0){
			projects.projects[key].images.forEach(function(val){
				var formattedImage = HTMLprojectImage.replace("%data%", val);
				$(".project-entry:last").append(formattedImage);
			});
		}
	}
};

/**
* @description Display set of skills added within the bio object.
* @param {object} skills - An object containing professional skills.
*/
education.display = function(){
	if(education.schools.length > 0){

		for(var key = 0; key < education.schools.length; key++){
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[key].name);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[key].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[key].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[key].majors[0]);

			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
		}
	}
};

/**
* @description Formats the full name into a international-friendly format.
* @param {string} fullname - Candidate's full name.
*/
function inName(fullName){
    var names = [];

    fullName = fullName.toLowerCase().trim();
	names = fullName.split(" ");

	var firstName = names[0][0].toUpperCase() + names[0].slice(1);
	var lastName = names[1].toUpperCase();

	return firstName +" "+ lastName;
}

// Invoke display functions.
work.display();
projects.display();
bio.display();
education.display();

// show map
$("#mapDiv").append(googleMap);