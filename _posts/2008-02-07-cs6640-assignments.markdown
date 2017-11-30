---
layout: post
title:  "Image Processing"
date:   2008-02-07 21:23
category: classes
tags: cs6640
---

####Mark Kim####
<!----####mbk@[remove]cs.utah.edu####------>

Readme: The notes for each particular image are held on that image's page. The two new images I've included are the fu-sltrib.jpg and bw_delicate_justin_wathke.jpg. I believed both images have been professional touched up, and it looks like histogram equalization may have verified that. Please note that the images I have spent more time on in critiquing are in <strong>bold</strong>. If you're looking for particular images to look at (instead of all of them) might I suggest looking at the ones in bold.

###[Histogram Equalization](/imageprocessing/documentation/histo.html)###

Just like it was described in class. All times were less than .5 seconds.

###[Histogram Equalization with Alpha](/imageprocessing/documentation/alpha.html)###

Histogram equalization with alpha consisted of running the normal histogram equalization then linearly interpolating between the new image and the original image. All the times were less than .5 seconds.

###[Adaptive Histogram Equalization](/imageprocessing/documentation/AHE.html)###

I ran a few scripts overnight which allowed to experiment with all the images as well as bins and window size. I used some scripts to create the thumbs as well as convert the tifs to jpg so  I could view it properly in Firefox.  You can find all images for AHE [here](/imageprocessing/documentation/AHE)

The algorithm I chose was the moving window.  Unfortunately this is very slow, because of the M^2 * N^2 run time.  The running time for something like family.tif with 128 bins and 256 sized moving window was <strong>4 hours and 20 minutes</strong>.  I wasn't willing to let 256 bins and a 256 window size finish. I ended up running alot more than just bin=256 and windowsize=[32,64,128]. Look <a href=".">here</a> (look for tifs) and [here](/imageprocessing/documentation/AHE) (just a menagrie) to see even more images. 

###[Clipped Locally Adaptive Histogram Equalization.](/imageprocessing/documentation/CLAHE.html)###

As described in class, if a single value in a histogram is greater than some clip value, then redistribute the excess to the other bins.

Times for generating the adaptive and clipped images were kept in imageprocessing.txt. Unfortunately, because of the sheer number of images I was trying to produce (and lack of sleep) I didn't save all of them.
