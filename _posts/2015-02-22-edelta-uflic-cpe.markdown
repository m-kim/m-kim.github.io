---
layout: post
title:  "edelta CPE UFLIC"
date:   2015-02-22 17:30
category: research 
tags: closest point edelta stream surface
---

There appears to be something wrong with generating the CPE.

![]({{"/assets/cpe-edelta-uflic.png" | prepend: site.baseurl}})


Thoughts: Not many at the moment. 

256 for the primary grid
8,8,8 for the sub-grid

If I set primary grid above 512, I start getting stripes as well.

![]({{"/assets/cpe-edelta-uflic2.png" | prepend: site.baseurl}})

This is with primary set to 768 and the sub-grid set to (1,1,1).

![]({{"/assets/cpe-edelta-uflic3.png" | prepend: site.baseurl}})

This is with primary set to 1024 and the sub-grid set to (1,1,1).

![]({{"/assets/cpe-edelta-uflic4.png" | prepend: site.baseurl}})

This is with primary set to 1024 and the sub-grid set to (2,2,2).

Other than this, it actually looks okay. 
