---
layout: page
title: Trends on Tags - in the world of Tags
subtitle: YouTube videos
cover-img: /assets/img/earth.png
thumbnail-img: /assets/img/earth.png
share-img: /assets/img/earth.png
---

<div style="text-align: justify"> Tags are an important part of many digital platforms, including YouTube, social media sites, and online forums. They help users find and organize content on the platform, and they help the platform's algorithm understand the content and make recommendations to users. In YouTube, tags can help users find videos on a specific topic, and they can help the platform recommend a video to users who are interested in that topic. Generally, tags help make digital platforms more useful and user-friendly by making it easier to find and organize content.
Unfortunately, every good tool is prone to abuse and misuse. The word “misuse” indicates that users use them in less relevant videos because they fail to grasp the true context of the tag; while “abuse” indicates how some users deliberately use popular tags in irrelevant videos for personal gains.  Miscategorizing videos by adding irrelevant tags is against the terms of services and is a direct violation in YouTube’s policy on misleading metadata. The abuse of tags has been a long-term concern in the community, in which Google has decided that the tags were made private from public pages to stop some users from “abusing tags by copying them from other videos” back in 2012. The question is: How critical was the misuse of tags back then? And are we able to detect a certain pattern of tags that are more prone to abuse and misuse? </div>


## The data used

The data we acquired comes from the platform “YouTube”, a free video-sharing social network. Data from 2005 until 2019 was extracted and further compiled into a dataset called “YouNiverse”. This dataset provides us with the metadata on videos that are in English, uploaded by anonymous users worldwide.

## Research question 

Intuitively, we all know that popular tags are indeed being misused to amplify the audience. But what type of tags are most likely to be abused? Do these tags tend to be trendy for a long time? Our goal here is to not only detect the abuse of tags, but also to observe the trajectories of tags. 
Here are some interesting questions we’ll dive into:
- How do tags evolve and die? When they start to appear as popular tags, do they coincide with the emergence of real-life events?
- How do clusters of tags that are used together behave temporally? Do trending tags gain importance in these clusters during their popularity?
- Do people misuse video tags on unrelated video categories to exploit trending topics?



{% include tag_counts.html %}
{% include tag_count_timeline.html %}


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



To find the most related tags among the *13321* tags that were used together on 2016 November, we calculate a *pmi-like* calculation without considering the usage of tag **trump** given it is equal among all tags. With the filtering approach explained below, we reduce the number of related tags to **176**.
Here are the tags with the highest ratio, with our approach:

<div class="row">
<div class="col-md-6" markdown="1">
  {% include trump_related_tags.html %}
</div>

<div class="col-md-6" markdown="1">
  To calculate the ratio:
  <ul>
    <li>We filter out the tags whose usage is less than 90% of the population. With this approach, we only get tags that are used by many people on many videos.</li>
    <li>For each tag we find the number of videos it is used. <i>num_used</i> </li>
    <li>For each tag we find the number of videos it is used with the tag <b>"trump"</b>,  <i>num_used_trump</i>. </li>
    <li><i>Ratio</i> = <i>num_used_trump</i> / <i>num_used</i> * 100</li>
    <li>We take the tags with length>2 and with ratio>0.5</li>
</ul>
  
</div>
</div>
*We selected tags in 90% to eliminate tags not used in multiple videos. Assuming people who misuse tags also use other irrelevant tags, with this approach we eliminate those if many people do not use the same tag pair together. This is also helpful to not include tags with typos.*
*The selection of threshold affects the number of related tags found, for our analysis, we wanted to focus on precision and be sure on suspecting a video as misuse.*


These tags represent the words that are tend to be used with our tag of interest, using these tags, we check if we can find misused examples on other categories. For each category other than "News & Politics", we extract all videos tagged with **trump** in the 5 month timeframe between September 2016 and January 2017. This timeframe includes the trend date November 2016 in the middle, which is also the election date.We then check if these videos include related keywords found above. Number of videos including these tags among videos tagged with *trump* can be found below: 

<div class="row" style="max-height: 40%">
  <div class="col-md-6" markdown="1">
  {% include trump_misuse_chart.html %}
  </div>
  <div class="col-md-6 overflow-auto" markdown="1" >
  <div>
    <h4>With Tag Trump</h4>
    <ul>
    <li>URGENT: OBAMA JUST STARTED NEW COLD WAR WITH RUSSIA! THIS IS REALLY BAD</li>
    <li>10 McDonald's Happy Meals Challenge</li>
    <li>Why a 1000 x TRUMP and not HILLARY</li>
    </ul>
    <h4>Related Tags in Title</h4>
    <ul>
    <li>Meet Up Details / Feelings about New President!</li>
    <li>An Event in the Life of: Election Day - Trump Supporter?</li>
    <li>Go Vote! 30% - 40% of Gun Owners Don't Vote (VOTE FOR ME!)</li>
    </ul>
    <h4>Related Tags not in Title</h4>
    <ul>
    <li>Tackle-Buster Gator Bluefish!</li>
    <li>JUJU ON THAT BEAT CHALLENGE!</li>
    <li>REMOVED From Web! UFO Fleet Over Mexico Border 1/26/17</li>
    </ul>
    <h4>Trump in Title</h4>
    <ul>
    <li>Donald Trump Calls Indian Tech Support Scammers</li>
    <li>Is Donald Trump the Republican Party's New Christ?</li>
    <li>Donald Trump vs Hillary Clinton. Epic Rap Battles of History | REACTION!!!</li>
    </ul>
</div>
  </div>
</div>

To check if the videos that do not contain these videos are misused, we sample 20% of the videos tagged with **trump** and manually check if the usage of the tag is appropriate.

Given **596** randomly selected videos, we labeled them as either *Misuse*, *Related* or *N/A*. Videos were deleted or that were not in English were labeled as *N/A*.
Results for each category can be seen on the following charts:

{% include misuse_pie.html %}

Among all randomly selected videos **58.9%**were labeled as misuse, **19.5%** as related and **21.6%** as *N/A*. If we exclude *N/A*, **75.1%** of the videos are misuse. 
The categories that had the most misuse are: **Sports** with **84.5%** .... WRITE MORE

One may think these are small channels, we saw that even official Mercedes F1 team is misusing the tag *trump* in several videos. This video uses the tag *trump* with other misused tag such as *"christmas"* (video was published in December):
<iframe width="560" height="315" src="https://www.youtube.com/embed/4p0c2O6tqgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We then check how the percentage of the misuse change with time. 
{% include timeline.html %}

We now test this approach on different tags. World cup is an internationally popular event. Let's check if we can find misuse examples. 
We sample videos with the above approach and here are some random videos that our approach labels as misuse:

{% include world_cup_examples.html %}

Some short manual inspection shows that most of the titles are unrelated. But there are also titles we mislabel. Even though it did not come home, video with title **"IT'S COMING HOME !!!!!! (Runescape Song)"** tricked us.

Limitations of this approach:
- We may be falsely labeling the videos as relevant, even though they are misuse. If you are talking about Mc Donald's, feel free to use the tag *"trump"*.
- There are hyperparameters such as *percentile* and *threshold*. Since manual labeling was needed, we did not explore so many values, but this can also effect the final result.



## Conclusion & Implication

To conclude, tags are really useful ;)



