# Map styles

Helpful links
- [json formatter](http://www.freeformatter.com/json-formatter.html)
- [Styling wizard](http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html)
- [Public dev link](http://dev.greyvy.com/myie/map/)
- [Some snazzy maps](http://snazzymaps.com/)

Lé v1 json array

```JSON
[{"stylers":[{"saturation":-100}]},{"featureType":"water","stylers":[{"saturation":-100},{"lightness":-57}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","stylers":[{"lightness":10}]},{"featureType":"road","stylers":[{"lightness":-15}]},{"featureType":"road.local","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":75}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]}]
```

Lé v2 json array

```JSON
[{"stylers":[{"saturation":-100}]},{"featureType":"water","stylers":[{"color":"#40403a"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"color":"#40403a"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]}]
```
