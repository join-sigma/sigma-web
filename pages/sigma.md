---
layout: default
header-title: 
header-link: 
header-link-text: 
permalink: /sigma
---

## One Guild

The SIGMA ALLIANCE is a multi-guild SWGOH community that focuses on a "One Guild" mentality and a performance driven approach to our gaming development.  Despite housing a large array of guilds, we espouse a unified direction for our player base and consider SIGMA to be a single entity, not simply the sum of its parts. 

### Sigma Alliance Guilds

All Sigma Alliance guilds have two simple requirements: active Discord & swgoh.gg profile.

<ul>
{% for guilds in site.guilds  %}
      <li style="list-style: none; position: relative; margin-top: 0; padding-top: 0; margin-bottom: 3rem;">
        <a href=" {{ guilds.url }} " style="background: url({{ guilds.guild-photo}}) no-repeat bottom center; 
  background-size: cover;
  display: block;
  width: 100%;
  height: 26rem;">
			<p style="position: absolute; bottom: 0;  margin-bottom: 0; padding: 1rem; background-color: rgba(0,0,0,.5); width: 100%; color: white;">{{ guilds.short-description }}</p>
		</a>
      </li>
{% endfor %}
</ul>