---
layout: post
title:  "Finite Volume WENO oscillation indicators part 3"
date:   2015-01-16 16:40
category: research 
tags: weno finite volume dumbser oscillation indicators 
---


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
            mn[m][n] = mn[m][n] + integrate(derivs[r][m]  * derivs[r][n], (x,-0.5,0.5))
        symbol = 'Sigma_' + str(m) + str(n) + '='
        display(Symbol(symbol))
        display(mn[m][n])
        display('= ' +  str(mn[m][n].doit()))
~~~



If we integrate $$[-0.5,0.5]$$, then 

$$\int_{-0.5}^{0.5} \left(\frac{d}{d x} x\right)^{2}\, dx + \int_{-0.5}^{0.5} \left(\frac{d^{2}}{d x^{2}}  x\right)^{2}\, dx$$ = 1.0

$$\int_{-0.5}^{0.5} \frac{d}{d x} x \frac{d}{d x} x^{2}\, dx + \int_{-0.5}^{0.5} \frac{d^{2}}{d x^{2}}  x \frac{d^{2}}{d x^{2}}  x^{2}\, dx$$ = 0

$$\int_{-0.5}^{0.5} \frac{d}{d x} x \frac{d}{d x} x^{3}\, dx + \int_{-0.5}^{0.5} \frac{d^{2}}{d x^{2}}  x \frac{d^{2}}{d x^{2}}  x^{3}\, dx$$ = 0.25

$$\int_{-0.5}^{0.5} \frac{d}{d x} x \frac{d}{d x} x^{2}\, dx + \int_{-0.5}^{0.5} \frac{d^{2}}{d x^{2}}  x \frac{d^{2}}{d x^{2}}  x^{2}\, dx$$ = 0

$$\int_{-0.5}^{0.5} \left(\frac{d}{d x} x^{2}\right)^{2}\, dx + \int_{-0.5}^{0.5} \left(\frac{d^{2}}{d x^{2}}  x^{2}\right)^{2}\, dx$$ = 4.33333

$$\int_{-0.5}^{0.5} \frac{d}{d x} x^{2} \frac{d}{d x} x^{3}\, dx + \int_{-0.5}^{0.5} \frac{d^{2}}{d x^{2}}  x^{2} \frac{d^{2}}{d x^{2}}  x^{3}\, dx$$ = 0

$$\int_{-0.5}^{0.5} \frac{d}{d x} x \frac{d}{d x} x^{3}\, dx + \int_{-0.5}^{0.5} \frac{d^{2}}{d x^{2}}  x \frac{d^{2}}{d x^{2}}  x^{3}\, dx$$ = 0.25

$$\int_{-0.5}^{0.5} \frac{d}{d x} x^{2} \frac{d}{d x} x^{3}\, dx + \int_{-0.5}^{0.5} \frac{d^{2}}{d x^{2}}  x^{2} \frac{d^{2}}{d x^{2}}  x^{3}\, dx$$ = 0

$$\int_{-0.5}^{0.5} \left(\frac{d}{d x} x^{3}\right)^{2}\, dx + \int_{-0.5}^{0.5} \left(\frac{d^{2}}{d x^{2}}  x^{3}\right)^{2}\, dx$$ = 3.11250

