---
layout: post
title:  "Surface Flow Visualization using the Closest Point Embedding"
date:   2015-01-12
category: publications 
summary: M. Kim, C.D. Hansen. "Surface Flow Visualization using the Closest Point Embedding", 2015 IEEE Pacific Visualization Symposium, 2015.

---

*M. Kim*, C.D. Hansen. "Surface Flow Visualization using the Closest Point Embedding", 2015 IEEE Pacific Visualization Symposium, 2015.

####Mark Kim and Charles Hansen####

![]({filename}/assets/f6-1.png )
![]({filename}/assets/ice-train.png)![]({filename}/assets/swish-swirl.png)


###Abstract###
In this paper, we introduce a novel flow visualization technique for arbitrary surfaces. This new technique utilizes the closest point embedding to parameterize the surface, which allows for accurate particle advection on the surface as well as supports the unsteady flow line integral convolution (UFLIC) technique on the surface. This global approach is faster than previous parameterization techniques and prevents the visual artifacts associated with image-based approaches.

###Introduction###
Vector field visualization is a fundamental technique in scientific visualization and important in numerous scientific and engineering fields such as computational fluid dynamics. One popular approach is Line Integral Convolution (LIC)[1] because of its efficient utilization of the graphics processor as well as its ability to be used on surfaces embedded in 3D.

Computing LIC on surfaces can be done in two ways: image-space methods and surface parameterization methods. Image-space methods generate LIC images on the visible parts of the surface [2,3]. In particular, the visible surface geometry and velocity field is projected onto the screen and LIC is applied in the image space. By only processing the visible parts, the computation is highly interactive due to the GPU generated LIC. Unfortunately, there are issues with image-space based methods. Because only the visible geometry is processed, artifacts from altering the camera position can be noticed around silhouette edges or self-occluded areas of the mesh.

Parameterizing the surface is another way to generate LIC on surfaces. Li et al. achieve interactive frame rates rendering unsteady flow by partitioning the mesh into patches which are then packed into a texture atlas [5]. Partitioning the mesh into patches is considered a pre-process step that is very time-consuming.

In this paper we present a new parameterization method for unsteady flow line integral convolution on a surface. Our approach is similar to the closest point embedding, a simple parameterizing technique for solving PDEs on embedded surfaces [5].. By using the closest point embedding, parameterizing the surface can be done at near interactive rates and generating the LIC can be done at interactive rates, allowing flow visualization without the drawbacks of previous methods.




* Introduce a fast surface parameterization for LIC generation that works for arbitrary complex surfaces on the GPU.
* An anti-aliased 3D line algorithm for the closest point embedding.
* An interactive unsteady flow LIC with the closest point embedding parameterized surface. 

###References###


1.    B. Cabral and L. C. Leedom. Imaging vector elds using line integral convolution. In Proceedings of the 20th Annual Conference on Com- puter Graphics and Interactive Techniques, SIGGRAPH 93, pages 263270, New York, NY, USA, 1993. ACM.
2.    R. S. Laramee, B. Jobard, and H. Hauser. Image space based visu- alization of unsteady ow on surfaces. In IEEE Visualization, pages 131138, 2003.
3.    J. J. van Wijk. Image based ow visualization for curved surfaces. In IEEE Visualization, pages 123130, 2003.
4.    G.-S. Li, X. Tricoche, D. Weiskopf, and C. D. Hansen. Flow charts: Visualization of vector elds on arbitrary surfaces. IEEE Trans. Vis. Comput. Graph., 14(5):10671080, 2008.
5.    S. J. Ruuth and B. Merriman. A simple embedding method for solv- ing partial differential equations on surfaces. J. Comput. Physics, 227(3):19431961, 2008. 
