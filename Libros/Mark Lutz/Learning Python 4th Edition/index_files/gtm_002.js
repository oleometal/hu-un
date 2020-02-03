
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"215",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];return a=a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.top!==window.self}catch(a){return!1}})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",2],8,16],".replace(\"\/conferences.oreilly.com\",\"\")})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formSuccessURL"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";if(void 0!=a\u0026\u0026\"\"!=a\u0026\u0026null!=a)return a;if(2==",["escape",["macro",5],8,16],".split(\"\/\").length\u0026\u0026!",["escape",["macro",5],8,16],".endsWith(\".html\")){if(-1\u003C",["escape",["macro",6],8,16],".indexOf(\"?\")\u0026\u00260\u003E",["escape",["macro",6],8,16],".indexOf(\"\/?\"))return ",["escape",["macro",5],8,16],"+\"\/?\"+",["escape",["macro",6],8,16],".split(\"?\")[1];if(!(-1\u003C",["escape",["macro",6],8,16],".indexOf(\"\/?\")))return ",["escape",["macro",5],8,16],"+\"\/\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var c=\/www.oreilly.com\\\/member\\\/(register|login|reset-password|profile)?\\\/?(\\?(.*))?$\/i,d=\/linkedin\\.com\\\/(oauth\\\/v(.*)\\\/login-success|uas\\\/login|uas\\\/oauth2\\\/authorization)\\\/?(\\?(.*))?$\/i,e=\/facebook\\.com\\\/(login\\.php|v(.*)\\\/dialog\\\/oauth(.*))\/i,f=\/api\\.twitter\\.com\\\/oauth\\\/(authorize|authenticate)\\\/?(\\?(.*))?$\/i,g=\/accounts\\.google\\.(.*)\\\/(signin\\\/oauth\\\/consent|accounts\\\/SetSID|signin\\\/oauth\\\/oauthchooseaccount)(\\?(.*))?$\/i,a=document.referrer;(c.test(a)||d.test(a)||\ne.test(a)||f.test(a)||g.test(a))\u0026\u0026b.set(\"referrer\",null)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003Cdocument.location.href.indexOf(\"www.safaribooksonline.com\"))return\"oreilly.com\";if(-1\u003Cdocument.location.href.indexOf(\"oreilly.com\"))return\"www.safaribooksonline.com\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){max=100;min=1;return Math.floor(Math.random()*(max-min+1))+min})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",11],8,16],";switch(a){case \"start\":return\"play\";case \"progress\":return\"\"+",["escape",["macro",12],8,16],"+\"%\"}})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_customUrlSource":["macro",6],
      "vtp_queryKey":"subscribed",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"amt",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.year"
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.oreilly\\.com.*schedule\\\/(grid|full|presentations|stype|stopic|proceedings).*","value","Schedule"],["map","key",".*\\.oreilly\\.com.*schedule\\\/speaker.*","value","Speakers"],["map","key",".*\\.oreilly\\.com.*public\\\/register.*","value","Registration"],["map","key",".*\\.oreilly\\.com.*user\\\/account.*","value","User Info"],["map","key",".*\\.oreilly\\.com.*\\\/hotel.*","value","Venue, travel, and hotel"],["map","key",".*\\.oreilly\\.com.*schedule\\\/detail\\\/.*","value","Sessions, Tutorials, Keynotes"],["map","key",".*\\.oreilly\\.com.*users\\\/sign_in.*","value","Sign In or Create a New Account"],["map","key",".*\\.oreilly\\.com.*\\\/sponsors.*","value","Sponsors"],["map","key",".*\\.oreilly\\.com.*\\\/about.*","value","About"],["map","key",".*\\.oreilly\\.com.*\\\/resources.*","value","Resources"],["map","key",".*\\.oreilly\\.com.*\\\/(cfp|proposal|reviewing).*","value","CFP"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.franchise"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.location"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"businessLine"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.*conferences.oreilly.com\\\/(strata($|\\\/|\\?).*)","value","UA-112091926-2"],["map","key","^.*conferences.oreilly.com\\\/(software-?architecture($|\\\/|\\?).*)","value","UA-112091926-3"],["map","key","^.*conferences.oreilly.com\\\/(artificial-intelligence($|\\\/|\\?).*)","value","UA-112091926-4"],["map","key","^.*ai.oreilly.com.cn\\\/ai-cn(\\\/?|(.*))$","value","UA-112091926-4"],["map","key","^.*conferences.oreilly.com\\\/(velocity($|\\\/|\\?).*)","value","UA-112091926-5"],["map","key","^.*conferences.oreilly.com\\\/(fluent($|\\\/|\\?).*)","value","UA-112091926-6"],["map","key","^.*conferences.oreilly.com\\\/(oscon($|\\\/|\\?).*)","value","UA-112091926-7"],["map","key","^.*conferences.oreilly.com\\\/(jupyter($|\\\/|\\?).*)","value","UA-112091926-8"],["map","key","(.*)oreilly.com\\\/blended-courses.*","value","UA-112091926-11"],["map","key","^.*conferences.oreilly.com\\\/(tensorflow($|\\\/|\\?).*)","value","UA-112091926-12"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",19]],["map","index","1","group",["macro",20]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",0],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",8]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]],["map","index","3","dimension",["macro",19]],["map","index","4","dimension",["macro",23]],["map","index","5","dimension",["macro",24]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventVal"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAct"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLbl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPTitle"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-8",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.parentTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.formatType"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",39],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.safaribooksonline.com|learning.oreilly.com","value","Learning Platform"],["map","key","www.oreilly.com|get.oreilly.com|members.oreilly.com","value","Content \u0026 Marketing"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hasAccount"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"membersLoggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"unifiedLoggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.type"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.author"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.publisher"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.releaseDate"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.topic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.free"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subdirectory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subTopic"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*get.oreilly.com|www.oreilly.com|members.oreilly.com|shop.oreilly.com|ssearch.oreilly.com.*","value","UA-112091926-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","3","group",["macro",37]],["map","index","4","group",["macro",38]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",0],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",7]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",40]],["map","index","2","dimension",["macro",41]],["map","index","3","dimension",["macro",42]],["map","index","4","dimension",["macro",43]],["map","index","5","dimension",["macro",44]],["map","index","9","dimension",["macro",45]],["map","index","10","dimension",["macro",46]],["map","index","11","dimension",["macro",47]],["map","index","12","dimension",["macro",48]],["map","index","13","dimension",["macro",38]],["map","index","14","dimension",["macro",49]],["map","index","15","dimension",["macro",50]],["map","index","16","dimension",["macro",51]],["map","index","17","dimension",["macro",52]],["map","index","18","dimension",["macro",37]],["map","index","19","dimension",["macro",53]],["map","index","20","dimension",["macro",54]],["map","index","21","dimension",["macro",55]],["map","index","27","dimension",["macro",56]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",57],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionID"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"oid",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"type",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ccy",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key",".*www.oreilly.com.*","value","true"],["map","key",".*learning.oreilly.com.*learning-paths.*","value","true"],["map","key",".*learning.oreilly.com.*case-studies.*","value","true"],["map","key",".*learning.oreilly.com.*live-training.*","value","true"],["map","key",".*conferences.oreilly.com.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*amazon.*","value","true"],["map","key",".*aws.*","value","true"],["map","key",".*kubernetes.*","value","true"],["map","key",".*sre.*","value","true"],["map","key",".*devops.*","value","true"],["map","key",".*microservices.*","value","true"],["map","key",".*containers.*","value","true"],["map","key",".*distributed.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*data-science.*","value","true"],["map","key",".*big-data.*","value","true"],["map","key",".*machine-learning.*","value","true"],["map","key",".*data-engineering.*","value","true"],["map","key",".*data-architecture.*","value","true"],["map","key",".*business-intelligence.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased*","value","true"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/schedule\/topic\/2867","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*software-architecture.*","value","true"],["map","key",".*microservices.*","value","true"],["map","key",".*serverless.*","value","true"],["map","key",".*software-engineering.*","value","true"],["map","key",".*chaos-engineering.*","value","true"],["map","key",".*evolutionary-architecture.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*data-science.*","value","true"],["map","key",".*big-data.*","value","true"],["map","key",".*machine-learning.*","value","true"],["map","key",".*data-engineering.*","value","true"],["map","key",".*data-architecture.*","value","true"],["map","key",".*business-intelligence.*","value","true"],["map","key",".*databases.*","value","true"],["map","key",".*analytics.*","value","true"],["map","key",".*data-show-podcast.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*open-source.*","value","true"],["map","key",".*cloud-native.*","value","true"],["map","key",".*software-development.*","value","true"],["map","key",".*blockchain.*","value","true"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"logged_in"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"term",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*machine-learning.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*reinforcement-learning.*","value","true"],["map","key",".*neural-networks.*","value","true"],["map","key",".*GANS.*","value","true"],["map","key",".*NLP.*","value","true"],["map","key",".*natural-language-processing.*","value","true"],["map","key",".*NSTM.*","value","true"],["map","key",".*tensorflow.*","value","true"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningPaidAccount"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningAccountType"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"organization"
    },{
      "function":"__smm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",11],
      "vtp_map":["list",["map","key","start","value","play"],["map","key","progress","value",["macro",12]]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.name"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.add"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.remove"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*reinforcement-learning.*","value","true"],["map","key",".*nueral-networks.*","value","true"],["map","key",".*natural-language-processing.*","value","true"],["map","key",".*bots.*","value","true"],["map","key",".*agents.*","value","true"],["map","key",".*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*devops.*","value","true"],["map","key",".*kubernetes.*","value","true"],["map","key",".*cloud-native.*","value","true"],["map","key",".*site-reliability-engineering.*","value","true"],["map","key",".*systems-engineering.*","value","true"],["map","key",".*configuration-management.*","value","true"],["map","key",".*containerization.*","value","true"]]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"107-FMS-070\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "live_only":true,
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/get.oreilly.com\/rs\/107-FMS-070\/images\/digitalpi-utm-tracker-oreilly.com.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1047975969",
      "vtp_conversionLabel":"WjAECOPA2nMQobDb8wM",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":31
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1047975969",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",15],
      "tag_id":32
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"70561",
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"tfRcCMnwwHQQk4a4jwM",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":35
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",15],
      "tag_id":36
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"zLNTCNHo-XYQk4a4jwM",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":39
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":40
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"Safari",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Submit",
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",26],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",27],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",28],
      "vtp_eventCategory":["macro",29],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",32]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",26],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":56
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"pYI4CLSnrXwQk4a4jwM",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",35],
      "vtp_eventAction":"Card",
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":62
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",32]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",58],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",27],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",28],
      "vtp_eventCategory":["macro",29],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",58],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":68
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":78
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"form",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"submit",
      "vtp_eventLabel":"free trial",
      "tag_id":85
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nv2po",
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"scroll tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template",["macro",59],"%"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",60],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1065103245",
      "vtp_conversionLabel":"vCakCOu-148BEI3f8PsD",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":114
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":115
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nv3z2",
      "tag_id":122
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"AW-773515308",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",15],
      "tag_id":130
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",60],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1065103245",
      "vtp_conversionLabel":"u_1aCI6GipMBEI3f8PsD",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":132
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"773515308",
      "vtp_conversionLabel":"3NkcCNrj2ZMBEKzQ6_AC",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":133
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",60],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"804958955",
      "vtp_conversionLabel":"JiwyCPH8jZUBEOvl6v8C",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":155
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":156
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",60],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1011620147",
      "vtp_conversionLabel":"voGZCImi7ZQBELOysOID",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":157
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":158
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"773515308",
      "vtp_conversionLabel":"3NkcCNrj2ZMBEKzQ6_AC",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":161
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":162
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"773515308",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",15],
      "tag_id":165
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"video plays",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["macro",13],
      "vtp_eventLabel":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":188
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"AW-804958955",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",15],
      "tag_id":190
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"AW-926848715",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",15],
      "tag_id":194
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N4KPR77","nickname","Account App"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",6],"\/account\/",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","ua"]],
      "tag_id":209
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1669222_90",
      "tag_id":210
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"3000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"1669222_110",
      "tag_id":211
    },{
      "function":"__cl",
      "tag_id":212
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75,95",
      "vtp_captureComplete":false,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"1669222_203",
      "vtp_enableTriggerStartOption":true,
      "tag_id":213
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25, 50, 75, 95",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1669222_204",
      "vtp_enableTriggerStartOption":true,
      "tag_id":214
    },{
      "function":"__hl",
      "tag_id":215
    },{
      "function":"__cl",
      "tag_id":216
    },{
      "function":"__cl",
      "tag_id":217
    },{
      "function":"__cl",
      "tag_id":218
    },{
      "function":"__cl",
      "tag_id":219
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Ciframe height=\"1\" width=\"1\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/www.emjcd.com\/tags\/c?containerTagId=2775\u0026amp;ITEM1=Safari-Subscription\u0026amp;AMT1=",["escape",["macro",17],12],"\u0026amp;QTY1=1\u0026amp;CID=1525054\u0026amp;OID=",["escape",["macro",61],12],"\u0026amp;TYPE=",["escape",["macro",62],12],"\u0026amp;CURRENCY=",["escape",["macro",63],12],"\" name=\"cj_conversion\"\u003E\u003C\/iframe\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"SafariSubscription\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_track,docHost=document.location.hostname;if(\"conferences.oreilly.com\"==docHost.toLowerCase()||\"ai.oreilly.com.cn\"==docHost.toLowerCase()){domains_to_track=[\"conference.oreilly.com\"];var folders_to_track=",["escape",["macro",5],8,16],".split(\"\/\")[1]}else if(\"oreilly.com\"==docHost.toLowerCase()||\"www.oreilly.com\"==docHost.toLowerCase())domains_to_track=[\"www.oreilly.com\"],folders_to_track=\"\";\nvar extDoc=\".doc .docx .xls .xlsx .xlsm .ppt .pptx .exe .zip .pdf .js .txt .csv\".split(\" \"),socSites=\"\",isSubDomainTracker=!0,isSeparateDomainTracker=!1,isGTM=!0,eValues={downloads:{category:\"Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbound_downloads:{category:\"Outbound Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbounds_oreilly:{category:\"Outbound Links\",action:\"Oreilly\",label:\"\",value:0,nonInteraction:0},outbounds:{category:\"Outbound Links\",action:\"Non-Oreilly\",\nlabel:\"\",value:0,nonInteraction:0},email:{category:\"Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},outbound_email:{category:\"Outbound Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},telephone:{category:\"Telephone Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},social:{category:\"Social Profiles\",action:\"Click\",label:\"\",value:0,nonInteraction:0}},mainDomain=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];\nmainDomain=mainDomain.toLowerCase();1==isSubDomainTracker\u0026\u0026(mainDomain=document.location.hostname.replace(\"www.\",\"\").toLowerCase());var arr=document.getElementsByTagName(\"a\");\nfor(i=0;i\u003Carr.length;i++){var flag=0;if(!isExcluded(arr[i])){var mDownAtt=arr[i].getAttribute(\"onmousedown\"),doname=\"\",linkType=\"\",mailPattern=\/^mailto:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i,urlPattern=\/^(ftp|http|https):\\\/\\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\\/|\\\/([\\w#!:.?+=\u0026%@!\\-\\\/]))?\/i,telPattern=\/^tel:(.*)([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$\/i,internalDomain=\/(.*)(oreilly.com|safaribooksonline.com)(.*)\/i;if(mailPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||telPattern.test(arr[i].href)){try{!urlPattern.test(arr[i].href)||\nmailPattern.test(arr[i].href)||telPattern.test(arr[i].href)?!mailPattern.test(arr[i].href)||telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)?!telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||mailPattern.test(arr[i].href)||(doname=arr[i].href.toLowerCase(),linkType=\"tel\"):(doname=arr[i].href.toLowerCase().split(\"@\")[1],linkType=\"mail\"):(doname=arr[i].hostname.toLowerCase().replace(\"www.\",\"\"),linkType=\"url\")}catch(b){continue}if(null!=mDownAtt\u0026\u0026(mDownAtt=String(mDownAtt),-1\u003CmDownAtt.indexOf(\"dataLayer.push\")||\n-1\u003CmDownAtt.indexOf(\"('send'\")))continue;var condition=!1;if(condition=isSeparateDomainTracker?doname==mainDomain:-1!=doname.indexOf(mainDomain))\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?_isDownload(arr[i].href)\u0026\u0026\n(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt)));else for(var k=0;k\u003Cdomains_to_track.length;k++){var condition1=!1;condition1=isSeparateDomainTracker?doname==domains_to_track[k]:-1!=doname.indexOf(domains_to_track[k]);condition1?\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?\n_isDownload(arr[i].href)\u0026\u0026(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt))):(flag++,flag==domains_to_track.length\u0026\u0026(\"mail\"===linkType\u0026\u0026(eValues.outbound_email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/),_tagLinks(arr[i],eValues.outbound_email.category,eValues.outbound_email.action,eValues.outbound_email.label,eValues.outbound_email.value,eValues.outbound_email.nonInteraction,mDownAtt)),\"tel\"===linkType\u0026\u0026(eValues.telephone.label=arr[i].href.toLowerCase().split(\"tel:\")[1],_tagLinks(arr[i],eValues.telephone.category,eValues.telephone.action,\neValues.telephone.label,eValues.telephone.value,eValues.telephone.nonInteraction,mDownAtt)),\"url\"===linkType\u0026\u0026(_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):_isSocial(arr[i].href)?(eValues.social.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],eValues.social.action=\neValues.social.label.split(\".\")[0],_tagLinks(arr[i],eValues.social.category,eValues.social.action,eValues.social.label,eValues.social.value,eValues.social.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=\narr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,mDownAtt)))))}}}}function _isSocial(b){return\"\"!=socSites?null!=b.toLowerCase().replace(\/[+#]\/,\"\").match(new RegExp(\"^(.*)(\"+socSites.toLowerCase()+\")(.*)$\"))?!0:!1:!1}\nfunction _isInternalFolder(b){return\"\"!=folders_to_track?null!=b.toLowerCase().match(new RegExp(\"^(.*)(\"+folders_to_track+\")(.*)$\"))?!0:!1:!1}function _isDownload(b){for(var c=0,a=0;a\u003CextDoc.length;a++){var d=b.split(\".\");d=d[d.length-1].split(\/[#?\u0026?]\/);if(\".\"+d[0].toLowerCase()==extDoc[a])return!0;c++;if(c==extDoc.length)return!1}}\nfunction _setDownloadData(b,c){var a=b.toLowerCase().split(\".\");a=a[a.length-1].split(\/[#?\u0026?]\/);var d=b.toLowerCase().split(c);d=d[1].split(\/[#?\u0026?]\/);eValues.downloads.action=eValues.outbound_downloads.action=a;eValues.downloads.label=eValues.outbound_downloads.label=d}\nfunction _tagLinks(b,c,a,d,g,e,f){isGTM?b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"dataLayer.push({'event': 'eventTracker', 'eventCat': '\"+c+\"', 'eventAct':'\"+a+\"', 'eventLbl': '\"+d+\"', 'eventVal': \"+g+\", 'nonInteraction': \"+e+\"});\"):(e=0==e?!1:!0,b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"ga('send', 'event', '\"+c+\"', '\"+a+\"', '\"+d+\"', \"+g+\", { nonInteraction: \"+e+\"});\"))}\nfunction isExcluded(b){var c=document.getElementsByTagName(\"footer\")[0];1\u003Cdocument.getElementsByTagName(\"footer\").length\u0026\u0026(c=document.getElementsByTagName(\"footer\")[document.getElementsByTagName(\"footer\").length-1]);for(var a=b.parentNode;null!=a;){if(a==c)return!0;a=a.parentNode}c=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;a=\/((.*)oreilly.com\\\/(learning|idea)(.*))\/i;return c.test(b.href)\u0026\u0026a.test(document.location.href)\u0026\u0026jQuery\u0026\u0026(jQuery(b).parents(\".article-body\").length||\njQuery(b).parents(\".block-product\").length||jQuery(this).closest(\"[data-type \\x3d 'note']\").length)?!0:!1};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar checkin=new Date,checkout=new Date;checkin.setDate((new Date).getDate()+10);checkout.setDate((new Date).getDate()+24);\nvar trialends=(1==(checkin.getMonth()+1).toString().length?\"0\"+(checkin.getMonth()+1):checkin.getMonth()+1)+\"\/\"+(1==checkin.getDate().toString().length?\"0\"+checkin.getDate():checkin.getDate())+\"\/\"+checkin.getFullYear(),trialends2=(1==(checkout.getMonth()+1).toString().length?\"0\"+(checkout.getMonth()+1):checkout.getMonth()+1)+\"\/\"+(1==checkout.getDate().toString().length?\"0\"+checkout.getDate():checkout.getDate())+\"\/\"+checkout.getFullYear();window.criteo_q=window.criteo_q||[];\nvar deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";\nwindow.criteo_q.push({event:\"manualFlush\"},{event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewHome\"},{event:\"flushEvents\"},function(){setTimeout(function(){criteo_q.push({event:\"viewSearch\",din:trialends,dout:trialends2},{event:\"viewHome\"},{event:\"setData\",trialends:trialends},{event:\"flushEvents\"})},1E3)});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"##user_email##\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"##subscription_cost##\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cdiv class=\"remarketing\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"},{event:\"setData\",ui_strata:\"VLNY18\"},{event:\"viewHome\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cdiv class=\"remarketing\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"AIUK2018\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"436018\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=436018\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"conferenceID\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"480604\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=480604\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof kWidget\u0026\u0026kWidget.addReadyCallback(function(b){var a=document.getElementById(b);a.kBind(\"firstPlay.fp\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"play\",eventLbl:",["escape",["macro",48],8,16],",eventVal:0,nonInteraction:0});a.kUnbind(\".fp\")});a.kBind(\"firstQuartile.1q\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"25%\",eventLbl:",["escape",["macro",48],8,16],",eventVal:0,nonInteraction:0});a.kUnbind(\".1q\")});a.kBind(\"secondQuartile.2q\",\nfunction(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"50%\",eventLbl:",["escape",["macro",48],8,16],",eventVal:0,nonInteraction:0});a.kUnbind(\".2q\")});a.kBind(\"thirdQuartile.3q\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"75%\",eventLbl:",["escape",["macro",48],8,16],",eventVal:0,nonInteraction:0});a.kUnbind(\".3q\")});var d=!1;a.addJsListener(\"playerUpdatePlayhead\",function(){var c=a.evaluate(\"{video.player.currentTime}\"),b=a.evaluate(\"{mediaProxy.entry.duration}\");\nc=100*parseFloat(c\/b);95\u003Cc\u0026\u0026!d\u0026\u0026(d=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"95%\",eventLbl:",["escape",["macro",48],8,16],",eventVal:0,nonInteraction:0}))});a.kUnbind(\".pp\")});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_include_regex=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;jQuery(\".block-product\").on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"right sidebar\",eventLbl:this.href,eventVal:0})});\njQuery('[data-type\\x3d\"note\"]').on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"editor note\",eventLbl:this.href,eventVal:0})});\njQuery(\".article-body\").on(\"mousedown\",\"a\",function(){!domains_to_include_regex.test(this.href)||jQuery(this).closest(\"[data-type \\x3d 'note']\").length||jQuery(this).parents(\".block-product\").length||dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"body\",eventLbl:this.href,eventVal:0})});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript data-gtmsrc=\"https:\/\/w.soundcloud.com\/player\/api.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var t=function(e){var a,c,b,h,k,l,m,d,n=\"podcast\",f=0;var p=",["escape",["macro",48],8,16],";var g=SC.Widget(e);g.bind(SC.Widget.Events.READY,function(){g.bind(SC.Widget.Events.PLAY,function(){1E3\u003CDate.now()-f\u0026\u0026(a=\"Play\",q(n,a,p),f=Date.now())});g.bind(SC.Widget.Events.PLAY_PROGRESS,function(e){d=!1;c=Math.round(100*e.relativePosition);10!==c||b||(a=\"10%\",d=b=!0);25!==c||h||(a=\"25%\",d=h=!0);50!==c||k||(a=\"50%\",d=k=!0);75!==c||l||(a=\"75%\",d=l=!0);95!==c||m||(a=\"75%\",d=m=!0);d\u0026\u0026q(n,a,p)});g.bind(SC.Widget.Events.FINISH,\nfunction(){a=\"100%\";b=h=k=l=m=!1;q(n,a,p)})})},q=function(b,a,c){window.dataLayer.push({event:\"eventTracker\",eventCat:b,eventAct:a,eventLbl:c,eventVal:0,nonInteraction:0})},f,r=document.querySelectorAll('iframe[src*\\x3d\"api.soundcloud.com\"]');var b=0;for(f=r.length;b\u003Cf;b+=1)t(r[b])}catch(e){console.log(\"Error with SoundCloud API: \"+e.message)}})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":108
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"user_email\"},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\",labels:\"_fp.event.San Francisco Registration Confirmation\",orderid:",["escape",["macro",60],8,16],",event:\"refresh\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":116
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\",labels:\"_fp.event.London 2019 Registration Confirmation\",orderid:\"INSERT+ORDER+ID\",event:\"refresh\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E\n\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"user_email\"},{event:\"setData\",ui_strata:\"strata19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-1065103245\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-1065103245\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":137
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":138
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"user_email\"},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewHome\"});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":142
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":143
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":144
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":145
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":146
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":147
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"ZMY7MBBFIFDUBAVNOE7XUJ\";adroll_pix_id=\"JPUOHWQVQZBGBBTRCVCUVP\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":150
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"480604\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=480604\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":151
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"ZMY7MBBFIFDUBAVNOE7XUJ\";adroll_pix_id=\"JPUOHWQVQZBGBBTRCVCUVP\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":152
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"562374324175078\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=562374324175078\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":153
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"376595806465162\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=376595806465162\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"376595806465162\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:2995,currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=376595806465162\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"db165134aeed46bea98098dc4a8f09f7\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/db165134aeed46bea98098dc4a8f09f7\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:.01,currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":167
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){if(null!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')\u0026\u0026void 0!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')){var a=!1;window.addEventListener(\"blur\",function(){a\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"facebook\",eventVal:0,nonInteraction:0})});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseover\",function(){window.focus();\na=!0});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseout\",function(){a=!1})}try{window.twttr=function(b,a,d){var c,e=b.getElementsByTagName(a)[0];if(!b.getElementById(d))return b=b.createElement(a),b.id=d,b.src=\"\/\/platform.twitter.com\/widgets.js\",e.parentNode.insertBefore(b,e),window.twttr||(c={_e:[],ready:function(a){c._e.push(a)}})}(document,\"script\",\"twitter-wjs\"),twttr.ready(function(a){a.events.bind(\"tweet\",trackTwitter)})}catch(b){}})();\nnull!==document.querySelector(\".IN-widget\")\u0026\u0026void 0!==document.querySelector(\".IN-widget\")\u0026\u0026document.querySelector(\".IN-widget\").addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"linkedin\",eventVal:0,nonInteraction:0})});\nfunction trackTwitter(a){a\u0026\u0026(a.target\u0026\u0026\"IFRAME\"==a.target.nodeName\u0026\u0026(opt_target=extractParamFromUri(a.target.src,\"url\")),dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0}))}function extractParamFromUri(a,b){if(a){var c=new RegExp(\"[\\\\?\\x26#]\"+b+\"\\x3d([^\\x26#]*)\");c=c.exec(a);if(null!=c)return unescape(c[1])}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:\"0.01\",currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv3zg\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":172
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":173
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":174
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":175
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":176
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":180
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":181
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":182
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":183
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cbutton id=\"addToCartButton\"\u003EAdd To Cart\u003C\/button\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#addToCartButton\").click(function(){qp(\"track\",\"Purchase\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cbutton id=\"addToCartButton\"\u003EAdd To Cart\u003C\/button\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#addToCartButton\").click(function(){qp(\"track\",\"Purchase\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BR5L4KSRRBAH3DZ3QSFKM3\";adroll_pix_id=\"6GHISHJ7TNDUJAVMSMT2NA\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":186
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BUYJ3NIIJFFQJIFHTF6V72\";adroll_pix_id=\"DITK2PSWM5FXBNEB3QXQRH\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"11004156\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"497295923798472\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=497295923798472\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":193
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"436018\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=436018\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":195
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv3od\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":196
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cbutton id=\"addToCartButton\"\u003EAdd To Cart\u003C\/button\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#addToCartButton\").click(function(){qp(\"track\",\"Purchase\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":198
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"18a0e84d93f94a9fa7cab64f85e9ee7c\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/18a0e84d93f94a9fa7cab64f85e9ee7c\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":199
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"18a0e84d93f94a9fa7cab64f85e9ee7c\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/18a0e84d93f94a9fa7cab64f85e9ee7c\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":200
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"443792972845831\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"443792972845831\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=443792972845831\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"443792972845831\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=443792972845831\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":203
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cbutton id=\"addToCartButton\"\u003EAdd To Cart\u003C\/button\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#addToCartButton\").click(function(){qp(\"track\",\"Purchase\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"af79e215dc9347e498ecc03840b4b080\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/af79e215dc9347e498ecc03840b4b080\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"af79e215dc9347e498ecc03840b4b080\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/18a0e84d93f94a9fa7cab64f85e9ee7c\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":206
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":207
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":208
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\\\/enterprise\\\/how\\-learning\\-accelerates\\-change\\-download\\\/|\\\/enterprise\\\/one\\-size\\-fits\\-all\\-training\\-doesnt\\-work\\-download\\\/|\\\/enterprise\\\/six\\-ways\\-leaders\\-can\\-navigate\\-change\\-download\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"ent.*_confirm\\.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"oreilly.com"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/sponsor-strata"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",17],
      "arg1":"0.0"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/velocity"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"Start your free trial"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"eventTracker"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":".*oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"VPTracker"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"src-Card-coverAnchor"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)1669222_90($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\\\/account\\\/insights"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www.oreilly.com(\\\/?$|\\\/about\\\/approach.html|\\\/sign-in\\.html|(.*\\\/)*free\\\/(.*)*|\\\/ideas(\\\/.*)*|\\\/learning(\\\/.*)*|\\\/topics(\\\/.*)*|\\\/people(\\\/.*)*|\\\/feed\\\/four\\-short\\-links\\\/?|\\\/all)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)get.oreilly.com(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www.oreilly.com\\\/online-learning(\\\/?$|\\\/enterprise\\.html|\\\/teams\\.html|\\\/individuals\\.html|\\\/government\\.html|\\\/academic\\.html|\\\/pricing\\.html|\\\/try-now\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(.*)oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"conferences.oreilly.com|learning.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www\\.oreilly\\.com\\\/library\\\/view.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)get.oreilly.com(.*)|(.*)www.oreilly.com(.*)|(.*)members.oreilly.com(.*)|(.*)ssearch.oreilly.com(.*)|(.*)shop.oreilly.com(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"book|article",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)1669222_204($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"strata\/strata-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/velocity\/vl-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"www.oreilly.com\/webops-perf\/free\/infrastructure-now-2018.csp"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-eu\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/blended-courses\/data-science\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/blended-courses\/ds-series-ny\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"blended-courses"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"video"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)1669222_203($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-ca"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.qa.safariflow.com\/home\/"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"((.*)(oreilly.com\/(feed\/four\\-short\\-links|all)(\/?))$)|((.*)oreilly.com\/(ideas|learning|topics|people)(\\\/(.*)|$|\\?(.*)))",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)1669222_110($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)learning.oreilly.review(.*)"
    },{
      "function":"_eq",
      "arg0":["macro",65],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"safaribooksonline.com\/subscribe\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/signup\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"cybermonday-2018.html"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/artificial-intelligence\/ai-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_eq",
      "arg0":["macro",67],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/purchased\/"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)oreilly.com\\\/(learning|ideas)(\\\/(.*)|$|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"podcast"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"strata-ca"
    },{
      "function":"_eq",
      "arg0":["macro",68],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"invoice"
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-eu\/public\/register\/invoice"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"strata\/strata-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/schedule\/topic\/2913"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"ind_monolith-to-microservices.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/order"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",71],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"data-science"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/oscon\/oscon-or"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/oscon\/oscon-or\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/oscon\/oscon-or"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_mastering-collaboration.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_introducing-python.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_ai-for-people-and-business.html"
    },{
      "function":"_eq",
      "arg0":["macro",72],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"Continue"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_achieving-real-business-outcomes-from-ai.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"http:\/\/conferences.oreilly.com\/artificial-intelligence\/ai-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"http:\/\/conferences.oreilly.com\/artificial-intelligence\/ai-ca\/public\/register\/purchased"
    }],
  "rules":[
    [["if",0,1],["add",3,14]],
    [["if",1,2],["add",3,14]],
    [["if",1],["add",4,9,27,40,1,137,138,43,44,45,46,47,48,49,50]],
    [["if",1,3],["add",5]],
    [["if",1,4],["add",5]],
    [["if",1,5],["add",5]],
    [["if",1,6,7],["add",6,51,53,56]],
    [["if",1],["unless",8],["add",7,20,36]],
    [["if",9,10],["add",8,10,21,55]],
    [["if",1,11,12],["add",11]],
    [["if",1,13],["add",11]],
    [["if",11,14],["add",12]],
    [["if",14,15],["add",12]],
    [["if",11,16],["add",13]],
    [["if",17,18,19],["add",15]],
    [["if",1,20],["add",16]],
    [["if",16,21],["add",17]],
    [["if",16,22],["add",17]],
    [["if",16,23],["add",17]],
    [["if",14,24],["unless",25,26],["add",18]],
    [["if",1,27],["unless",26,28],["add",19]],
    [["if",1,29],["add",22]],
    [["if",30,31,32],["add",23]],
    [["if",1,33],["add",24,79,80]],
    [["if",1,34],["add",25,72,111]],
    [["if",1,35],["add",26,31,107]],
    [["if",1,36],["add",26,38,107]],
    [["if",1,37],["add",28,81,87,90]],
    [["if",1,38],["add",29]],
    [["if",1,39],["add",30,95,136],["block",135]],
    [["if",1,40],["add",32,100,103,105,112,123],["block",101,122]],
    [["if",1,41],["add",33,101,102,104,122,96]],
    [["if",1,42],["add",34,110],["block",109]],
    [["if",1,43],["add",35,109]],
    [["if",44,45,46],["add",37]],
    [["if",1,47],["add",39,129,130,131,132,133,140]],
    [["if",1,48],["add",41]],
    [["if",1,49],["add",42]],
    [["if",1],["unless",50],["add",52]],
    [["if",1,51],["add",0,2]],
    [["if",52,53],["add",54]],
    [["if",49,54,55],["add",54]],
    [["if",1,56],["add",1,61]],
    [["if",1,57],["add",57]],
    [["if",1,58],["add",58]],
    [["if",1,59],["add",58]],
    [["if",1,60],["add",58]],
    [["if",1,61],["add",59]],
    [["if",1,62],["add",60]],
    [["if",1,63],["add",62]],
    [["if",1,64],["add",63]],
    [["if",1,65],["add",64]],
    [["if",1,66],["add",65]],
    [["if",1,67],["add",66]],
    [["if",1,68],["add",67,68]],
    [["if",44,53],["add",69]],
    [["if",53,69],["add",70]],
    [["if",53,70],["add",71]],
    [["if",1,71,72],["unless",73],["add",73]],
    [["if",1,74],["add",74]],
    [["if",1,75],["add",75]],
    [["if",1,76],["add",76]],
    [["if",1,77],["add",76]],
    [["if",1,78],["add",77]],
    [["if",1,79],["add",78]],
    [["if",1,80],["add",80]],
    [["if",1,81],["add",81]],
    [["if",1,82],["unless",73,83],["add",82,88]],
    [["if",1,84],["add",83,85]],
    [["if",1,85],["add",84]],
    [["if",1,86],["add",84]],
    [["if",1,87],["add",86]],
    [["if",1,88],["add",89,111]],
    [["if",1,89],["add",90]],
    [["if",1,90],["add",91,135]],
    [["if",1,91],["add",92]],
    [["if",1,92],["add",92]],
    [["if",1,93],["add",93]],
    [["if",1,94],["add",94]],
    [["if",1,95],["add",96,142,143]],
    [["if",1,96],["add",97]],
    [["if",1,97],["add",97]],
    [["if",1,98],["add",98]],
    [["if",1,99],["add",99]],
    [["if",1,100],["add",106]],
    [["if",1,101],["add",108]],
    [["if",1,102],["add",109]],
    [["if",103],["add",113]],
    [["if",1,104],["add",114,116,124]],
    [["if",1,105],["add",115],["block",114,124]],
    [["if",1,106],["add",117]],
    [["if",1,107],["add",118,125]],
    [["if",1,108],["add",119]],
    [["if",1,109],["add",119]],
    [["if",1,110],["add",119]],
    [["if",1,111],["add",119]],
    [["if",1,112],["add",120]],
    [["if",1,113],["add",121]],
    [["if",10,114,115],["add",126]],
    [["if",10,106,115],["add",127]],
    [["if",1,116],["add",128]],
    [["if",1,117],["add",129,131,132,133]],
    [["if",10,94,115],["add",134]],
    [["if",10,115,118],["add",139]],
    [["if",1,119],["add",141],["block",140]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},na=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ca=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Da=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ea=function(a){if(null==a)return String(a);var b=Da.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Fa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ga=function(a){if(!a||"object"!=Ea(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Fa(a,"constructor")&&!Fa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Fa(a,b)},Ha=function(a,b){var c=b||("array"==Ea(a)?[]:{}),d;for(d in a)if(Fa(a,d)){var e=a[d];"array"==Ea(e)?("array"!=Ea(c[d])&&(c[d]=[]),c[d]=Ha(e,c[d])):Ga(e)?(Ga(c[d])||(c[d]={}),c[d]=Ha(e,c[d])):c[d]=e}return c};var Ia={},Ka=function(a,b){Ia[a]=Ia[a]||[];Ia[a][b]=!0},La=function(a){for(var b=[],c=Ia[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var f=window,u=document,Ma=navigator,Na=u.currentScript&&u.currentScript.src,Oa=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Pa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Qa=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Pa(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Ra=function(){if(Na){var a=Na.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Sa=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Pa(c,b);void 0!==a&&(c.src=a);return c},Ta=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ua=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Va=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},z=function(a){f.setTimeout(a,0)},Xa=function(a){var b=
u.getElementById(a);if(b&&Wa(b,"id")!=a){Ka("TAGGING",1);for(var c=1;c<document.all[a].length;c++)if(Wa(document.all[a][c],"id")==a)return document.all[a][c]}return b},Wa=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Za=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},$a=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;
for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},ab=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var bb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var cb=/:[0-9]+$/,db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},gb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=eb(a.protocol)||eb(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(cb,"").toLowerCase());var g=b,h,k=eb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=fb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(cb,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=db(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},eb=function(a){return a?a.replace(":","").toLowerCase():""},fb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},hb=function(a){var b=u.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var ib=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},lb=function(a,b,c,d){var e=jb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=kb(e,function(g){return g.zb},b);if(1===e.length)return e[0].id;e=kb(e,function(g){return g.Sa},c);return e[0]?e[0].id:void 0}};
function mb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=ib(b,e).indexOf(c)}
var pb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var w=nb(),v=0;v<w.length;++v){var y="none"!=w[v]?w[v]:void 0;if(!ob(y,t)&&mb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!ob(p,t)&&mb(m,a,l)}return k};function kb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function jb(a,b){for(var c=[],d=ib(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),zb:1*k[0]||1,Sa:1*k[1]||1}))}}return c}
var rb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,sb=/(^|\.)doubleclick\.net$/i,ob=function(a,b){return sb.test(document.location.hostname)||"/"===b&&rb.test(a)},nb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var tb=[],ub={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},vb=function(a){return ub[a]},wb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ab=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Bb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Cb=function(a){return Bb[a]};
tb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ab,Cb)+"'"}};var Jb=/['()]/g,Kb=function(a){return"%"+a.charCodeAt(0).toString(16)};tb[12]=function(a){var b=
encodeURIComponent(String(a));Jb.lastIndex=0;return Jb.test(b)?b.replace(Jb,Kb):b};var Lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nb=function(a){return Mb[a]};tb[16]=function(a){return a};var Pb=[],Qb=[],Rb=[],Sb=[],Tb=[],Ub={},Vb,Wb,Xb,Yb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Ub[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Ub[c](e):(void 0)(c,e,b)},ac=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$b(a[e],b,c));return d},
bc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ub[b];return c?c.priorityOverride||0:0},$b=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($b(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Pb[g];if(!h||b.sc(h))return;c[g]=!0;try{var k=ac(h,b,c);k.vtp_gtmEventId=b.id;d=Zb(k,b);Xb&&(d=Xb.lf(d,k))}catch(v){b.Md&&b.Md(v,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[$b(a[l],b,c)]=$b(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=$b(a[n],b,c);Wb&&(m=m||p===Wb.ob);d.push(p)}return Wb&&m?Wb.qf(d):d.join("");case "escape":d=$b(a[1],b,c);if(Wb&&ka(a[1])&&"macro"===a[1][0]&&Wb.Rf(a))return Wb.$f(d);d=String(d);for(var t=2;t<a.length;t++)tb[a[t]]&&(d=tb[a[t]](d));return d;case "tag":var q=a[1];if(!Sb[q])throw Error("Unable to resolve tag reference "+q+".");return d={yd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var w=cc(r,b,c);a[4]&&(w=!w);return w;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},cc=function(a,b,c){try{return Vb(ac(a,b,c))}catch(d){JSON.stringify(a)}return null};var dc=function(){var a=function(b){return{toString:function(){return b}}};return{Wc:a("convert_case_to"),Xc:a("convert_false_to"),Yc:a("convert_null_to"),Zc:a("convert_true_to"),$c:a("convert_undefined_to"),qa:a("function"),Ce:a("instance_name"),De:a("live_only"),Ee:a("malware_disabled"),Fe:a("metadata"),Eg:a("original_vendor_template_id"),Ge:a("once_per_event"),od:a("once_per_load"),pd:a("setup_tags"),qd:a("tag_id"),rd:a("teardown_tags")}}();var ec=null,hc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];ec=fc(a);for(var e=0;e<Qb.length;e++){var g=Qb[e],h=gc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},gc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ec(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=ec(e[g]);if(null===h)return null;
if(h)return!1}return!0},fc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=cc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ic,jc=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.We&&(l["fix_"+m]=!0),l.zd=l.zd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var w=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(w)return{tagName:q.tagName,D:q.D,content:w[1],length:w[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(w,v,y,x,A){var B=y||x||A||g.test(v)&&v||null,C=document.createElement("div");C.innerHTML=B;r[v]=C.textContent||C.innerText||B});return{tagName:q[1],D:r,Xa:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.zd&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,w=[];w.Kd=function(){return this[this.length-1]};w.yc=function(C){var E=this.Kd();return E&&E.tagName&&E.tagName.toUpperCase()===C.toUpperCase()};w.kf=
function(C){for(var E=0,F;F=this[E];E++)if(F.tagName===C)return!0;return!1};var v=function(C){C&&"startTag"===C.type&&(C.Xa=q.test(C.tagName)||C.Xa);return C},y=t,x=function(){k="</"+w.pop().tagName+">"+k},A={startTag:function(C){var E=C.tagName;"TR"===E.toUpperCase()&&w.yc("TABLE")?(k="<TBODY>"+k,B()):l.Mg&&r.test(E)&&w.kf(E)?w.yc(E)?x():(k="</"+C.tagName+">"+k,B()):C.Xa||w.push(C)},endTag:function(C){w.Kd()?l.zf&&!w.yc(C.tagName)?x():w.pop():l.zf&&(y(),B())}},B=function(){var C=k,E=v(y());k=C;if(E&&
A[E.type])A[E.type](E)};t=function(){B();return v(y())}}();return{append:function(q){k+=q},gg:t,Sg:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},Tg:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Zg="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Vg=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.$g=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.D){var t=m.D[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Xa?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.Lg=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.af=a.af||!b[h]&&h;ic=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,w=p&&p.length||0;for(r=0;r<w;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={Me:a,Ne:a,Oe:a,Pe:a,Xe:a,Ye:function(p){return p},done:a,error:function(p){throw p;},kg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,w){var v="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(v);return b(y)?String(y):y}b(w)&&""!==w?q.setAttribute(v,
w):q.removeAttribute(v)}function t(q,r){var w=q.ownerDocument;e(this,{root:q,options:r,Ya:w.defaultView||w.parentWindow,wa:w,Eb:ic("",{We:!0}),cc:[q],Gc:"",Hc:w.createElement(q.nodeName),Va:[],ka:[]});p(this.Hc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.ka,arguments);for(var q;!this.yb&&this.ka.length;)q=this.ka.shift(),"function"===typeof q?this.ef(q):this.Sc(q)};t.prototype.ef=function(q){var r={type:"function",value:q.name||q.toString()};this.Dc(r);q.call(this.Ya,this.wa);this.Qd(r)};
t.prototype.Sc=function(q){this.Eb.append(q);for(var r,w=[],v,y;(r=this.Eb.gg())&&!(v=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)w.push(r);this.Bg(w);v&&this.Ff(r);y&&this.Gf(r)};t.prototype.Bg=function(q){var r=this.bf(q);r.td&&(r.oc=this.Gc+r.td,this.Gc+=r.eg,this.Hc.innerHTML=r.oc,this.yg())};t.prototype.bf=function(q){var r=this.cc.length,w=[],v=[],y=[];c(q,function(x){w.push(x.text);if(x.D){if(!/^noscript$/i.test(x.tagName)){var A=
r++;v.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.D.id&&"ps-style"!==x.D.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.Xa?" />":">"))}}else v.push(x.text),y.push("endTag"===x.type?x.text:"")});return{ah:q,raw:w.join(""),td:v.join(""),eg:y.join("")}};t.prototype.yg=function(){for(var q,r=[this.Hc];b(q=r.shift());){var w=1===q.nodeType;if(!w||!p(q,"proxyof")){w&&(this.cc[p(q,"id")]=q,p(q,"id",null));var v=q.parentNode&&p(q.parentNode,"proxyof");
v&&this.cc[v].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Ff=function(q){var r=this.Eb.clear();r&&this.ka.unshift(r);q.src=q.D.src||q.D.Fg;q.src&&this.Va.length?this.yb=q:this.Dc(q);var w=this;this.Ag(q,function(){w.Qd(q)})};t.prototype.Gf=function(q){var r=this.Eb.clear();r&&this.ka.unshift(r);q.type=q.D.type||q.D.Gg||"text/css";this.Cg(q);r&&this.write()};t.prototype.Cg=function(q){var r=this.df(q);this.Pf(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.wa.createTextNode(q.content)))};t.prototype.df=function(q){var r=this.wa.createElement(q.tagName);r.setAttribute("type",q.type);d(q.D,function(w,v){r.setAttribute(w,v)});return r};t.prototype.Pf=function(q){this.Sc('<span id="ps-style"/>');var r=this.wa.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Dc=function(q){q.Wf=this.ka;this.ka=[];this.Va.unshift(q)};t.prototype.Qd=function(q){q!==this.Va[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Va.shift(),this.write.apply(this,q.Wf),!this.Va.length&&this.yb&&(this.Dc(this.yb),this.yb=null))};t.prototype.Ag=function(q,r){var w=this.cf(q),v=this.qg(w),y=this.options.Me;q.src&&(w.src=q.src,this.og(w,v?y:function(){r();y()}));try{this.Of(w),q.src&&!v||r()}catch(x){this.options.error(x),r()}};t.prototype.cf=function(q){var r=this.wa.createElement(q.tagName);d(q.D,function(w,v){r.setAttribute(w,v)});q.content&&(r.text=q.content);return r};t.prototype.Of=function(q){this.Sc('<span id="ps-script"/>');
var r=this.wa.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.og=function(q,r){function w(){q=q.onload=q.onreadystatechange=q.onerror=null}var v=this.options.error;e(q,{onload:function(){w();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(w(),r())},onerror:function(){var y={message:"remote script failed "+q.src};w();v(y);r()}})};t.prototype.qg=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.kg&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var v=r.shift(),y;v&&(y=v[v.length-1],y.Ne(),v.stream=t.apply(null,v),y.Oe())}function t(v,y,x){function A(F){F=x.Ye(F);w.write(F);x.Pe(F)}w=new n(v,x);w.id=q++;w.name=x.name||w.id;var B=v.ownerDocument,C={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(h(arguments).join(""))},writeln:function(){return A(h(arguments).join("")+"\n")}});var E=w.Ya.onerror||a;w.Ya.onerror=function(F,Q,W){x.error({Pg:F+
" - "+Q+":"+W});E.apply(w.Ya,arguments)};w.write(y,function(){e(B,C);w.Ya.onerror=E;x.done();w=null;p()});return w}var q=0,r=[],w=null;return e(function(v,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);v=/^#/.test(v)?l.document.getElementById(v.substr(1)):v.Ng?v[0]:v;var A=[v,y,x];v.Zf={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.Xe(A);r.push(A);w||p();return v.Zf},{streams:{},Rg:r,Hg:n})}();jc=l.postscribe}})();var yc={},zc=null,Ac=Math.random();yc.m="GTM-5P4V6Z";yc.sb="5f2";var Bc="www.googletagmanager.com/gtm.js";var Cc=Bc,Dc=null,Ec=null,Fc=null,Gc="//www.googletagmanager.com/a?id="+yc.m+"&cv=215",Hc={},Ic={},Jc=function(){var a=zc.sequence||0;zc.sequence=a+1;return a};var D=function(a,b,c,d){return(2===Kc()||d||"http:"!=f.location.protocol?a:b)+c},Kc=function(){var a=Ra(),b;if(1===a)a:{var c=Cc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Lc=!1;
var Pc=function(){return"&tc="+Sb.filter(function(a){return a}).length},Yc=function(){Qc&&(f.clearTimeout(Qc),Qc=void 0);void 0===Rc||Sc[Rc]&&!Tc||(Uc[Rc]||Vc.Tf()||0>=Wc--?(Ka("GTM",1),Uc[Rc]=!0):(Vc.ig(),Ta(Xc()),Sc[Rc]=!0,Tc=""))},Xc=function(){var a=Rc;if(void 0===a)return"";var b=La("GTM"),c=La("TAGGING");return[Zc,Sc[a]?"":"&es=1",$c[a],b?"&u="+b:"",c?"&ut="+c:"",Pc(),Tc,"&z=0"].join("")},ad=function(){return[Gc,"&v=3&t=t","&pid="+na(),"&rv="+yc.sb].join("")},bd="0.005000">
Math.random(),Zc=ad(),cd=function(){Zc=ad()},Sc={},Tc="",Rc=void 0,$c={},Uc={},Qc=void 0,Vc=function(a,b){var c=0,d=0;return{Tf:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},ig:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),Wc=1E3,dd=function(a,b){if(bd&&!Uc[a]&&Rc!==a){Yc();Rc=a;Tc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";$c[a]="&e="+c+"&eid="+a;Qc||(Qc=f.setTimeout(Yc,500))}},ed=function(a,b,c){if(bd&&!Uc[a]&&b){a!==Rc&&(Yc(),Rc=a);var d=c+String(b[dc.qa]||"").replace(/_/g,
"");Tc=Tc?Tc+"."+d:"&tr="+d;Qc||(Qc=f.setTimeout(Yc,500));2022<=Xc().length&&Yc()}};var fd={},gd=new pa,hd={},id={},md={name:"dataLayer",set:function(a,b){Ha(jd(a,b),hd);kd()},get:function(a){return ld(a,2)},reset:function(){gd=new pa;hd={};kd()}},ld=function(a,b){if(2!=b){var c=gd.get(a);if(bd){var d=nd(a);c!==d&&Ka("GTM",5)}return c}return nd(a)},nd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:pd(d)},pd=function(a){for(var b=hd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var sd=function(a,b){id.hasOwnProperty(a)||(gd.set(a,b),Ha(jd(a,b),hd),kd())},jd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},kd=function(a){ra(id,function(b,c){gd.set(b,c);Ha(jd(b,void 0),hd);Ha(jd(b,c),hd);a&&delete id[b]})},td=function(a,b,c){fd[a]=fd[a]||{};var d=1!==c?nd(b):gd.get(b);"array"===Ea(d)||"object"===Ea(d)?fd[a][b]=Ha(d):fd[a][b]=d},ud=function(a,b){if(fd[a])return fd[a][b]};var vd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),wd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},xd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},yd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ad=function(a){var b=ld("gtm.whitelist");b&&Ka("GTM",9);var c=b&&Ca(ua(b),wd),d=ld("gtm.blacklist");d||(d=ld("tagTypeBlacklist"))&&Ka("GTM",3);
d?Ka("GTM",8):d=[];zd()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(ua(d),"google")&&Ka("GTM",2);var e=d&&Ca(ua(d),xd),g={};return function(h){var k=h&&h[dc.qa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Ic[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
la(c,l[p])){Ka("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r=qa(e,l||[]);r&&Ka("GTM",10);t=r}}var w=!m||t;w||!(0<=la(l,"sandboxedScript"))||c&&-1!==la(c,"sandboxedScript")||(w=qa(e,yd));return g[k]=w}},zd=function(){return vd.test(f.location&&f.location.hostname)};var Bd={lf:function(a,b){b[dc.Wc]&&"string"===typeof a&&(a=1==b[dc.Wc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(dc.Yc)&&null===a&&(a=b[dc.Yc]);b.hasOwnProperty(dc.$c)&&void 0===a&&(a=b[dc.$c]);b.hasOwnProperty(dc.Zc)&&!0===a&&(a=b[dc.Zc]);b.hasOwnProperty(dc.Xc)&&!1===a&&(a=b[dc.Xc]);return a}};var Cd={active:!0,isWhitelisted:function(){return!0}},Dd=function(a){var b=zc.zones;!b&&a&&(b=zc.zones=a());return b};var Ed=!1,Fd=0,Gd=[];function Hd(a){if(!Ed){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ed=!0;for(var e=0;e<Gd.length;e++)z(Gd[e])}Gd.push=function(){for(var g=0;g<arguments.length;g++)z(arguments[g]);return 0}}}function Id(){if(!Ed&&140>Fd){Fd++;try{u.documentElement.doScroll("left"),Hd()}catch(a){f.setTimeout(Id,50)}}}var Jd=function(a){Ed?a():Gd.push(a)};var Kd={},Ld={},Md=function(a,b,c){if(!Ld[a])return-1;var d={};Ga(c)&&(d=Ha(c,d));d.id=b;d.status="timeout";return Ld[a].tags.push(d)-1},Nd=function(a,b,c,d){if(Ld[a]){var e=Ld[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Od(a){for(var b=Kd[a]||[],c=0;c<b.length;c++)b[c]();Kd[a]={push:function(d){var e=!1;!e&&d(yc.m)}}}
var Rd=function(a,b,c){Ld[a]={tags:[]};ha(b)&&Pd(a,b);c&&f.setTimeout(function(){return Od(a)},Number(c));return Qd(a)},Pd=function(a,b){Kd[a]=Kd[a]||[];Kd[a].push(ya(function(){return z(function(){var c=!1;!c&&b(yc.m)})}))};function Qd(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&Od(a)})},Ue:function(){d=!0;b>=c&&Od(a)}}};var Sd=function(){function a(d){return!ja(d)||0>d?0:d}if(!zc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ja(md.get("gtm.start"))?md.get("gtm.start"):0;zc._li={cst:a(c-b),cbt:a(Ec-b)}}};var Wd=!1,Xd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Yd=!1;
var Zd=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(f[b])f.hasOwnProperty(b)||Ka("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Sd();return f[b]},$d=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Xd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var be=function(){},ae=function(){return f.GoogleAnalyticsObject||"ga"},ce=!1;var je=function(a){};function ie(a,b){a.containerId=yc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ke(a,b,c,d){var e=Sb[a],g=le(a,b,c,d);if(!g)return null;var h=$b(e[dc.pd],c,[]);if(h&&h.length){var k=h[0];g=ke(k.index,{J:g,O:1===k.yd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function le(a,b,c,d){function e(){if(g[dc.Ee])k();else{var v=ac(g,c,[]),y=Md(c.id,Number(g[dc.qd]),v[dc.Fe]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"5");Nd(c.id,y,"success",C);h()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"6");Nd(c.id,y,"failure",C);k()}};v.vtp_gtmTagId=g.tag_id;v.vtp_gtmEventId=
c.id;ed(c.id,g,"1");var A=function(C){var E=wa()-B;je(C);ed(c.id,g,"7");Nd(c.id,y,"exception",E);x||(x=!0,k())};var B=wa();try{Zb(v,c)}catch(C){A(C)}}}
var g=Sb[a],h=b.J,k=b.O,l=b.terminate;if(c.sc(g))return null;var m=$b(g[dc.rd],c,[]);if(m&&m.length){var n=m[0],p=ke(n.index,{J:h,O:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.yd?l:p}if(g[dc.od]||g[dc.Ge]){var t=g[dc.od]?Tb:c.sg,q=h,r=k;if(!t[a]){e=ya(e);var w=me(a,t,e);h=w.J;k=w.O}return function(){t[a](q,r)}}return e}function me(a,b,c){var d=[],e=[];b[a]=ne(d,e,c);return{J:function(){b[a]=oe;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=pe;for(var g=0;g<e.length;g++)e[g]()}}}
function ne(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function oe(a){a()}function pe(a,b){b()};var se=function(a,b){for(var c=[],d=0;d<Sb.length;d++)if(a.Ra[d]){var e=Sb[d];var g=b.add();try{var h=ke(d,{J:g,O:g,terminate:g},a,d);h?c.push({$d:d,b:bc(e),yf:h}):(qe(d,a),g())}catch(l){g()}}b.Ue();c.sort(re);for(var k=0;k<c.length;k++)c[k].yf();return 0<c.length};function re(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.$d,k=b.$d;g=h>k?1:h<k?-1:0}return g}
function qe(a,b){if(!bd)return;var c=function(d){var e=b.sc(Sb[d])?"3":"4",g=$b(Sb[d][dc.pd],b,[]);g&&g.length&&c(g[0].index);ed(b.id,Sb[d],e);var h=$b(Sb[d][dc.rd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var te=!1,ue=function(a,b,c,d,e){if("gtm.js"==b){if(te)return!1;te=!0}dd(a,b);var g=Rd(a,d,e);td(a,"event");td(a,"ecommerce",1);td(a,"gtm");var h={id:a,name:b,sc:Ad(c),Ra:[],sg:[],Md:function(p){Ka("GTM",6);je(p)}};h.Ra=hc(h);var k=se(h,g);"gtm.js"!==b&&"gtm.sync"!==b||be();if(!k)return k;for(var l={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,
__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},m=0;m<h.Ra.length;m++)if(h.Ra[m]){var n=Sb[m];if(n&&!l[n[dc.qa]])return!0}return!1};var G={Pb:"event_callback",Rb:"event_timeout"};var we={};var xe=/[A-Z]+/,ye=/\s/,Ae=function(a){if(ia(a)&&(a=va(a),!ye.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(xe.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],da:d}}}}},Ce=function(a){for(var b={},c=0;c<a.length;++c){var d=Ae(a[c]);d&&(b[d.id]=d)}Be(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Be(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.da[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var De=null,Ee={},Fe={},Ge,He=function(a,b){var c={event:a};b&&(c.eventModel=Ha(b),b[G.Pb]&&(c.eventCallback=b[G.Pb]),b[G.Rb]&&(c.eventTimeout=b[G.Rb]));return c};
var Me={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Ga(a[2]))return;c=a[2]}var d=He(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];we[b]||(we[b]=[]);we[b].push(c)}},set:function(a){var b;2==a.length&&Ga(a[1])?b=Ha(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ha(b),b.event="gtag.set",b._clear=!0,b}},Ne={policy:!0};var Oe=function(){var a=!1;return a};var Ue=function(a){if(Te(a))return a;this.xg=a};Ue.prototype.Ef=function(){return this.xg};var Te=function(a){return!a||"object"!==Ea(a)||Ga(a)?!1:"getUntrustedUpdateValue"in a};Ue.prototype.getUntrustedUpdateValue=Ue.prototype.Ef;var Ve=!1,We=[];function Xe(){if(!Ve){Ve=!0;for(var a=0;a<We.length;a++)z(We[a])}}var Ye=function(a){Ve?z(a):We.push(a)};var Ze=[],$e=!1,af=function(a){return f["dataLayer"].push(a)},bf=function(a){var b=zc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},df=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&sd(g,void 0),sd(g,h))});if(!Dc){Dc=a["gtm.start"];}var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Jc(),a["gtm.uniqueEventId"]=d,sd("gtm.uniqueEventId",d));Fc=c;var e=
cf(a);Fc=null;return e};function cf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=zc.zones;d=e?e.checkState(yc.m,c):Cd;return d.active?ue(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var ef=function(){for(var a=!1;!$e&&0<Ze.length;){$e=!0;delete hd.eventModel;kd();var b=Ze.shift();if(null!=b){var c=Te(b);if(c){var d=b;b=Te(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ld(h,1);if(ka(k)||Ga(k))k=Ha(k);id[h]=k}}try{if(ha(b))try{b.call(md)}catch(w){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=ld(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(w){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=Me[b[0]];if(r&&(!c||!Ne[b[0]])){b=r(b);break a}}b=void 0}if(!b){$e=!1;continue}}a=df(b)||a}}finally{c&&kd(!0)}}$e=!1}
return!a},ff=function(){var a=ef();try{var b=yc.m,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},gf=function(){var a=Oa("dataLayer",[]),b=Oa("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Jd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ye(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<zc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Ue(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Ze.push.apply(Ze,d);if(300<this.length)for(Ka("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return ef()&&h};Ze.push.apply(Ze,a.slice(0));z(ff)};var jf=function(a){return hf?u.querySelectorAll(a):null},kf=function(a,b){if(!hf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},lf=!1;if(u.querySelectorAll)try{var mf=u.querySelectorAll(":root");mf&&1==mf.length&&mf[0]==u.documentElement&&(lf=!0)}catch(a){}var hf=lf;var nf;var Jf={};Jf.ob=new String("undefined");
var Kf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Jf.ob?b:a[d]);return c.join("")}};Kf.prototype.toString=function(){return this.resolve("undefined")};Kf.prototype.valueOf=Kf.prototype.toString;Jf.He=Kf;Jf.ac={};Jf.qf=function(a){return new Kf(a)};var Lf={};Jf.jg=function(a,b){var c=Jc();Lf[c]=[a,b];return c};Jf.wd=function(a){var b=a?0:1;return function(c){var d=Lf[c];if(d&&"function"===typeof d[b])d[b]();Lf[c]=void 0}};Jf.Rf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Jf.$f=function(a){if(a===Jf.ob)return a;var b=Jc();Jf.ac[b]=a;return'google_tag_manager["'+yc.m+'"].macro('+b+")"};Jf.Uf=function(a,b,c){a instanceof Jf.He&&(a=a.resolve(Jf.jg(b,c)),b=fa);return{oc:a,J:b}};var Mf=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Wa(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},Nf=function(a){zc.hasOwnProperty("autoEventsSettings")||(zc.autoEventsSettings={});var b=zc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},
Of=function(a,b,c){Nf(a)[b]=c},Pf=function(a,b,c,d){var e=Nf(a),g=xa(e,b,d);e[b]=c(g)},Qf=function(a,b,c){var d=Nf(a);return xa(d,b,c)};var Rf=function(){for(var a=Ma.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},Uf=function(a,b,c,d){var e=Sf(b);return lb(a,e,Tf(c),d)},Sf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Tf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Vf(a,b){var c=""+Sf(a),d=Tf(b);1<d&&(c+="-"+d);return c};var Wf=["1"],Xf={},ag=function(a,b,c,d){var e=Yf(a);Xf[e]||Zf(e,b,c)||($f(e,Rf(),b,c,d),Zf(e,b,c))};function $f(a,b,c,d,e){var g;g=["1",Vf(d,c),b].join(".");pb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function Zf(a,b,c){var d=Uf(a,b,c,Wf);d&&(Xf[a]=d);return d}function Yf(a){return(a||"_gcl")+"_au"};var bg=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Oc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Oc]||(g[a[h].Oc]=[]),g[a[h].Oc].push({timestamp:k[1],Bf:k[2]}))}return g};function cg(){for(var a=dg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function eg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var dg,fg,gg=function(a){dg=dg||eg();fg=fg||cg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(dg[l],dg[m],dg[n],dg[p])}return b.join("")},hg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=fg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}dg=dg||eg();fg=fg||
cg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var ig;function jg(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var kg=function(){var a=Oa("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var lg=/(.*?)\*(.*?)\*(.*)/,mg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,ng=/^(?:www\.|m\.|amp\.)+/,og=/([^?#]+)(\?[^#]*)?(#.*)?/,pg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,rg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(gg(String(d))))}var e=b.join("*");return["1",qg(e),e].join("*")},qg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=ig)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}ig=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^ig[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},tg=function(){return function(a){var b=hb(f.location.href),c=b.search.replace("?",""),d=db(c,"_gl",!0)||"";a.query=sg(d)||{};var e=gb(b,"fragment").match(pg);a.fragment=sg(e&&e[3]||
"")||{}}},sg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=lg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===qg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=hg(t[q+1]);return p}}}}catch(r){}};
function ug(a,b,c){function d(m){var n=m,p=pg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var w=m.charAt(m.length-1);m&&"&"!==w&&(m+="&");return m+l}c=void 0===c?!1:c;var e=og.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function vg(a,b,c){for(var d={},e={},g=kg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&jg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=rg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var w=ug(l,a.action);bb.test(w)&&(a.action=w)}}}else wg(l,a,!1)}if(!c&&Aa(e)){var v=rg(e);wg(v,a,!0)}}function wg(a,b,c){if(b.href){var d=ug(a,b.href,void 0===c?!1:c);bb.test(d)&&(b.href=d)}}
var xg=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||vg(e,e.hostname,!1)}}catch(h){}},yg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=gb(hb(b.action),"host");vg(b,c,!0)}}catch(d){}},zg=function(a,b,c,d){var e=kg();e.init||(Ua(u,"mousedown",xg),Ua(u,"keyup",xg),Ua(u,"submit",yg),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};kg().decorators.push(g)},Ag=function(){var a=u.location.hostname,b=mg.exec(u.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(ng,"")===e.replace(ng,"")},Bg=function(a,b){return!1===a?!1:a||b||Ag()};var Cg={};var Dg=/^\w+$/,Eg=/^[\w-]+$/,Fg=/^~?[\w-]+$/,Gg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Hg(a){return a&&"string"==typeof a&&a.match(Dg)?a:"_gcl"}var Jg=function(){var a=hb(f.location.href),b=gb(a,"query",!1,void 0,"gclid"),c=gb(a,"query",!1,void 0,"gclsrc"),d=gb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||db(e,"gclid",void 0);c=c||db(e,"gclsrc",void 0)}return Ig(b,c,d)};
function Ig(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Eg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Cg.gtm_3pds?0:Cg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Kg(a,b,c){function d(p,t){var q=Lg(p,e);q&&pb(q,t,h,g,l,!0)}b=b||{};var e=Hg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Nd?7776E3:b.Nd;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.dh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Lg=function(a,b){var c=Gg[a];if(void 0!==c)return b+c},Mg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function Ng(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Og=function(a,b,c,d,e){if(ka(b)){var g=Hg(e);zg(function(){for(var h={},k=0;k<a.length;++k){var l=Lg(a[k],g);if(l){var m=ib(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Pg=function(a){return a.filter(function(b){return Fg.test(b)})},Qg=function(a){for(var b=["aw","dc"],c=Hg(a&&a.prefix),d={},e=0;e<b.length;e++)Gg[b[e]]&&(d[b[e]]=Gg[b[e]]);ra(d,function(g,h){var k=ib(c+h,u.cookie);if(k.length){var l=k[0],m=Mg(l),n={};n[g]=[Ng(l)];Kg(n,a,m)}})};var Rg=/^\d+\.fls\.doubleclick\.net$/;function Sg(a){var b=hb(f.location.href),c=gb(b,"host",!1);if(c&&c.match(Rg)){var d=gb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Tg(a,b){if("aw"==a||"dc"==a){var c=Sg("gcl"+a);if(c)return c.split(".")}var d=Hg(b);if("_gcl"==d){var e;e=Jg()[a]||[];if(0<e.length)return e}var g=Lg(a,d),h;if(g){var k=[];if(u.cookie){var l=ib(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Ng(l[m]);n&&-1===la(k,n)&&k.push(n)}h=Pg(k)}else h=k}else h=k}else h=[];return h}
var Ug=function(){var a=Sg("gac");if(a)return decodeURIComponent(a);var b=bg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Bf);g=Pg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Vg=function(a,b,c,d,e){ag(b,c,d,e);var g=Xf[Yf(b)],h=Jg().dc||[],k=!1;if(g&&0<h.length){var l=zc.joined_au=zc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ma.sendBeacon&&Ma.sendBeacon(t)||Ta(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Yf(b),r=Xf[q];r&&$f(q,r,c,d,e)}};var Wg;if(3===yc.sb.length)Wg="g";else{var Xg="G";Wg=Xg}
var Yg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Wg},Zg=function(a){var b=yc.m.split("-"),c=b[0].toUpperCase(),d=Yg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===yc.sb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+yc.sb+
e};var fh=!!f.MutationObserver,gh=void 0,hh=function(a){if(!gh){var b=function(){var c=u.body;if(c)if(fh)(new MutationObserver(function(){for(var e=0;e<gh.length;e++)z(gh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ua(c,"DOMNodeInserted",function(){d||(d=!0,z(function(){d=!1;for(var e=0;e<gh.length;e++)z(gh[e])}))})}};gh=[];u.body?b():z(b)}gh.push(a)};
var ph=function(){var a=u.body,b=u.documentElement||a&&a.parentElement,c,d;if(u.compatMode&&"BackCompat"!==u.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};Ka("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},qh=function(a){var b=ph(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},rh=function(a){if(u.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!f.getComputedStyle)return!0;var c=f.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=f.getComputedStyle(d,null))}return!1};
var yh=function(a,b,c){function d(){var h=a();g+=e?(wa()-e)*h.playbackRate/1E3:0;e=wa()}var e=0,g=0;return{Ab:function(h,k,l){var m=a(),n=m.xd,p=void 0!==l?Math.round(l):void 0!==k?Math.round(m.xd*k):Math.round(m.rf),t=void 0!==k?Math.round(100*k):0>=n?0:Math.round(p/n*100),q=u.hidden?!1:.5<=qh(c);d();var r=Mf(c,"gtm.video",[b]);r["gtm.videoProvider"]="youtube";r["gtm.videoStatus"]=h;r["gtm.videoUrl"]=m.url;r["gtm.videoTitle"]=m.title;r["gtm.videoDuration"]=Math.round(n);r["gtm.videoCurrentTime"]=
Math.round(p);r["gtm.videoElapsedTime"]=Math.round(g);r["gtm.videoPercent"]=t;r["gtm.videoVisible"]=q;af(r)},lg:function(){e=wa()},bc:function(){d()}}};var zh=f.clearTimeout,Ah=f.setTimeout,H=function(a,b,c){if(Oe()){b&&z(b)}else return Qa(a,b,c)},Bh=function(){return new Date},Ch=function(){return f.location.href},Dh=function(a){return gb(hb(a),"fragment")},Eh=function(a){return fb(hb(a))},Fh=null;
var Gh=function(a,b){return ld(a,b||2)},Hh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return af(a)},Ih=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||c&&!f[a])&&(f[a]=b);return f[a]},Jh=function(a,b,c){return ib(a,b,void 0===c?!0:!!c)},Kh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Nd:d},g=Jg();Kg(g,e);Qg(e)},Lh=function(a,b,c,d,e){var g=tg(),h=kg();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&
(za(k,l.query),za(k,l.fragment));for(var m=Hg(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==Gg[p]){var t=Lg(p,m),q=k[t];if(q){var r=Math.min(Mg(q),wa()),w;b:{for(var v=r,y=ib(t,u.cookie),x=0;x<y.length;++x)if(Mg(y[x])>v){w=!0;break b}w=!1}w||pb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var A={prefix:b,path:c,domain:d};Kg(Ig(k.gclid,k.gclsrc),A);},Mh=function(a,b,c,d,e){Og(a,b,c,d,e);},
Nh=function(a,b){if(Oe()){b&&z(b)}else Sa(a,b)},Oh=function(a){return!!Qf(a,"init",!1)},Ph=function(a){Of(a,"init",!0)},Qh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Cc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});H(D("https://","http://",d))};

var Sh=Jf.Uf;
var Th=new pa,Uh=function(a,b){function c(h){var k=hb(h),l=gb(k,"protocol"),m=gb(k,"host",!0),n=gb(k,"port"),p=gb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Vh=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(Vh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(w){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Th.get(q);r||(r=new RegExp(c,t),Th.set(q,r));p=r.test(b)}catch(w){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Uh(b,c)}return!1};var Xh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Yh={},Zh=encodeURI,M=encodeURIComponent,$h=Ta;var ai=function(a,b){if(!a)return!1;var c=gb(hb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var bi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Yh.Sf=function(){var a=!1;return a};var ci=function(){var a=!1;return a};var Mi=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Ni=function(){this.c=1;this.e=[];this.p=null};function Oi(a){var b=zc,c=b.gss=b.gss||{};return c[a]=c[a]||new Ni}var Pi=function(a,b){Oi(a).p=b},Qi=function(a){var b=Oi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var Si=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||na();return a.hid};var gj=window,hj=document,ij=function(a){var b=gj._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===gj["ga-disable-"+a])return!0;try{var c=gj.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=ib("AMP_TOKEN",hj.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return hj.getElementById("__gaOptOutExtension")?!0:!1};var pj=function(a,b,c){oj(a);var d=Math.floor(wa()/1E3);Oi(a).e.push(new Mi(b,d,c,void 0));Qi(a)},qj=function(a,b,c){oj(a);var d=Math.floor(wa()/1E3);Oi(a).e.push(new Mi(b,d,c,!0))},oj=function(a){if(1===Oi(a).c){Oi(a).c=2;var b=encodeURIComponent(a);Qa(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},sj=function(a,b){},rj=function(a,b){};var Y={a:{}};

Y.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var A=[],B=x.split(","),C=0;C<B.length;C++){var E=Number(B[C]);if(isNaN(E))return[];n.test(B[C])||A.push(E)}return A}function c(){var x=0,A=0;return function(){var B=ph(),C=B.height;x=Math.max(w.scrollLeft+B.width,x);A=Math.max(w.scrollTop+C,A);return{tf:x,uf:A}}}function d(){q=K("self");
r=q.document;w=r.scrollingElement||r.body&&r.body.parentNode;y=c()}function e(x,A,B,C){var E=l(A),F={},Q;for(Q in E){F.la=Q;if(E.hasOwnProperty(F.la)){var W=Number(F.la);x<W||(Hh({event:"gtm.scrollDepth","gtm.scrollThreshold":W,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":E[F.la].join(",")}),Pf("sdl",A,function(V){return function(S){delete S[V.la];return S}}(F),{}))}F={la:F.la}}}function g(){var x=y(),A=x.tf,B=x.uf,C=A/w.scrollWidth*100,E=B/w.scrollHeight*100;e(A,"horiz.pix",
p.qb,t.nd);e(C,"horiz.pct",p.pb,t.nd);e(B,"vert.pix",p.qb,t.sd);e(E,"vert.pct",p.pb,t.sd);Of("sdl","pending",!1)}function h(){var x=250,A=!1;r.scrollingElement&&r.documentElement&&q.addEventListener&&(x=50,A=!0);var B=0,C=!1,E=function(){C?B=Ah(E,x):(B=0,g(),Oh("sdl")&&!a()&&(Va(q,"scroll",F),Va(q,"resize",F),Of("sdl","init",!1)));C=!1},F=function(){A&&y();B?C=!0:(B=Ah(E,x),Of("sdl","pending",!0))};return F}function k(x,A,B){if(A){var C=b(String(x));Pf("sdl",B,function(E){for(var F=0;F<C.length;F++){var Q=
String(C[F]);E.hasOwnProperty(Q)||(E[Q]=[]);E[Q].push(A)}return E},{})}}function l(x){return Qf("sdl",x,{})}function m(x){z(x.vtp_gtmOnSuccess);var A=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,F=x.vtp_verticalThresholdsPixels,Q=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case p.qb:k(B,A,"horiz.pix");break;case p.pb:k(C,A,"horiz.pct")}switch(E){case p.qb:k(F,A,"vert.pix");break;case p.pb:k(Q,
A,"vert.pct")}Oh("sdl")?Qf("sdl","pending")||(v||(d(),v=!0),z(function(){return g()})):(d(),v=!0,w&&(Ph("sdl"),Of("sdl","pending",!0),z(function(){g();if(a()){var W=h();Ua(q,"scroll",W);Ua(q,"resize",W)}else Of("sdl","init",!1)})))}var n=/^\s*$/,p={pb:"PERCENT",qb:"PIXELS"},t={sd:"vertical",nd:"horizontal"},q,r,w,v=!1,y;(function(x){Y.__sdl=x;Y.__sdl.g="sdl";Y.__sdl.h=!0;Y.__sdl.b=0})(function(x){x.vtp_triggerStartOption?m(x):Ye(function(){m(x)})})}();
Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=K("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Y.a.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.g="sp";Y.__sp.h=!0;Y.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;Sd();H("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=K("google_trackConversion");if(ha(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=bi(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Zg()})||b()}else b()},b)})}();

Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.b=0})(function(a){return String(ud(a.vtp_gtmEventId,"event"))})}();Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.b=0})(function(a){var b=Gh("gtm.referrer",1)||u.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?gb(hb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Eh(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Mf(c,"gtm.click");Hh(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.b=0})(function(b){if(!Oh("cl")){var c=K("document");Ua(c,"click",a,!0);Ph("cl")}z(b.vtp_gtmOnSuccess)})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.b=0})(function(a){return Jh(a.vtp_name,Gh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Gh("gtm.url",1))||Ch();var d=b[a("vtp_component")];if(!d||"URL"==d)return Eh(String(c));var e=hb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ka(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=gb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=gb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Gh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.tl=["google"],function(){function a(b){return function(){if(b.zc&&b.Bc>=b.zc)b.qc&&K("self").clearInterval(b.qc);else{b.Bc++;var c=Bh().getTime();Hh({event:b.R,"gtm.timerId":b.qc,"gtm.timerEventNumber":b.Bc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.zc,"gtm.timerStartTime":b.Zd,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Zd,"gtm.triggers":b.vg})}}}(function(b){Y.__tl=b;Y.__tl.g="tl";Y.__tl.h=!0;Y.__tl.b=0})(function(b){z(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={R:b.vtp_eventName,
Bc:0,interval:Number(b.vtp_interval),zc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),vg:String(b.vtp_uniqueTriggerId||"0"),Zd:Bh().getTime()};c.qc=K("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={},l=void 0;if(c.vtp_gaSettings){var m=c.vtp_gaSettings;Ha(bi(m.vtp_fieldsToSet,"fieldName","value"),e);Ha(bi(m.vtp_contentGroup,"index","group"),g);Ha(bi(m.vtp_dimension,"index","dimension"),h);Ha(bi(m.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=Ha(m);c=Ha(c,n)}Ha(bi(c.vtp_fieldsToSet,"fieldName","value"),e);Ha(bi(c.vtp_contentGroup,
"index","group"),g);Ha(bi(c.vtp_dimension,"index","dimension"),h);Ha(bi(c.vtp_metric,"index","metric"),k);var p=Zd(c.vtp_functionName);if(ha(p)){var t="",q="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(q=c.vtp_trackerName,t=q+"."):(q="gtm"+Jc(),t=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(T){var L=[].slice.call(arguments,0);L[0]=t+L[0];p.apply(window,L)},y=function(T,L){return void 0===L?L:T(L)},x=function(T,L){if(L)for(var Z in L)L.hasOwnProperty(Z)&&v("set",T+Z,L[Z])},A=function(){
var T=function(Db,qb,sc){if(!Ga(qb))return!1;for(var tc=xa(Object(qb),sc,[]),ze=0;tc&&ze<tc.length;ze++)v(Db,tc[ze]);return!!tc&&0<tc.length},L;if(c.vtp_useEcommerceDataLayer){var Z=!1;Z||(L=Gh("ecommerce",1))}else c.vtp_ecommerceMacroData&&(L=c.vtp_ecommerceMacroData.ecommerce);if(!Ga(L))return;L=Object(L);var oa=xa(e,"currencyCode",L.currencyCode);
void 0!==oa&&v("set","&cu",oa);T("ec:addImpression",L,"impressions");if(T("ec:addPromo",L[L.promoClick?"promoClick":"promoView"],"promotions")&&L.promoClick){v("ec:setAction","promo_click",L.promoClick.actionField);return}for(var Ba="detail checkout checkout_option click add remove purchase refund".split(" "),Ja=0;Ja<Ba.length;Ja++){var Ya=L[Ba[Ja]];if(Ya){T("ec:addProduct",Ya,"products");v("ec:setAction",Ba[Ja],Ya.actionField);break}}},
B=function(T,L,Z){var oa=0;if(T)for(var Ba in T)if(T.hasOwnProperty(Ba)&&(Z&&r[Ba]||!Z&&void 0===r[Ba])){var Ja=w[Ba]?ta(T[Ba]):T[Ba];"anonymizeIp"!=Ba||Ja||(Ja=void 0);L[Ba]=Ja;oa++}return oa},C={name:q};B(e,C,!0);(function(){})();p("create",c.vtp_trackingId||d.trackingId,C);v("set","&gtm",Zg(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(T,L){void 0!==
c[L]&&v("set",T,c[L])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",h);x("metric",k);var E={};B(e,E,!1)&&v("set",E);var F;c.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var T=e&&e.hitCallback;ha(T)&&T();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){
c.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());var Q={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:y(String,c.vtp_eventLabel||d.label),eventValue:y(sa,c.vtp_eventValue||d.value)};B(F,Q,!1);v("send",Q);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var R="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:R})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");v("require","adfeatures",{cookieName:X})}F?v("send","pageview",F):v("send","pageview");}if(!a){var U=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(U="internal/"+U);a=!0;var da=D("https:","http:",
"//www.google-analytics.com/"+U,e&&e.forceSSL);H(da,function(){var T=Xd();T&&T.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else z(c.vtp_gtmOnFailure)};Y.__ua=b;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.b=0}();




Y.a.ytl=["google"],function(){function a(){var v=Math.round(1E9*Math.random())+"";return Xa(v)?a():v}function b(v,y){if(!v)return!1;for(var x=0;x<t.length;x++)if(0<=v.indexOf("//"+t[x]+"/"+y))return!0;return!1}function c(v){var y=-1!==v.indexOf("?")?"&":"?";if(-1<v.indexOf("origin="))return v+y+"enablejsapi=1";if(!r){var x=K("document");r=x.location.protocol+"//"+x.location.hostname;x.location.port&&(r+=":"+x.location.port)}return v+y+"enablejsapi=1&origin="+encodeURIComponent(r)}function d(v,y){var x=
v.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return v.setAttribute("src",c(x)),!0}return!1}function e(v,y){if(!v.getAttribute("data-gtm-yt-inspected-"+y.Qc)&&(v.setAttribute("data-gtm-yt-inspected-"+y.Qc,"true"),d(v,y.Ad))){v.id||(v.id=a());var x=K("YT"),A=x.get(v.id);A||(A=new x.Player(v.id));var B=h(A,y),C={},E;for(E in B)C.Da=E,B.hasOwnProperty(C.Da)&&A.addEventListener(C.Da,function(F){return function(Q){return B[F.Da](Q.data)}}(C)),C={Da:C.Da}}}function g(v){z(function(){function y(){for(var A=
x.getElementsByTagName("iframe"),B=A.length,C=0;C<B;C++)e(A[C],v)}var x=K("document");y();hh(y)})}function h(v,y){var x,A;function B(){N=yh(function(){return{url:O,title:R,xd:J,rf:v.getCurrentTime(),playbackRate:X}},y.Qc,v.getIframe());J=0;R=O="";X=1;return C}function C(L){switch(L){case q.PLAYING:J=Math.round(v.getDuration());O=v.getVideoUrl();if(v.getVideoData){var Z=v.getVideoData();R=Z?Z.title:""}X=v.getPlaybackRate();y.jf?N.Ab("start"):N.bc();I=m(y.cg,y.bg,v.getDuration());return E(L);default:return C}}
function E(){U=v.getCurrentTime();da=Bh().getTime();N.lg();P();return F}function F(L){var Z;switch(L){case q.ENDED:return W(L);case q.PAUSED:Z="pause";case q.BUFFERING:var oa=v.getCurrentTime()-U;Z=1<Math.abs((Bh().getTime()-da)/1E3*X-oa)?"seek":Z||"buffering";v.getCurrentTime()&&(y.hf?N.Ab(Z):N.bc());S();return Q;case q.UNSTARTED:return B(L);default:return F}}function Q(L){switch(L){case q.ENDED:return W(L);case q.PLAYING:return E(L);case q.UNSTARTED:return B(L);default:return Q}}function W(){for(;A;){var L=
x;zh(A);L()}y.ff&&N.Ab("complete",1);return B(q.UNSTARTED)}function V(){}function S(){A&&(zh(A),A=0,x=V)}function P(){if(I.length&&0!==X){var L=-1,Z;do{Z=I[0];if(Z.ja>v.getDuration())return;L=(Z.ja-v.getCurrentTime())/X;if(0>L&&(I.shift(),0===I.length))return}while(0>L);x=function(){A=0;x=V;0<I.length&&I[0].ja===Z.ja&&(I.shift(),N.Ab("progress",Z.Td,Z.Yd));P()};A=Ah(x,1E3*L)}}var N,I=[],J,O,R,X,U,da,T=B(q.UNSTARTED);A=0;x=V;return{onStateChange:function(L){T=T(L)},onPlaybackRateChange:function(L){U=
v.getCurrentTime();da=Bh().getTime();N.bc();X=L;S();P()}}}function k(v){for(var y=v.split(","),x=y.length,A=[],B=0;B<x;B++){var C=parseInt(y[B],10);isNaN(C)||100<C||0>C||A.push(C/100)}A.sort(function(E,F){return E-F});return A}function l(v){for(var y=v.split(","),x=y.length,A=[],B=0;B<x;B++){var C=parseInt(y[B],10);isNaN(C)||0>C||A.push(C)}A.sort(function(E,F){return E-F});return A}function m(v,y,x){var A=v.map(function(E){return{ja:E,Yd:E,Td:void 0}});if(!y.length)return A;var B=y.map(function(E){return{ja:E*
x,Yd:void 0,Td:E}});if(!A.length)return B;var C=A.concat(B);C.sort(function(E,F){return E.ja-F.ja});return C}function n(v){v.vtp_triggerStartOption?p(v):Jd(function(){p(v)})}function p(v){var y=!!v.vtp_captureStart,x=!!v.vtp_captureComplete,A=!!v.vtp_capturePause,B=k(v.vtp_progressThresholdsPercent+""),C=l(v.vtp_progressThresholdsTimeInSeconds+""),E=!!v.vtp_fixMissingApi;if(y||x||A||B.length||C.length){var F={jf:y,ff:x,hf:A,bg:B,cg:C,Ad:E,Qc:void 0===v.vtp_uniqueTriggerId?"":v.vtp_uniqueTriggerId},
Q=K("YT"),W=function(){g(F)};z(v.vtp_gtmOnSuccess);if(Q)Q.ready&&Q.ready(W);else{var V=K("onYouTubeIframeAPIReady");Ih("onYouTubeIframeAPIReady",function(){V&&V();W()});z(function(){for(var S=K("document"),P=S.getElementsByTagName("script"),N=P.length,I=0;I<N;I++){var J=P[I].getAttribute("src");if(b(J,"iframe_api")||b(J,"player_api"))return}for(var O=S.getElementsByTagName("iframe"),R=O.length,X=0;X<R;X++)if(!w&&d(O[X],F.Ad)){H("https://www.youtube.com/iframe_api");w=!0;break}})}}else z(v.vtp_gtmOnSuccess)}
var t=["www.youtube.com","www.youtube-nocookie.com"],q={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,w=!1;Y.__ytl=n;Y.__ytl.g="ytl";Y.__ytl.h=!0;Y.__ytl.b=0}();

Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Y.__gclidw=b;Y.__gclidw.g="gclidw";Y.__gclidw.h=!0;Y.__gclidw.b=100})(function(b){z(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||Ag())&&
Lh(a,h,k,l));Kh(e,c,d);Vg(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Mh(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();
Y.a.aev=["google"],function(){function a(l,m){var n=!1,p;n||(p=Gh("gtm."+m,1));return p}function b(l,m,n){var p=a(l,k[m]);return void 0!==p?p:n}function c(l,m){if(!l)return!1;var n=d(Ch());ka(m)||(m=String(m||"").replace(/\s+/g,"").split(","));for(var p=[n],t=0;t<m.length;t++)if(m[t]instanceof RegExp){if(m[t].test(l))return!1}else{var q=m[t];if(0!=q.length){if(0<=
d(l).indexOf(q))return!1;p.push(d(q))}}return!ai(l,p)}function d(l){e.test(l)||(l="http://"+l);return gb(hb(l),"HOST",!0)}var e=/^https?:\/\//i,g={},h=[],k={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(l){Y.__aev=l;Y.__aev.g=
"aev";Y.__aev.h=!0;Y.__aev.b=0})(function(l){var m=l.vtp_gtmEventId,n=l.vtp_defaultValue,p=l.vtp_varType;switch(p){case "TAG_NAME":var t=a(m,"element");return t&&t.tagName||n;case "TEXT":var q;if(ia(g[m]))q=g[m];else{var r=a(m,"element");if(r&&(q=Za(r),g[m]=q,h.push(m),25<h.length)){var w=h.shift();delete g[w]}}return q||n;case "URL":var v;a:{var y=String(a(m,"elementUrl")||n||""),x=hb(y),A=String(l.vtp_component||"URL");switch(A){case "URL":v=y;break a;case "IS_OUTBOUND":v=c(y,l.vtp_affiliatedDomains);
break a;default:v=gb(x,A,l.vtp_stripWww,l.vtp_defaultPages,l.vtp_queryKey)}}return v;case "ATTRIBUTE":var B;if(void 0===l.vtp_attribute)B=b(m,p,n);else{var C=l.vtp_attribute,E=a(m,"element");B=E&&Wa(E,C)||n||""}return B;default:return b(m,p,n)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.b=0})(function(a){var b=Ha(a),c=b;c[dc.qa]=null;c[dc.Ce]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:Ch()}function b(g,h){Ua(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Eh(l),C:Dh(l)})})}function c(g,h){Ua(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Eh(l),C:Dh(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(ha(m))try{l[g]=function(n,p,t){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:Eh(Ch()),
C:Dh(Ch())})}}catch(n){}}function e(){var g={source:null,state:K("history").state||null,url:Eh(Ch()),C:Dh(Ch())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.C!=h.C){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.C,"gtm.newUrlFragment":h.C,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;Hh(m)}}}(function(g){Y.__hl=g;Y.__hl.g="hl";Y.__hl.h=!0;Y.__hl.b=0})(function(g){var h=K("self");if(!Oh("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Ph("hl")}z(g.vtp_gtmOnSuccess)})}();
Y.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=K("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Sd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Zg()},m=function(p){return function(t,q,r){var w="DATA_LAYER"==p?Gh(r):k[q];w&&(l[t]=w)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(p){return{value:p.price,quantity:p.quantity,item_id:p.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;b.push(l);a||(a=!0,H("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Y.__awct=h;Y.__awct.g="awct";Y.__awct.h=!0;Y.__awct.b=0}();
Y.a.bzi=["nonGoogleScripts"],function(){(function(a){Y.__bzi=a;Y.__bzi.g="bzi";Y.__bzi.h=!0;Y.__bzi.b=0})(function(a){try{f._bizo_data_partner_id=a.vtp_id,f._bizo_data_partner_title=a.vtp_title,f._bizo_data_partner_domain=a.vtp_domain,f._bizo_data_partner_company=a.vtp_company,f._bizo_data_partner_location=a.vtp_location,f._bizo_data_partner_employee_range=a.vtp_employeeRange,f._bizo_data_partner_sics=a.vtp_standardIndustrialClassification,f._bizo_data_partner_email=a.vtp_email,H(D("https://sjs",
"http://js",".bizographics.com/insight.min.js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}catch(b){z(a.vtp_gtmOnFailure)}})}();

Y.a.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.g="remm";Y.__remm.h=!0;Y.__remm.b=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Y.a.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Y.__baut=b;Y.__baut.g="baut";Y.__baut.h=!0;Y.__baut.b=0})(function(b){var c=b.vtp_uetqName||"uetq",d=K(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},g=function(h,k){void 0!==b[h]&&(e[k]=b[h])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();
else try{H("//bat.bing.com/bat.js",function(){var h=Xh(K("UET"),{ti:b.vtp_tagId,q:d});f[c]=h;h.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(h){z(b.vtp_gtmOnFailure)}})}();
Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.b=0})(function(a){var b=a.vtp_input,c=bi(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Y.a.twitter_website_tag=["nonGoogleScripts"],function(){(function(a){Y.__twitter_website_tag=a;Y.__twitter_website_tag.g="twitter_website_tag";Y.__twitter_website_tag.h=!0;Y.__twitter_website_tag.b=0})(function(a){(function(c,d){c.twq||(d=c.twq=function(){d.exe?d.exe.apply(d,arguments):d.queue.push(arguments)},d.version="1",d.queue=[],H("//static.ads-twitter.com/uwt.js"))})(window,void 0);window.twq("init",String(a.vtp_twitter_pixel_id));var b=bi(a.vtp_event_parameters,"param_table_key_column","param_table_value_column");
b&&void 0!==b.content_ids&&(b.content_ids=JSON.parse(b.content_ids.replace(/'/g,'"')));window.twq("track",String(a.vtp_event_type),b);z(a.vtp_gtmOnSuccess)})}();
Y.a.zone=[],function(){function a(p){for(var t=p.vtp_boundaries||[],q=0;q<t.length;q++)if(!t[q])return!1;return!0}function b(p){var t=yc.m,q=t+":"+p.vtp_gtmTagId,r=Gh("gtm.uniqueEventId")||0,w=Dd(function(){return new k}),v=a(p),y=p.vtp_enableTypeRestrictions?p.vtp_whitelistedTypes.map(function(Q){return Q.typeId}):null;y=y&&Ca(y,h);if(w.registerZone(q,r,v,y))for(var x=p.vtp_childContainers.map(function(Q){return Q.publicId}),A=0;A<x.length;A++){var B=String(x[A]);if(w.registerChild(B,t,q)){var C=
0!==B.indexOf("GTM-"),E=0===B.indexOf("SB-")?c():void 0;if(C){var F=function(Q,W){Hh(arguments)};F("js",new Date);F("config",B);m||Qh(B,E,C)}else Qh(B,E,C)}}}function c(){var p=Jh("_oid")[0];if(p)return{oid:p,namespace:"cookie"}}var d={active:!1,isWhitelisted:function(){return!1}},e={active:!0,isWhitelisted:function(){return!0}},g={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},h={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},k=function(){this.ub={};this.Uc={}};k.prototype.checkState=
function(p,t){var q=this.ub[p];if(!q)return e;var r=this.checkState(q.Sd,t);if(!r.active)return d;for(var w=[],v=0;v<q.Tc.length;v++){var y=this.Uc[q.Tc[v]];y.Qa(t)&&w.push(y)}return w.length?{active:!0,isWhitelisted:function(x){if(!r.isWhitelisted(x))return!1;for(var A=0;A<w.length;++A)if(w[A].isWhitelisted(x))return!0;return!1}}:d};k.prototype.unregisterChild=function(p){delete this.ub[p]};k.prototype.registerZone=function(p,t,q,r){var w=this.Uc[p];if(w)return w.hg(t,q),!1;if(!q)return!1;this.Uc[p]=
new l(t,r);return!0};k.prototype.registerChild=function(p,t,q){var r=this.ub[p];if(!r&&zc[p]||r&&r.Sd!==t)return!1;if(r)return r.Tc.push(q),!1;this.ub[p]={Sd:t,Tc:[q]};return!0};var l=function(p,t){this.W=[{eventId:p,Qa:!0}];this.Lb=null;if(t){this.Lb={};for(var q=0;q<t.length;q++)this.Lb[t[q]]=!0}};l.prototype.hg=function(p,t){var q=this.W[this.W.length-1];p<=q.eventId||q.Qa!=t&&this.W.push({eventId:p,Qa:t})};l.prototype.Qa=function(p){if(!this.W||0==this.W.length)return!1;for(var t=this.W.length-
1;0<=t;t--)if(this.W[t].eventId<=p)return this.W[t].Qa;return!1};l.prototype.isWhitelisted=function(p){return this.Lb?g[p]||!!this.Lb[p]:!0};var m=!1;var n=function(p){b(p);z(p.vtp_gtmOnSuccess)};Y.__zone=n;Y.__zone.g="zone";Y.__zone.h=!0;Y.__zone.b=0}();

Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Pa(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){z(h)}}}var b=function(d,e,g){Jd(function(){var h,k=zc;k.postscribe||(k.postscribe=jc);h=k.postscribe;var l={done:e},m=u.createElement("div");m.style.display="none";m.style.visibility="hidden";u.body.appendChild(m);try{h(m,d,l)}catch(n){z(g)}})};var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=Sh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.oc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,$a(h),k,e)()}else Ah(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.b=0}();


Y.a.lcl=[],function(){function a(){var c=K("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=ab(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=Qf("lcl",k?"nv.mwt":"mwt",0),m;m=k?Qf("lcl","nv.ids",[]):Qf("lcl","ids",[]);if(m.length){var n=Mf(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=K((h.target||"_self").substring(1)),t=!0;if(Hh(n,bf(function(){t&&p&&(p.location.href=h.href)}),
l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else Hh(n,function(){},l||2E3);return!0}}};Ua(c,"click",e,!1);Ua(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=d.href.indexOf("#"),h=d.target;if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var k=Eh(d.href),l=Eh(e.location);return k!==l}return!0}(function(c){Y.__lcl=c;Y.__lcl.g="lcl";Y.__lcl.h=!0;Y.__lcl.b=0})(function(c){var d=void 0===c.vtp_waitForTags?
!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};Pf("lcl","mwt",k,0);e||Pf("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Pf("lcl","ids",l,[]);e||Pf("lcl","nv.ids",l,[]);Oh("lcl")||(a(),Ph("lcl"));z(c.vtp_gtmOnSuccess)})}();

var tj={};tj.macro=function(a){if(Jf.ac.hasOwnProperty(a))return Jf.ac[a]},tj.onHtmlSuccess=Jf.wd(!0),tj.onHtmlFailure=Jf.wd(!1);tj.dataLayer=md;tj.callback=function(a){Hc.hasOwnProperty(a)&&ha(Hc[a])&&Hc[a]();delete Hc[a]};tj.Ze=function(){zc[yc.m]=tj;za(Ic,Y.a);Wb=Wb||Jf;Xb=Bd};
tj.Nf=function(){zc=f.google_tag_manager=f.google_tag_manager||{};if(zc[yc.m]){var a=zc.zones;a&&a.unregisterChild(yc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Sb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Qb.push(p)}Ub=Y;Vb=Vh;tj.Ze();gf();Ed=!1;Fd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)Hd();else{Ua(u,"DOMContentLoaded",Hd);Ua(u,"readystatechange",Hd);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&Id()}Ua(f,"load",Hd)}Ve=!1;"complete"===u.readyState?Xe():
Ua(f,"load",Xe);a:{if(!bd)break a;f.setInterval(cd,864E5);}
Ec=(new Date).getTime();}};(0,tj.Nf)();

})()
