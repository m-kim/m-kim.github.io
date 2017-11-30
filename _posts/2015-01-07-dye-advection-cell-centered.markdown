---
layout: post
title:  "Dye advection, CPM, cell centered, WENO interpolation"
date:   2015-01-07
category: research 
tags: dye advection closest point method cpm weno
---

The slide below includes a youtube video using cell centered dye advection with the closest point method on the swish-swirl dataset. As you can see, this is not mass preserving. Previously, the dye was not cell centered and would not advect through.

It should be noted though that I don't believe this dataset is mass preserving. So, its a bit weird to treat it as such. Never the less,  think the next step is either finite volume or do directly to Eulerian.

<iframe src="https://docs.google.com/presentation/d/1yGxSkTEstUFhof-adcxUktwGyPQ1_BwW7CYu6caoU1c/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
