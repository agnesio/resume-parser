let stringData = "Washington, DC\n" +
"+1913-275-7300\n" +
"arpithparikh@gwu.edu\n" +
"www.linkedin.com/in/arpithparikh\n" +
"github.com/arpithparikh\n" +
"ARPIT PARIKH\n" +
"ARPIT PARIKH\n" +
"Recent Computer Science Graduate\"Open for Full time Software\n" +
"Engineering Opportunity\n" +
"Jan 2015 - Dec 2016\n" +
"May 2009 - May 2013\n" +
"Master of Science in Computer Science GPA 3.7\n" +
"George Washington University,Washington DC\n" +
"Product Pitch at 2017 GW New Venture Competition Kickoff,NCTTA Team A member, ACM DC chapter member, GW Jet brains club member.\n" +
"Relevant Coursework: Full Stack Software Engineering, Software Paradigm, Database System-2, Big Data and Analytics, Enterprise Java\n" +
"Development, Advanced Design and Analysis of Algorithm, Software Testing and Quality Assurance.\n" +
"Bachelor of Science in Computer Engineering GPA 3.5\n" +
"Gujarat Technology University, India\n" +
"Graduated with top 5% from college and got A+ in Final Year Project.\n" +
"Programming Language:Java (Expert), Node JS (Expert), SQL (Proficient), C++ (Proficient), Python (Familiar), PHP, R .\n" +
"Front end Expertise:Angular JS, Ionic Framework, React JS, CSS, Less, REST, Ajax,Web pack,BEM/CSS3 via Sass,W3C Validated HTML5.\n" +
"Backend Expertise: Express JS, Mongoose, Spring MVC, Hibernate, Play, Code Igniter.Control System: GitHub, SVN, Bit bucket.Build\n" +
"Manager: Maven, Ant, NPM\n" +
"Database: MongoDB, MySQL, PostgreSQL, SQLite, Radis. Cloud Technologies: Amazon EC2, Google Cloud Platform.\n" +
"Tools and IDE: Eclipse IDE, IntelliJ IDE, Docker, JIRA, Putty, R Studio, Macro Express, NLTK, IBM Blumix and IBM alchemy.\n" +
"May 2016 - Present\n" +
"Sep 2015 - April 2016\n" +
"Feb 2015 - Jun 2015\n" +
"Sep 2013 - Dec 2014\n" +
"Full Stack Developer\n" +
"Promantus Inc. (Startup: Agnes.io) ,Washington DC\n" +
"Responsible for Front end and backend development of the Agnes.io website and Mobile hybrid application on a weekly sprint schedule.\n" +
"Backend development with Node JS with the Express and MongoDB.\n" +
"Frontend development with plain JavaScript, Ionic 2 Angular 2, Bourbon/HTML/CSS along with many Cordova based native plugins.\n" +
"Integration development with Node JS into Facebook graph api, Mandrill, Stream.io, Segment and Twilio ip messaging, Elastic Search.\n" +
"API development with Node JS rest framework and setup AWS infrastructure to accommodate more than 10k active users. Improvised\n" +
"backend performance with Redis and clustering.\n" +
"Working in an agile work environment with daily standups, sprint planning, and demos.\n" +
"Graduate Research Assistant (Resource Description Group, GWU Libraries)\n" +
"George Washington University,Washington DC\n" +
"Researched on Converting Marc to linked data using Bib framework and open source product of Apache Solr and Black-light.\n" +
"Designed macros to update and insert 100k records from different Excel sheets into Voyager Cataloging Software.\n" +
"Front End Developer, Part time\n" +
"GW Hatchet(Independent student newspaper of George WashingtonUniversity)\n" +
"Design and develop the web page using PHP and its frameworks for different activities.\n" +
"Software Engineer\n" +
"The Gateway Technolabs, India\n" +
"Project Name: ArtistBomb.com (Client-Stellar Web Studios, USA)\n" +
"Implemented and contributed in front end and back end designs, wrote maintainable and extensible code in a teamEnvironment.\n" +
"Exposure of the Micro Service and push based architecture designed by separating business, data and user interface for the project.\n" +
"Project Name: Documents Management System with Search Engine\n" +
"Included full search-text searching capabilities, facet searching and highlighting features to build interactive search result of uploaded\n" +
"documents from different users.\n" +
"Resolved Apache Solr heap problems, managing concurrent connection using tomcat, modified existing schema and improved overall\n" +
"searching performance\n" +
"Data Analysis of Data Set: Enron Mail andMushroomSubset: (R Studio, Excel):Extracted the data and calculation usingdifferent R\n" +
"packages. Used different clustering and classification algorithmtechniques for data analysis.\n" +
"Micro Service Architecture based Web Application (https://git.io/vVzx2): Developed 3-tired state full application to create,schedule, edit\n" +
"and share comments and information with REST architecture.\n" +
"ElectricityMeter Reading Android Application:Reads the electric meter readings and store in SQLite database, communicatewith web\n" +
"database using RESTful web services support of PHP. Implemented geolocation of meter to locate the nearest metersusing google map API."


let ruleExpression = new RegExp(/.*/).exec(stringData); //RegEx

console.log(ruleExpression['input'].trim(""));