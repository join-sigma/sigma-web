---
layout: default
header-title: 
header-link: 
header-link-text: 
permalink: /sigma
---

## One Guild

The SIGMA ALLIANCE is a multi-guild SWGOH community that focuses on a “One Guild” mentality and a performance driven approach to our gaming development.  Despite housing a large array of guilds, we espouse a unified direction for our player base and consider SIGMA to be a single entity, not simply the sum of its parts. 

### Sigma Alliance Guilds

<ul>
{% for guilds in site.guilds  %}
      <li>
        <a href="{{ guilds.url }}">{{ guilds.title }}</a> - {{ guilds.short-description }}
        <!-- <p>{{ guilds.intro_paragraph }}</p> -->
      </li>
{% endfor %}
</ul>