---
layout: post
title:  "In Situ Visualization of Radiation Transport Geometry"
date:   2017-09-22
category: publications
summary: M. Kim, T. Evans, S. Klasky, and D. Pugmire. "In Situ Visualization of Radiation Transport Geometry", 2017 In Situ Infrastructures for Enabling Extreme-scale Analysis and Visualization, 2017.

images:
    -
        url: /assets/2017/09/22/c5g7_4096.png
    -
        url: /assets/2017/09/22/core_4096.png
---

*M. Kim*, T. Evans, S. Klasky, and D. Pugmire. "In Situ Visualization of Radiation Transport Geometry", 2017 In Situ Infrastructures for Enabling Extreme-scale Analysis and Visualization , 2017.

#### Mark Kim, Tom Evans, Scott Klasky, and Dave Pugmire ####

{% assign image = page.images[0] %}
{% include image.html image=image %}
{% assign image = page.images[1] %}
{% include image.html image=image %}


### Abstract ###
The ultimate goal for radiation transport is to perform full-core reactor modelling and simulation. 
Advances in computational simulation bring this goal close to reality and the newest Monte Carlo transport codes have begun to shift to using accelerators that have become a stalwart in the supercomputing and HPC space.
Within the reactor modelling and simulation community, Monte Carlo transport simulations are considered the gold standard for simulation. Through the use of ``combinatorial geometry'' (constructive solid geomtry), complex models can be used with fewer approximation compromises while at the same time scale to run on some of the largest supercomputers in the world. 

Unfortunately, the state-of-the-art for ``combinatorial geometry'' visualization is to decompose the geometry into a mesh. This approach could require a significant amount of memory which is antithetical to in situ visualization. To address this issue, we introduce a ray caster for visualizing combinatorial geometry in radiation transport code. By only using the accelerators for the radiation transport code and leaving the CPU cores idle, there is an opportunity to conduct on node in situ visualization with the idle CPU cores, something domain experts have up to this point been unable to do. By utilizing VTK-m, the visualization can be run on the CPU as this particular application demands, but also run on any architecture that is supported by VTK-m, enabling future re-use across different platforms.
    

