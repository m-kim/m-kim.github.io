---
layout: post
title:  "GPU surface extraction using the closest point embedding"
date:   2014-11-30
category: publications
summary: M. Kim, C.D. Hansen. "GPU surface extraction using the closest point embedding,"  In Proceedings of IS&T/SPIE Visualization and Data Analysis, 2015.
---

*M. Kim*, C.D. Hansen. "GPU surface extraction using the closest point embedding,"  In Proceedings of IS&T/SPIE Visualization and Data Analysis, 2015.

####Mark Kim and Charles Hansen####

[![]({filename}/assets/head_inset.png)]({filename}/assets/Pig1_lung_1.png)[![]({filename}/assets/Pig1_inset.png)]({filename}/assets/new_head_1_1.png)



###Abstract###
Isosurface extraction is a fundamental technique used for both surface reconstruction and mesh generation. One method to extract well-formed isosurfaces is a particle system; unfortunately, particle systems can be slow. In this paper, we introduce an enhanced parallel particle system that uses the closest point embedding as the surface representation to speed-up the particle system for isosurface extraction. The closest point embedding is used in the Closest Point Method (CPM), a technique that uses a standard three dimensional numerical PDE solver on two dimensional embedded surfaces. To fully take advantage of the closest point embedding, it is coupled with a Barnes-Hut tree code on the GPU. This new technique produces well-formed, conformal unstructured triangular and tetrahedral meshes from labeled multi-material volume datasets. Further, this new parallel implementation of the particle system is faster than any known methods for conformal multi-material mesh extraction. The resulting speedups gained in this implementation can reduce the time from labeled data to mesh from hours to minutes and benefits users, such as bioengineers, who employ triangular and tetrahedral meshes.

###Introduction###
Isosurface extraction from three-dimensional scalar volumes is a fundamental technique in visualization. In some cases,
the scalar data may be composed of different materials and although the material is stored in a regular grid, the materials
generally do not conform to the underlying grid. Recent work by Meyer et al.&#91;1, 2&#93; uses a particle-based approach to extract
a curvature-dependent, well-formed multimaterial mesh from biological data. This approach uses an energy based system
to extract a surface mesh with nearly equilateral triangles. Further, it generates meshes with smaller triangles in areas of
high curvature which gives more resolution in areas that need it. Well-formed triangular meshes are a good starting point
to generate a tetrahedral mesh that is well suited for finite element simulation.

BioMesh3D&#91;3&#93;
is a recent tool based on Meyers research. However, due to the computational complexity of the particle
advection process, users are required to find a balance between the heavy computation required and their needs in terms of
the quality of the mesh, quantity of tetrahedrons and the time anticipated to extract the mesh. The excessive computational
cost to generate a well-shaped multimaterial mesh has hindered the use of the curvature-dependent particle system by
the bioengineering community for numerical simulations.&#91;4&#93; For instance, an attempt was made to extract a mesh from
a six material dataset, but was finally stopped after two months because it had yet to finish.&#91;5&#93; Therefore, improving the
performance could increase the use of the particle system for multimaterial mesh extraction.

In recent years, advances in computing power have come from an increase in the number of cores. This is particularly
true for the graphic processing unit, or GPU, where hundreds of cores are run in a single instruction, multiple thread (SIMT)
fashion. To take advantage of this new parallel processing power, efficient parallel algorithms are needed. Kim et al.&#91;6&#93; proposed a dynamic particle system for the GPU to accelerate the particle advection procedure during mesh extraction. This
showed up to an order of magnitude speedup over the CPU implementation for curvature-dependent isosurface extraction.
However, it was limited to small volumes due to limited GPU memory size.

The direct adaption of the Meyer particle system to the GPU is not a natural mapping to the SIMT architecture. Kim et
al. used a Red-Black update scheme which, coupled with the amount of control flow required, hinders performance on the
GPU.&#91;6&#93; Additionally the surface representation, a distance field, requires a reprojection step realized through an iterative search process, to place particles back onto the surface. This is inefficient on the GPU due to the amount of control flow as
well. Therefore, a new approach is needed overcome these issues.


* Use of the closest point embedding to define the surfaces in the volume for faster reprojection.
* Barnes-Hut tree code as an acceleration structure for the multimaterial mesh extraction.
* New seeding and add/delete algorithms to efficiently place new particles.
* The first use of particles for direct visualization of a closest point embedding of a surface.

###References###

1.    Meyer, M., Kirby, R., and Whitaker, R., Topology, accuracy, and quality of isosurface meshes using dynamic particles, IEEE Transactions on Visualization and Computer Graphics (Visualization 2007) 13(6), 17041711 (2007).
2.    Meyer, M., Whitaker, R., Kirby, R., Ledergerber, C., and Pfister, H., Particle-based sampling and meshing of surfaces in multimaterial volumes, IEEE Transactions on Visualization and Computer Graphics (Visualization 2008) 14(6), 15391546 (2008).
3.    BioMesh3D: Quality Mesh Generator for Biomedical Applications. Scientific Computing and Imaging Institute (SCI).
4.    Swenson, D., Levine, J., Fu, Z., Tate, J., and MacLeod, R., The effect of non-conformal finite element boundaries on electrical monodomain and bidomain simulations, Computing in Cardiology (37), 97100 (2010).
5.    Swenson, D. private communication (2012).
6.    Kim, M., Chen, G., and Hansen, C., Dynamic particle system for mesh extraction on the gpu, in [Proceedings of the 5th Annual Workshop on General Purpose Processing with Graphics Processing Units], GPGPU-5, 3846, ACM, New York, NY, USA (2012). 
