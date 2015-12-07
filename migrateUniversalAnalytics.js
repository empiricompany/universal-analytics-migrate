function warnMigrateUA(msg){
    if ( console && console.warn) {
        console.warn("UAMIGRATE: " +msg);
        console.trace();
    }
}

var _gaq = _gaq || [];
_gaq.push = function(){
    for (var i = 0, arguments; argument = arguments[i]; i++) {
        action  = argument[0];
        //warnMigrateUA(argument);
        //warnMigrateUA(action);
        switch(action){
          case '_trackEvent':
            _category = argument[1];
            _action = argument[2];
            _label = argument[3];
            _value = argument[4];
            warnMigrateUA("_gaq.push(['"+action+"', '"+_category+"', '"+_action+"', '"+_label+"', '"+_value+"']) is deprecated");
            ga('send', 'event', _category, _action, _label, _value);
            warnMigrateUA("Execute ga('send', 'event', '"+_category+"', '"+_action+"', '"+_label+"', '"+_value+"');");
          break;
          case '_trackSocial':
            _network = argument[1];
            _socialAction = argument[2];
            _opt_target = argument[3];
            _opt_pagePath = argument[4];
            warnMigrateUA("_gaq.push(['"+action+"', '"+_network+"', '"+_socialAction+"', '"+_opt_target+"', '"+_opt_pagePath+"']) is deprecated");
            ga('send', 'social', _network, _socialAction, _opt_target, _opt_pagePath);
            warnMigrateUA("Execute ga('send', 'social', '"+_network+"', '"+_socialAction+"', '"+_opt_target+"', '"+_opt_pagePath+"');");
          break;
          case '_trackPageview':
            warnMigrateUA("_gaq.push(['"+action+"', '"+argument[1]+"') is deprecated");
            ga('send', 'pageview', { 'page': argument[1] });
            warnMigrateUA("Execute ga('send', 'pageview', { 'page': '"+argument[1]+"' });");
          break;
        }
    }
}
//warnMigrateUA('Override _gaq.push() function');
