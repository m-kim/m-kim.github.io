---
layout: post
title:  "WENO comparison, part 2"
date:   2015-01-29 16:30
category: research 
tags: weno finite volume dumbser
---

Here is another 2D Zalesak disk (an approximation anyways) using a Semi-Lagrangian
backwards advection with a Runge-Kutta 4 on a 100x100 grid (h=0.5, steps = 128)


<iframe width="420" height="315" src="http://www.youtube.com/embed/m8vurmvflfo" frameborder="0"></iframe>


Here is a 2D Zalesak disk (again an approximation) using a Finite Volume WENO (3rd order) on a 100x100 grid (h=0.001, steps = 6400)

<iframe width="420" height="315" src="http://www.youtube.com/embed/4PJe453QoiU" frameborder="0"></iframe>

Thoughts: Not many at the moment. Too many things left to test.
