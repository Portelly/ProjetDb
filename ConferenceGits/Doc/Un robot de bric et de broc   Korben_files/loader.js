(function(e,D){if(e.TRC){return}e.TRC={utm:[]};e.TRC.utm.start=(new Date).getTime();TRC.styleInjected=false;var c="_taboola",v=null,u=[],k=e.onerror,x=null,d=[],n=[],m=null,a=false,s=[],h={publisher:TRC.publisherId="korben"},p=false,r=null;e.onerror=function(G,F,E){if(/taboola(syndication)?\.com/.test(F)){__trcError&&__trcError(G,E+"@"+F)}return k&&k()};function b(){}function B(){while(msg=n.shift()){switch(msg.notify){case"newPageLoad":TRC.reset();break}}}function z(F){var E;for(var G=0;G<F.length;G++){if(!(E=F[G].src.match(/^(.*\/)loader\.js(?:\?(.*))?$/))){continue}TRC.baseDomain=E[1]}}function y(){var G,E;while(G=s.shift()){switch(G.notify){case"videoPlay":if(!this.preloadRequestLoader){v.playVideo(G)}else{(function(H){TRC.aspect.after(v,"handleLoadResponse",function(){v.playVideo(H)},true)})(G)}break;case"videoDone":try{TRC.dispatch("videoDone",G)}catch(F){v.error("Problem in videoDone",F)}}}}function l(){m=null;if(a){while(d.length){v.pollTillContainerAvailable(d.shift())}return}a=true;v.loadRBox.apply(v,d);d=[];(b=y)()}function C(){}function A(){if(!d.length){return p=false}if(p){p=false;l();return}if(m!=null){TRC.Timeout.clear(m)}m=TRC.Timeout.set(l,500)}TRC.reset=function(){d=[];m=null;a=false;s=[];h={publisher:TRC.publisherId="korben"};p=false;b=function(){};C=function(){};try{TRC.Timeout.reset();TRC.Interval.reset();if(v&&e.TRCImpl){v.reset();e.TRCImpl=v=null}if(TRC.brightcoveMedia){TRC.brightcoveMedia.reset()}if(TRC.eventDelegator){TRC.eventDelegator.resetEvents()}}catch(E){}};TRC.ready=function(F){var E={"modes":{"autosized-generated-2r":{"component-id":"rbox-blended","tabbed":false,"header":"\u00c0\u00a0d\u00e9couvrir \u00e9galement","expandable":false,"list-size":10,"orientation":"horizontal","navigation-type":"none","auto-scroll":"none","loading-animation-url":"hide","thumbnail-width":"144","thumbnail-height":"131","format":{ 'views': 'Views: %s', 'uploader': 'By: %s','duration': 'Duration: %s','rating': 'Rating: %s'},"detail-order":"title","icons":false,"format-number":function(num){var out="",m;while(num.length>3&&(m=num.match(/\d{3}\s*$/))){out=m.toString().replace(/\s+/,"")+","+out;num=num.replace(/\d{3}\s*$/,"");}out=num+","+out;return out.replace(/,$/,"");},"change-url":function(url){return url;},"list-suffix":function(internalc, myorigin) {},"item-renderer":function(box,data) { if (typeof window.trc_itemRenderer == 'function') window.trc_itemRenderer(document.createElement('div'),data);},"title":"Related Videos","format-title":'%s',"format-duration":'%s',"format-description":'%s',"format-category":'%s',"format-uploader":'User: %s',"format-views":function(n){ return 'Views: '+this.formatNumber(n);},"format-rating":'Rating: %s',"format-published-date":function(d){return this.dateFormatISO(d);},"sponsored-location":"top","thumbnail-position":"under","color-scheme":"White","pager-button-style":"<span class=\"pager-cont\">&laquo;<\/span>|<span class=\"pager-cont\">&raquo;<\/span>","pager-position":"start","pager-type-style":"numbers","template":"Default","pager-button-location":"pager","pager-button-active-image":"","pager-button-inactive-image":"","pager-button-hover-image":"","pager-style-active-image":"","pager-style-inactive-image":"","pager-style-hover-image":"","lightbox-display-title":true,"detail-order-ad":"title","layout-template":"Horizontal 4","style-template":"Light","attribution-position":"top","shade-scroll":false,"attribution-text":"<span>par Taboola<\/span>","required-attributes":"none","auto-advance-animation":"down","auto-advance":"-1","format-external-data":'%s',"item-data-filter":function(data) {},"gam-allow-trc-ads":false,"thumbnail-position-ad":"inherit","impl-class":"TRCRBox","player-embed-code":function(){return '';},"player-container-id":"trc_Embed_Container_Id","render-player-info":false,"player-thumbnail-width":"75","player-thumbnail-height":"200","player-detail-order":"title,description","use-cdn-recommendations":false,"syndicated-attribution":"","syndicated-attribution-tooltip":"","syndicated-attribution-position":"bottom-right","detail-order-syndicated":"title,branding","format-syndicator":function(s){ return s; },"syndicated-static-text":"","syndicated-static-text-position":"top-right","quantcast-label":"","cyclical-paging":false,"after-visible":function(data) {},"link-target":"normal","auto-syndicated-attribution":true,"remove-url-playvideo-behavior":false,"auto-size":true,"auto-size-rules":[{"minWc":120,"maxWc":249,"minWsRange":8,"maxWsRange":8,"n":1},{"minWc":250,"maxWc":379,"minWsRange":8,"maxWsRange":9,"n":2},{"minWc":380,"maxWc":609,"minWsRange":8,"maxWsRange":10,"n":3},{"minWc":610,"maxWc":749,"minWsRange":8,"maxWsRange":11,"n":4},{"minWc":750,"maxWc":1029,"minWsRange":7,"maxWsRange":11,"n":5},{"minWc":1030,"maxWc":1419,"minWsRange":6,"maxWsRange":11,"n":6},{"minWc":1420,"maxWc":1729,"minWsRange":6,"maxWsRange":12,"n":7},{"minWc":1730,"maxWc":1920,"minWsRange":6,"maxWsRange":13,"n":8}],"rows":2,"widget-creator-layout":"autowidget-template","widget-creator-revision":"5292625","details-inline-with-title":""},"rbox-blended":{"component-id":"rbox-blended","tabbed":false,"header":"Videos","expandable":false,"list-size":4,"orientation":"horizontal","navigation-type":"paging","auto-scroll":"none","loading-animation-url":"hide","thumbnail-width":"124","thumbnail-height":"82","format":{ 'views': 'Views: %s', 'uploader': 'By: %s','duration': 'Duration: %s','rating': 'Rating: %s'},"detail-order":"title,description","icons":false,"format-number":function(num){var out="",m;while(num.length>3&&(m=num.match(/\d{3}\s*$/))){out=m.toString().replace(/\s+/,"")+","+out;num=num.replace(/\d{3}\s*$/,"");}out=num+","+out;return out.replace(/,$/,"");},"change-url":function(url){return url;},"list-suffix":function(internalc, myorigin) {},"item-renderer":function(box,data) { if (typeof window.trc_itemRenderer == 'function') window.trc_itemRenderer(document.createElement('div'),data);},"title":"Related Videos","format-title":'%s',"format-duration":'%s',"format-description":'%s',"format-category":'%s',"format-uploader":'User: %s',"format-views":function(n){ return 'Views: '+this.formatNumber(n);},"format-rating":'Rating: %s',"format-published-date":function(d){return this.dateFormatISO(d);},"sponsored-location":"thumbnail-top","thumbnail-position":"top","emblem":"http:\/\/cdn.taboolasyndication.com\/taboola\/play-light.png","color-scheme":"White","pager-button-style":"<span class=\"pager-cont\">&laquo;<\/span>|<span class=\"pager-cont\">&raquo;<\/span>","pager-position":"start","pager-type-style":"numbers","template":"Default","pager-button-location":"none","pager-button-active-image":"","pager-button-inactive-image":"","pager-button-hover-image":"","pager-style-active-image":"","pager-style-inactive-image":"","pager-style-hover-image":"","lightbox-display-title":true,"detail-order-ad":"title,url","layout-template":"Horizontal 4","style-template":"Light","attribution-position":"bottom","shade-scroll":true,"attribution-text":"<span>by<span style=\"font-size:12px;\">Taboola<\/span><\/span>","required-attributes":"none","auto-advance-animation":"down","auto-advance":"-1","format-external-data":'%s',"item-data-filter":function(data) {},"gam-allow-trc-ads":false,"thumbnail-position-ad":"inherit","impl-class":"TRCRBox","player-embed-code":function(){return '';},"player-container-id":"trc_Embed_Container_Id","render-player-info":false,"player-thumbnail-width":"75","player-thumbnail-height":"200","player-detail-order":"title,description","use-cdn-recommendations":false,"syndicated-attribution":"","syndicated-attribution-tooltip":"","syndicated-attribution-position":"bottom-right","detail-order-syndicated":"branding,title","format-syndicator":function(s){ return s; },"syndicated-static-text":"Sponsored","syndicated-static-text-position":"top-right","quantcast-label":"","cyclical-paging":false,"after-visible":function(data) {},"link-target":"normal","auto-syndicated-attribution":true,"remove-url-playvideo-behavior":false,"auto-size":false,"auto-size-rules":[{"minWc":120,"maxWc":249,"minWsRange":8,"maxWsRange":8,"n":1},{"minWc":250,"maxWc":379,"minWsRange":8,"maxWsRange":9,"n":2},{"minWc":380,"maxWc":609,"minWsRange":8,"maxWsRange":10,"n":3},{"minWc":610,"maxWc":749,"minWsRange":8,"maxWsRange":11,"n":4},{"minWc":750,"maxWc":1029,"minWsRange":7,"maxWsRange":11,"n":5},{"minWc":1030,"maxWc":1419,"minWsRange":6,"maxWsRange":11,"n":6},{"minWc":1420,"maxWc":1729,"minWsRange":6,"maxWsRange":12,"n":7},{"minWc":1730,"maxWc":1920,"minWsRange":6,"maxWsRange":13,"n":8}],"rows":1,"widget-creator-layout":"autowidget-template","widget-creator-revision":"-1","details-inline-with-title":""}},"language":"en","testmode":true,"direction":"ltr","default-thumbnail":"http:\/\/cdn.taboolasyndication.com\/taboola\/dflthumb.png","domains":"","sponsored-link-text":"Sponsored Link","sponsored-video-text":"Sponsored Video","branding-url":{},"configuration-version":"0","external-credentials":null,"brightcove-list-id":null,"publisher-start":function(){ },"get-user":function(){return null;},"get-creator":function(){var m=document.getElementsByTagName('head')[0].getElementsByTagName('meta');for(var i=0;i<m.length;i++){if(m[i].name=='uploader'||m[i].name=='item-uploader')return m[i].content;}},"get-views":function() {var m=document.getElementsByTagName('head')[0].getElementsByTagName('meta');for(var i=0;i<m.length;i++){if(m[i].name=='views'||m[i].name=='item-views')return m[i].content;}},"get-rating":function() {var m=document.getElementsByTagName('head')[0].getElementsByTagName('meta');for(var i=0;i<m.length;i++){if(m[i].name=='rating'||m[i].name=='item-rating'){ if(!isNaN(parseFloat(m[i].content))) return m[i].content;}}},"get-tags":function() {return [];},"logo-image":"http:\/\/cdn.taboolasyndication.com\/taboola\/powered-by.png","has_valid_rss":false,"actionscript_version":"3","brightcove-uses-reference":false,"publisher-end":function(id){ },"ie-logo-image":"http:\/\/cdn.taboolasyndication.com\/taboola\/powered-by-small.gif","attribution":true,"notify-loaded":true,"metafields":"","normalize-item-id":function(itemid,type,canon){if(!canon&&type=='text'&&typeof itemid=='string'&&itemid.search(new RegExp('^https?://'))==0)itemid=itemid.replace(/\?.*/,'');return itemid.toLowerCase();},"normalize-item-url":function(itemurl,type,canon){return itemurl;},"read-paused-bcplayer":false,"normalize-request-param":function(req,mode) {return req;},"normalize-log-param":function(name,value,mode) {return value;},"timeout":8000,"prenormalize-item-id":{"host":true,"fragment":"^(\/video\/|!)","query":["p","id"],"truncate-at":["search.searchcompletion.com","org.mozilla.javascript.undefined"],"trailing-dirsep":true},"prenormalize-item-url":false,"loader-impl":null,"global":{"css-isolation":false,"explore-delay":0,"publisher-domains":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<domains><domain type=\"host\">korben.info<\/domain><\/domains>\n","requests-domain":"trc.taboola.com","stop-channels-threshold":"0.8","syndication-embed-code":function (box, recommendation, affiliate) {},"syndicator-affiliate-id":"dailyrecord","visible-delay":0,"style":".autosized-generated-2r .video-title{font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:normal;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;}.autosized-generated-2r .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;}.autosized-generated-2r .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.autosized-generated-2r .videoCube .video-duration{left:36px;display:none;}.autosized-generated-2r .videoCube .video-label-box{margin-left:0;margin-right:0px;}.autosized-generated-2r .video-label,.autosized-generated-2r .sponsored,.autosized-generated-2r .sponsored-url{font-family:Arial, Helvetica, sans-serif;}.autosized-generated-2r .trc_rbox_header{font-family:Arial, Helvetica, sans-serif;font-size:18.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;}.autosized-generated-2r .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.autosized-generated-2r .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.autosized-generated-2r .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.autosized-generated-2r .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.autosized-generated-2r .videoCube{width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;}.autosized-generated-2r div.videoCube:hover,.autosized-generated-2r  div.videoCube_hover{background-color:transparent;}.autosized-generated-2r .sponsored-default{background-color:#F7F6C6;}.autosized-generated-2r div.sponsored-default:hover,.autosized-generated-2r  div.sponsored-default.videoCube_hover{background-color:inherit;}.autosized-generated-2r .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.autosized-generated-2r .videoCube:hover .thumbnail-overlay,.autosized-generated-2r  .videoCube_hover .thumbnail-overlay{background-image:null;}.autosized-generated-2r .trc_rbox_border_elm{border-color:darkgray;}.autosized-generated-2r .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.autosized-generated-2r div.videoCube:hover .thumbBlock{border-color:inherit;}.autosized-generated-2r .pager_enabled{color:#0056b3;}.autosized-generated-2r .trc_pager_counter{color:#000000;}.autosized-generated-2r .pager_disabled{color:#7d898f;}.autosized-generated-2r .trc_pager_prev:hover,.autosized-generated-2r  .trc_pager_next:hover{color:#6497ED;}.autosized-generated-2r .trc_pager_selected{color:#0056b3;}.autosized-generated-2r .trc_pager_unselected{color:#7d898f;}.autosized-generated-2r div.trc_pager_pages div:hover{color:#6497ED;}.autosized-generated-2r .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.autosized-generated-2r .video-label-box{text-align:left;}.autosized-generated-2r .trc_sponsored_overlay{background-color:black;}.autosized-generated-2r .thumbnail-emblem{background-position:5% 5%;}.autosized-generated-2r .videoCube .sponsored{margin-top:-7px;}.autosized-generated-2r{width:300px;_width:300px;border-width:0px;border-style:none;border-color:#000000;padding:0;}.autosized-generated-2r .videoCube.vertical{border-style:solid none none none;}.autosized-generated-2r .videoCube.horizontal{border-style:none;}.autosized-generated-2r .trc_pager_prev,.autosized-generated-2r .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.autosized-generated-2r .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.autosized-generated-2r .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .trc_pager div{font-family:serif;}.autosized-generated-2r .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.autosized-generated-2r .playerCube:hover .thumbnail-overlay,.autosized-generated-2r  .playerCube_hover .thumbnail-overlay{background-image:null;}.autosized-generated-2r .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.autosized-generated-2r .playerCube .videoCube.horizontal{border-style:none none none none;}.autosized-generated-2r .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.autosized-generated-2r .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .playerCube .video-label-box{text-align:left;}.autosized-generated-2r .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.autosized-generated-2r .playerCube .videoCube .video-duration{display:block;left:36px;}.autosized-generated-2r .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.autosized-generated-2r .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.autosized-generated-2r .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.autosized-generated-2r .playerCube div.videoCube:hover,.autosized-generated-2r  div.videoCube_hover{background-color:transparent;}.autosized-generated-2r .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.autosized-generated-2r div.syndicatedItem:hover,.autosized-generated-2r  div.syndicatedItem.videoCube_hover{background-color:transparent;}.autosized-generated-2r div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.autosized-generated-2r .videoCube.syndicatedItem{background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;}.autosized-generated-2r .videoCube.syndicatedItem.horizontal{border-style:none;}.autosized-generated-2r .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.autosized-generated-2r .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.autosized-generated-2r .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.autosized-generated-2r .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.autosized-generated-2r .videoCube.syndicatedItem .video-label-box{margin-left:0px;}.autosized-generated-2r .syndicatedItem{background-color:transparent;}.autosized-generated-2r .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;}.autosized-generated-2r .syndicatedItem .video-title{max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:13.0px;line-height:18.0px;font-weight:normal;text-decoration:none;}.autosized-generated-2r .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.autosized-generated-2r .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.autosized-generated-2r .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.autosized-generated-2r .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.autosized-generated-2r .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.autosized-generated-2r .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.autosized-generated-2r .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.autosized-generated-2r .syndicatedItem .video-uploader{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.autosized-generated-2r .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.autosized-generated-2r .syndicatedItem .branding{color:#888888;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;}.autosized-generated-2r .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.autosized-generated-2r .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.autosized-generated-2r .videoCube.syndicatedItem:hover .thumbnail-overlay,.autosized-generated-2r  .videoCube_hover.syndicatedItem .thumbnail-overl{:null;}.rbox-blended .video-title{font-family:\"Trebuchet MS\", Helvetica, sans-serif;font-size:12px;line-height:15px;font-weight:normal;max-height:1.29em;*height:1.29em;color:#678db8;text-decoration:none;}.rbox-blended .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#737373;text-decoration:none;}.rbox-blended .trc_rbox_div{width:auto;_width:99%;height:146px;border-width:0px 2px;padding:0 5px;}.rbox-blended .videoCube .video-duration{left:36px;display:block;}.rbox-blended .videoCube .video-label-box{margin-left:5px;margin-right:5px;}.rbox-blended .video-label,.rbox-blended .sponsored,.rbox-blended .sponsored-url{font-family:\"Trebuchet MS\", Helvetica, sans-serif;}.rbox-blended .trc_rbox_header{font-family:\"Trebuchet MS\", Helvetica, sans-serif;font-size:18px;font-weight:normal;text-decoration:none;color:#3A3A3A;border-width:0;background:transparent;border-style:none none solid none;border-color:#D6D5D3;padding:0;}.rbox-blended .sponsored-url{font-size:10px;font-weight:normal;text-decoration:none;color:#678DB8;}.rbox-blended .sponsored{font-size:10px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.rbox-blended .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:#678db8;}.rbox-blended .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.rbox-blended .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.rbox-blended .videoCube{width:124px;_width:124px;background-color:white;border-width:1px;border-color:#C8D6E5;padding:0px;height:146px;margin-left:4px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;}.rbox-blended div.videoCube:hover,.rbox-blended  div.videoCube_hover{background-color:#dddddd;}.rbox-blended .sponsored-default{background-color:#F0F0F0;}.rbox-blended div.sponsored-default:hover,.rbox-blended  div.sponsored-default.videoCube_hover{background-color:#dddddd;}.rbox-blended .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.rbox-blended .videoCube:hover .thumbnail-overlay,.rbox-blended  .videoCube_hover .thumbnail-overlay{background-image:null;}.rbox-blended .trc_rbox_border_elm{border-color:#c8d6e5;}.rbox-blended .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.rbox-blended div.videoCube:hover .thumbBlock{border-color:inherit;}.rbox-blended .pager_enabled{color:#737373;}.rbox-blended .trc_pager_counter{color:#000000;}.rbox-blended .pager_disabled{color:#A0A0A0;}.rbox-blended .trc_pager_prev:hover,.rbox-blended  .trc_pager_next:hover{color:#CDE28F;}.rbox-blended .trc_pager_selected{color:#A0A0A0;}.rbox-blended .trc_pager_unselected{color:#737373;}.rbox-blended div.trc_pager_pages div:hover{color:#CDE28F;}.rbox-blended .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.rbox-blended .video-label-box{text-align:left;}.rbox-blended .trc_sponsored_overlay{background-color:black;}.rbox-blended .thumbnail-emblem{background-position:5% 95%;}.rbox-blended .videoCube .sponsored{margin-top:-2px;}.rbox-blended{width:522px;_width:522px;border-width:0px;border-style:solid solid solid solid;border-color:#000000;padding:0;}.rbox-blended .videoCube.vertical{border-style:none none solid none;}.rbox-blended .videoCube.horizontal{border-style:none none solid none;}.rbox-blended .trc_pager_prev,.rbox-blended .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.rbox-blended .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.rbox-blended .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .trc_pager div{font-family:serif;}.rbox-blended .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.rbox-blended .playerCube:hover .thumbnail-overlay,.rbox-blended  .playerCube_hover .thumbnail-overlay{background-image:null;}.rbox-blended .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.rbox-blended .playerCube .videoCube.horizontal{border-style:none none none none;}.rbox-blended .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.rbox-blended .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-label-box{text-align:left;}.rbox-blended .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.rbox-blended .playerCube .videoCube .video-duration{display:block;left:36px;}.rbox-blended .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.rbox-blended .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.rbox-blended .playerCube div.videoCube:hover,.rbox-blended  div.videoCube_hover{background-color:transparent;}.rbox-blended .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.rbox-blended div.syndicatedItem:hover,.rbox-blended  div.syndicatedItem.videoCube_hover{background-color:transparent;}.rbox-blended div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.rbox-blended .videoCube.syndicatedItem{background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;}.rbox-blended .videoCube.syndicatedItem.horizontal{border-style:none none none solid;}.rbox-blended .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.rbox-blended .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.rbox-blended .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.rbox-blended .videoCube.syndicatedItem .video-duration{display:block;left:36px;}.rbox-blended .videoCube.syndicatedItem .video-label-box{margin-left:0px;}.rbox-blended .syndicatedItem{background-color:transparent;}.rbox-blended .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;}.rbox-blended .syndicatedItem .video-title{max-height:2.58em;*height:2.58em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:17.5px;font-weight:bold;text-decoration:none;}.rbox-blended .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.rbox-blended .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .video-uploader{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .branding{color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;}.rbox-blended .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:block;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.rbox-blended .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:block;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.rbox-blended .videoCube.syndicatedItem:hover .thumbnail-overlay,.rbox-blended  .videoCube_hover.syndicatedItem .thumbnail-overl{:null;}.autosized-generated-2r img {\n\tmax-width: none;\n}\n\n.autosized-generated-2r .trc_rbox_header {\n\tline-height: 1.2em;\n\theight: auto;\n}\n\n.autosized-generated-2r .trc_rbox_header_span .trc_header_right_column {\n\tdisplay: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.autosized-generated-2r .trc_rbox_header .logoDiv {\n        font-size: inherit;\n\tline-height: 1.2em;\n}\n\n.autosized-generated-2r .logoDiv a {\n\tvertical-align: baseline;\n}\n\n.autosized-generated-2r .logoDiv a span {\n\tdisplay: inline;\n\tcolor: #999;\n\tfont-weight: normal;\n\tfont-size: 10px;\n}\n\n.autosized-generated-2r .video-label-box {\n\tmin-height: 54.0px;\n}\n\n.autosized-generated-2r .videoCube .video-label-box .video-title {\n\ttext-decoration: none;\n}\n\n.autosized-generated-2r .videoCube.thumbnail_under .label-box-overlay {\n\tdisplay: inline;\n\tbackground-color: #ffffff;\n\topacity: 0.75;\n\tfilter: alpha(opacity=75.0);\n}\n\n.autosized-generated-2r .video-label-box .branding {\n\tdisplay: block;\n}\n\n.autosized-generated-2r .syndicatedItem .branding {\n\tline-height: 18.0px;\n}\n.autosized-generated-2r .trc_header_left_column {\n\tbackground: transparent;\n\tdisplay: inline;\n\theight: auto;\n}\n","locale":{"rbox":{"\":{\"MIME-Version":null,"Sponsored Link":[null,"Sponsored Link"],"Sponsored Link:":[null,"Sponsored Link:"],"Sponsored Video:":[null,"Sponsored Video:"],"Sponsored Video":[null,"Sponsored Video"],"in %1 Seconds":[null,"%1"],"%1 of %2":[null,"%1 of %2"]}}}};E.defaults=F;E.version="5-66-3-76397-5-66-Release-5298437";TRC.publisherId=h.publisher;e.TRCImpl=v=new TRC.Manager(E,h);TRC.isInteractive=false;(C=A)();v.onclick=r.onclick;if(v.invisible){TRC.aspect.after(v,"internalDrawRBox",function(){(b=y)()},true)}return v};function w(E){if(TRC.implLoaded){TRC.trcReady();return}if(x){return}var F=D.getElementsByTagName("script");x=D.createElement("script");if(F.length){F[0].parentNode.insertBefore(x,F[0])}x.charset="UTF-8";x.type="text/javascript";x.src="http://cdn.taboolasyndication.com/libtrc/"+E;TRC.utm.push((new Date).getTime()-TRC.utm.start)}function f(){if(!u.length){return}var E;while(E=u.shift()){for(var F in E){if(F=="onclick"){r.onclick=E[F]}else{h[F]=E[F]}}}w("impl.5-66-3-76397-5-66-Release.js")}function i(){B();f();C();b()}function j(E){t(E);if(!!E.mode){d.push(E)}else{if(!!E.notify){if(E.notify=="newPageLoad"){q();n.push(E)}else{s.push(E)}}else{u.push(E)}}if(!!E.flush){p=true}}function t(G){var E;try{if(!G.onrender){return}if(TRC.eventDelegator){E=TRC.eventDelegator.subscribe}else{TRC.subscriptionRegister=[];E=function(J,I,K,H){TRC.subscriptionRegister.push({event:J,handler:I,container:H})}}E("onrender",G.onrender,(G.container)?g(G.container):null)}catch(F){__trcError&&__trcError("extractSubscription",F)}}function g(E){if(typeof E==="string"){return E}else{return msg.container.id||"trc_cont_ "+parseInt(Math.random()*10000)}}function q(){d=[];u=[];s=[];n=[]}function o(E){for(var G=0;G<arguments.length;G++){E=arguments[G];if(E instanceof Array){for(var F=0;F<E.length;F++){j(E[F])}}else{j(E)}}i();return arguments.length}r=e[c]=e[c]||[];if(r.registered){return}r.push=o;r.registered=true;while(r.length){o(r.shift())}z(D.getElementsByTagName("script"))})(window,document);