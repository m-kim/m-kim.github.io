---
layout: page
title: 
category: pages
navigation_weight: 1
---

I am a postdoctoral researcher in the [Scientific Data Group](https://www.ornl.gov/division/csmd/scientific-data), which is part of the [Computer Science and Mathematics Division](https://www.ornl.gov/division/CSM) at [Oak Ridge National Laboratory](https://www.ornl.gov). 

{% for post in site.posts %}	
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p><small><strong>{{ post.date | date: "%B %e, %Y" }}</strong> . {{ post.category }} . <a href="http://erjjones.github.com{{ post.url }}#disqus_thread"></a></small></p>			
{% endfor %} 