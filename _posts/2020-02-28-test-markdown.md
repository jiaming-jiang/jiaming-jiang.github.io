---
layout: page
title: Trends on Tags - in the world of Tags
subtitle: YouTube videos
cover-img: /assets/img/earth.png
thumbnail-img: /assets/img/earth.png
share-img: /assets/img/earth.png
---

Tags are an important part of many digital platforms, including YouTube, social media sites, and online forums. They help users find and organize content on the platform, and they help the platform's algorithm understand the content and make recommendations to users. In YouTube, tags can help users find videos on a specific topic, and they can help the platform recommend a video to users who are interested in that topic. Generally, tags help make digital platforms more useful and user-friendly by making it easier to find and organize content.
Unfortunately, every good tool is prone to abuse and misuse. The word “misuse” indicates that users use them in less relevant videos because they fail to grasp the true context of the tag; while “abuse” indicates how some users deliberately use popular tags in irrelevant videos for personal gains.  Miscategorizing videos by adding irrelevant tags is against the terms of services and is a direct violation in YouTube’s policy on misleading metadata. The abuse of tags has been a long-term concern in the community, in which Google has decided that the tags were made private from public pages to stop some users from “abusing tags by copying them from other videos” back in 2012. The question is: How critical was the misuse of tags back then? And are we able to detect a certain pattern of tags that are more prone to abuse and misuse? 

## The data used

The data we acquired comes from the platform “YouTube”, a free video-sharing social network. Data from 2005 until 2019 was extracted and further compiled into a dataset called “YouNiverse”. This dataset provides us with the metadata on videos that are in English, uploaded by anonymous users worldwide.


## Research question 

Intuitively, we all know that popular tags are indeed being misused to amplify the audience. But what type of tags are most likely to be abused? Do these tags tend to be trendy for a long time? Our goal here is to not only detect the abuse of tags, but also to observe the trajectories of tags. 
Here are some interesting questions we’ll dive into:
- How do tags evolve and die? When they start to appear as popular tags, do they coincide with the emergence of real-life events?
- How do clusters of tags that are used together behave temporally? Do trending tags gain importance in these clusters during their popularity?
- Do people misuse video tags on unrelated video categories to exploit trending topics?


## How do tags evolve and die?

The first analyses revolve around observing the trajectories of tags. The statistics from OBERLO shows that there are 500 hours of videos uploaded to YouTube. Every. Single. Minute. This indirectly indicates that there might be thousands of tags and its varieties being used. We first look at the trajectories of these tags.

Show three cases of popularity: 
(1) tags that gain periodic popularity, 
(2) a popular concept becoming almost like a genre, such as the ASMR, and 
(3) tags that managed to remain popular for very long periods of time 


Discussion:
We chose the tags X Y Z as they are the most popular tags being used, and popular tags tend to be abused or misused. As the charts shown above, are some of the trends that gain periodic population; the use of these tags spikes up in [period/ date]. After looking into the news in that period, we notice that the tags coincide with real-life events. 
[what visualization suits this question?]
[add in..


## How do clusters of tags that are used together behave temporally? 


In the dataset, we observe that these popular tags are rarely used alone. For example, X is often used with Y and Z. So, in the second task, we will drill up the data to view them on a global scale, using clusters. 
By using centrality analysis, we can:
- See how the popular tags are used with other tags
- Do these tags relate to each other? 
- Are there types of tags that are used in various categories? These tags can be labeled as dynamic tags and would not be subject to misused and they are appropriate for every category
- But is the centrality reliable? It might raise doubts, so let’s do some empirical analysis using pointwise mutual information [explain a little on how PMI works in finding association of words] to prove that centrality can assist in misuse detection. 


## Do people misuse video tags on unrelated video categories to exploit trending topics?

In our final analysis, we will now investigate if 


## Conclusion & Implication

To conclude, tags are really useful ;)



How about a yummy crepe?

![Crepe](https://s3-media3.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/348s.jpg)

It can also be centered!

![Crepe](https://s3-media3.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/348s.jpg){: .mx-auto.d-block :}

Here's a code chunk:

~~~
var foo = function(x) {
  return(x + 5);
}
foo(3)
~~~

And here is the same code with syntax highlighting:

```javascript
var foo = function(x) {
  return(x + 5);
}
foo(3)
```

And here is the same code yet again but with line numbers:

{% highlight javascript linenos %}
var foo = function(x) {
  return(x + 5);
}
foo(3)
{% endhighlight %}

## Boxes
You can add notification, warning and error boxes like this:

### Notification

{: .box-note}
**Note:** This is a notification box.

### Warning

{: .box-warning}
**Warning:** This is a warning box.

### Error

{: .box-error}
**Error:** This is an error box.
