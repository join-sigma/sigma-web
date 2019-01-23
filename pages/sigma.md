---
layout: default
header-title: 
header-link: 
header-link-text: 
permalink: /sigma
---

## One Guild

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

### Sigma Alliance Guilds

<ul>
{% for guilds in site.guilds  %}
      <li>
        <a href="{{ guilds.url }}">{{ guilds.title }}</a> - {{ guilds.short-description }}
        <!-- <p>{{ guilds.intro_paragraph }}</p> -->
      </li>
{% endfor %}
</ul>