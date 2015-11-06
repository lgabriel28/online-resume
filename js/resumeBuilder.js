
var bio = {
	name: "Luis Santiago",
	role: "Web Application Engineer",
	contacts: {
		mobile: "415-401-5894",
		email: "luis.santiagoayala@gmail.com",
		github: "https://github.com/lgabriel28",
		location: "San Francisco"
	},
	picture:"images/profilePic.jpg",
	welcome: "Welcome to my online resume! Take a look around, learn a little more about me, and feel free to connect.",
	skills: ["Web development","Java","C#", "PHP", "HTML", "JavaScript", "CSS"]
};

var work = {
	"jobs":[
		{
			"title": "Software Engineer",
			"employer": "OpenTable",
			"dates": "2013 - 2015",
			"location": "San Francisco, CA, US",
			"description": "Write solutions for online restaurant applications to consume internal API’s for user validation, password reset, and photo resources. (C# / ASP.NET) "
		},
		{
			"title": "Lead Technology Adminitrator",
			"employer": "Premier Inc.",
			"dates": "2010 - 2013",
			"location": "Fort Lauderdale, FL, US",
			"description": "Designed and developed new specialty disease treatment web applications, generating a revenue growth of approximately $10,000 a month. Developed web applications and Oracle 11g database table design to expedite productivity and reduce 30% of business processing time spent in the Sales and Marketing departments."
		}
	]
};

var projects = {
	"projects":[
		{
			"title": "Portfolio Mockup to HTML",
			"description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
			"images": ["url1", "url2"]
		},
		{
			"title": "Portfolio Mockup to HTML",
			"description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
			"images": ["url1", "url2"]
		}
	]};

var education = {
	"schools":[
	    {
	    	"name": "Interamerican University",
	    	"location": "San Juan, PR, US",
	    	"degree": "BA",
	    	"major": "Comp Sci"
	    },
	    {
	    	"name": "Nova Southeastern University",
	    	"location": "Fort Lauderdale, FL, US",
	    	"degree": "MS",
	    	"major": "Management Information Systems"
	    }
]};


var formattedName = HTMLheaderName.replace("%data%", bio.name) ;
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail =  HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedContact = HTMLcontactGeneric.replace("%data%", "DATA");

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedWelcome);
$("#header").append(formattedBioPic);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub.replace("%url%", bio.contacts.github));
$("#topContacts").append(formattedLocation);

bio.displaySkills = function(skills){
	if(skills.length > 0){
	$("#header").append(HTMLskillsStart);
		for(var i = 0; i < bio.skills.length; i++){
			var fortmattedSkills = HTMLskills.replace("%data%", skills[i]);
			$("#skills").append(fortmattedSkills);
		}
	}
}


work.displayWork = function(){
	if(work.jobs.length > 0){

		for(key in work.jobs){
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
}

projects.display = function(){

	for(key in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDescription);
	}
}

function inName(fullName){
    var names = [];

    fullName = fullName.toLowerCase().trim();
	names = fullName.split(" ");

	var firstName = names[0][0].toUpperCase() + names[0].slice(1);
	var lastName = names[1].toUpperCase();

	return firstName +" "+ lastName;
}

work.displayWork();
projects.display();
bio.displaySkills(bio.skills);


// show map
$("#mapDiv").append(googleMap);