{% capture peFeatureContent %}
To access the **{{feature}}** feature, use [ThingsBoard Cloud](https://{{hostName}}/signup){:target="_blank"} or [deploy your own instance](/docs/user-guide/install/pe/installation-options/){:target="_blank"} of [ThingsBoard PE](/products/thingsboard-pe/){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md title="Feature available in ThingsBoard Professional Edition only" content=peFeatureContent %}