$(function(){
	// create model object
	var model = {
		init: function() {
			this.bio = {
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
			},

			this.work = {
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
			},

			this.projects = {
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
			},

			this.education = {
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
		}
	};

	var controller = {
		init: function() {
			model.init();
			view.init();
//			viewMap.init();
		},
		getBio: function() {
			return model.bio;
		},
		getWork: function() {
			return model.work;
		}, 
		getProjects: function() {
			return model.projects;
		}, 
		getEducation: function() {
			return model.education;
		}, 
	};
	
	var view = {
		init: function() {
			this.bio = controller.getBio();
			this.work = controller.getWork();
			this.projects = controller.getProjects();
			this.education = controller.getEducation();
			
			this.render();
		},
		render: function() {
			this.displayBio();
			this.displayWork();
			this.displayProjects();
			this.displayEducation();
		},
		displayBio: function() {
			var HTMLheaderName = '<h1 id="name">%data%</h1>';
		  var HTMLheaderRole = '<span>%data%</span><hr/>';
			var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
			var HTMLwebsite = '<li class="flex-item"><span class="orange-text">website</span><span class="white-text">%data%</span></li>';
			var HTMLbioPic = '<img src="%data%" class="biopic">';
			var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
			var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
			var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
			var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
			var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
			var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
			var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
			var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
			
			var formattedRole = HTMLheaderRole.replace("%data%", this.bio.role);
			$("#header").prepend(formattedRole);
			var formattedName = HTMLheaderName.replace("%data%", this.bio.name);
			$("#header").prepend(formattedName);
			var formattedPhoto = HTMLbioPic.replace("%data%", this.bio.pictureUrl);
			$("#header").append(formattedPhoto);
			var formattedMessage = HTMLwelcomeMsg.replace("%data%", this.bio.welcomeMessage);
			$("#header").append(formattedMessage);
			var formattedEmail = HTMLemail.replace("%data%", this.bio.contactInfo.email);
			$("#topContacts").append(formattedEmail);
			var formattedWebsite = HTMLwebsite.replace("%data%", this.bio.contactInfo.website);
			$("#topContacts").append(formattedWebsite);
			var formattedGithub = HTMLgithub.replace("%data%", this.bio.contactInfo.github);
			$("#topContacts").append(formattedGithub);
			var formattedTwitter = HTMLtwitter.replace("%data%", this.bio.contactInfo.twitter);
			$("#topContacts").append(formattedTwitter);
			var formattedLocation = HTMLlocation.replace("%data%", this.bio.contactInfo.location);
			$("#topContacts").append(formattedLocation);
			if (this.bio.skills.length > 0) {
				$("#header").append(HTMLskillsStart);
				var formattedSkill = HTMLskills.replace("%data%", this.bio.skills[0]);
				$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", this.bio.skills[1]);
				$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", this.bio.skills[2]);
				$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", this.bio.skills[3]);
				$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", this.bio.skills[4]);
				$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", this.bio.skills[5]);
				$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", this.bio.skills[6]);
				$("#skills").append(formattedSkill);
			}
	  },
		displayWork: function() {
			var HTMLworkStart = '<div class="work-entry"></div>';
			var HTMLworkEmployer = '<a href="#">%data%';
			var HTMLworkTitle = ' - %data%</a>';
			var HTMLworkDates = '<div class="date-text">%data%</div>';
			var HTMLworkLocation = '<div class="location-text">%data%</div>';
			var HTMLworkDescription = '<p><br>%data%</p>';

			for (var job in this.work.jobs) {
				$("#workExperience").append(HTMLworkStart);

				var formattedEmployer = HTMLworkEmployer.replace("%data%", this.work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", this.work.jobs[job].title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formattedEmployerTitle);

				var formattedLocation = HTMLworkLocation.replace("%data%", this.work.jobs[job].locations);
				$(".work-entry:last").append(formattedLocation);

				var formattedDates = HTMLworkDates.replace("%data%", this.work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);

				var formattedDescription = HTMLworkDescription.replace("%data%", this.work.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);
			}
		},
		displayProjects: function() {
			var HTMLprojectStart = '<div class="project-entry"></div>';
			var HTMLprojectURL = '<a href="%data%">';
			var HTMLprojectTitle = '%data%</a>';
			var HTMLprojectDates = '<div class="date-text">%data%</div>';
			var HTMLprojectDescription = '<p><br>%data%</p>';
			var HTMLprojectImage = '<img class="project-image" src="%data%">';
			
			for (var project in this.projects.projects) {
				$("#projects").append(HTMLprojectStart);

				var formattedURL = HTMLprojectURL.replace("%data%", this.projects.projects[project].url);
				var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects.projects[project].title);
				var formattedURLtitle = formattedURL + formattedTitle;
				$(".project-entry:last").append(formattedURLtitle);

				var formattedDates = HTMLprojectDates.replace("%data%", this.projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);

				var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects.projects[project].description);
				$(".project-entry:last").append(formattedDescription);

				if (this.projects.projects[project].images.length > 0) {
					for (var image in this.projects.projects[project].images) {
						var formattedImage = HTMLprojectImage.replace("%data%", this.projects.projects[project].images[image]);
						$(".project-entry:last").append(formattedImage);
					}
				}
			}
		},
		displayEducation: function() {
			var HTMLschoolStart = '<div class="education-entry"></div>';
			var HTMLschoolName = '<a href="#">%data%';
			var HTMLschoolDegree = ' -- %data%</a>';
			var HTMLschoolDates = '<div class="date-text">%data%</div>';
			var HTMLschoolLocation = '<div class="location-text">%data%</div>';
			var HTMLschoolMajor = '<em><br>Major: %data%</em>';

			var HTMLonlineClasses = '<h2>Online Classes</h2>';
			var HTMLonlineTitle = '<a href="#">%data%';
			var HTMLonlineSchool = ' - %data%</a>';
			var HTMLonlineDates = '<div class="date-text">%data%</div>';
			var HTMLonlineURL = '<br><a href="#">%data%</a>';	
			
			for (var school in this.education.schools) {
				$("#education").append(HTMLschoolStart);

				var formattedName = HTMLschoolName.replace("%data%", this.education.schools[school].name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", this.education.schools[school].degree);
				var formattedNameDegree = formattedName + formattedDegree;
				$(".education-entry:last").append(formattedNameDegree);

				var formattedDates = HTMLschoolDates.replace("%data%", this.education.schools[school].dates);
				$(".education-entry:last").append(formattedDates);

				var formattedLocation = HTMLschoolLocation.replace("%data%", this.education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);

				var formattedMajor = HTMLschoolMajor.replace("%data%", this.education.schools[school].major);
				$(".education-entry:last").append(formattedMajor);
			}

			$("#education").append(HTMLonlineClasses);

			for (var course in this.education.onlineCourses) {
				$("#education").append(HTMLschoolStart);

				var formattedTitle = HTMLonlineTitle.replace("%data%", this.education.onlineCourses[course].title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", this.education.onlineCourses[course].school);
				var formattedTitleSchool = formattedTitle + formattedSchool;
				$(".education-entry:last").append(formattedTitleSchool);

				var formattedDates = HTMLonlineDates.replace("%data%", this.education.onlineCourses[course].dates);
				$(".education-entry:last").append(formattedDates);

				var formattedUrl = HTMLonlineURL.replace("%data%", this.education.onlineCourses[course].url);
				$(".education-entry:last").append(formattedUrl);
			}
		}
	};
	
//	var viewMap = {
//		init: function() {
//			this.bio = controller.getBio();
//			this.education = controller.getEducation();
//			this.work = controller.getWork();
//			
//			this.render();
//			this.locations = [];
//			this.mapOptions = {
//    		disableDefaultUI: true
//  		};
//  		this.map = new google.maps.Map(document.querySelector('#map-div'), this.mapOptions);	
//			
//			window.mapBounds = new google.maps.LatLngBounds();
//
//			this.locations = this.locationFinder();
//
//			this.pinPoster(this.locations);
//			
//			window.addEventListener('load', this.initializeMap);
//
//			window.addEventListener('resize', function(e) {
//			 this.map.fitBounds(mapBounds);
//			});
//		},
//		render: function() {
//			var googleMap = '<div id="map"></div>';
//			$("#map-div").append(googleMap);
//		},	
//		locationFinder: function() {
//
//			this.locations.push(this.bio.contactInfo.location);
//
//			for (var school in this.education.schools) {
//				this.locations.push(this.education.schools[school].location);
//			}
//
//			for (var job in this.work.jobs) {
//				if (this.work.jobs[job].locations.length > 0) {
//					for (var location in this.work.jobs[job].locations) { 
//						this.locations.push(this.work.jobs[job].locations[location]);
//					}
//				}
//			}
//			return this.locations;
//		},
//		createMapMarker: function(placeData) {
//
//			var lat = placeData.geometry.location.lat();
//			var lon = placeData.geometry.location.lng();
//			var name = placeData.formatted_address;
//			var bounds = window.mapBounds;
//
//			var marker = new google.maps.Marker({
//				map: this.map,
//				position: placeData.geometry.location,
//				title: name
//			});
//
//			var infoWindow = new google.maps.InfoWindow({
//				content: name
//			});
//
//			google.maps.event.addListener(marker, 'click', function() {
//				infoWindow.open(this.map, marker);
//			});
//
//			bounds.extend(new google.maps.LatLng(lat, lon));
//
//			this.map.fitBounds(bounds);
//
//			this.map.setCenter(bounds.getCenter());
//		},
//		callback: function(results, status) {
//			if (status == google.maps.places.PlacesServiceStatus.OK) {
//				this.createMapMarker(results[0]);
//			}
//		},
//		pinPoster: function(locations) {
//
//			var service = new google.maps.places.PlacesService(this.map);
//
//			for (var place in this.locations) {
//
//				var request = {
//					query: this.locations[place]
//				};
//
//				// Searches the Google Maps API 
//				service.textSearch(request, this.callback);
//			}
//		}
//
//	};

	controller.init();
});