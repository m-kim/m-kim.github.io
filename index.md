---
layout: page
<<<<<<< HEAD
title: Gitlab Pages Demo
=======
title: 
>>>>>>> parent of 2e48f3b... Switch to minimal mistake theme.
category: pages
navigation_weight: 1
---

<<<<<<< HEAD
**Summary**: This page is an example of what a site might look like if it was created using the ORNL Pages automated static site service. This service leverages Git, Docker, Gitlab CI Runners, and Jekyll to allow users to maintain their own sites in Markdown or HTML through ORNL's internal GitLab services and publish those sites internally or externally. Additionally, users can choose between no authenication, XCAMS, UCAMS, or UCAMS + RSA for their sites.

Let's test some code:

{% highlight html linenos %}

<!-- News card -->
<div class="research-card-wrapper">
    <div class="news-card">
        <h3>News</h3>
        <p>Teaser goes here.
        </p>
        <a href="" class="button">Read</a>
    </div>
</div>

{% endhighlight %}

{% highlight css linenos %}
footer {
    background-color: #006699;
}
{% endhighlight %}


**Links**:
* [GitLab: How to Create a Project](https://docs.gitlab.com/ee/gitlab-basics/create-project.html)
* [What is Docker?](https://www.docker.com/what-docker)
* [Kramdown Syntax](https://kramdown.gettalong.org/syntax.html)
* [How to Use Jekyll](https://jekyllrb.com/docs/home/)

=======
I am a postdoctoral researcher in the [Scientific Data Group](https://www.ornl.gov/division/csmd/scientific-data), which is part of the [Computer Science and Mathematics Division](https://www.ornl.gov/division/CSM) at [Oak Ridge National Laboratory](https://www.ornl.gov). 

{% for post in site.posts %}	
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p><small><strong>{{ post.date | date: "%B %e, %Y" }}</strong> . {{ post.category }} . <a href="http://erjjones.github.com{{ post.url }}#disqus_thread"></a></small></p>			
{% endfor %} 
>>>>>>> parent of 2e48f3b... Switch to minimal mistake theme.
