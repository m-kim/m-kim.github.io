---
layout: post
title:  "closest point embedding problems"
date:   2015-02-28 16:37
category: research 
---
Having problems with the canvas. With grid = 768 and a subgrid = (3,3,3).
These should be stripes, but it all kind of collapses around x=1700.

Changing the subgrid size doesn't help, its still about 73% of the grid in X.
Changing the extension size doesn't change anything either.


![]({{"/assets/20150227/cpm.png" | prepend: site.baseurl}})

And now render seeds.

![]({{"/assets/20150227/cpm5.png" | prepend: site.baseurl}})

Here's what it looks like if we change the grid size to 1024.
The striping goes wrong around 1500 (out of 3072).

![]({{"/assets/20150227/cpm2.png" | prepend: site.baseurl}})


Instead of stripes, just make it white.

![]({{"/assets/20150227/cpm3.png" | prepend: site.baseurl}})

And now render the seeds.

![]({{"/assets/20150227/cpm4.png" | prepend: site.baseurl}})

Stripes are generated from on_surf_cmpt. That may be where things are going wrong.

Another view of grid=768, solid fill and seeds.

![]({{"/assets/20150227/cpm6.png" | prepend: site.baseurl}})

![]({{"/assets/20150227/cpm7.png" | prepend: site.baseurl}})

Zoomed in a little further.

![]({{"/assets/20150227/cpm8.png" | prepend: site.baseurl}})

That's not a coincidence. It looks like we're not generating the correct 
closest points. Those bands are from the grid-space.


Why is it only in X?

![]({{"/assets/20150227/cpm9.png" | prepend: site.baseurl}})

Huh. That cut is right in line with the Z-plane. So, it might not only be in X.
But there's no cut line in the Y-plane. Unless we get the strides because
its greater than all three planes.

Increasing the g_on_surf_cnt by 1.25 didn't change anything.

So, it's not true that the subgrid size doesn't matter. Changing it changes
the spacing after the failure.  Here's grid=1024, with subgrid =2,3 and 4 respectively.

![]({{"/assets/20150227/cpm10.png" | prepend: site.baseurl}})

![]({{"/assets/20150227/cpm11.png" | prepend: site.baseurl}})

![]({{"/assets/20150227/cpm12.png" | prepend: site.baseurl}})

Here's what it looks like with grid=1024, but viewing the same place as 768.
It looks that at the same spot where the stripes start when the grid=768,
now it goes to black with no stripes.

![]({{"/assets/20150227/cpm13.png" | prepend: site.baseurl}})

That's weird. When the subgrid is (3,3,3) the spacing for the rings is either 4 or 5.



If I reset on_surf_fulldim, this is what happens. What I was hoping for no stripes, just black.

![]({{"/assets/20150227/cpm14.png" | prepend: site.baseurl}})

Nevermind, apparently with these settings that happens. Besides, on_surf_fulldim
doesn't get resized after on_surf_cmt, pts[0] does.

Okay, let's try copying the values of on_surf_cmpt to the orig_prts list and see what happens.

![]({{"/assets/20150227/cpm15.png" | prepend: site.baseurl}})

Here's a better look: what comes out of on_surf_cmpt is wrong.

![]({{"/assets/20150227/cpm16.png" | prepend: site.baseurl}})


