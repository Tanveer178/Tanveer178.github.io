var	width = window.innerWidth,
	height = window.innerHeight;

	var tooltip = d3.select("body")
 	.append("div")
 	.style("position", "absolute")
 	.style("z-index", "10")
 	.style("visibility", "hidden")
   .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px");


		// var svg = d3.select("div#container")
		//   .append("svg")
		//   .attr("preserveAspectRatio", "xMinYMin meet")
		//   .attr("viewBox", "0 0 300 300")
		//   .classed("svg-content", true);

var	panel1 = d3.select("div#container")
	.append("svg")
		// .attr("width", width)
		// .attr("height", height)
		.attr("preserveAspectRatio", "xMinYMin meet")
		.attr("viewBox", "0 0 1350 654")
		.classed("svg-content", true)
    .attr("border",1)
	.append("g");
  panel1.append("rect")
         			.attr("x", 0)
         			.attr("y", 0)
         			.attr("height", height)
         			.attr("width", width*0.30)
         			.style("stroke", 'black')
         			.style("fill", "#6EF6B6")
         			.style("stroke-width", 1);

    panel1.append("text")
                    .text("Ghousia Tanveer")
                    .attr("y", 300)
                    .attr("x", 25)
                    .attr("font-size", 40)
                    .attr("font-family", "monospace")
                    .attr("fill", "black");
          panel1.append("svg:image")
                        .attr('xlink:href', './imgs/myImage.jpeg')
                        .attr('width', 200)
                        .attr('height', 200)
                        .attr("x", 100)
                        .attr("y", 50);
        panel1.append("text")
        .text("Front-End Engineer * UI/UX Enthusiast * Web Developer")
        .attr("y", 325)
        .attr("x", 25)
        .attr("font-size", 14)
        .attr("font-family", "sans-serif")
        .attr("fill", "black");

        panel1.append("a").attr("xlink:href","mailto:ghousiatanveer@gmail.com?subject=<enter subject>&body=<enter text>")
        .append("svg:image").attr("xlink:href","https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png")
        .attr("x",50).attr("y",360)
        .attr("width",40)
        .attr("height",40)
        .on('mouseover', function(d, i) {
      d3.select(this)
        .transition()
        .duration(100)
        .attr("width",50)
        .attr("height",50)
        .attr('fill', '#ff0000');
    })
    .on('mouseout', function(d, i) {
      d3.select(this)
        .transition()
        .duration(100)
        .attr("width",40)
        .attr("height",40)
        .attr('fill', '#000000');
    });

        panel1.append("a").attr("xlink:href","https://github.com/Tanveer178")
        .append("svg:image").attr("xlink:href","https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg")
        .attr("x",180).attr("y",360)
        .attr("width",40)
        .attr("height",40)
        .on('mouseover', function(d, i) {
      d3.select(this)
        .transition()
        .duration(100)
        .attr("width",50)
        .attr("height",50)
        .attr('fill', '#ff0000');
    })
    .on('mouseout', function(d, i) {
      d3.select(this)
        .transition()
        .duration(100)
        .attr("width",40)
        .attr("height",40)
        .attr('fill', '#000000');
    });

        panel1.append("a").attr("xlink:href","https://www.linkedin.com/in/ghousia-tanveer-885230159/")
        .append("svg:image").attr("xlink:href","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1024px-Linkedin.svg.png")
        .attr("x",300).attr("y",360)
        .attr("width",40)
        .attr("height",40)
        .on('mouseover', function(d, i) {
      d3.select(this)
        .transition()
        .duration(100)
        .attr("width",50)
        .attr("height",50)
        .attr('fill', '#ff0000');
    })
    .on('mouseout', function(d, i) {
      d3.select(this)
        .transition()
        .duration(100)
        .attr("width",40)
        .attr("height",40)
        .attr('fill', '#000000');
    });

        panel1.append("text")
        .text("I came across the term Human-Computer")
        .attr("y", 440)
        .attr("x", 15)
        .attr("font-size", 20)
        .attr("font-family", "sans-serif")
        .attr("fill", "black");

        panel1.append("text")
        .text("Interaction in one of my courses and since")
        .attr("y", 460)
        .attr("x", 15)
        .attr("font-size", 20)
        .attr("font-family", "sans-serif")
        .attr("fill", "black");

        panel1.append("text")
        .text("then I became interested in understanding")
        .attr("y", 480)
        .attr("x", 15)
        .attr("font-size", 20)
        .attr("font-family", "sans-serif")
        .attr("fill", "black");

        panel1.append("text")
        .text("the human psychology and behavior. Most")
        .attr("y", 500)
        .attr("x", 15)
        .attr("font-size", 20)
        .attr("font-family", "sans-serif")
        .attr("fill", "black");

        panel1.append("text")
        .text("of my work evolves around web dev and")
        .attr("y", 520)
        .attr("x", 15)
        .attr("font-size", 20)
        .attr("font-family", "sans-serif")
        .attr("fill", "black");

        panel1.append("text")
        .text("especially front-end but I love to explore ")
        .attr("y", 540)
        .attr("x", 15)
        .attr("font-size", 20)
        .attr("font-family", "sans-serif")
        .attr("fill", "black");

        panel1.append("text")
        .text("other domains as well.")
        .attr("y", 560)
        .attr("x", 15)
        .attr("font-size", 20)
        .attr("font-family", "sans-serif")
        .attr("fill", "black");



















