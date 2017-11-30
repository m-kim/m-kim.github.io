---
layout: post
title:  "closest point embedding problems 2"
date:   2015-03-01 16:37
category: research 
---
Continued from yesterday, it looks like building the on_surf_cmpt is the problem.
Checking if there are empty on_surf_cmpt indexes, there aren't.

Check on_surf_fulldim and by debugging we can see that the where there is full
coverage on the surface, the on_surf_fulldim index is correct. However, in
areas where there is sparse coverage, the index that is on the grid spacing 
has a proper index, but the next 26 indexes are -1.

Debuggin more, it seems that expanding the g_on_surf_idx from grid space to
image space is causing the problem. But I have no idea why.

Where are "bad" on_surf_fulldim getting set to -1? The only thing I see is reset(0).

AHA! The "bad" on_surf_fulldim indexes are getting set in countPrts. If we 
don't run countPrts:

![]({{"/assets/20150301/cpm.png" | prepend: site.baseurl}})

And the spacing gets worse as we move down the X-axis:

![]({{"/assets/20150301/cpm1.png" | prepend: site.baseurl}})

X: 554 to 2515

X: 1532, 1533 filled
X: 1534, 1535, 1536 empty
X: 1537, 1538 filled
X: 1539, 1540 empty
X: 1541, 1542, 1543 filled

Wait, what? When debugging, the grid->decompIdx when the fill is correct, the stepping goes

X: 306 -> 309 -> 312

etc. This is what I expect it to be.

However, when I skip to a striped area its:

X: 1590 -> 1596 -> 1602 -> 1608

etc., and in grid space

X: 530 -> 532 -> 534 -> 536 

So, the grid is wrong?

I have a theory:

Here's an image from ice-train with the grid=1024, subgrid=1,1,1 and the 
grid_offset (how many voxels to check around myself to vertices) set to 3.

![]({{"/assets/20150301/cpm4.png" | prepend: site.baseurl}})

And here it is with grid_offset set to 2.
 
![]({{"/assets/20150301/cpm5.png" | prepend: site.baseurl}})

As I increase the grid refinement, I may also have to increase how the grid_offset.
But, the grid_offset vastly increases the amount of memory I need.

Is this what's happening?  I don't think so, here's why. One, its too conveniently in line
with the X-axis. Two, it's too conveniently in line with the Z-axis. Three, I've set the
grid to be 1280 and the grid_spacing to 1. The following image shows where it goes from
solid to stripes. In the solid area, there are gaps since those don't fall 
on a vertex. Likewise, there are gaps, but stripes as well, on the striped area.

![]({{"/assets/20150301/cpm6.png" | prepend: site.baseurl}})

So, here's the thing: the base grid for this dataset has to be 1024. Here's what it looks like
set to 768 after 104 iterations with velocities normalized and projected onto the surface, with a 

![]({{"/assets/20150301/sosleepy104.png" | prepend: site.baseurl}})

Ahem, nevermind, it doesn't work for 1024 either.

