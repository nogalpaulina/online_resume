//  JSON 

var bio = {
	"name" : "Paulina Nogal",
	"role" : "Web developer",
	"welcomeMessage" : "I'm a scrupulous and ambitious person. My goal is to learn and grow every day. I like to be challenged and have my efforts count. I enjoy working in groups with smart and creative people whom I can learn from. In the short-term, I continue to develop valuable skills that will get me closer to having a meaningful career as a web developer.",
	"contactInfo" : {
				"email" : "panokadev@gmail.com",
				"website" : "www.paulinanogal.com",
				"github" : "nogalpaulina",
				"twitter" : "@pjnogal",
				"location" : "Newport, RI"
	},
	"skills" : ["HTML5", "CSS3", "JavaScript", "Responsive design", "Bootstrap", "Project management", "Time management"],
	"pictureUrl" : "images/profile2.jpg"
}

var work = {
	"jobs" : [
		{
			"employer" : "Au Pair in America",
			"title" : "Au Pair",
			"locations" : ["Denver CO ", "Tiburon CA ", "Fairfield CT"],
			"dates" : "December 2012 - December 2014",
			"description" : "I've been taking care of kids in America. I have had to be responsible and well-organized every day. I have had to quickly adjust to new environments and lifestyles."
		},
		{
			"employer" : "Swojski Smak Restaurant",
			"title" : "Manager Assistant",
			"locations" : ["Gdansk, Poland"],
			"dates" : "September 2009 - December 2012",
			"description" : "Solving employee's issues and customer service, organizing daily schedules, and ordering restaurant supplies. Serving to mostly international customers."
		},
		{
			"employer" : "Orange Telecommunications",
			"title" : "Customer Service Representative",
			"locations" : ["Gdansk, Poland"],
			"dates" : "January 2010 - June 2012",
			"description" : "Assisting customers to keep, extend or change their contracts with the company. Adjusting new plans and contracts for each customer's needs."
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Vilabam Greenhouses",
			"url" : "http://paulinanogal.com/greenhouse/",
			"dates" : "2015",
			"description" : "Modern, responsive business website featuring a video background. Technologies used: HTML5, CSS3, Bootstrap",
			"images" : ["http://paulinanogal.com/wp-content/uploads/2015/07/greenhouse-560x450.jpg"]
		},
		{
			"title" : "Dog adoptions",
			"url" : "http://paulinanogal.com/dog_adoptions/",
			"dates" : "2015",
			"description" : "Website promoting dog adoptions with parallax scrolling and infographic. Technologies used: HTML5, CSS3, Google Fonts, Font Awesome, Bootstrap",
			"images" : ["http://paulinanogal.com/wp-content/uploads/2015/06/pic-560x450.png"]
		},
		{
			"title" : "Viss Schubben Restaurant",
			"url" : "http://paulinanogal.com/nordic_cuisine/",
			"dates" : "2015",
			"description" : "Responsive website for nordic quisine family restaurant. Technologies used: HTML5, CSS3, Bootstrap, Google Fonts, Font Awesome",
			"images" : ["http://paulinanogal.com/wp-content/uploads/2015/05/vis-560x450.png"]
		},
		{
			"title" : "Law office of J. & K. Plowrells",
			"url" : "http://paulinanogal.com/lawyer/",
			"dates" : "2015",
			"description" : "Clean, modern website for private law office. Technologies used: HTML5, CSS3, Bootstrap, Google Fonts",
			"images" : ["http://paulinanogal.com/wp-content/uploads/2015/05/lawyer-560x450.png"]
		},
		{
			"title" : "Toughron, International business training leaders",
			"url" : "http://paulinanogal.com/toughron/",
			"dates" : "2015",
			"description" : "Modern, responsive business website featuring a video background. Technologies used:  HTML5, CSS3, Bootstrap, Google Fonts",
			"images" : ["http://paulinanogal.com/wp-content/uploads/2015/06/toughron-560x450.png"]
		},
		{
			"title" : "Cliff Walk",
			"url" : "http://paulinanogal.com/cliff/",
			"dates" : "2015",
			"description" : "Responsive website for Newport's Cliff Walk. Technologies used: HTM5, CSS3, Bootstrap",
			"images" : ["http://paulinanogal.com/wp-content/uploads/2015/05/cliff-560x450.png"]
		},
		{
			"title" : "Photojack",
			"url" : "http://paulinanogal.com/city/",
			"dates" : "2015",
			"description" : "Landing page for New York photographer featuring parallax image scrolling. Technologies used: HTML5, CSS3, Bootstrap, Google Fonts",
			"images" : ["http://paulinanogal.com/wp-content/uploads/2015/05/city-560x450.png"]
		},
		{
			"title" : "Henry Pearl Ballons",
			"url" : "http://paulinanogal.com/balloon/",
			"dates" : "2015",
			"description" : "Landing page for air balloon rides over the Grand Canyon. Technologies used: HTML5, CSS3, Bootstrap, Google Fonts",
			"images" : ["http://paulinanogal.com/wp-content/uploads/2015/05/balloon-560x450.jpg"]
		}
	]
}

var education = {
	"schools" : [
		{
			"name" : "University of Gdansk",
			"location" : "Gdansk, Poland",
			"degree" : "Master's",
			"major" : "Management",
			"dates" : "September 2010 - July 2012",
			"url" : "http://www.wzr.ug.edu.pl/biznes/index.php?i=28&o=24,28"
		},
		{
			"name" : "Academy of turism and hotel management in Gdansk",
			"location" : "Gdansk, Poland",
			"degree" : "Bachelor's",
			"major" : "SPA, Wellness and general health",
			"dates" : "September 2007 - July 2010",
			"url" : "http://wstih.pl/en/news"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-end Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "July 2015",
			"url" : "https://www.udacity.com"
		},
		{
			"title" : "English language (12 credits)",
			"school" : "UCLA",
			"dates" : "2013 - 2014",
			"url" : "https://www.uclaextension.edu/pages/fos/esl.aspx"
		}
	]
}

// BIO

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedPhoto = HTMLbioPic.replace("%data%", bio.pictureUrl);
	$("#header").append(formattedPhoto);

	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);

	var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
	$("#topContacts").append(formattedEmail);

	var formattedWebsite = HTMLwebsite.replace("%data%", bio.contactInfo.website);
	$("#topContacts").append(formattedWebsite);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
	$("#topContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
	$("#topContacts").append(formattedLocation);


	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
		$("#skills").append(formattedSkill);
	}
}
bio.display();

// WORK

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].locations);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();


// PROJECTS

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedURL = HTMLprojectURL.replace("%data%", projects.projects[project].url);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedURLtitle = formattedURL + formattedTitle;
		$(".project-entry:last").append(formattedURLtitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

// EDUCATION

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);

	for (var course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedUrl);
	}
}
education.display();

// GOOGLE MAP

$("#map-div").append(googleMap);

// INTERNATIONALIZED NAME

// $("#main").append(internationalizeButton);

// function inName() {
// 	var splitName = bio.name.split(" ");
// 	var firstName = splitName[0].charAt(0).toUpperCase() + splitName[0].substring(1).toLowerCase();
// 	var lastName = splitName[1].toUpperCase();
// 	var fullName = firstName + " " + lastName;
// 	return fullName;
// }