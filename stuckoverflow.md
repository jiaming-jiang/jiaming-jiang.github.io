---
layout: page
title: Trends on Tags 
subtitle: Exposing The Misuse of Tags in YouTube
cover-img: /assets/img/header.png
thumbnail-img: /assets/img/earth.png
share-img: /assets/img/header.png
---
<div style="text-align: justify"> Did you know that tags play a crucial role in helping users discover and organize content on digital platforms like YouTube, social media, and online forums? They can help users find videos on specific topics and can even help platforms recommend videos to users based on their interests. But just like any other feature, tags can also be abused and misused. In fact, YouTube has a policy against misleading metadata, and using irrelevant tags on a video is a violation of the platform's terms of service. <br><br>
Unfortunately, tag abuse has been a longstanding issue in the online community. In 2012, Google even made tags private on YouTube's public pages in an effort to stop some users from "abusing tags by copying them from other videos." So the question remains: <br>
<img src="/images/ADA-intro.png">
</div>


## The data used

<div style="text-align: justify"> The data we acquired comes from the platform “YouTube”, a free video-sharing social network. Data from 2005 until 2019 was extracted and further compiled into a dataset called “YouNiverse”. This dataset provides us with the metadata on videos that are in English, uploaded by anonymous users worldwide.  </div>

## Do people go to great lengths to include tags in their videos?

{% include tag_counts.html %}

<div style="text-align: justify"> You might think that adding tags to a video is just a matter of throwing in a few random keywords, but it turns out that most users are actually quite strategic about it. In fact, excluding the small minority of videos that have no tags at all, the vast majority of videos seem to include around 10 tags on average. But don't let that fool you - there are always a few outliers who go above and beyond. Some videos have been found to contain an astounding 60 tags or more! Clearly, some users are willing to go the extra mile when it comes to tagging their content. Now let’s look at how the average number of tags per video each year: </div>

{% include tag_count_timeline.html %}

<div style="text-align: justify"> In 2005, the average number of tags per video was a modest 12. But over the next few years, the trend began to shift. By 2012, that number had skyrocketed to a peak of 17 tags per video. And even beyond 2012, the graph shows that people consistently added more or less 10 tags in their video. </div>




## How do tags evolve and die?

<div style="text-align: justify"> [to be edited.]</div>

{% include popular_timeline.html %}
{% include legend.html %}


<img src="/images/popularity_histogram.png">
<img src="/images/used_histogram.png">


## How do clusters of tags that are used together behave temporally?

<div style="text-align: justify"> [to be edited.]</div>

## Do people misuse video tags on unrelated video categories to exploit trending topics?

<div style="text-align: justify"> To find the most related tags among the *13321* tags that were used together on 2016 November, we calculate a *pmi-like* calculation without considering the usage of tag **trump** given it is equal among all tags. With the filtering approach explained below, we reduce the number of related tags to **176**.
Here are the tags with the highest ratio, with our approach: </div>

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



<div style="text-align: justify"> We selected tags in 90% to eliminate tags not used in multiple videos. Assuming people who misuse tags also use other irrelevant tags, with this approach we eliminate those if many people do not use the same tag pair together. This is also helpful to not include tags with typos.*
*The selection of threshold affects the number of related tags found, for our analysis, we wanted to focus on precision and be sure on suspecting a video as misuse. </div>

<div style="text-align: justify"> These tags represent the words that are tend to be used with our tag of interest, using these tags, we check if we can find misused examples on other categories. For each category other than "News & Politics", we extract all videos tagged with **trump** in the 5 month timeframe between September 2016 and January 2017. This timeframe includes the trend date November 2016 in the middle, which is also the election date.We then check if these videos include related keywords found above. Number of videos including these tags among videos tagged with *trump* can be found below: </div>

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

<div style="text-align: justify"> We now test this approach on different tags. World cup is an internationally popular event. Let's check if we can find misuse examples. 
We sample videos with the above approach and here are some random videos that our approach labels as misuse: </div>

{% include world_cup_examples.html %}

<div style="text-align: justify"> Some short manual inspection shows that most of the titles are unrelated. But there are also titles we mislabel. Even though it did not come home, video with title **"IT'S COMING HOME !!!!!! (Runescape Song)"** tricked us. </div>

Limitations of this approach:

- We may be falsely labeling the videos as relevant, even though they are misuse. If you are talking about Mc Donald's, feel free to use the tag *"trump"*.
- There are hyperparameters such as *percentile* and *threshold*. Since manual labeling was needed, we did not explore so many values, but this can also effect the final result.

## Conclusion & Implication

To conclude, tags are really useful ;)
