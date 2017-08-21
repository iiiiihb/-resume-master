var bio = {
    "name": "hb",
    "role": "Ui Desiger",
    "contacts": {
        "mobile": "177-4310-0718",
        "email": "1071850176@.com",
        "github": "iiiiihb",
        "location": "Chang Chun"
    },
    "welcomeMessage": "welcome to look my resume!",
    "skills": ["CSS", "HTML", "JS"],
    "biopic": "images/fry.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", "hb");
        var formattedRole = HTMLheaderRole.replace("%data%", "Ui Desiger");
        $("#header").prepend(formattedName, formattedRole);

        var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedmobile, formattedemail, formattedgithub, formattedlocation);

        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedbioPic, formattedwelcomeMessage);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(skill) {
                var formattedskills = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedskills);
            })
        }
    }
};
bio.display();

var work = {
    "jobs": [{
            "employer": "Brand Design",
            "title": "Visual Communication",
            "location": "Shang Hai",
            "dates": "2015.7-2016.7",
            "description": "Corporate brand design overall vision, logo design, VIS application design, product packaging design, magazine design, photography"
        },
        {
            "employer": "Brand Design",
            "title": "Visual Communication",
            "location": "Chang Chun",
            "dates": "2007.7-2015.6",
            "description": "Corporate brand design overall vision, logo design, VIS application design, product packaging design, magazine design, photography"
        }
    ],
    "display": function() {
        work.jobs.forEach(function(job) {
                $("#workExperience").append(HTMLworkStart);

                var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                var formattedDates = HTMLworkDates.replace("%data%", job.dates);
                var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
                var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
                $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);

            }

        )
    }
};
work.display();

var projects = {
    "projects": [{
            "title": "Magazine Design",
            "dates": "2013.7-2014.12",
            "description": "《讲刊》由解放日报报业集团主管、主办，面向青年读者，刊载积极健康、励志向上的优秀演讲词和访谈内容，弘扬社会主义核心价值观，提升青年读者思想文化修养。e",
            "images": ["images/2.jpg"]
        },
        {
            "title": "Icon Design",
            "dates": "2016.7-2016.9",
            "description": "Icon Design",
            "images": ["images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg"]
        }
    ],
    "display": function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

            if (project.images.length > 0) {
                project.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedImage);
                })
            }
        })
    }
};
projects.display();

var education = {
    "schools": [{
        "name": "Jilin University",
        "degree": "Bachelor's degree",
        "location": "Chang Chun",
        "majors": ["visual communication"],
        "dates": "2007.9-2011.7",
        "url": "http://www.jlu.edu.cn/"
    }],
    "onlineCourses": [{
        "title": "Programming entry",
        "school": "Udacity",
        "dates": "2017.5-2017.8",
        "url": "https://cn.udacity.com"
    }],

    "display": function() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedNameDegree = formattedName + formattedDegree;
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedNameDegree, formattedDates, formattedLocation, formattedMajors);
        });

        education.onlineCourses.forEach(function(online) {
            var formattedTitle = HTMLschoolName.replace("%data%", online.title);
            var formattedSchool = HTMLschoolDegree.replace("%data%", online.school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedTitleSchool);
        })
    }
};
education.display();


$("#mapDiv").append(googleMap);