var	panel2 = d3.select("div#container")
    	.append("svg")
    		// .attr("width", 1349 - width)
    		// .attr("height", height )
				.attr("preserveAspectRatio", "xMinYMin meet")
				.attr("viewBox", "-400 0 1350 654")
				.classed("svg-content",true)
    	.append("g");
panel2.append("rect")
             			.attr("x", 0)
             			.attr("y", 0)
             			.attr("height", height)
             			.attr("width", width * 0.687)
             			.style("stroke", 'black')
             			.style("fill", "#E9FCF3")
             			.style("stroke-width", 1);

									panel2.append("text")
									.text("[hover over the circle to see additional details]")
									.attr("y", 10)
									.attr("x", 380)
									.attr("font-size", 10)
									.attr("font-family", "sans-serif")
									.attr("fill", "black");


panel2.append("text")
.text("Education")
.attr("y", 50)
.attr("x", 50)
.attr("font-size", 20)
.attr("font-family", "sans-serif")
.attr("fill", "black");

  panel2.append("text")
  .text("Career")
  .attr("y", 50)
  .attr("x", 500)
  .attr("font-size", 20)
  .attr("font-family", "sans-serif")
  .attr("fill", "black");

  panel2.append('line')
      .style("stroke", "black")
      .style("stroke-width", 10)
      .attr("x1", 50)
      .attr("y1", 150)
      .attr("x2", 400)
      .attr("y2", 150);

  panel2.append('line')
      .style("stroke", "black")
      .style("stroke-width", 10)
      .attr("x1", 500)
      .attr("y1", 150)
      .attr("x2", 850)
      .attr("y2", 150);

  panel2.append('line')
      .style("stroke", "black")
      .style("stroke-width", 10)
      .attr("x1", 150)
      .attr("y1", 150)
      .attr("x2", 150)
      .attr("y2", 200);

  panel2.append('line')
      .style("stroke", "black")
      .style("stroke-width", 10)
      .attr("x1", 300)
      .attr("y1", 150)
      .attr("x2", 300)
      .attr("y2", 45);


      panel2.append('circle')
      .attr('cx', 150)
      .attr('cy', 200)
      .attr('r', 20)
      .attr('stroke', '#03FB87')
			.attr('stroke-width',5)
      .attr('fill', 'white').on("mouseover", function(){return tooltip.style("visibility", "visible");})
		  .on("mousemove", function(){return tooltip
	                          .style("top", (event.pageY-10)+"px")
	                          .style("left",(event.pageX+10)+"px")
	                          .html(function() {
	                            return "<b>Bachelor of Engineering in Computer Science and Engineering</b> <br> - Coursework: Data Structures and Algorithms, Operating Systems, Web Programming and Services, Distributed Systems, Artificial Intelligence, Data Mining, Cloud Computing  <br> - May 2019 <br> -  GPA: 9.25/10";
	                          });})
		.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

      panel2.append('circle')
      .attr('cx', 300)
      .attr('cy', 45)
      .attr('r', 20)
			.attr('stroke', '#03FB87')
			.attr('stroke-width',5)
      .attr('fill', 'white')
			.on("mouseover", function(){return tooltip.style("visibility", "visible");})
		  .on("mousemove", function(){return tooltip
	                          .style("top", (event.pageY-10)+"px")
	                          .style("left",(event.pageX+10)+"px")
	                          .html(function() {
	                            return "<b>Master of Science in Computer Science</b> <br> - Coursework: Data Processing at Scale, Data Visualization, Human-Computer Interaction <br> -    Graduating May 2021 ";
	                          });})
		.on("mouseout", function(){return tooltip.style("visibility", "hidden");});



      panel2.append('line')
      .style("stroke", "black")
      .style("stroke-width", 10)
      .attr("x1", 550)
      .attr("y1", 150)
      .attr("x2", 550)
      .attr("y2", 200);

      panel2.append('line')
      .style("stroke", "black")
      .style("stroke-width", 10)
      .attr("x1", 650)
      .attr("y1", 150)
      .attr("x2", 650)
      .attr("y2", 50);

      panel2.append('line')
      .style("stroke", "black")
      .style("stroke-width", 10)
      .attr("x1", 750)
      .attr("y1", 150)
      .attr("x2", 750)
      .attr("y2", 85);


      panel2.append('circle')
      .attr('cx', 550)
      .attr('cy', 200)
      .attr('r', 20)
			.attr('stroke', '#03FB87')
			.attr('stroke-width',5)
      .attr('fill', 'white')
			.on("mouseover", function(){return tooltip.style("visibility", "visible");})
		  .on("mousemove", function(){return tooltip
	                          .style("top", (event.pageY-10)+"px")
	                          .style("left",(event.pageX+10)+"px")
	                          .html(function() {
	                            return "<b>Systems Engineer Intern</b> <br> - Developed Tiny Database Management System to implement CRUD operations, perform optimized complex search queries and support multiple file formats to load data <br> -   01/2019 – 06/2019   ";
	                          });})
		.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

      panel2.append('circle')
      .attr('cx', 650)
      .attr('cy', 50)
      .attr('r', 20)
			.attr('stroke', '#03FB87')
			.attr('stroke-width',5)
      .attr('fill', 'white')
			.on("mouseover", function(){return tooltip.style("visibility", "visible");})
		  .on("mousemove", function(){return tooltip
	                          .style("top", (event.pageY-10)+"px")
	                          .style("left",(event.pageX+10)+"px")
	                          .html(function() {
	                            return "<b>Application Developer Intern</b> <br> - Designed and developed Environment Comparison Tool to be used by all the internal teams for GitHub like diff comparison between codebases in different environments and between versions of the same environment with a data request-response time of 34 seconds. Worked using Semantic UI React and Dropwizard for RESTful web services <br> -   01/2019 – 06/2019   ";
	                          });})
		.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

      panel2.append('circle')
      .attr('cx', 750)
      .attr('cy', 85)
      .attr('r', 20)
			.attr('stroke', '#03FB87')
			.attr('stroke-width',5)
      .attr('fill', 'white')
			.on("mouseover", function(){return tooltip.style("visibility", "visible");})
		  .on("mousemove", function(){return tooltip
	                          .style("top", (event.pageY-10)+"px")
	                          .style("left",(event.pageX+10)+"px")
	                          .html(function() {
	                            return "<b>Graduate Teaching Assistant</b> <br> - Assist undergraduate students in CSE 360 (Introduction to Software Engineering) <br> -  08/2019 – Present  ";
	                          });})
		.on("mouseout", function(){return tooltip.style("visibility", "hidden");});


      panel2.append("text")
      .text("Osmania University")
      .attr("y", 200)
      .attr("x", 180)
      .attr("font-size", 12)
      .attr("font-family", "sans-serif")
      .attr("fill", "black");

      panel2.append("text")
      .text("Arizona State University")
      .attr("y", 45)
      .attr("x", 330)
      .attr("font-size", 12)
      .attr("font-family", "sans-serif")
      .attr("fill", "black");

      panel2.append("text")
      .text("Mission R&D")
      .attr("y", 200)
      .attr("x", 580)
      .attr("font-size", 12)
      .attr("font-family", "sans-serif")
      .attr("fill", "black");

      panel2.append("text")
      .text("Oracle India Pvt. Ltd.")
      .attr("y", 50)
      .attr("x", 680)
      .attr("font-size", 12)
      .attr("font-family", "sans-serif")
      .attr("fill", "black");

      panel2.append("text")
      .text("Arizona State University")
      .attr("y", 85)
      .attr("x", 780)
      .attr("font-size", 12)
      .attr("font-family", "sans-serif")
      .attr("fill", "black");




      panel2.append("text")
      .text("Projects")
      .attr("y", 280)
      .attr("x", 50)
      .attr("font-size", 20)
      .attr("font-family", "sans-serif")
      .attr("fill", "black");

      panel2.append('line')
      .style("stroke", "black")
      .style("stroke-width", 10)
      .attr("x1", 200)
      .attr("y1", 250)
      .attr("x2", 200)
      .attr("y2", 470);

      panel2.append('circle')
      .attr('cx', 200)
      .attr('cy', 280)
      .attr('r', 15)
			.attr('stroke', '#03FB87')
			.attr('stroke-width',5)
      .attr('fill', 'white')
			.on("mouseover", function(){return tooltip.style("visibility", "visible");})
			.on("mousemove", function(){return tooltip
	                          .style("top", (event.pageY-10)+"px")
	                          .style("left",(event.pageX+10)+"px")
	                          .html(function() {
	                            return "- <b>Microsoft’s Women in Software Engineering (WISE) Program</b>  <br> - Worked in a team of 5 to develop an app that solves the problem of standing in long queues by issuing tokens to each user. I personally designed an interactive interface at user end and implemented an algorithm that issues tokens effectively based on time of booking  <br> - Recognised as one of the <b>‘Most Innovative Apps’</b> by Microsoft, Hyderabad, India <br> -  08/2018 ";
	                          });})
		.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

      panel2.append("text")
      .text("Queue Management Application")
      .attr("y", 280)
      .attr("x", 220)
      .attr("font-size", 12)
      .attr("font-family", "sans-serif")
      .attr("fill", "black");

      panel2.append('circle')
      .attr('cx', 200)
      .attr('cy', 350)
      .attr('r', 15)
			.attr('stroke', '#03FB87')
			.attr('stroke-width',5)
      .attr('fill', 'white')
			.on("mouseover", function(){return tooltip.style("visibility", "visible");})
			.on("mousemove", function(){return tooltip
	                          .style("top", (event.pageY-10)+"px")
	                          .style("left",(event.pageX+10)+"px")
	                          .html(function() {
	                            return "- Built a tiny compiler that converts LISP arithmetic form to C - like arithmetic statements. It deals with the basics of front end of the compilers like lexical analysis, syntax analysis, and abstract syntax trees <br> -   05/2018 ";
	                          });})
		.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

      panel2.append("text")
      .text("Naive Compiler")
      .attr("y", 350)
      .attr("x", 90)
      .attr("font-size", 12)
      .attr("font-family", "sans-serif")
      .attr("fill", "black");

      panel2.append('circle')
      .attr('cx', 200)
      .attr('cy', 420)
      .attr('r', 15)
			.attr('stroke', '#03FB87')
			.attr('stroke-width',5)
      .attr('fill', 'white')
			.on("mouseover", function(){return tooltip.style("visibility", "visible");})
			.on("mousemove", function(){return tooltip
														.style("top", (event.pageY-10)+"px")
														.style("left",(event.pageX+10)+"px")
														.html(function() {
															return "- Programmed a scheduler bot that automates sending of personalized greeting cards via email based on date and time. I implemented Simple Mail Transfer Protocol and trained the bot using Dialogflow <br> -   11/2017  ";
														});})
		.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

      panel2.append("text")
      .text("Personal Gifting Assistant")
      .attr("y", 420)
      .attr("x", 220)
      .attr("font-size", 12)
      .attr("font-family", "sans-serif")
      .attr("fill", "black");


      panel2.append("text")
      .text("Programming Languages")
      .attr("y", 280)
      .attr("x", 500)
      .attr("font-size", 20)
      .attr("font-family", "sans-serif")
      .attr("fill", "black");

      panel2.append('line')
          .style("stroke", "black")
          .style("stroke-width", 5)
          .attr("x1", 580)
          .attr("y1", 320)
          .attr("x2", 850)
          .attr("y2", 320);

          panel2.append("text")
          .text("Python")
          .attr("y", 320)
          .attr("x", 500)
          .attr("font-size", 16)
          .attr("font-family", "sans-serif")
          .attr("fill", "black");

          panel2.append('circle')
          .attr('cx', 810)
          .attr('cy', 320)
          .attr('r', 10)
          .attr('stroke', 'black')
          .attr('fill', '#03FB87');


          panel2.append('line')
              .style("stroke", "black")
              .style("stroke-width", 5)
              .attr("x1", 580)
              .attr("y1", 350)
              .attr("x2", 850)
              .attr("y2", 350);

              panel2.append("text")
              .text("C")
              .attr("y", 350)
              .attr("x", 500)
              .attr("font-size", 16)
              .attr("font-family", "sans-serif")
              .attr("fill", "black");

              panel2.append('circle')
              .attr('cx', 780)
              .attr('cy', 350)
              .attr('r', 10)
              .attr('stroke', 'black')
              .attr('fill', '#03FB87');

              panel2.append('line')
                  .style("stroke", "black")
                  .style("stroke-width", 5)
                  .attr("x1", 580)
                  .attr("y1", 380)
                  .attr("x2", 850)
                  .attr("y2", 380);

                  panel2.append("text")
                  .text("JavaScript")
                  .attr("y", 380)
                  .attr("x", 500)
                  .attr("font-size", 16)
                  .attr("font-family", "sans-serif")
                  .attr("fill", "black");

                  panel2.append('circle')
                  .attr('cx', 770)
                  .attr('cy', 380)
                  .attr('r', 10)
                  .attr('stroke', 'black')
                  .attr('fill', '#03FB87');

                  panel2.append("text")
                  .text("Clubs & Interests")
                  .attr("y", 520)
                  .attr("x", 50)
                  .attr("font-size", 20)
                  .attr("font-family", "sans-serif")
                  .attr("fill", "black");


                  panel2.append("svg:image")
                  .attr('xlink:href', './imgs/soda.jpg')
                  .attr('width', 150)
                  .attr('height', 150)
                  .attr("x", 350)
                  .attr("y", 440);


                  panel2.append("svg:image")
                  .attr('xlink:href', './imgs/wics.png')
                  .attr('width', 150)
                  .attr('height', 150)
                  .attr("x", 650)
                  .attr("y", 440);


                  panel2.append("svg:image")
                  .attr('xlink:href', './imgs/streetcause.jpg')
                  .attr('width', 150)
                  .attr('height', 150)
                  .attr("x", 100)
                  .attr("y", 515);

                  panel2.append("svg:image")
                  .attr('xlink:href', './imgs/book.png')
                  .attr('width', 100)
                  .attr('height', 100)
                  .attr("x", 380)
                  .attr("y", 550);


                  panel2.append("svg:image")
                  .attr('xlink:href', './imgs/car.png')
                  .attr('width', 100)
                  .attr('height', 100)
                  .attr("x", 670)
                  .attr("y", 550);
