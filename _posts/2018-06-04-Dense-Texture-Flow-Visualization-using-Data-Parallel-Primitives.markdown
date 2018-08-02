---
layout: post
title:  "Dense Texture Flow Visualization using Data-Parallel Primitives"
date:   2018-06-04
category: publications
summary: M. Kim, S. Klasky, and D. Pugmire. "Dense Texture Flow Visualization using Data-Parallel Primitives", 2018 Eurographics Symposium on Parallel Graphics and Visualization.

images:
    -
        url: /assets/2018/06/04/uflic-final-psi.png
    -
        url: /assets/2018/06/04/uflic-final_doublegyre_512_256.png
---

*M. Kim*, S. Klasky, and D. Pugmire. "Dense Texture Flow Visualization using Data-ParallelPrimitives", 2018 Eurographics Symposium on Parallel Graphics and Visualization.

#### Mark Kim, Tom Evans, Scott Klasky, and Dave Pugmire ####

{% assign image = page.images[0] %}
{% include image.html image=image %}
{% assign image = page.images[1] %}
{% include image.html image=image %}


### Abstract ###
Recent trends in supercomputing towards massively threaded on-node processors to increase performance has also introduced fragmented software support. In response to this changing landscape, new scientific visualization packages have been developed to provide a portable framework to exploit this on-node parallelism with data parallel primitives, while also providing a single interface to multiple hardware backends. This necessitates adapting algorithms to the data parallel primitives paradigm. In numerous cases the algorithm is serial, but other times the technique is tied to hardware and needs to be generalized to broadly disseminate.

