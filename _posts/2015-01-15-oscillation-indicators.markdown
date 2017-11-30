---
layout: post
title:  "Finite Volume WENO oscillation indicators"
date:   2015-01-15
category: research 
tags: weno finite volume dumbser oscillation indicators 
---


From Garch et al. (EuroVis 2012), the oscillation indicators, $$\sigma_i = \hat{\mathbf{w}}\Sigma\hat{\mathbf{w}}$$ where

$$ \Sigma_{mn} = \sum^2_{r=1} \int_V  \frac{\partial^r x^m}{\partial x^r} \frac{\partial^r x^n}{\partial x^r} dx$$

given that this is a third-order reconstruction example.

Using sympy, 

~~~
from sympy import *
f = x
dr1mn1 = Derivative(f,x)
dr2mn1 = Derivative(f,x,x)

f = x**2
dr1mn2 = Derivative(f,x)
dr2mn2 = Derivative(f,x,x)

 m1n1 = Integral(dr1mn1 * dr1mn1) + Integral(dr2mn1 * dr2mn1)
 m1n2 = Integral(dr1mn1 * dr1mn2) + Integral(dr2mn1 * dr2mn2)
 m2n1 = Integral(dr1mn2 * dr1mn1) + Integral(dr2mn2 * dr2mn1)
 m2n2 = Integral(dr1mn2 * dr1mn2) + Integral(dr2mn2 * dr2mn2)
~~~

where 

$$m1n1 = x$$

~~~
                ⌠             
⌠               ⎮         2   
⎮        2      ⎮ ⎛  2   ⎞    
⎮ ⎛d    ⎞       ⎮ ⎜ d    ⎟    
⎮ ⎜──(x)⎟  dx + ⎮ ⎜───(x)⎟  dx
⎮ ⎝dx   ⎠       ⎮ ⎜  2   ⎟    
⌡               ⎮ ⎝dx    ⎠    
                ⌡             
~~~


$$m1n2 = x$$

~~~
                    ⌠             
                    ⎮         2   
⌠                   ⎮ ⎛  2   ⎞    
⎮ d     d ⎛ 2⎞      ⎮ ⎜ d    ⎟    
⎮ ──(x)⋅──⎝x ⎠ dx + ⎮ ⎜───(x)⎟  dx
⎮ dx    dx          ⎮ ⎜  2   ⎟    
⌡                   ⎮ ⎝dx    ⎠    
                    ⌡             
~~~

$$m2n1 = x^2$$

~~~
                    ⌠             
                    ⎮         2   
⌠                   ⎮ ⎛  2   ⎞    
⎮ d     d ⎛ 2⎞      ⎮ ⎜ d    ⎟    
⎮ ──(x)⋅──⎝x ⎠ dx + ⎮ ⎜───(x)⎟  dx
⎮ dx    dx          ⎮ ⎜  2   ⎟    
⌡                   ⎮ ⎝dx    ⎠    
                    ⌡             
~~~

$$m2n2 = \frac{4*x^3}{3}$$

~~~
                 ⌠             
⌠                ⎮         2   
⎮         2      ⎮ ⎛  2   ⎞    
⎮ ⎛d ⎛ 2⎞⎞       ⎮ ⎜ d    ⎟    
⎮ ⎜──⎝x ⎠⎟  dx + ⎮ ⎜───(x)⎟  dx
⎮ ⎝dx    ⎠       ⎮ ⎜  2   ⎟    
⌡                ⎮ ⎝dx    ⎠    
                 ⌡             
~~~

I think this needs to be m=3 and n=3 not 2. Also, that doesn't look like a partial derivative. I'm confused about that.
