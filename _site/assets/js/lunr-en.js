var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "About Me",
      excerpt: "I am a postdoctoral researcher in the Scientific Data Group, in the Computer Science and Mathematics Division of Oak Ridge...",
      categories: ["aboutme"],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "About Work",
      excerpt: "Scientific Data Group\nComputer Science and Mathematics Disivion\nOak Ridge National Laboratory\n",
      categories: ["aboutwork"],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "Quantitatively driven visualization and analysis on emerging architectures",
      excerpt: "McCormick, P., Anderson, E., Martin, S., Brownlee, C., Inman, J., Maltrud, M., Kim, M., Ahrens, J., Nau, L.: Quantitatively driven...",
      categories: ["publications"],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "Fall 2007 Classes",
      excerpt: "cs6610 - Interactive Graphics - Chuck Hansen\n\n",
      categories: ["classes"],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Fall 2007 TA",
      excerpt: "cs6100 - Graduate Algorithms - Suresh Venkat\n\n",
      categories: ["TAship"],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "Spring 2008 Classes",
      excerpt: "cs6620 - Graphics II - Steve Parker\n\n",
      categories: ["classes"],
      tags: [],
      id: 5
    });
    
  
    idx.add({
      title: "Spring 2008 TA",
      excerpt: "cs5600 - Chuck Hansen - Intro to Graphics\n",
      categories: ["TAship"],
      tags: [],
      id: 6
    });
    
  
    idx.add({
      title: "CS 6620 Ray Tracing: Assignment 1",
      excerpt: "Assignment 1\n\n",
      categories: ["classes"],
      tags: ["cs6620"],
      id: 7
    });
    
  
    idx.add({
      title: "Image Processing",
      excerpt: "####Mark Kim####\n\n\n",
      categories: ["classes"],
      tags: ["cs6640"],
      id: 8
    });
    
  
    idx.add({
      title: "CS 6620 Ray Tracing: Assignment 2",
      excerpt: "CS6620:  Ray Tracing\n\n",
      categories: ["classes"],
      tags: ["cs6620"],
      id: 9
    });
    
  
    idx.add({
      title: "CS 6620 Ray Tracing: Assignment 3",
      excerpt: "All images were generated on a MacBook 2.16Ghz C2D with 2GB of RAM Leopard with XCode.  Strangely enough, I believe...",
      categories: ["classes"],
      tags: ["cs6620"],
      id: 10
    });
    
  
    idx.add({
      title: "Image Processing: Assignment 2",
      excerpt: "CS 6640\n\nProject 2\n\nAtlasing and Registration\n\n",
      categories: ["classes"],
      tags: ["cs6640"],
      id: 11
    });
    
  
    idx.add({
      title: "CS 6620 Ray Tracing: Assignment 4",
      excerpt: "prog04-nofilter.scn\nSetup/load time:    0.000764 seconds\nRender time:        0.257 seconds\nPost-process time:    0.00621 seconds\n\n",
      categories: ["classes"],
      tags: ["cs6620"],
      id: 12
    });
    
  
    idx.add({
      title: "CS 6620 Ray Tracing: Assignment 5",
      excerpt: "CS 6620 Assignment 5\n\n",
      categories: ["classes"],
      tags: ["cs6620"],
      id: 13
    });
    
  
    idx.add({
      title: "CS 6620 Ray Tracing: Assignment 6",
      excerpt: "####Required Image####\n\n",
      categories: ["classes"],
      tags: ["cs6620"],
      id: 14
    });
    
  
    idx.add({
      title: "CS 6620 Ray Tracing: Assignment 7",
      excerpt: "####Design Decisions####\nDepth of Field \nArea Light\nJava distributed ray tracer\n\n",
      categories: ["classes"],
      tags: ["cs6620"],
      id: 15
    });
    
  
    idx.add({
      title: "Fall 2008 Classes",
      excerpt: "Physical Simulation for Animation: Adam Bargteil\n\n",
      categories: ["classes"],
      tags: [],
      id: 16
    });
    
  
    idx.add({
      title: "Assembling Large Mosaics of Electron Microscope Images using GPU",
      excerpt: "Kannan UV, M. Kim, D. Gerszewski, J.R. Anderson, M. Hall. “Assembling Large Mosaics of Electron Microscope Images using GPU,” In...",
      categories: ["publications"],
      tags: [],
      id: 17
    });
    
  
    idx.add({
      title: "Advanced OpenGL",
      excerpt: "After reading both papers I realized that the Hadwiger paper was limited by their ability to produce nodes in their...",
      categories: ["classes"],
      tags: [],
      id: 18
    });
    
  
    idx.add({
      title: "Direct Feature Visualization Using Morse-Smale Complexes",
      excerpt: "A. Gyulassy, N. Kotava, M. Kim, C. Hansen, H. Hagen, and V. Pascucci. “Direct Feature Visualization Using Morse-Smale Complexes,” In...",
      categories: ["publications"],
      tags: [],
      id: 19
    });
    
  
    idx.add({
      title: "Dynamic particle system for mesh extraction on the GPU",
      excerpt: "M. Kim, G. Chen, C.D. Hansen. “Dynamic particle system for mesh extraction on the GPU,” In Proceedings of the 5th...",
      categories: ["publications"],
      tags: [],
      id: 20
    });
    
  
    idx.add({
      title: "GPU surface extraction using the closest point embedding",
      excerpt: "M. Kim, C.D. Hansen. “GPU surface extraction using the closest point embedding,” In Proceedings of IS&amp;T/SPIE Visualization and Data Analysis,...",
      categories: ["publications"],
      tags: [],
      id: 21
    });
    
  
    idx.add({
      title: "Dye advection, CPM, cell centered, WENO interpolation",
      excerpt: "The slide below includes a youtube video using cell centered dye advection with the closest point method on the swish-swirl...",
      categories: ["research"],
      tags: ["dye","advection","closest","point","method","cpm","weno"],
      id: 22
    });
    
  
    idx.add({
      title: "Openshot problems",
      excerpt: "Openshot wouldn’t export, wouldn’t preview, and lockup on doing anything really. Deleted .openshot, everything works again. I don’t know why,...",
      categories: ["research"],
      tags: ["openshot","errors"],
      id: 23
    });
    
  
    idx.add({
      title: "2015-01-08 Progress Report",
      excerpt: "\n",
      categories: ["progressreport"],
      tags: [],
      id: 24
    });
    
  
    idx.add({
      title: "ADER-WENO finite volume",
      excerpt: "Garch et al. (EuroVis 2012) cites Dumbser et al. (JCP 2007) for its finite volume WENO advection. Having looked into...",
      categories: ["research"],
      tags: ["ader","weno","finite","volume"],
      id: 25
    });
    
  
    idx.add({
      title: "pyweno docs",
      excerpt: "The author or http://pyweno.readthedocs.org/en/latest/tutorial.html, http://emmett.ca/matthew/index.htmla has a nice javascript explanation of Riemann integration.\n\n",
      categories: ["research"],
      tags: ["ader","weno","finite","volume"],
      id: 26
    });
    
  
    idx.add({
      title: "ADER-WENO finite volume 2",
      excerpt: "Searching stackexchange for weno finite volume resulted in\n\n",
      categories: ["research"],
      tags: ["ader","weno","finite","volume"],
      id: 27
    });
    
  
    idx.add({
      title: "Surface Flow Visualization using the Closest Point Embedding",
      excerpt: "M. Kim, C.D. Hansen. “Surface Flow Visualization using the Closest Point Embedding”, 2015 IEEE Pacific Visualization Symposium, 2015.\n\n",
      categories: ["publications"],
      tags: [],
      id: 28
    });
    
  
    idx.add({
      title: "Finite Volume WENO oscillation indicators",
      excerpt: "From Garch et al. (EuroVis 2012), the oscillation indicators,  where\n\n",
      categories: ["research"],
      tags: ["weno","finite","volume","dumbser","oscillation","indicators"],
      id: 29
    });
    
  
    idx.add({
      title: "Finite Volume WENO oscillation indicators part 2",
      excerpt: "I think this needs to be m=3 and n=3 not 2. Also, that doesn’t look like a partial derivative.\n\n",
      categories: ["research"],
      tags: ["weno","finite","volume","dumbser","oscillation","indicators"],
      id: 30
    });
    
  
    idx.add({
      title: "Finite Volume WENO oscillation indicators part 3",
      excerpt: "~~~\nfrom sympy import *\n\n",
      categories: ["research"],
      tags: ["weno","finite","volume","dumbser","oscillation","indicators"],
      id: 31
    });
    
  
    idx.add({
      title: "Finite Volume WENO oscillation indicators part 4",
      excerpt: "My previous post was incorrect about the oscillation indicator matrix:\n\n",
      categories: ["research"],
      tags: ["weno","finite","volume","dumbser","oscillation","indicators"],
      id: 32
    });
    
  
    idx.add({
      title: "WENO comparison",
      excerpt: "Here is a 2D Zalesak disk (an approximation anyways) using a Semi-Lagrangian backwards advection with a Runge-Kutta 4 on a...",
      categories: ["research"],
      tags: ["weno","finite","volume","dumbser"],
      id: 33
    });
    
  
    idx.add({
      title: "WENO comparison, part 2",
      excerpt: "Here is another 2D Zalesak disk (an approximation anyways) using a Semi-Lagrangian backwards advection with a Runge-Kutta 4 on a...",
      categories: ["research"],
      tags: ["weno","finite","volume","dumbser"],
      id: 34
    });
    
  
    idx.add({
      title: "edelta CPE UFLIC",
      excerpt: "There appears to be something wrong with generating the CPE.\n\n",
      categories: ["research"],
      tags: ["closest","point","edelta","stream","surface"],
      id: 35
    });
    
  
    idx.add({
      title: "edelta CPE streamline",
      excerpt: "Grid is 512, subgrid is 3,3,3. The vectors are projected onto the surface.\n\n",
      categories: ["research"],
      tags: ["closest","point","edelta","stream","surface"],
      id: 36
    });
    
  
    idx.add({
      title: "edelta CPE advection",
      excerpt: "Grid is 768, subgrid is 3,3,3. The vectors are projected onto the surface, but the velocity field is not normalized....",
      categories: ["research"],
      tags: ["closest","point","edelta","stream","surface"],
      id: 37
    });
    
  
    idx.add({
      title: "edelta CPE streamline zoomed",
      excerpt: "Zoomed in from yesterday. Dt=25.0. Grid is 768, subgrid is 3,3,3. The vectors are projected onto the surface, but the...",
      categories: ["research"],
      tags: ["closest","point","edelta","stream","surface"],
      id: 38
    });
    
  
    idx.add({
      title: "closest point embedding problems",
      excerpt: "Having problems with the canvas. With grid = 768 and a subgrid = (3,3,3). These should be stripes, but it...",
      categories: ["research"],
      tags: [],
      id: 39
    });
    
  
    idx.add({
      title: "closest point embedding problems 2",
      excerpt: "Continued from yesterday, it looks like building the on_surf_cmpt is the problem. Checking if there are empty on_surf_cmpt indexes, there...",
      categories: ["research"],
      tags: [],
      id: 40
    });
    
  
    idx.add({
      title: "closest point embedding problems 3",
      excerpt: "Slowly moving forward.\nsetDtStep(0.2)\ngrid=768\nsubgrid=(3,3,3)\ngrid_offset = 3\nnormalize=true\nproj_onto_surf=false\nuflic_minute = 1\nuflic_ht = 1\n\n",
      categories: ["research"],
      tags: [],
      id: 41
    });
    
  
    idx.add({
      title: "closest point embedding problems 4",
      excerpt: "Yesterday, I came to the conclusion that it was the oniony aspect of the dataset that was creating the artifacts....",
      categories: ["research"],
      tags: [],
      id: 42
    });
    
  
    idx.add({
      title: "closest point embedding problems 5",
      excerpt: "Edit: found these in “Surface Techniques for Vortex Visualization”, Garth et al. 2004.\n\n\n\n",
      categories: ["research"],
      tags: [],
      id: 43
    });
    
  
    idx.add({
      title: "Octree and voxelization",
      excerpt: "First, I need to know how deep the octree needs to be. So, I threw the mesh into a GPU...",
      categories: ["research"],
      tags: [],
      id: 44
    });
    
  
    idx.add({
      title: "PSAAP Poster",
      excerpt: "PSAAP Poster\n",
      categories: ["research"],
      tags: [],
      id: 45
    });
    
  
    idx.add({
      title: "PSAAP Poster redux",
      excerpt: "PSAAP Poster\n",
      categories: [],
      tags: ["research"],
      id: 46
    });
    
  
    idx.add({
      title: "Graduate School Travel Assistance",
      excerpt: "Presenting our work, “Surface Flow Visualization Using the Closest Point Embedding” at a premier conference such as the IEEE Pacific...",
      categories: ["research"],
      tags: [],
      id: 47
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "About Me",
        "url": "http://localhost:4000/aboutme/about-me/",
        "excerpt": "I am a postdoctoral researcher in the Scientific Data Group, in the Computer Science and Mathematics Division of Oak Ridge...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "About Work",
        "url": "http://localhost:4000/aboutwork/about-work/",
        "excerpt": "Scientific Data Group\nComputer Science and Mathematics Disivion\nOak Ridge National Laboratory\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Quantitatively driven visualization and analysis on emerging architectures",
        "url": "http://localhost:4000/publications/quantitatively-driven-visualization/",
        "excerpt": "McCormick, P., Anderson, E., Martin, S., Brownlee, C., Inman, J., Maltrud, M., Kim, M., Ahrens, J., Nau, L.: Quantitatively driven...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Fall 2007 Classes",
        "url": "http://localhost:4000/classes/Fall-2007-Classes/",
        "excerpt": "cs6610 - Interactive Graphics - Chuck Hansen cs6630 - Visualization - Claudio Silva cs6210 - Scientific Computing - Kris Sikorski...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Fall 2007 TA",
        "url": "http://localhost:4000/taship/Fall-2007-TA/",
        "excerpt": "cs6100 - Graduate Algorithms - Suresh Venkat\n\ncs5530 - Database Systems - Juliana Freire\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Spring 2008 Classes",
        "url": "http://localhost:4000/classes/Spring-2008-Classes/",
        "excerpt": "cs6620 - Graphics II - Steve Parker cs6640 - Image Processing - Ross Whitaker cs7460 - Distributed Systems - John...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Spring 2008 TA",
        "url": "http://localhost:4000/taship/Spring-2008-TA/",
        "excerpt": "cs5600 - Chuck Hansen - Intro to Graphics\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "CS 6620 Ray Tracing: Assignment 1",
        "url": "http://localhost:4000/classes/cs6620-assignment1/",
        "excerpt": "Assignment 1 CS 6620 Ray Tracing Required picture is here. A PNG is shown below. Compiled using gcc 4.0 (OS...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Image Processing",
        "url": "http://localhost:4000/classes/cs6640-assignments/",
        "excerpt": "####Mark Kim#### Readme: The notes for each particular image are held on that image’s page. The two new images I’ve...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "CS 6620 Ray Tracing: Assignment 2",
        "url": "http://localhost:4000/classes/cs6620-assignment2/",
        "excerpt": "CS6620: Ray Tracing Assignment 2 Implemented: Phong, Dielectrics, Beer’s law and Oren Mayar materials. All times were on a MacBook...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "CS 6620 Ray Tracing: Assignment 3",
        "url": "http://localhost:4000/classes/cs6620-assignment3/",
        "excerpt": "All images were generated on a MacBook 2.16Ghz C2D with 2GB of RAM Leopard with XCode.  Strangely enough, I believe...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Image Processing: Assignment 2",
        "url": "http://localhost:4000/classes/cs6640-assignment2/",
        "excerpt": "CS 6640 Project 2 Atlasing and Registration ###Table of Content### Shapes Brain Images Presidential Portraits Atlas et al Portraits Used...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "CS 6620 Ray Tracing: Assignment 4",
        "url": "http://localhost:4000/classes/cs6620-assignment4/",
        "excerpt": "prog04-nofilter.scn Setup/load time: 0.000764 seconds Render time: 0.257 seconds Post-process time: 0.00621 seconds prog04-jittered-triangle.scn Setup/load time: 0.000763 seconds Render time:...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "CS 6620 Ray Tracing: Assignment 5",
        "url": "http://localhost:4000/classes/cs6620-assignment5/",
        "excerpt": "CS 6620 Assignment 5 All runs were done on a MacBook 2.16Ghz Core2Duo, 2GB, XCode 3.1 (Beta 1) in Debug...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "CS 6620 Ray Tracing: Assignment 6",
        "url": "http://localhost:4000/classes/cs6620-assignment6/",
        "excerpt": "####Required Image#### Unaccelerated image 2.4 Ghz Pentium 4, 1GB RAM. Debug\\specter.exe prog06.scn Done! Setup/load time: 4.77 seconds Render time: 4.92e+004...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "CS 6620 Ray Tracing: Assignment 7",
        "url": "http://localhost:4000/classes/cs6620-assignment7/",
        "excerpt": "####Design Decisions#### Depth of Field Area Light Java distributed ray tracer ####Depth of Field#### I spent too much time playing...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Fall 2008 Classes",
        "url": "http://localhost:4000/classes/Fall-2008-Classes/",
        "excerpt": "Physical Simulation for Animation: Adam Bargteil\n\nComputer Vision: Guido Gerig\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Assembling Large Mosaics of Electron Microscope Images using GPU",
        "url": "http://localhost:4000/publications/assembling-large-mosaics/",
        "excerpt": "Kannan UV, M. Kim, D. Gerszewski, J.R. Anderson, M. Hall. “Assembling Large Mosaics of Electron Microscope Images using GPU,” In...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Advanced OpenGL",
        "url": "http://localhost:4000/classes/advanced-opengl/",
        "excerpt": "After reading both papers I realized that the Hadwiger paper was limited by their ability to produce nodes in their...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Direct Feature Visualization Using Morse-Smale Complexes",
        "url": "http://localhost:4000/publications/direction-feature-visualization/",
        "excerpt": "A. Gyulassy, N. Kotava, M. Kim, C. Hansen, H. Hagen, and V. Pascucci. “Direct Feature Visualization Using Morse-Smale Complexes,” In...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Dynamic particle system for mesh extraction on the GPU",
        "url": "http://localhost:4000/publications/dynamic-particle-system/",
        "excerpt": "M. Kim, G. Chen, C.D. Hansen. “Dynamic particle system for mesh extraction on the GPU,” In Proceedings of the 5th...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "GPU surface extraction using the closest point embedding",
        "url": "http://localhost:4000/publications/gpu-surface-extraction/",
        "excerpt": "M. Kim, C.D. Hansen. “GPU surface extraction using the closest point embedding,” In Proceedings of IS&amp;T/SPIE Visualization and Data Analysis,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Dye advection, CPM, cell centered, WENO interpolation",
        "url": "http://localhost:4000/research/dye-advection-cell-centered/",
        "excerpt": "The slide below includes a youtube video using cell centered dye advection with the closest point method on the swish-swirl...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Openshot problems",
        "url": "http://localhost:4000/research/openshot-problems/",
        "excerpt": "Openshot wouldn’t export, wouldn’t preview, and lockup on doing anything really. Deleted .openshot, everything works again. I don’t know why,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "2015-01-08 Progress Report",
        "url": "http://localhost:4000/progressreport/progressreport/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "ADER-WENO finite volume",
        "url": "http://localhost:4000/research/ader-weno/",
        "excerpt": "Garch et al. (EuroVis 2012) cites Dumbser et al. (JCP 2007) for its finite volume WENO advection. Having looked into...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "pyweno docs",
        "url": "http://localhost:4000/research/pyweno/",
        "excerpt": "The author or http://pyweno.readthedocs.org/en/latest/tutorial.html, http://emmett.ca/matthew/index.htmla has a nice javascript explanation of Riemann integration.\n\nhttp://emmett.ca/matthew/index.html\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "ADER-WENO finite volume 2",
        "url": "http://localhost:4000/research/more-weno/",
        "excerpt": "Searching stackexchange for weno finite volume resulted in http://scicomp.stackexchange.com/questions/8706/is-there-a-good-tutorial-or-textbook-like-source-on-implementing-eno-weno-with-l which refers back to PyWENO, but also http://scicomp.stackexchange.com/questions/6710/first-order-finite-volume-spatial-discretization-of-the-heat-equation-on-an-unst/6712#6712 an explanation of...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Surface Flow Visualization using the Closest Point Embedding",
        "url": "http://localhost:4000/publications/surface-flow-visualization/",
        "excerpt": "M. Kim, C.D. Hansen. “Surface Flow Visualization using the Closest Point Embedding”, 2015 IEEE Pacific Visualization Symposium, 2015. Mark Kim...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Finite Volume WENO oscillation indicators",
        "url": "http://localhost:4000/research/oscillation-indicators/",
        "excerpt": "From Garch et al. (EuroVis 2012), the oscillation indicators, where given that this is a third-order reconstruction example. Using sympy,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Finite Volume WENO oscillation indicators part 2",
        "url": "http://localhost:4000/research/finite-volume-weno-part-2/",
        "excerpt": "I think this needs to be m=3 and n=3 not 2. Also, that doesn’t look like a partial derivative. If...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Finite Volume WENO oscillation indicators part 3",
        "url": "http://localhost:4000/research/finite-volume-weno-part-3/",
        "excerpt": "from sympy import * #http://stackoverflow.com/questions/20979993/how-to-pretty-print-in-ipython-notebook-via-sympy-pprint-only-prints-unicode-ve from IPython.display import display init_printing(use_unicode=True, use_latex='mathjax') derivs = [[0 for x in range(3)] for x...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Finite Volume WENO oscillation indicators part 4",
        "url": "http://localhost:4000/research/finite-volume-weno-part-4/",
        "excerpt": "My previous post was incorrect about the oscillation indicator matrix: because I start with f = x which isn’t correct...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "WENO comparison",
        "url": "http://localhost:4000/research/WENO-comparison-part-1/",
        "excerpt": "Here is a 2D Zalesak disk (an approximation anyways) using a Semi-Lagrangian backwards advection with a Runge-Kutta 4 on a...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "WENO comparison, part 2",
        "url": "http://localhost:4000/research/WENO-comparison-part-2/",
        "excerpt": "Here is another 2D Zalesak disk (an approximation anyways) using a Semi-Lagrangian backwards advection with a Runge-Kutta 4 on a...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "edelta CPE UFLIC",
        "url": "http://localhost:4000/research/edelta-uflic-cpe/",
        "excerpt": "There appears to be something wrong with generating the CPE. Thoughts: Not many at the moment. 256 for the primary...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "edelta CPE streamline",
        "url": "http://localhost:4000/research/edelta-uflic-streamline/",
        "excerpt": "Grid is 512, subgrid is 3,3,3. The vectors are projected onto the surface. Streamline to see if it follows the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "edelta CPE advection",
        "url": "http://localhost:4000/research/edelta-uflic-advection/",
        "excerpt": "Grid is 768, subgrid is 3,3,3. The vectors are projected onto the surface, but the velocity field is not normalized....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "edelta CPE streamline zoomed",
        "url": "http://localhost:4000/research/edelta-uflic-streamline-zoomed/",
        "excerpt": "Zoomed in from yesterday. Dt=25.0. Grid is 768, subgrid is 3,3,3. The vectors are projected onto the surface, but the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "closest point embedding problems",
        "url": "http://localhost:4000/research/closest-point-embedding/",
        "excerpt": "Having problems with the canvas. With grid = 768 and a subgrid = (3,3,3). These should be stripes, but it...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "closest point embedding problems 2",
        "url": "http://localhost:4000/research/closest-point-embedding2/",
        "excerpt": "Continued from yesterday, it looks like building the on_surf_cmpt is the problem. Checking if there are empty on_surf_cmpt indexes, there...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "closest point embedding problems 3",
        "url": "http://localhost:4000/research/edelta/",
        "excerpt": "Slowly moving forward. setDtStep(0.2) grid=768 subgrid=(3,3,3) grid_offset = 3 normalize=true proj_onto_surf=false uflic_minute = 1 uflic_ht = 1 Some stuff sneaks...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "closest point embedding problems 4",
        "url": "http://localhost:4000/research/edelta/",
        "excerpt": "Yesterday, I came to the conclusion that it was the oniony aspect of the dataset that was creating the artifacts....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "closest point embedding problems 5",
        "url": "http://localhost:4000/research/edelta/",
        "excerpt": "Edit: found these in “Surface Techniques for Vortex Visualization”, Garth et al. 2004. That bulb may be too complex. Camera...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Octree and voxelization",
        "url": "http://localhost:4000/research/octree-voxelization/",
        "excerpt": "First, I need to know how deep the octree needs to be. So, I threw the mesh into a GPU...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "PSAAP Poster",
        "url": "http://localhost:4000/research/psaap-poster/",
        "excerpt": "PSAAP Poster\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "PSAAP Poster redux",
        "url": "http://localhost:4000/psaap-poster/",
        "excerpt": "PSAAP Poster\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Graduate School Travel Assistance",
        "url": "http://localhost:4000/research/grad-school-travel-assistance/",
        "excerpt": "Presenting our work, “Surface Flow Visualization Using the Closest Point Embedding” at a premier conference such as the IEEE Pacific...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p>'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
