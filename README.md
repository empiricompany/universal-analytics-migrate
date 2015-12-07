# Universal Analytics Migrate

These are few lines of code inspired to jQuery Migrate to migrate old event tracking ga.js and other features  _gaq.push() to new Universal Analytics API analytics.js.

The plugin shows warning messages of deprecated methods with a stack trace to allow developers to identify and fix compatibility issues, like jQuery Migrate.

Simply use new Universal Analytics code and add the js.

Backward compatibility API supported:
#### _trackEvent
https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide

```html
<a onclick="_gaq.push(['_trackEvent', 'Email', 'Click', 'sample@mail.com', 'value'])">sample@mail.com</a>
```
converted to
```javascript
ga('send', 'event', 'Email', 'Click', 'sample@mail.com', 'value');
```

#### _trackSocial
https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingSocial

```javascript
_gaq.push(['_trackSocial', network, socialAction, opt_target, opt_pagePath]);
```
converted to 
```javascript
ga('send', 'social', network, socialAction, opt_target, opt_pagePath);
```

#### _trackPageview
https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration#_gat.GA_Tracker_._trackPageview

```html
_gaq.push(['_trackPageview', '/home/landingPage']);
```
converted to
```javascript
ga('send', 'pageview', { 'page': '/home/landingPage' });
```
