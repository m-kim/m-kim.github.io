---
layout: post
title:  "Finite Volume WENO oscillation indicators part 2"
date:   2015-01-16 16:00
category: research 
tags: weno finite volume dumbser oscillation indicators 
---

I think this needs to be m=3 and n=3 not 2. Also, that doesn't look like a partial derivative. 

If the length $$\hat{\mathbf{w}}$$ is three, does that mean m x n is 3x3? If that's the case,
then $$ \Sigma_{mn}$$ needs to be an 3x3 as well, right?

~~~
from sympy import *

#http://stackoverflow.com/questions/20979993/how-to-pretty-print-in-ipython-notebook-via-sympy-pprint-only-prints-unicode-ve
from IPython.display import display

init_printing(use_unicode=True, use_latex='mathjax')
derivs = [[0 for x in range(3)] for x in range(2)] 

mn = [[0 for x in range(3)] for x in range(3)] 
x = symbols('x')
f = x
derivs[0][0] = dr1mn1 = Derivative(f,x)
derivs[1][0] = dr2mn1 = Derivative(f,x,x)

f = x**2
derivs[0][1] = dr1mn2 = Derivative(f,x)
derivs[1][1] = dr2mn2 = Derivative(f,x,x)

f = x**3
derivs[0][2] = dr1mn3 = Derivative(f,x)
derivs[1][2] = dr2mn3 = Derivative(f,x,x)

for m in range(3):
    for n in range(3):
        for r in range(2):
            mn[m][n] = mn[m][n] + Integral(derivs[r][m]  * derivs[r][n])
        symbol = 'Sigma_' + str(m) + str(n) + '='
        display(Symbol(symbol))
        display(mn[m][n])
        display('= ' +  str(mn[m][n].doit()))
~~~


When run, this is:

$$\int \left(\frac{d}{d x} x\right)^{2}\, dx + \int \left(\frac{d^{2}}{d x^{2}}  x\right)^{2}\, dx$$

$$\int \frac{d}{d x} x \frac{d}{d x} x^{2}\, dx + \int \frac{d^{2}}{d x^{2}}  x \frac{d^{2}}{d x^{2}}  x^{2}\, dx$$

$$\int \frac{d}{d x} x \frac{d}{d x} x^{3}\, dx + \int \frac{d^{2}}{d x^{2}}  x \frac{d^{2}}{d x^{2}}  x^{3}\, dx$$

$$\int \frac{d}{d x} x \frac{d}{d x} x^{2}\, dx + \int \frac{d^{2}}{d x^{2}}  x \frac{d^{2}}{d x^{2}}  x^{2}\, dx$$

$$\int \left(\frac{d}{d x} x^{2}\right)^{2}\, dx + \int \left(\frac{d^{2}}{d x^{2}}  x^{2}\right)^{2}\, dx$$

$$\int \frac{d}{d x} x^{2} \frac{d}{d x} x^{3}\, dx + \int \frac{d^{2}}{d x^{2}}  x^{2} \frac{d^{2}}{d x^{2}}  x^{3}\, dx$$

$$\int \frac{d}{d x} x \frac{d}{d x} x^{3}\, dx + \int \frac{d^{2}}{d x^{2}}  x \frac{d^{2}}{d x^{2}}  x^{3}\, dx$$

$$\int \frac{d}{d x} x^{2} \frac{d}{d x} x^{3}\, dx + \int \frac{d^{2}}{d x^{2}}  x^{2} \frac{d^{2}}{d x^{2}}  x^{3}\, dx$$

$$\int \left(\frac{d}{d x} x^{3}\right)^{2}\, dx + \int \left(\frac{d^{2}}{d x^{2}}  x^{3}\right)^{2}\, dx$$



