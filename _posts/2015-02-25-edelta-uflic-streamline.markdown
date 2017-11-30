---
layout: post
title:  "edelta CPE streamline"
date:   2015-02-25 13:30
category: research 
tags: closest point edelta stream surface
---
Grid is 512, subgrid is 3,3,3. The vectors are projected onto the surface.

Streamline to see if it follows the twist properly. This uses a dt=0.1, with 1000 steps.

![]({{"/assets/2015-02-25/streamline1.png" | prepend: site.baseurl}})![]({{"/assets/2015-02-25/streamline2.png" | prepend: site.baseurl}})


Streamline to see if it follows the twist properly. This uses a dt=1.0, with 1000 steps.

![]({{"/assets/2015-02-25/streamline3.png" | prepend: site.baseurl}})![]({{"/assets/2015-02-25/streamline4.png" | prepend: site.baseurl}})

Streamline to see if it follows the twist properly. This uses a dt=1.0, with 1000 steps, no reprojection onto the surface.

![]({{"/assets/2015-02-25/streamline5.png" | prepend: site.baseurl}})
![]({{"/assets/2015-02-25/streamline6.png" | prepend: site.baseurl}})
![]({{"/assets/2015-02-25/streamline7.png" | prepend: site.baseurl}})
