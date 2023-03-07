import React__default, { useContext, useMemo, useState, useCallback, createContext, useEffect, useReducer } from 'react';
import styled, { ThemeContext, keyframes, ThemeProvider } from 'styled-components';
import { UseWalletProvider } from 'use-wallet';
import { Link } from 'react-router-dom';
import BigNumber from 'bignumber.js/bignumber';
import Web3 from 'web3';
import BigNumber$1 from 'bignumber.js';
import { ethers } from 'ethers';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import CountUp from 'react-countup';
import cookie from 'js-cookie';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var uaParser_min = createCommonjsModule(function (module, exports) {
/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
(function(window,undefined$1){var LIBVERSION="0.7.28",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded",UA_MAX_LENGTH=255;var util={extend:function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i]);}else {mergedRegexes[i]=regexes[i];}}return mergedRegexes},has:function(str1,str2){return typeof str1===STR_TYPE?str2.toLowerCase().indexOf(str1.toLowerCase())!==-1:false},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined$1},trim:function(str,len){str=str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");return typeof len===UNDEF_TYPE?str:str.substring(0,UA_MAX_LENGTH)}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match);}else {this[q[0]]=q[1];}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined$1;}else {this[q[0]]=match?match.replace(q[1],q[2]):undefined$1;}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined$1;}}else {this[q]=match?match:undefined$1;}}}}i+=2;}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined$1:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined$1:i}}return str}};var maps={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[VERSION,[NAME,"Chrome"]],[/(?:edge|edgios|edga|edg)\/([\w\.]+)/i],[VERSION,[NAME,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[NAME,VERSION],[/opios[\/\s]+([\w\.]+)/i],[VERSION,[NAME,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[VERSION,[NAME,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[NAME,VERSION],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[VERSION,[NAME,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[VERSION,[NAME,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[VERSION,[NAME,"WeChat"]],[/konqueror\/([\w\.]+)/i],[VERSION,[NAME,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[VERSION,[NAME,"IE"]],[/yabrowser\/([\w\.]+)/i],[VERSION,[NAME,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Secure Browser"],VERSION],[/focus\/([\w\.]+)/i],[VERSION,[NAME,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[VERSION,[NAME,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[VERSION,[NAME,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[VERSION,[NAME,"Dolphin"]],[/coast\/([\w\.]+)/i],[VERSION,[NAME,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[NAME,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Browser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[NAME],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[NAME,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[NAME,VERSION],[/\bgsa\/([\w\.]+)\s.*safari\//i],[VERSION,[NAME,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,"Chrome WebView"],VERSION],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[VERSION,[NAME,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[VERSION,[NAME,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[ARCHITECTURE,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[ARCHITECTURE,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[MODEL,[VENDOR,"Samsung"],[TYPE,TABLET]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[MODEL,[VENDOR,"Samsung"],[TYPE,MOBILE]],[/\((ip(?:hone|od)[\s\w]*);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[MODEL,[VENDOR,"Huawei"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[MODEL,[VENDOR,"OPPO"],[TYPE,MOBILE]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[MODEL,[VENDOR,"Vivo"],[TYPE,MOBILE]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[MODEL,[VENDOR,"Realme"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[MODEL,/_/g," "],[VENDOR,"Nokia"],[TYPE,MOBILE]],[/droid.+;\s(pixel\sc)[\s)]/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[MODEL,"Xperia Tablet"],[VENDOR,"Sony"],[TYPE,TABLET]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[MODEL,"Fire Phone"],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((playbook);[\w\s\),;-]+(rim)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[MODEL,[VENDOR,"ASUS"],[TYPE,TABLET]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[MODEL,[VENDOR,"ASUS"],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(surface\sduo)\s/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,TABLET]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[MODEL,[VENDOR,"Fairphone"],[TYPE,MOBILE]],[/\s(u304aa)\sbuild/i],[MODEL,[VENDOR,"AT&T"],[TYPE,MOBILE]],[/sie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/[;\/]\s?(rct\w+)\sbuild/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[MODEL,[VENDOR,"Barnes & Noble"],[TYPE,TABLET]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/;\s(k88)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/;\s(nx\d{3}j)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,MOBILE]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/[;\/]\s?(zur\d{3})\sbuild/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/;\s(ph-1)\s/i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/[;\/]\s?tu_(1491)\sbuild/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/(shield[\w\s]+)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,TABLET]],[/(sprint)\s(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,TABLET]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/droid.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[345portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[VENDOR,"LG"],[TYPE,SMARTTV]],[/(apple)\s?tv/i],[VENDOR,[MODEL,"Apple TV"],[TYPE,SMARTTV]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"],[TYPE,SMARTTV]],[/droid.+aft([\w])(\sbuild\/|\))/i],[MODEL,[VENDOR,"Amazon"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[TYPE,SMARTTV]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/droid.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,WEARABLE]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[VENDOR,[TYPE,EMBEDDED]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[MODEL,[VENDOR,"Generic"]],[/(phone)/i],[[TYPE,MOBILE]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[NAME,VERSION],[/\(bb(10);/i],[VERSION,[NAME,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[VERSION,[NAME,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[VERSION,[NAME,"webOS"]],[/crkey\/([\d\.]+)/i],[VERSION,[NAME,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[NAME,VERSION],[/(sunos)\s?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(ua,extensions){if(typeof ua==="object"){extensions=ua;ua=undefined$1;}if(!(this instanceof UAParser)){return new UAParser(ua,extensions).getResult()}var _ua=ua||(typeof window!=="undefined"&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var _rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var _browser={name:undefined$1,version:undefined$1};mapper.rgx.call(_browser,_ua,_rgxmap.browser);_browser.major=util.major(_browser.version);return _browser};this.getCPU=function(){var _cpu={architecture:undefined$1};mapper.rgx.call(_cpu,_ua,_rgxmap.cpu);return _cpu};this.getDevice=function(){var _device={vendor:undefined$1,model:undefined$1,type:undefined$1};mapper.rgx.call(_device,_ua,_rgxmap.device);return _device};this.getEngine=function(){var _engine={name:undefined$1,version:undefined$1};mapper.rgx.call(_engine,_ua,_rgxmap.engine);return _engine};this.getOS=function(){var _os={name:undefined$1,version:undefined$1};mapper.rgx.call(_os,_ua,_rgxmap.os);return _os};this.getResult=function(){return {ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return _ua};this.setUA=function(ua){_ua=typeof ua===STR_TYPE&&ua.length>UA_MAX_LENGTH?util.trim(ua,UA_MAX_LENGTH):ua;return this};this.setUA(_ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};{if(module.exports){exports=module.exports=UAParser;}exports.UAParser=UAParser;}var $=typeof window!=="undefined"&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop];}};}})(typeof window==="object"?window:commonjsGlobal);
});

var main = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }


var React__default$1 = _interopDefault(React__default);



var UA = new uaParser_min();
var browser = UA.getBrowser();
var cpu = UA.getCPU();
var device = UA.getDevice();
var engine = UA.getEngine();
var os = UA.getOS();
var ua = UA.getUA();

var setDefaults = function setDefaults(p) {
  var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
  return p ? p : d;
};
var getNavigatorInstance = function getNavigatorInstance() {
  if (typeof window !== 'undefined') {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }

  return false;
};
var isIOS13Check = function isIOS13Check(type) {
  var nav = getNavigatorInstance();
  return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream);
};

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var DeviceTypes = {
  Mobile: 'mobile',
  Tablet: 'tablet',
  SmartTv: 'smarttv',
  Console: 'console',
  Wearable: 'wearable',
  Browser: undefined
};
var BrowserTypes = {
  Chrome: 'Chrome',
  Firefox: "Firefox",
  Opera: "Opera",
  Yandex: "Yandex",
  Safari: "Safari",
  InternetExplorer: "Internet Explorer",
  Edge: "Edge",
  Chromium: "Chromium",
  Ie: 'IE',
  MobileSafari: "Mobile Safari",
  EdgeChromium: "Edge Chromium",
  MIUI: "MIUI Browser",
  SamsungBrowser: 'Samsung Browser'
};
var OsTypes = {
  IOS: 'iOS',
  Android: "Android",
  WindowsPhone: "Windows Phone",
  Windows: 'Windows',
  MAC_OS: 'Mac OS'
};
var initialData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};
var checkType = function checkType(type) {
  switch (type) {
    case DeviceTypes.Mobile:
      return {
        isMobile: true
      };

    case DeviceTypes.Tablet:
      return {
        isTablet: true
      };

    case DeviceTypes.SmartTv:
      return {
        isSmartTV: true
      };

    case DeviceTypes.Console:
      return {
        isConsole: true
      };

    case DeviceTypes.Wearable:
      return {
        isWearable: true
      };

    case DeviceTypes.Browser:
      return {
        isBrowser: true
      };

    default:
      return initialData;
  }
};
var broPayload = function broPayload(isBrowser, browser, engine, os, ua) {
  return {
    isBrowser: isBrowser,
    browserMajorVersion: setDefaults(browser.major),
    browserFullVersion: setDefaults(browser.version),
    browserName: setDefaults(browser.name),
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var mobilePayload = function mobilePayload(type, device, os, ua) {
  return _objectSpread2({}, type, {
    vendor: setDefaults(device.vendor),
    model: setDefaults(device.model),
    os: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    ua: setDefaults(ua)
  });
};
var stvPayload = function stvPayload(isSmartTV, engine, os, ua) {
  return {
    isSmartTV: isSmartTV,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var consolePayload = function consolePayload(isConsole, engine, os, ua) {
  return {
    isConsole: isConsole,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var wearPayload = function wearPayload(isWearable, engine, os, ua) {
  return {
    isWearable: isWearable,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};

var type = checkType(device.type);

function deviceDetect() {
  var isBrowser = type.isBrowser,
      isMobile = type.isMobile,
      isTablet = type.isTablet,
      isSmartTV = type.isSmartTV,
      isConsole = type.isConsole,
      isWearable = type.isWearable;

  if (isBrowser) {
    return broPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return stvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return wearPayload(isWearable, engine, os, ua);
  }
}

var isMobileType = function isMobileType() {
  return device.type === DeviceTypes.Mobile;
};

var isTabletType = function isTabletType() {
  return device.type === DeviceTypes.Tablet;
};

var isMobileAndTabletType = function isMobileAndTabletType() {
  switch (device.type) {
    case DeviceTypes.Mobile:
    case DeviceTypes.Tablet:
      return true;

    default:
      return false;
  }
};

var isEdgeChromiumType = function isEdgeChromiumType() {
  return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
};

var isSmartTVType = function isSmartTVType() {
  return device.type === DeviceTypes.SmartTv;
};

var isBrowserType = function isBrowserType() {
  return device.type === DeviceTypes.Browser;
};

var isWearableType = function isWearableType() {
  return device.type === DeviceTypes.Wearable;
};

var isConsoleType = function isConsoleType() {
  return device.type === DeviceTypes.Console;
};

var isAndroidType = function isAndroidType() {
  return os.name === OsTypes.Android;
};

var isWindowsType = function isWindowsType() {
  return os.name === OsTypes.Windows;
};

var isMacOsType = function isMacOsType() {
  return os.name === OsTypes.MAC_OS;
};

var isWinPhoneType = function isWinPhoneType() {
  return os.name === OsTypes.WindowsPhone;
};

var isIOSType = function isIOSType() {
  return os.name === OsTypes.IOS;
};

var isChromeType = function isChromeType() {
  return browser.name === BrowserTypes.Chrome;
};

var isFirefoxType = function isFirefoxType() {
  return browser.name === BrowserTypes.Firefox;
};

var isChromiumType = function isChromiumType() {
  return browser.name === BrowserTypes.Chromium;
};

var isEdgeType = function isEdgeType() {
  return browser.name === BrowserTypes.Edge;
};

var isYandexType = function isYandexType() {
  return browser.name === BrowserTypes.Yandex;
};

var isSafariType = function isSafariType() {
  return browser.name === BrowserTypes.Safari || browser.name === BrowserTypes.MobileSafari;
};

var isMobileSafariType = function isMobileSafariType() {
  return browser.name === BrowserTypes.MobileSafari;
};

var isOperaType = function isOperaType() {
  return browser.name === BrowserTypes.Opera;
};

var isIEType = function isIEType() {
  return browser.name === BrowserTypes.InternetExplorer || browser.name === BrowserTypes.Ie;
};

var isMIUIType = function isMIUIType() {
  return browser.name === BrowserTypes.MIUI;
};

var isSamsungBrowserType = function isSamsungBrowserType() {
  return browser.name === BrowserTypes.SamsungBrowser;
};

var isElectronType = function isElectronType() {
  var nav = getNavigatorInstance();
  var ua = nav && nav.userAgent && nav.userAgent.toLowerCase();
  return typeof ua === 'string' ? /electron/.test(ua) : false;
};

var getIOS13 = function getIOS13() {
  var nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) && !window.MSStream;
};

var getIPad13 = function getIPad13() {
  return isIOS13Check('iPad');
};

var getIphone13 = function getIphone13() {
  return isIOS13Check('iPhone');
};

var getIPod13 = function getIPod13() {
  return isIOS13Check('iPod');
};

var getBrowserFullVersion = function getBrowserFullVersion() {
  return setDefaults(browser.version);
};

var getBrowserVersion = function getBrowserVersion() {
  return setDefaults(browser.major);
};

var getOsVersion = function getOsVersion() {
  return setDefaults(os.version);
};

var getOsName = function getOsName() {
  return setDefaults(os.name);
};

var getBrowserName = function getBrowserName() {
  return setDefaults(browser.name);
};

var getMobileVendor = function getMobileVendor() {
  return setDefaults(device.vendor);
};

var getMobileModel = function getMobileModel() {
  return setDefaults(device.model);
};

var getEngineName = function getEngineName() {
  return setDefaults(engine.name);
};

var getEngineVersion = function getEngineVersion() {
  return setDefaults(engine.version);
};

var getUseragent = function getUseragent() {
  return setDefaults(ua);
};

var getDeviceType = function getDeviceType() {
  return setDefaults(device.type, 'browser');
};

var isSmartTV = isSmartTVType();
var isConsole = isConsoleType();
var isWearable = isWearableType();
var isMobileSafari = isMobileSafariType() || getIPad13();
var isChromium = isChromiumType();
var isMobile = isMobileAndTabletType() || getIPad13();
var isMobileOnly = isMobileType();
var isTablet = isTabletType() || getIPad13();
var isBrowser = isBrowserType();
var isDesktop = isBrowserType();
var isAndroid = isAndroidType();
var isWinPhone = isWinPhoneType();
var isIOS = isIOSType() || getIPad13();
var isChrome = isChromeType();
var isFirefox = isFirefoxType();
var isSafari = isSafariType();
var isOpera = isOperaType();
var isIE = isIEType();
var osVersion = getOsVersion();
var osName = getOsName();
var fullBrowserVersion = getBrowserFullVersion();
var browserVersion = getBrowserVersion();
var browserName = getBrowserName();
var mobileVendor = getMobileVendor();
var mobileModel = getMobileModel();
var engineName = getEngineName();
var engineVersion = getEngineVersion();
var getUA = getUseragent();
var isEdge = isEdgeType() || isEdgeChromiumType();
var isYandex = isYandexType();
var deviceType = getDeviceType();
var isIOS13 = getIOS13();
var isIPad13 = getIPad13();
var isIPhone13 = getIphone13();
var isIPod13 = getIPod13();
var isElectron = isElectronType();
var isEdgeChromium = isEdgeChromiumType();
var isLegacyEdge = isEdgeType() && !isEdgeChromiumType();
var isWindows = isWindowsType();
var isMacOs = isMacOsType();
var isMIUI = isMIUIType();
var isSamsungBrowser = isSamsungBrowserType();

var AndroidView = function AndroidView(_ref) {
  var renderWithFragment = _ref.renderWithFragment,
      children = _ref.children,
      viewClassName = _ref.viewClassName,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isAndroid ? renderWithFragment ? React__default$1.createElement(React__default.Fragment, null, children) : React__default$1.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var BrowserView = function BrowserView(_ref2) {
  var renderWithFragment = _ref2.renderWithFragment,
      children = _ref2.children,
      viewClassName = _ref2.viewClassName,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isBrowser ? renderWithFragment ? React__default$1.createElement(React__default.Fragment, null, children) : React__default$1.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var IEView = function IEView(_ref3) {
  var renderWithFragment = _ref3.renderWithFragment,
      children = _ref3.children,
      viewClassName = _ref3.viewClassName,
      style = _ref3.style,
      props = _objectWithoutProperties(_ref3, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isIE ? renderWithFragment ? React__default$1.createElement(React__default.Fragment, null, children) : React__default$1.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var IOSView = function IOSView(_ref4) {
  var renderWithFragment = _ref4.renderWithFragment,
      children = _ref4.children,
      viewClassName = _ref4.viewClassName,
      style = _ref4.style,
      props = _objectWithoutProperties(_ref4, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isIOS ? renderWithFragment ? React__default$1.createElement(React__default.Fragment, null, children) : React__default$1.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var MobileView = function MobileView(_ref5) {
  var renderWithFragment = _ref5.renderWithFragment,
      children = _ref5.children,
      viewClassName = _ref5.viewClassName,
      style = _ref5.style,
      props = _objectWithoutProperties(_ref5, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isMobile ? renderWithFragment ? React__default$1.createElement(React__default.Fragment, null, children) : React__default$1.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var TabletView = function TabletView(_ref6) {
  var renderWithFragment = _ref6.renderWithFragment,
      children = _ref6.children,
      viewClassName = _ref6.viewClassName,
      style = _ref6.style,
      props = _objectWithoutProperties(_ref6, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isTablet ? renderWithFragment ? React__default$1.createElement(React__default.Fragment, null, children) : React__default$1.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var WinPhoneView = function WinPhoneView(_ref7) {
  var renderWithFragment = _ref7.renderWithFragment,
      children = _ref7.children,
      viewClassName = _ref7.viewClassName,
      style = _ref7.style,
      props = _objectWithoutProperties(_ref7, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isWinPhone ? renderWithFragment ? React__default$1.createElement(React__default.Fragment, null, children) : React__default$1.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var MobileOnlyView = function MobileOnlyView(_ref8) {
  var renderWithFragment = _ref8.renderWithFragment,
      children = _ref8.children,
      viewClassName = _ref8.viewClassName,
      style = _ref8.style,
      props = _objectWithoutProperties(_ref8, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isMobileOnly ? renderWithFragment ? React__default$1.createElement(React__default.Fragment, null, children) : React__default$1.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var SmartTVView = function SmartTVView(_ref9) {
  var renderWithFragment = _ref9.renderWithFragment,
      children = _ref9.children,
      viewClassName = _ref9.viewClassName,
      style = _ref9.style,
      props = _objectWithoutProperties(_ref9, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isSmartTV ? renderWithFragment ? React__default$1.createElement(React__default.Fragment, null, children) : React__default$1.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var ConsoleView = function ConsoleView(_ref10) {
  var renderWithFragment = _ref10.renderWithFragment,
      children = _ref10.children,
      viewClassName = _ref10.viewClassName,
      style = _ref10.style,
      props = _objectWithoutProperties(_ref10, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isConsole ? renderWithFragment ? React__default$1.createElement(React__default.Fragment, null, children) : React__default$1.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var WearableView = function WearableView(_ref11) {
  var renderWithFragment = _ref11.renderWithFragment,
      children = _ref11.children,
      viewClassName = _ref11.viewClassName,
      style = _ref11.style,
      props = _objectWithoutProperties(_ref11, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isWearable ? renderWithFragment ? React__default$1.createElement(React__default.Fragment, null, children) : React__default$1.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var CustomView = function CustomView(_ref12) {
  var renderWithFragment = _ref12.renderWithFragment,
      children = _ref12.children,
      viewClassName = _ref12.viewClassName,
      style = _ref12.style,
      condition = _ref12.condition,
      props = _objectWithoutProperties(_ref12, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);

  return condition ? renderWithFragment ? React__default$1.createElement(React__default.Fragment, null, children) : React__default$1.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};

function withOrientationChange(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
        _this.isEventListenerAdded = false;
        _this.handleOrientationChange = _this.handleOrientationChange.bind(_assertThisInitialized(_this));
        _this.onOrientationChange = _this.onOrientationChange.bind(_assertThisInitialized(_this));
        _this.onPageLoad = _this.onPageLoad.bind(_assertThisInitialized(_this));
        _this.state = {
          isLandscape: false,
          isPortrait: false
        };
        return _this;
      }

      _createClass(_class, [{
        key: "handleOrientationChange",
        value: function handleOrientationChange() {
          if (!this.isEventListenerAdded) {
            this.isEventListenerAdded = true;
          }

          var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
          this.setState({
            isPortrait: orientation === 0,
            isLandscape: orientation === 90
          });
        }
      }, {
        key: "onOrientationChange",
        value: function onOrientationChange() {
          this.handleOrientationChange();
        }
      }, {
        key: "onPageLoad",
        value: function onPageLoad() {
          this.handleOrientationChange();
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && isMobile) {
            if (!this.isEventListenerAdded) {
              this.handleOrientationChange();
              window.addEventListener("load", this.onPageLoad, false);
            } else {
              window.removeEventListener("load", this.onPageLoad, false);
            }

            window.addEventListener("resize", this.onOrientationChange, false);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener("resize", this.onOrientationChange, false);
        }
      }, {
        key: "render",
        value: function render() {
          return React__default$1.createElement(WrappedComponent, _extends({}, this.props, {
            isLandscape: this.state.isLandscape,
            isPortrait: this.state.isPortrait
          }));
        }
      }]);

      return _class;
    }(React__default$1.Component)
  );
}

exports.AndroidView = AndroidView;
exports.BrowserTypes = BrowserTypes;
exports.BrowserView = BrowserView;
exports.ConsoleView = ConsoleView;
exports.CustomView = CustomView;
exports.IEView = IEView;
exports.IOSView = IOSView;
exports.MobileOnlyView = MobileOnlyView;
exports.MobileView = MobileView;
exports.OsTypes = OsTypes;
exports.SmartTVView = SmartTVView;
exports.TabletView = TabletView;
exports.WearableView = WearableView;
exports.WinPhoneView = WinPhoneView;
exports.browserName = browserName;
exports.browserVersion = browserVersion;
exports.deviceDetect = deviceDetect;
exports.deviceType = deviceType;
exports.engineName = engineName;
exports.engineVersion = engineVersion;
exports.fullBrowserVersion = fullBrowserVersion;
exports.getUA = getUA;
exports.isAndroid = isAndroid;
exports.isBrowser = isBrowser;
exports.isChrome = isChrome;
exports.isChromium = isChromium;
exports.isConsole = isConsole;
exports.isDesktop = isDesktop;
exports.isEdge = isEdge;
exports.isEdgeChromium = isEdgeChromium;
exports.isElectron = isElectron;
exports.isFirefox = isFirefox;
exports.isIE = isIE;
exports.isIOS = isIOS;
exports.isIOS13 = isIOS13;
exports.isIPad13 = isIPad13;
exports.isIPhone13 = isIPhone13;
exports.isIPod13 = isIPod13;
exports.isLegacyEdge = isLegacyEdge;
exports.isMIUI = isMIUI;
exports.isMacOs = isMacOs;
exports.isMobile = isMobile;
exports.isMobileOnly = isMobileOnly;
exports.isMobileSafari = isMobileSafari;
exports.isOpera = isOpera;
exports.isSafari = isSafari;
exports.isSamsungBrowser = isSamsungBrowser;
exports.isSmartTV = isSmartTV;
exports.isTablet = isTablet;
exports.isWearable = isWearable;
exports.isWinPhone = isWinPhone;
exports.isWindows = isWindows;
exports.isYandex = isYandex;
exports.mobileModel = mobileModel;
exports.mobileVendor = mobileVendor;
exports.osName = osName;
exports.osVersion = osVersion;
exports.withOrientationChange = withOrientationChange;
});

unwrapExports(main);
var main_42 = main.isMobile;

let _ = t => t,
    _t,
    _t2,
    _t3;

const Button = ({
  children,
  disabled,
  href,
  onClick,
  size,
  text,
  to,
  variant
}) => {
  const {
    color,
    spacing
  } = useContext(ThemeContext);
  let buttonColor;
  let bgColor;

  switch (variant) {
    case 'secondary':
      buttonColor = '#FFFFFF';
      bgColor = '#5AA62B';
      break;

    case 'tertiary':
      buttonColor = '#5B5A99';
      bgColor = '#BCB7F5';
      break;

    case 'default':
    default:
      buttonColor = '#5AA62B';
      bgColor = 'transparent';
  }

  let boxShadow;
  let buttonSize;
  let buttonPadding;
  let fontSize;

  switch (size) {
    case 'sm':
      boxShadow = `none`;
      buttonPadding = spacing[3];
      buttonSize = 36;
      fontSize = 14;
      break;

    case 'lg':
      boxShadow = `none`;
      buttonPadding = spacing[4];
      buttonSize = 72;
      fontSize = 16;
      break;

    case 'md':
    default:
      boxShadow = `none`;
      buttonPadding = spacing[4];
      buttonSize = 36;
      fontSize = 16;
  }

  const ButtonChild = useMemo(() => {
    if (to) {
      return React__default.createElement(StyledLink, {
        to: to
      }, text);
    } else if (href) {
      return React__default.createElement(StyledExternalLink, {
        href: href,
        target: "__blank"
      }, text);
    } else {
      return text;
    }
  }, [href, text, to]);
  return React__default.createElement(StyledButton, {
    boxShadow: boxShadow,
    color: buttonColor,
    bgColor: bgColor,
    disabled: disabled,
    fontSize: fontSize,
    onClick: onClick,
    padding: buttonPadding,
    size: buttonSize
  }, children, ButtonChild);
};

const StyledButton = styled.button(_t || (_t = _`
  align-items: center;
  background-color: ${0};
  border: 0;
  border-radius: 10px;
  box-shadow: ${0};
  color: ${0};
  cursor: pointer;
  display: flex;
  font-size: ${0}px;
  height: ${0}px;
  justify-content: center;
  outline: none;
  padding-left: ${0}px;
  padding-right: ${0}px;
  pointer-events: ${0};
  width: 100%;
  // &:hover {
  //   background-color: ${0};
  // }
`), props => !props.disabled ? props.bgColor : `${props.bgColor}50`, props => props.boxShadow, props => props.color, props => props.fontSize, props => props.size, props => props.padding, props => props.padding, props => !props.disabled ? undefined : 'none', props => props.bgColor);
const StyledLink = styled(Link)(_t2 || (_t2 = _`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 48px;
  justify-content: center;
  margin: 0 ${0}px;
  padding: 0 ${0}px;
  text-decoration: none;
`), props => -props.theme.spacing[4], props => props.theme.spacing[4]);
const StyledExternalLink = styled.a(_t3 || (_t3 = _`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 48px;
  justify-content: center;
  margin: 0 ${0}px;
  padding: 0 ${0}px;
  text-decoration: none;
`), props => -props.theme.spacing[4], props => props.theme.spacing[4]);

let _$1 = t => t,
    _t$1;

const CardIcon = ({
  children
}) => React__default.createElement(StyledCardIcon, null, children);

const StyledCardIcon = styled.div(_t$1 || (_t$1 = _$1`
  font-size: 36px;
  height: 30px;
  width: 60px;
  border-radius: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto ${0}px;
`), props => props.theme.spacing[3]);

let _$2 = t => t,
    _t$2,
    _t2$1,
    _t3$1,
    _t4;

const Modal = ({
  children,
  theme: _theme = 'light'
}) => {
  return React__default.createElement(StyledResponsiveWrapper, {
    className: `${_theme}`
  }, React__default.createElement(StyledModal, {
    className: `${_theme}`
  }, children));
};

const mobileKeyframes = keyframes(_t$2 || (_t$2 = _$2`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`));
const StyledResponsiveWrapper = styled.div(_t2$1 || (_t2$1 = _$2`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  max-width: 400px;
  @media (max-width: ${0}px) {
    flex: 1;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    height: 100%;
    // max-height: calc(100% - ${0}px);
    animation: ${0} 0.3s forwards ease-out;
  }
`), props => props.theme.breakpoints.mobile, props => props.theme.spacing[4], mobileKeyframes);
const StyledModal = styled.div(_t3$1 || (_t3$1 = _$2`
  padding: 20px 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;

  &.light {
    background: #ffffff;
  }

  &.dark {
    background: #2A2C32;
  }
`));
const StyledModalContent = styled.div(_t4 || (_t4 = _$2``));

let _$3 = t => t,
    _t$3,
    _t2$2;

const ModalActions = ({
  children
}) => {
  const l = React__default.Children.toArray(children).length;
  return React__default.createElement(StyledModalActions, null, React__default.Children.map(children, (child, i) => React__default.createElement("span", null, React__default.createElement(StyledModalAction, null, child))));
};

const StyledModalActions = styled.div(_t$3 || (_t$3 = _$3`
  align-items: center;
  background-color: ${0}00;
  display: flex;
  margin: 0;
  padding: 0px 20px;
  justify-content: space-around;
`), props => props.theme.color.grey[100]);
const StyledModalAction = styled.div(_t2$2 || (_t2$2 = _$3`
  flex: 1;
`));

let _$4 = t => t,
    _t$4;

const ModalContent = ({
  children
}) => {
  return React__default.createElement(StyledModalContent$1, null, children);
};

const StyledModalContent$1 = styled.div(_t$4 || (_t$4 = _$4`
  padding: 0 20px;
  margin-bottom: 20px;
  @media (max-width: ${0}px) {
    // flex: 1;
    // overflow: auto;
  }
`), props => props.theme.breakpoints.mobile);

let _$5 = t => t,
    _t$5;

const ModalTitle = ({
  text
}) => React__default.createElement(StyledModalTitle, null, text);

const StyledModalTitle = styled.div(_t$5 || (_t$5 = _$5`
  align-items: center;
  color: #9CA3AF;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  justify-content: center;
`));

const DisclaimerModal = ({
  onConfirm,
  onDismiss
}) => {
  const [step, setStep] = useState('disclaimer');
  const handleConfirm = useCallback(() => {
    onConfirm();
    onDismiss();
  }, [onConfirm, onDismiss]);
  const modalContent = useMemo(() => {
    if (step === 'disclaimer') {
      return React__default.createElement("div", null, React__default.createElement("p", null, "Audits: None."), React__default.createElement("p", null, "While the initial creators of the BSCX protocol have made reasonable efforts to attempt to ensure the security of the contracts, including forking much of the codebase from existing well-audited projects and soliciting review from friends, nothing approaching the rigor of a formal audit has been conducted at this time."), React__default.createElement("p", null, "We STRONGLY urge caution to anyone who chooses to engage with these contracts."));
    } else {
      return React__default.createElement("div", null);
    }
  }, [step]);
  const button = useMemo(() => {
    if (step === 'disclaimer') {
      return React__default.createElement(Button, {
        text: "Next",
        variant: "secondary",
        onClick: () => setStep('uniswap')
      });
    } else {
      return React__default.createElement(Button, {
        text: "I understand",
        onClick: handleConfirm
      });
    }
  }, [setStep, step, handleConfirm]);
  return React__default.createElement(Modal, null, React__default.createElement(ModalTitle, {
    text: `Warning`
  }), React__default.createElement(CardIcon, null, "\u26A0\uFE0F"), React__default.createElement(ModalContent, null, modalContent), React__default.createElement(ModalActions, null, button));
};

const context = createContext({
  farms: [],
  unharvested: 0
});

var config = {
  rpc: 'https://bsc-dataseed.binance.org',
  chainId: 56,
  api: 'https://api.lz.finance/pool',
  api_zseed_price: 'https://api-citizen.sowing.network/api/zseedprice'
};

var ERC20Abi = [
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_spender",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_from",
				type: "address"
			},
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "balance",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			},
			{
				name: "_spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	}
];

var MasterChefAbi = [
	{
		inputs: [
			{
				internalType: "address",
				name: "_devaddr",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv2",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForReferLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForReferLv2",
				type: "uint256"
			},
			{
				internalType: "contract IERC20",
				name: "_referralLPToken",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "stakeAmountLPLv1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "stakeAmountLPLv2",
				type: "uint256"
			}
		],
		name: "AmountLPStakeLevelRefer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "Deposit",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "EmergencyWithdraw",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Lock",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "percentForReferLv1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "percentForReferLv2",
				type: "uint256"
			}
		],
		name: "PercentLPLevelRefer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: false,
				internalType: "contract IERC20",
				name: "referralLPToken",
				type: "address"
			}
		],
		name: "ReferralLPToken",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "referrer",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "lockAmount",
				type: "uint256"
			}
		],
		name: "SendReferralReward",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "lockAmount",
				type: "uint256"
			}
		],
		name: "SendReward",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "status",
				type: "bool"
			}
		],
		name: "Status",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "address",
				name: "teamAddress",
				type: "address"
			}
		],
		name: "TeamAddressPool",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "Withdraw",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_lpToken",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "_rewardToken",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_startBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_allocPoint",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_rewardPerBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentLockReward",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForDev",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForBurn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_halvingAfterBlock",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "_rewardMultiplier",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "_lockFromBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_lockToBlock",
				type: "uint256"
			}
		],
		name: "add",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "canUnlockAmount",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "claimReward",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_referrer",
				type: "address"
			}
		],
		name: "deposit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_devaddr",
				type: "address"
			}
		],
		name: "dev",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "devaddr",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "emergencyWithdraw",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_from",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_to",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "_halvingAtBlock",
				type: "uint256[]"
			},
			{
				internalType: "uint256[]",
				name: "_rewardMultiplier",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "_startBlock",
				type: "uint256"
			}
		],
		name: "getMultiplier",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getNewRewardPerBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getPoolReward",
		outputs: [
			{
				internalType: "uint256",
				name: "forBurn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "forDev",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "forFarmer",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "halvingAtBlocks",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "lastUnlockBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "lockOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "lpBalances",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "massUpdatePools",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_user",
				type: "address"
			}
		],
		name: "pendingReward",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "percentForReferLv1",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "percentForReferLv2",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "poolInfo",
		outputs: [
			{
				internalType: "contract IERC20",
				name: "lpToken",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "rewardToken",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "allocPoint",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lastRewardBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "accRewardPerShare",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardPerBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "percentLockReward",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "percentForDev",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "percentForBurn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "finishBonusAtBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "startBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "totalLock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lockFromBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lockToBlock",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "poolLength",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "referralAmountLv1",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "referralAmountLv2",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "referralLPToken",
		outputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "referrers",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "rewardMultipliers",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_allocPoint",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "_withUpdate",
				type: "bool"
			}
		],
		name: "set",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv2",
				type: "uint256"
			}
		],
		name: "setAmountLPStakeLevelRefer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_percentForReferLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForReferLv2",
				type: "uint256"
			}
		],
		name: "setPercentLPLevelRefer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_referralLPToken",
				type: "address"
			}
		],
		name: "setReferralLPToken",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "_status",
				type: "bool"
			}
		],
		name: "setStatus",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_teamAddress",
				type: "address"
			}
		],
		name: "setTeamAddressPool",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "stakeAmountLPLv1",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "stakeAmountLPLv2",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "status",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "teamAddresses",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		name: "totalAllocPoints",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_rewardToken",
				type: "address"
			}
		],
		name: "totalLock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "totalLockInPool",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		name: "totalLocks",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "unlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "updatePool",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "userInfo",
		outputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardDebt",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardDebtAtBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lockAmount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lastUnlockBlock",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "withdraw",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var MasterChefAbiV1 = [
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_allocPoint",
				type: "uint256"
			},
			{
				internalType: "contract IERC20",
				name: "_lpToken",
				type: "address"
			},
			{
				internalType: "bool",
				name: "_withUpdate",
				type: "bool"
			}
		],
		name: "add",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_transferBurnExceptAddress",
				type: "address"
			}
		],
		name: "addTransferBurnExceptAddress",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "claimReward",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "deposit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract BSCXToken",
				name: "_bscx",
				type: "address"
			},
			{
				internalType: "address",
				name: "_devaddr",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_rewardPerBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_startBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_halvingAfterBlock",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "Deposit",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_devaddr",
				type: "address"
			}
		],
		name: "dev",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "emergencyWithdraw",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "EmergencyWithdraw",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Lock",
		type: "event"
	},
	{
		inputs: [
		],
		name: "massUpdatePools",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "migrate",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_transferBurnExceptAddress",
				type: "address"
			}
		],
		name: "removeTransferBurnExceptAddress",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "lockAmount",
				type: "uint256"
			}
		],
		name: "SendBSCXReward",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_allocPoint",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "_withUpdate",
				type: "bool"
			}
		],
		name: "set",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_burnPercent",
				type: "uint256"
			}
		],
		name: "setBurnPercent",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IMigratorToBSCXSwap",
				name: "_migrator",
				type: "address"
			}
		],
		name: "setMigrator",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_tranferBurnRate",
				type: "uint256"
			}
		],
		name: "setTransferBurnRate",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "unlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "updatePool",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "withdraw",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "Withdraw",
		type: "event"
	},
	{
		inputs: [
		],
		name: "bscx",
		outputs: [
			{
				internalType: "contract BSCXToken",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "burnPercent",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			}
		],
		name: "canUnlockAmount",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "devaddr",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "FINISH_BONUS_AT_BLOCK",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_from",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_to",
				type: "uint256"
			}
		],
		name: "getMultiplier",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "pid1",
				type: "uint256"
			}
		],
		name: "getNewRewardPerBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_from",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_to",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_allocPoint",
				type: "uint256"
			}
		],
		name: "getPoolReward",
		outputs: [
			{
				internalType: "uint256",
				name: "forBurn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "forDev",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "forFarmer",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "HALVING_AT_BLOCK",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			}
		],
		name: "lastUnlockBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "lockFromBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			}
		],
		name: "lockOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "lockToBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "migrator",
		outputs: [
			{
				internalType: "contract IMigratorToBSCXSwap",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_user",
				type: "address"
			}
		],
		name: "pendingReward",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "PERCENT_FOR_DEV",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "PERCENT_LOCK_BONUS_REWARD",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "poolId1",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "poolInfo",
		outputs: [
			{
				internalType: "contract IERC20",
				name: "lpToken",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "allocPoint",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lastRewardBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "accBSCXPerShare",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "poolLength",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "REWARD_MULTIPLIER",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "REWARD_PER_BLOCK",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "START_BLOCK",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalAllocPoint",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalLock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "userInfo",
		outputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardDebt",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardDebtAtBlock",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];

var MasterChefAbiV2 = [
	{
		inputs: [
			{
				internalType: "address",
				name: "_devaddr",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv2",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForReferLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForReferLv2",
				type: "uint256"
			},
			{
				internalType: "contract IERC20",
				name: "_referralLPToken",
				type: "address"
			},
			{
				internalType: "contract ILZCitizen",
				name: "_citizen",
				type: "address"
			},
			{
				internalType: "contract ILZPoolBank",
				name: "_poolBank",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "stakeAmountLPLv1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "stakeAmountLPLv2",
				type: "uint256"
			}
		],
		name: "AmountLPStakeLevelRefer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "Deposit",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "EmergencyWithdraw",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Lock",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "percentForReferLv1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "percentForReferLv2",
				type: "uint256"
			}
		],
		name: "PercentLPLevelRefer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: false,
				internalType: "contract IERC20",
				name: "referralLPToken",
				type: "address"
			}
		],
		name: "ReferralLPToken",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "referrer",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "lockAmount",
				type: "uint256"
			}
		],
		name: "SendReferralReward",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "lockAmount",
				type: "uint256"
			}
		],
		name: "SendReward",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "status",
				type: "bool"
			}
		],
		name: "Status",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "address",
				name: "teamAddress",
				type: "address"
			}
		],
		name: "TeamAddressPool",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "_rewardPerBlock",
				type: "uint256"
			}
		],
		name: "TokenRewardPerBlock",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "Withdraw",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_lpToken",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "_rewardToken",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_startBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_allocPoint",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentLockReward",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForDev",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForBurn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_halvingAfterBlock",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "_rewardMultiplier",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "_lockFromBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_lockToBlock",
				type: "uint256"
			}
		],
		name: "add",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "balances",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "canUnlockAmount",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "citizen",
		outputs: [
			{
				internalType: "contract ILZCitizen",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "claimReward",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_referrer",
				type: "address"
			},
			{
				internalType: "address",
				name: "_beneficiary",
				type: "address"
			}
		],
		name: "deposit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_referrer",
				type: "address"
			}
		],
		name: "deposit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_devaddr",
				type: "address"
			}
		],
		name: "dev",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "devaddr",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "emergencyWithdraw",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getLpPoolBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_from",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_to",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "_halvingAtBlock",
				type: "uint256[]"
			},
			{
				internalType: "uint256[]",
				name: "_rewardMultiplier",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "_startBlock",
				type: "uint256"
			}
		],
		name: "getMultiplier",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getNewRewardPerBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getPoolLastRewardBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getPoolReward",
		outputs: [
			{
				internalType: "uint256",
				name: "forBurn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "forDev",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "forFarmer",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "halvingAtBlocks",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "lastUnlockBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "lockOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "massUpdatePools",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			}
		],
		name: "massUpdatePoolsByToken",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_user",
				type: "address"
			}
		],
		name: "pendingReward",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "percentForReferLv1",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "percentForReferLv2",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "poolBank",
		outputs: [
			{
				internalType: "contract ILZPoolBank",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "poolInfo",
		outputs: [
			{
				internalType: "contract IERC20",
				name: "lpToken",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "rewardToken",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "allocPoint",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lastRewardBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "accRewardPerShare",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "percentLockReward",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "percentForDev",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "percentForBurn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "finishBonusAtBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "startBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "totalLock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lockFromBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lockToBlock",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "poolLength",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "referralAmountLv1",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "referralAmountLv2",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "referralLPToken",
		outputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "caller",
				type: "address"
			}
		],
		name: "removePoolPoerator",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "rewardMultipliers",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address"
			},
			{
				internalType: "address",
				name: "_to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "rewardTransfer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_allocPoint",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "_withUpdate",
				type: "bool"
			}
		],
		name: "set",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv2",
				type: "uint256"
			}
		],
		name: "setAmountLPStakeLevelRefer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_percentForReferLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForReferLv2",
				type: "uint256"
			}
		],
		name: "setPercentLPLevelRefer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "caller",
				type: "address"
			}
		],
		name: "setPoolOperator",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_referralLPToken",
				type: "address"
			}
		],
		name: "setReferralLPToken",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "_status",
				type: "bool"
			}
		],
		name: "setStatus",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_teamAddress",
				type: "address"
			}
		],
		name: "setTeamAddressPool",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_rewardPerBlock",
				type: "uint256"
			}
		],
		name: "setTokenRewardPerBlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "stakeAmountLPLv1",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "stakeAmountLPLv2",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "status",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "teamAddresses",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "tokenExpiredBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "tokenFirstDeposited",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "tokenRewardPerBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "tokenTotalBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		name: "totalAllocPoints",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_rewardToken",
				type: "address"
			}
		],
		name: "totalLock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "totalLockInPool",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		name: "totalLocks",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "unlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "updatePool",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			}
		],
		name: "updateTokenExpiredBlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			}
		],
		name: "updateTokenExpiredBlockAndMassUpdateItsPools",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "address",
				name: "caller",
				type: "address"
			}
		],
		name: "userBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "userBalances",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "userInfo",
		outputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardDebt",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardDebtAtBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lockAmount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lastUnlockBlock",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "withdraw",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var MasterChefAbiV3 = [
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_referralLPToken",
				type: "address"
			},
			{
				internalType: "contract ILZCitizen",
				name: "_citizen",
				type: "address"
			},
			{
				internalType: "contract ILZPoolBank",
				name: "_poolBank",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "stakeAmountLPLv1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "stakeAmountLPLv2",
				type: "uint256"
			}
		],
		name: "AmountLPStakeLevelRefer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "Deposit",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "EmergencyWithdraw",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Lock",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "percentForReferLv1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "percentForReferLv2",
				type: "uint256"
			}
		],
		name: "PercentLPLevelRefer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: false,
				internalType: "contract IERC20",
				name: "referralLPToken",
				type: "address"
			}
		],
		name: "ReferralLPToken",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "referrer",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "lockAmount",
				type: "uint256"
			}
		],
		name: "SendReferralReward",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "lockAmount",
				type: "uint256"
			}
		],
		name: "SendReward",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "status",
				type: "bool"
			}
		],
		name: "Status",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "address",
				name: "teamAddress",
				type: "address"
			}
		],
		name: "TeamAddressPool",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "_rewardPerBlock",
				type: "uint256"
			}
		],
		name: "TokenRewardPerBlock",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "Withdraw",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "_isConvertNft",
				type: "bool"
			},
			{
				internalType: "contract IERC20",
				name: "_lpToken",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "_rewardToken",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_startBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_allocPoint",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentLockReward",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForDev",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_halvingAfterBlock",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "_rewardMultiplier",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "_lockFromBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_lockToBlock",
				type: "uint256"
			}
		],
		name: "add",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "balances",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "canUnlockAmount",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "citizen",
		outputs: [
			{
				internalType: "contract ILZCitizen",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "_isLZfarm",
				type: "bool"
			}
		],
		name: "claimNFT",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "claimReward",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "collections",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "convertNftAmounts",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_referrer",
				type: "address"
			}
		],
		name: "deposit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_referrer",
				type: "address"
			},
			{
				internalType: "address",
				name: "_beneficiary",
				type: "address"
			}
		],
		name: "depositBeneficiary",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_devaddr",
				type: "address"
			}
		],
		name: "dev",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "devaddr",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "emergencyWithdraw",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getLpPoolBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_from",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_to",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "_halvingAtBlock",
				type: "uint256[]"
			},
			{
				internalType: "uint256[]",
				name: "_rewardMultiplier",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "_startBlock",
				type: "uint256"
			}
		],
		name: "getMultiplier",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getNewRewardPerBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getPoolLastRewardBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getPoolReward",
		outputs: [
			{
				internalType: "uint256",
				name: "forDev",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "forFarmer",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "halvingAtBlocks",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "lastUnlockBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "lockOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "massUpdatePools",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			}
		],
		name: "massUpdatePoolsByToken",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "mintingStations",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_user",
				type: "address"
			}
		],
		name: "pendingReward",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "percentForReferLv1",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "percentForReferLv2",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "poolBank",
		outputs: [
			{
				internalType: "contract ILZPoolBank",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "poolInfo",
		outputs: [
			{
				internalType: "contract IERC20",
				name: "lpToken",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "rewardToken",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "allocPoint",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lastRewardBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "accRewardPerShare",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "percentLockReward",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "percentForDev",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "finishBonusAtBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "startBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "totalLock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lockFromBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lockToBlock",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "isConvertNft",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "poolLength",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "poolNFTTypes",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "referralAmountLv1",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "referralAmountLv2",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "referralLPToken",
		outputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "caller",
				type: "address"
			}
		],
		name: "removePoolPoerator",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "rewardMultipliers",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address"
			},
			{
				internalType: "address",
				name: "_to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "rewardTransfer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_allocPoint",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "_withUpdate",
				type: "bool"
			}
		],
		name: "set",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv2",
				type: "uint256"
			}
		],
		name: "setAmountLPStakeLevelRefer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_percentForReferLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForReferLv2",
				type: "uint256"
			}
		],
		name: "setPercentLPLevelRefer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_type",
				type: "uint256"
			}
		],
		name: "setPoolNFTTypes",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "caller",
				type: "address"
			}
		],
		name: "setPoolOperator",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_referralLPToken",
				type: "address"
			}
		],
		name: "setReferralLPToken",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "_status",
				type: "bool"
			}
		],
		name: "setStatus",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_teamAddress",
				type: "address"
			}
		],
		name: "setTeamAddressPool",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_rewardPerBlock",
				type: "uint256"
			}
		],
		name: "setTokenRewardPerBlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "stakeAmountLPLv1",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "stakeAmountLPLv2",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "status",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "teamAddresses",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "tokenExpiredBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "tokenFirstDeposited",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "tokenRewardPerBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "tokenTotalBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		name: "totalAllocPoints",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_rewardToken",
				type: "address"
			}
		],
		name: "totalLock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "totalLockInPool",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		name: "totalLocks",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "unlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_collection",
				type: "address"
			}
		],
		name: "updateCollections",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_collection",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_convertNftAmount",
				type: "uint256"
			}
		],
		name: "updateConvertNftAmount",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_collection",
				type: "address"
			},
			{
				internalType: "address",
				name: "_mintingStation",
				type: "address"
			}
		],
		name: "updateMintingStations",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "updatePool",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			}
		],
		name: "updateTokenExpiredBlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			}
		],
		name: "updateTokenExpiredBlockAndMassUpdateItsPools",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "address",
				name: "caller",
				type: "address"
			}
		],
		name: "userBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "userBalances",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "userInfo",
		outputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardDebt",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardDebtAtBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lockAmount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lastUnlockBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "nftAmount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardTokenNftAmount",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "userNftInfo",
		outputs: [
			{
				internalType: "uint256",
				name: "nftAmount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardTokenNftAmount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardDebt",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "withdraw",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var MasterChefAbiV4 = [
	{
		inputs: [
			{
				internalType: "address",
				name: "_devaddr",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv2",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForReferLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForReferLv2",
				type: "uint256"
			},
			{
				internalType: "contract IERC20",
				name: "_referralLPToken",
				type: "address"
			},
			{
				internalType: "contract ILZCitizen",
				name: "_citizen",
				type: "address"
			},
			{
				internalType: "contract ILZPoolBank",
				name: "_poolBank",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "stakeAmountLPLv1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "stakeAmountLPLv2",
				type: "uint256"
			}
		],
		name: "AmountLPStakeLevelRefer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "Deposit",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "EmergencyWithdraw",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Lock",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "percentForReferLv1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "percentForReferLv2",
				type: "uint256"
			}
		],
		name: "PercentLPLevelRefer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: false,
				internalType: "contract IERC20",
				name: "referralLPToken",
				type: "address"
			}
		],
		name: "ReferralLPToken",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "referrer",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "lockAmount",
				type: "uint256"
			}
		],
		name: "SendReferralReward",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "lockAmount",
				type: "uint256"
			}
		],
		name: "SendReward",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "status",
				type: "bool"
			}
		],
		name: "Status",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "address",
				name: "teamAddress",
				type: "address"
			}
		],
		name: "TeamAddressPool",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "_rewardPerBlock",
				type: "uint256"
			}
		],
		name: "TokenRewardPerBlock",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "pid",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "Withdraw",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_lpToken",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "_rewardToken",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_startBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_allocPoint",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentLockReward",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForDev",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForBurn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_halvingAfterBlock",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "_rewardMultiplier",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "_lockFromBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_lockToBlock",
				type: "uint256"
			}
		],
		name: "add",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "balances",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "canUnlockAmount",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "citizen",
		outputs: [
			{
				internalType: "contract ILZCitizen",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "claimReward",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_referrer",
				type: "address"
			},
			{
				internalType: "address",
				name: "_beneficiary",
				type: "address"
			}
		],
		name: "deposit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_referrer",
				type: "address"
			}
		],
		name: "deposit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_devaddr",
				type: "address"
			}
		],
		name: "dev",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "devaddr",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "emergencyWithdraw",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getLpPoolBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_from",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_to",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "_halvingAtBlock",
				type: "uint256[]"
			},
			{
				internalType: "uint256[]",
				name: "_rewardMultiplier",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "_startBlock",
				type: "uint256"
			}
		],
		name: "getMultiplier",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getNewRewardPerBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getPoolLastRewardBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "getPoolReward",
		outputs: [
			{
				internalType: "uint256",
				name: "forBurn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "forDev",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "forFarmer",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "halvingAtBlocks",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "lastUnlockBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "lockOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "massUpdatePools",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			}
		],
		name: "massUpdatePoolsByToken",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_user",
				type: "address"
			}
		],
		name: "pendingReward",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "percentForReferLv1",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "percentForReferLv2",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "poolBank",
		outputs: [
			{
				internalType: "contract ILZPoolBank",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "poolInfo",
		outputs: [
			{
				internalType: "contract IERC20",
				name: "lpToken",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "rewardToken",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "allocPoint",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lastRewardBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "accRewardPerShare",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "percentLockReward",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "percentForDev",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "percentForBurn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "finishBonusAtBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "startBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "totalLock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lockFromBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lockToBlock",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "poolLength",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "referralAmountLv1",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "referralAmountLv2",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "referralLPToken",
		outputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "caller",
				type: "address"
			}
		],
		name: "removePoolPoerator",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "rewardMultipliers",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address"
			},
			{
				internalType: "address",
				name: "_to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "rewardTransfer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_allocPoint",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "_withUpdate",
				type: "bool"
			}
		],
		name: "set",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_stakeAmountLPLv2",
				type: "uint256"
			}
		],
		name: "setAmountLPStakeLevelRefer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_percentForReferLv1",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentForReferLv2",
				type: "uint256"
			}
		],
		name: "setPercentLPLevelRefer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "caller",
				type: "address"
			}
		],
		name: "setPoolOperator",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_referralLPToken",
				type: "address"
			}
		],
		name: "setReferralLPToken",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "_status",
				type: "bool"
			}
		],
		name: "setStatus",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_teamAddress",
				type: "address"
			}
		],
		name: "setTeamAddressPool",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_rewardPerBlock",
				type: "uint256"
			}
		],
		name: "setTokenRewardPerBlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "stakeAmountLPLv1",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "stakeAmountLPLv2",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "status",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "teamAddresses",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "tokenExpiredBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "tokenFirstDeposited",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "tokenRewardPerBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "tokenTotalBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		name: "totalAllocPoints",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_rewardToken",
				type: "address"
			}
		],
		name: "totalLock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "totalLockInPool",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		name: "totalLocks",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "unlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			}
		],
		name: "updatePool",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			}
		],
		name: "updateTokenExpiredBlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			}
		],
		name: "updateTokenExpiredBlockAndMassUpdateItsPools",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "address",
				name: "caller",
				type: "address"
			}
		],
		name: "userBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "userBalances",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "userInfo",
		outputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardDebt",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "rewardDebtAtBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lockAmount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lastUnlockBlock",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "withdraw",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var XSushiAbi = [
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_bscx",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "subtractedValue",
				type: "uint256"
			}
		],
		name: "decreaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "enter",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "addedValue",
				type: "uint256"
			}
		],
		name: "increaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_share",
				type: "uint256"
			}
		],
		name: "leave",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "bscx",
		outputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var makerAbi = [
	{
		inputs: [
			{
				internalType: "contract IUniswapV2Factory",
				name: "_factory",
				type: "address"
			},
			{
				internalType: "contract IUniswapV2Router02",
				name: "_routerv2",
				type: "address"
			},
			{
				internalType: "address[]",
				name: "_tokens",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "_bscxSafe",
				type: "address"
			},
			{
				internalType: "address",
				name: "_bscx",
				type: "address"
			},
			{
				internalType: "address",
				name: "_weth",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "acceptTokens",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "bscx",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "bscxSafe",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token0",
				type: "address"
			},
			{
				internalType: "address",
				name: "token1",
				type: "address"
			}
		],
		name: "convert",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "factory",
		outputs: [
			{
				internalType: "contract IUniswapV2Factory",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "marketBuyBSCXWithETH",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "marketBuyBSCXWithToken",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "operators",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token0",
				type: "address"
			},
			{
				internalType: "address",
				name: "token1",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "removeLiqidity",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "routerv2",
		outputs: [
			{
				internalType: "contract IUniswapV2Router02",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address"
			},
			{
				internalType: "bool",
				name: "_accept",
				type: "bool"
			}
		],
		name: "setAcceptToken",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "on",
				type: "bool"
			}
		],
		name: "setOperator",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "weth",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];

var SushiAbi = [
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_lockFromBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_lockToBlock",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "delegator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "fromDelegate",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "toDelegate",
				type: "address"
			}
		],
		name: "DelegateChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "delegate",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "previousBalance",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "newBalance",
				type: "uint256"
			}
		],
		name: "DelegateVotesChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Lock",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
		],
		name: "DELEGATION_TYPEHASH",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "DOMAIN_TYPEHASH",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "uint32",
				name: "",
				type: "uint32"
			}
		],
		name: "checkpoints",
		outputs: [
			{
				internalType: "uint32",
				name: "fromBlock",
				type: "uint32"
			},
			{
				internalType: "uint256",
				name: "votes",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "subtractedValue",
				type: "uint256"
			}
		],
		name: "decreaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "addedValue",
				type: "uint256"
			}
		],
		name: "increaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "lockFromBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "lockToBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "numCheckpoints",
		outputs: [
			{
				internalType: "uint32",
				name: "",
				type: "uint32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "cap",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "circulatingSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalLock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "mint",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			}
		],
		name: "totalBalanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			}
		],
		name: "lockOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			}
		],
		name: "lastUnlockBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "lock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			}
		],
		name: "canUnlockAmount",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "unlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_to",
				type: "address"
			}
		],
		name: "transferAll",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "delegator",
				type: "address"
			}
		],
		name: "delegates",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "delegatee",
				type: "address"
			}
		],
		name: "delegate",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "delegatee",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "nonce",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "expiry",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "delegateBySig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "getCurrentVotes",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			}
		],
		name: "getPriorVotes",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];

var ReferralAbi = [
	{
		inputs: [
			{
				internalType: "address",
				name: "_referrer",
				type: "address"
			}
		],
		name: "setReferral",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "referrals",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "referredCounts",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "referrers",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];

var UNIV2PairAbi = [
	{
		inputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Burn",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		name: "Mint",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Swap",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve0",
				type: "uint112"
			},
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve1",
				type: "uint112"
			}
		],
		name: "Sync",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		constant: true,
		inputs: [
		],
		name: "DOMAIN_SEPARATOR",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "MINIMUM_LIQUIDITY",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "PERMIT_TYPEHASH",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "burn",
		outputs: [
			{
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "factory",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "getReserves",
		outputs: [
			{
				internalType: "uint112",
				name: "_reserve0",
				type: "uint112"
			},
			{
				internalType: "uint112",
				name: "_reserve1",
				type: "uint112"
			},
			{
				internalType: "uint32",
				name: "_blockTimestampLast",
				type: "uint32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "_token0",
				type: "address"
			},
			{
				internalType: "address",
				name: "_token1",
				type: "address"
			}
		],
		name: "initialize",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "kLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "mint",
		outputs: [
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "permit",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "price0CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "price1CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "skim",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "swap",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
		],
		name: "sync",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "token0",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "token1",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	}
];

var WETHAbi = [
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "guy",
				type: "address"
			},
			{
				name: "wad",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "src",
				type: "address"
			},
			{
				name: "dst",
				type: "address"
			},
			{
				name: "wad",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "wad",
				type: "uint256"
			}
		],
		name: "withdraw",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "dst",
				type: "address"
			},
			{
				name: "wad",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
		],
		name: "deposit",
		outputs: [
		],
		payable: true,
		stateMutability: "payable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "",
				type: "address"
			},
			{
				name: "",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "src",
				type: "address"
			},
			{
				indexed: true,
				name: "guy",
				type: "address"
			},
			{
				indexed: false,
				name: "wad",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "src",
				type: "address"
			},
			{
				indexed: true,
				name: "dst",
				type: "address"
			},
			{
				indexed: false,
				name: "wad",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "dst",
				type: "address"
			},
			{
				indexed: false,
				name: "wad",
				type: "uint256"
			}
		],
		name: "Deposit",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "src",
				type: "address"
			},
			{
				indexed: false,
				name: "wad",
				type: "uint256"
			}
		],
		name: "Withdrawal",
		type: "event"
	}
];

const NUMBER_BLOCKS_PER_YEAR = 10512000;
const LP_ADDRESSES_STAKE_BSCX = {
  56: '0x2d518fdcc1c8e89b1abc6ed73b887e12e61f06de',
  97: '0x8390ba50006860538936C96C1F283019Fbe72BFd'
};
const LZ_TOKEN = '0x3B78458981eB7260d1f781cb8be2CaAC7027DbE2';
const LZP_TOKEN = '0x4211959585C8F18B06dab8B5bB0Bc825cad4c1De';
const BUSD_TOKEN = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
const USDT_TOKEN = '0x55d398326f99059fF775485246999027B3197955';
const USDC_TOKEN = '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d';
const BSCX_TOKEN = '0x5ac52ee5b2a633895292ff6d8a89bb9190451587';
const HEROEGG_TOKEN = '0xcfbb1bfa710cb2eba070cc3bec0c35226fea4baf';
const HERON_TOKEN = '0x90451265fd0598e088e42c1768d6211f0978954a';
const LZF_TOKEN = '0x080b9a7e78f3e61d1c08551e0f523969dd3ca96b';
const LZT_TOKEN = '0xb07c21F9e219F1FB55A706a8bf21b1D9c355c8e5';
const ROFI_TOKEN = '0x3244B3B6030f374bAFA5F8f80Ec2F06aAf104B64';
const ROFI2_TOKEN = '0x65f6d9b1e4f4ef843049f5845b71531a5ce231eb';
const ITAM_TOKEN = '0x04c747b40be4d535fc83d09939fb0f626f32800b';
const LAUNCHPOOLX_V1 = '0x1070B9a998C4457C5f393e389F275012e91b31d2';
const LAUNCHPOOLX_ZD_ZSEED = '0xaebbc1d47af8aef82717533347f116a58c81a0df';
const LAUNCHPOOLX_TOOLS = '0x74842C1cF471031d1a5307c486049898CDc4468B';
const LAUNCHPOOLX_XPO = '0x6B8220898d01676705Bbc118805D29bC0DB0FA3C';
const REFERRAL = '0x12f10915dA4da6F7B09f622311Ef4fF6AdE579CA';
const contractAddresses = {
  sushi: {
    56: '0x3B78458981eB7260d1f781cb8be2CaAC7027DbE2'
  },
  xSushi: {
    56: '0xF1CE70C337EcCD47A998be0Bb07E49188Bc60A3c'
  },
  maker: {
    56: '0xE162A4ac31086bb0B135c2bFE6434BA22b759c59'
  },
  masterChef: {
    56: '0x47f30f5189c979e9f71ac500e5cba0000b5ebd0c'
  },
  masterChefV2: {
    56: '0x92777004DEfC06856b8eAf581454A004F83eB3F8'
  },
  masterChefV3: {
    56: '0xdc9eddeebc97ff815cec3d52ff94b512a04b88c1'
  },
  masterChefV4: {
    56: '0x92777004DEfC06856b8eAf581454A004F83eB3F8'
  },
  weth: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    97: '0xae13d989dac2f0debff460ac112a837c89baa7cd'
  }
};
const VERSIONS = {
  V1: 'V1',
  V2: 'V2',
  V3: 'V3',
  V4: 'V4'
};
const LOGOS = {
  LZ: 'https://raw.githubusercontent.com/ezDeFi/ezdefi-media/master/launchzone-logo/lz-logo.png',
  LZP: 'https://raw.githubusercontent.com/ezDeFi/ezdefi-media/master/launchzone-logo/128x128%20lzp.png',
  BUSD: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
  USDT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
  USDC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
  HEROEGG: 'https://lzp.s3.ap-southeast-1.amazonaws.com/heroegg_logo.png',
  HERON: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13045.png',
  ROFI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13164.png',
  FarmTools: 'https://lzp.s3.ap-southeast-1.amazonaws.com/farmtool_1+3.png',
  FarmCage: 'https://lzp.s3.ap-southeast-1.amazonaws.com/farmcage_1+1.png',
  WindMill: 'https://lzp.s3.ap-southeast-1.amazonaws.com/windmill_1+2.png',
  ITAM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6490.png'
};
const PAIRS = {
  LZ_BUSD: '0x2d518fdcc1c8e89b1abc6ed73b887e12e61f06de',
  LZ_USDT: '0x9Ce4fc52f2fd82873e8239a243F7c69Ed961204C',
  LZ_USDC: '0x3a9478210ca89e5c83a57f6059d45ef0fac7f2ce',
  LZP_BUSD: '0x0bf9ac4c4d9e380b37505b9357363deae0ac3e6e',
  HEROEGG_BUSD: '0xdb5be93d8830d93d2a406b2e235038db4ee7d9b1',
  HERON_BUSD: '0x0D8df4eBE4d113779ed6cC74eD897342a63429d9',
  HERON_ROFI: '0x20e28f8d6709679ed304db467e6f3c40e305d954',
  ROFI_BUSD: '0x46bC5607fC6aD331Ae7feC53ccb5Cf0865438363'
};
const LINK_LIQUIDITY = 'https://liquidity.lz.finance/#';
const supportedPools = [{
  pid: 2,
  isConvertNft: true,
  stake: true,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V3,
  project: 'LZ',
  lpAddresses: {
    56: HERON_TOKEN
  },
  tokenAddresses: {
    56: HERON_TOKEN
  },
  token2Addresses: {
    56: HERON_TOKEN
  },
  rewardToken: {
    address: LZF_TOKEN,
    symbol: 'LZF'
  },
  name: 'HERON earn FarmTools Level 1',
  symbol: 'HERON earn NFT',
  symbolShort: 'LZP earn NFT',
  description: `Deposit HERON Earn NFT`,
  tokenSymbol: 'HERON',
  token2Symbol: 'HERON',
  icon: LOGOS.HERON,
  icon2: LOGOS.HERON,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: '',
  removeLiquidityLink: '',
  rewardLogo: LOGOS.FarmTools
}, {
  pid: 3,
  isConvertNft: true,
  stake: true,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V3,
  project: 'LZ',
  lpAddresses: {
    56: HERON_TOKEN
  },
  tokenAddresses: {
    56: HERON_TOKEN
  },
  token2Addresses: {
    56: HERON_TOKEN
  },
  rewardToken: {
    address: LZF_TOKEN,
    symbol: 'LZF'
  },
  name: 'HERON earn FarmCage Level 1',
  symbol: 'HERON earn NFT',
  symbolShort: 'HERON earn NFT',
  description: `Deposit HERON Earn NFT`,
  tokenSymbol: 'HERON',
  token2Symbol: 'HERON',
  icon: LOGOS.HERON,
  icon2: LOGOS.HERON,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: '',
  removeLiquidityLink: '',
  rewardLogo: LOGOS.FarmCage
}, {
  pid: 4,
  isConvertNft: true,
  stake: true,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V3,
  project: 'LZ',
  lpAddresses: {
    56: HERON_TOKEN
  },
  tokenAddresses: {
    56: HERON_TOKEN
  },
  token2Addresses: {
    56: HERON_TOKEN
  },
  rewardToken: {
    address: LZF_TOKEN,
    symbol: 'LZF'
  },
  name: 'HERON earn WindMill Level 1',
  symbol: 'HERON earn NFT',
  symbolShort: 'HERON earn NFT',
  description: `Deposit HERON Earn NFT`,
  tokenSymbol: 'HERON',
  token2Symbol: 'HERON',
  icon: LOGOS.HERON,
  icon2: LOGOS.HERON,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: '',
  removeLiquidityLink: '',
  rewardLogo: LOGOS.WindMill
}, {
  pid: 1,
  isConvertNft: true,
  stake: true,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V3,
  project: 'LZ',
  lpAddresses: {
    56: HERON_TOKEN
  },
  tokenAddresses: {
    56: HERON_TOKEN
  },
  token2Addresses: {
    56: HERON_TOKEN
  },
  rewardToken: {
    address: LZT_TOKEN,
    symbol: 'LZT'
  },
  name: 'HERON earn HERON NFT',
  symbol: 'HERON earn NFT',
  symbolShort: 'HERON earn NFT',
  description: `Deposit HERON Earn NFT`,
  tokenSymbol: 'HERON',
  token2Symbol: 'HERON',
  icon: LOGOS.HERON,
  icon2: LOGOS.HERON,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: '',
  removeLiquidityLink: '',
  rewardLogo: LOGOS.HERON
}, {
  pid: 11,
  stake: false,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V2,
  project: 'LZ',
  lpAddresses: {
    56: PAIRS.HERON_BUSD
  },
  tokenAddresses: {
    56: HERON_TOKEN
  },
  token2Addresses: {
    56: BUSD_TOKEN
  },
  rewardToken: {
    address: LZP_TOKEN,
    symbol: 'LZP'
  },
  name: 'HERON - BUSD',
  symbol: 'HERON - BUSD LP',
  symbolShort: 'HERON - BUSD',
  description: `Deposit HERON - BUSD LP Earn LZP`,
  tokenSymbol: 'HERON',
  token2Symbol: 'BUSD',
  icon: LOGOS.HERON,
  icon2: LOGOS.BUSD,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: `${LINK_LIQUIDITY}/add/${HERON_TOKEN}/${BUSD_TOKEN}`,
  removeLiquidityLink: `${LINK_LIQUIDITY}/remove/${HERON_TOKEN}/${BUSD_TOKEN}`,
  rewardLogo: LOGOS.LZP
}, {
  pid: 10,
  stake: false,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V2,
  project: 'LZ',
  lpAddresses: {
    56: PAIRS.HEROEGG_BUSD
  },
  tokenAddresses: {
    56: HEROEGG_TOKEN
  },
  token2Addresses: {
    56: BUSD_TOKEN
  },
  rewardToken: {
    address: LZP_TOKEN,
    symbol: 'LZP'
  },
  name: 'HEROEGG - BUSD',
  symbol: 'HEROEGG - BUSD LP',
  symbolShort: 'HEROEGG - BUSD',
  description: `Deposit HEROEGG - BUSD LP Earn LZP`,
  tokenSymbol: 'HEROEGG',
  token2Symbol: 'BUSD',
  icon: LOGOS.HEROEGG,
  icon2: LOGOS.BUSD,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: `${LINK_LIQUIDITY}/add/${HEROEGG_TOKEN}/${BUSD_TOKEN}`,
  removeLiquidityLink: `${LINK_LIQUIDITY}/remove/${HEROEGG_TOKEN}/${BUSD_TOKEN}`,
  rewardLogo: LOGOS.LZP
}, {
  pid: 2,
  stake: false,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V2,
  project: 'LZ',
  lpAddresses: {
    56: PAIRS.LZ_BUSD
  },
  tokenAddresses: {
    56: LZ_TOKEN
  },
  token2Addresses: {
    56: BUSD_TOKEN
  },
  rewardToken: {
    address: LZP_TOKEN,
    symbol: 'LZP'
  },
  name: 'LZ - BUSD',
  symbol: 'LZ - BUSD LP',
  symbolShort: 'LZ - BUSD',
  description: `Deposit LZ - BUSD LP Earn LZP`,
  tokenSymbol: 'LZ',
  token2Symbol: 'BUSD',
  icon: LOGOS.LZ,
  icon2: LOGOS.BUSD,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: `${LINK_LIQUIDITY}/add/${LZ_TOKEN}/${BUSD_TOKEN}`,
  removeLiquidityLink: `${LINK_LIQUIDITY}/remove/${LZ_TOKEN}/${BUSD_TOKEN}`,
  rewardLogo: LOGOS.LZP
}, {
  pid: 3,
  stake: false,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V2,
  project: 'LZ',
  lpAddresses: {
    56: PAIRS.LZ_USDT
  },
  tokenAddresses: {
    56: LZ_TOKEN
  },
  token2Addresses: {
    56: USDT_TOKEN
  },
  rewardToken: {
    address: LZP_TOKEN,
    symbol: 'LZP'
  },
  name: 'LZ - USDT',
  symbol: 'LZ - USDT LP',
  symbolShort: 'LZ - USDT',
  description: `Deposit LZ - USDT LP Earn LZP`,
  tokenSymbol: 'LZ',
  token2Symbol: 'USDT',
  icon: LOGOS.LZ,
  icon2: LOGOS.USDT,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: `${LINK_LIQUIDITY}/add/${LZ_TOKEN}/${USDT_TOKEN}`,
  removeLiquidityLink: `${LINK_LIQUIDITY}/remove/${LZ_TOKEN}/${USDT_TOKEN}`,
  rewardLogo: LOGOS.LZP
}, {
  pid: 4,
  stake: false,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V4,
  project: 'LZ',
  lpAddresses: {
    56: PAIRS.LZ_USDC
  },
  tokenAddresses: {
    56: LZ_TOKEN
  },
  token2Addresses: {
    56: USDC_TOKEN
  },
  rewardToken: {
    address: LZP_TOKEN,
    symbol: 'LZP'
  },
  name: 'LZ - USDC',
  symbol: 'LZ - USDC LP',
  symbolShort: 'LZ - USDC',
  description: `Deposit LZ - USDC LP Earn LZP`,
  tokenSymbol: 'LZ',
  token2Symbol: 'USDC',
  icon: LOGOS.LZ,
  icon2: LOGOS.USDC,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: `${LINK_LIQUIDITY}/add/${LZ_TOKEN}/${USDC_TOKEN}`,
  removeLiquidityLink: `${LINK_LIQUIDITY}/remove/${LZ_TOKEN}/${USDC_TOKEN}`,
  rewardLogo: LOGOS.LZP
}, {
  pid: 8,
  stake: false,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V2,
  project: 'LZ',
  lpAddresses: {
    56: PAIRS.LZP_BUSD
  },
  tokenAddresses: {
    56: LZP_TOKEN
  },
  token2Addresses: {
    56: BUSD_TOKEN
  },
  rewardToken: {
    address: LZP_TOKEN,
    symbol: 'LZP'
  },
  name: 'LZP - BUSD',
  symbol: 'LZP - BUSD LP',
  symbolShort: 'LZP - BUSD',
  description: `Deposit LZP - BUSD LP Earn LZP`,
  tokenSymbol: 'LZ',
  token2Symbol: 'BUSD',
  icon: LOGOS.LZP,
  icon2: LOGOS.BUSD,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: `${LINK_LIQUIDITY}/add/${LZP_TOKEN}/${BUSD_TOKEN}`,
  removeLiquidityLink: `${LINK_LIQUIDITY}/remove/${LZP_TOKEN}/${BUSD_TOKEN}`,
  rewardLogo: LOGOS.LZP
}, {
  pid: 7,
  stake: true,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V2,
  project: 'LZ',
  lpAddresses: {
    56: LZ_TOKEN
  },
  tokenAddresses: {
    56: LZ_TOKEN
  },
  token2Addresses: {
    56: LZ_TOKEN
  },
  rewardToken: {
    address: LZP_TOKEN,
    symbol: 'LZP'
  },
  name: 'LZ earn LZP',
  symbol: 'LZ earn LZP',
  symbolShort: 'LZ earn LZP',
  description: `Deposit LZ Earn LZP`,
  tokenSymbol: 'LZ',
  token2Symbol: 'LZ',
  icon: LOGOS.LZ,
  icon2: LOGOS.LZP,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: ``,
  removeLiquidityLink: ``,
  rewardLogo: LOGOS.LZP
}, {
  pid: 5,
  stake: true,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V2,
  project: 'LZ',
  lpAddresses: {
    56: LZP_TOKEN
  },
  tokenAddresses: {
    56: LZP_TOKEN
  },
  token2Addresses: {
    56: LZP_TOKEN
  },
  rewardToken: {
    address: LZP_TOKEN,
    symbol: 'LZP'
  },
  name: 'LZP earn LZP',
  symbol: 'LZP earn LZP',
  symbolShort: 'LZP earn LZP',
  description: `Deposit LZP Earn LZP`,
  tokenSymbol: 'LZP',
  token2Symbol: 'LZP',
  icon: LOGOS.LZP,
  icon2: LOGOS.LZP,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: ``,
  removeLiquidityLink: ``,
  rewardLogo: LOGOS.LZP
}, {
  pid: 12,
  stake: true,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V2,
  project: 'LZ',
  lpAddresses: {
    56: HEROEGG_TOKEN
  },
  tokenAddresses: {
    56: HEROEGG_TOKEN
  },
  token2Addresses: {
    56: HEROEGG_TOKEN
  },
  rewardToken: {
    address: LZP_TOKEN,
    symbol: 'LZP'
  },
  name: 'HEROEGG earn LZP',
  symbol: 'HEROEGG earn LZP',
  symbolShort: 'HEROEGG earn LZP',
  description: `Deposit HEROEGG Earn LZP`,
  tokenSymbol: 'HEROEGG',
  token2Symbol: 'HEROEGG',
  icon: LOGOS.HEROEGG,
  icon2: LOGOS.HEROEGG,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: ``,
  removeLiquidityLink: ``,
  rewardLogo: LOGOS.LZP
}, {
  pid: 15,
  stake: false,
  decimals: 18,
  decimalsReward: 18,
  version: VERSIONS.V2,
  project: 'LZ',
  lpAddresses: {
    56: PAIRS.ROFI_BUSD
  },
  tokenAddresses: {
    56: ROFI_TOKEN
  },
  token2Addresses: {
    56: BUSD_TOKEN
  },
  rewardToken: {
    address: LZP_TOKEN,
    symbol: 'LZP'
  },
  name: 'ROFI - BUSD',
  symbol: 'ROFI - BUSD LP',
  symbolShort: 'ROFI - BUSD',
  description: `Deposit ROFI - BUSD LP Earn LZP`,
  tokenSymbol: 'ROFI',
  token2Symbol: 'BUSD',
  icon: LOGOS.ROFI,
  icon2: LOGOS.BUSD,
  isHot: true,
  isNew: true,
  protocal: 'LaunchZone',
  iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  pairLink: '/',
  addLiquidityLink: ``,
  removeLiquidityLink: ``,
  rewardLogo: LOGOS.LZP
}].sort((a, b) => (a.isNew ? -1 : 1) - (b.isNew ? -1 : 1));
const ONE_MINUTE_IN_SECONDS = new BigNumber(60);
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60);
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24);
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365);
const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'),
  ONES_127: new BigNumber('340282366920938463463374607431768211455'),
  ONES_255: new BigNumber('115792089237316195423570985008687907853269984665640564039457584007913129639935'),
  INTEREST_RATE_BASE: new BigNumber('1e18')
};

const ConfirmationType = {
  Hash: 0,
  Confirmed: 1,
  Both: 2,
  Simulate: 3
};

class Contracts {
  constructor(provider, networkId, web3, options) {
    this.web3 = web3;
    this.defaultConfirmations = options.defaultConfirmations;
    this.autoGasMultiplier = options.autoGasMultiplier || 1.5;
    this.confirmationType = options.confirmationType || ConfirmationType.Confirmed;
    this.defaultGas = options.defaultGas;
    this.defaultGasPrice = options.defaultGasPrice;
    this.sushi = new this.web3.eth.Contract(SushiAbi);
    this.masterChef = new this.web3.eth.Contract(MasterChefAbi);
    this.masterChefV2 = new this.web3.eth.Contract(MasterChefAbiV2);
    this.masterChefV3 = new this.web3.eth.Contract(MasterChefAbiV3);
    this.masterChefV4 = new this.web3.eth.Contract(MasterChefAbiV4);
    this.lpStakeBSCX = new this.web3.eth.Contract(ERC20Abi);
    this.referralContract = new this.web3.eth.Contract(ReferralAbi);
    this.xSushiStaking = new this.web3.eth.Contract(XSushiAbi);
    this.weth = new this.web3.eth.Contract(WETHAbi);
    this.maker = new this.web3.eth.Contract(makerAbi);
    this.launchPoolXV1 = new this.web3.eth.Contract(MasterChefAbiV1);
    this.launchPoolXTOOLS = new this.web3.eth.Contract(MasterChefAbiV2);
    this.launchPoolXXPO = new this.web3.eth.Contract(MasterChefAbiV2);
    this.launchPoolZD = new this.web3.eth.Contract(MasterChefAbiV4);
    this.pools = supportedPools.map(pool => Object.assign(pool, {
      lpAddress: pool.lpAddresses[networkId],
      tokenAddress: pool.tokenAddresses[networkId],
      token2Address: pool.token2Addresses[networkId],
      rewardTokenAddress: pool.rewardToken.address,
      rewardTokenContract: new this.web3.eth.Contract(ERC20Abi),
      lpContract: new this.web3.eth.Contract(UNIV2PairAbi),
      tokenContract: new this.web3.eth.Contract(ERC20Abi),
      token2Contract: new this.web3.eth.Contract(ERC20Abi)
    }));
    this.setProvider(provider, networkId);
    this.setDefaultAccount(this.web3.eth.defaultAccount);
  }

  setProvider(provider, networkId) {
    const setProvider = (contract, address) => {
      contract.setProvider(provider);
      if (address) contract.options.address = address;else console.error('Contract address not found in network', networkId);
    };

    setProvider(this.sushi, contractAddresses.sushi[networkId]);
    setProvider(this.masterChef, contractAddresses.masterChef[networkId]);
    setProvider(this.masterChefV2, contractAddresses.masterChefV2[networkId]);
    setProvider(this.masterChefV3, contractAddresses.masterChefV3[networkId]);
    setProvider(this.masterChefV4, contractAddresses.masterChefV4[networkId]);
    setProvider(this.maker, contractAddresses.maker[networkId]);
    setProvider(this.lpStakeBSCX, LP_ADDRESSES_STAKE_BSCX[networkId]);
    setProvider(this.launchPoolXV1, LAUNCHPOOLX_V1);
    setProvider(this.launchPoolZD, LAUNCHPOOLX_ZD_ZSEED);
    setProvider(this.launchPoolXTOOLS, LAUNCHPOOLX_TOOLS);
    setProvider(this.launchPoolXXPO, LAUNCHPOOLX_XPO);
    setProvider(this.referralContract, REFERRAL);
    setProvider(this.xSushiStaking, contractAddresses.xSushi[networkId]);
    this.pools.forEach(({
      lpContract,
      lpAddress,
      tokenContract,
      token2Contract,
      token2Address,
      tokenAddress,
      rewardTokenAddress,
      rewardTokenContract
    }) => {
      setProvider(lpContract, lpAddress);
      setProvider(tokenContract, tokenAddress);
      setProvider(token2Contract, token2Address);
      setProvider(rewardTokenContract, rewardTokenAddress);
    });
  }

  setDefaultAccount(account) {
    this.sushi.options.from = account;
    this.masterChef.options.from = account;
    this.masterChefV2.options.from = account;
    this.masterChefV3.options.from = account;
  }

}

class Account {
  constructor(contracts, address) {
    this.contracts = contracts;
    this.accountInfo = address;
    this.type = '';
    this.allocation = [];
    this.balances = {};
    this.status = '';
    this.approvals = {};
    this.walletInfo = {};
  }

}

const REQUIRE_MSG = 'Returned error: VM Exception while processing transaction: revert';
const ASSERT_MSG = 'Returned error: VM Exception while processing transaction: invalid opcode';
class EVM {
  constructor(provider) {
    this.provider = provider;
  }

  setProvider(provider) {
    this.provider = provider;
  }

  async resetEVM(resetSnapshotId = '0x1') {
    const id = await this.snapshot();

    if (id !== resetSnapshotId) {
      await this.reset(resetSnapshotId);
    }
  }

  async reset(id) {
    if (!id) {
      throw new Error('id must be set');
    }

    await this.callJsonrpcMethod('evm_revert', [id]);
    return this.snapshot();
  }

  async snapshot() {
    return this.callJsonrpcMethod('evm_snapshot');
  }

  async evmRevert(id) {
    return this.callJsonrpcMethod('evm_revert', [id]);
  }

  async stopMining() {
    return this.callJsonrpcMethod('miner_stop');
  }

  async startMining() {
    return this.callJsonrpcMethod('miner_start');
  }

  async mineBlock() {
    return this.callJsonrpcMethod('evm_mine');
  }

  async increaseTime(duration) {
    return this.callJsonrpcMethod('evm_increaseTime', [duration]);
  }

  async callJsonrpcMethod(method, params) {
    const args = {
      method,
      params,
      jsonrpc: '2.0',
      id: new Date().getTime()
    };
    const response = await this.send(args);
    return response.result;
  }

  async send(args) {
    return new Promise((resolve, reject) => {
      const callback = (error, val) => {
        if (error) {
          reject(error);
        } else {
          resolve(val);
        }
      };

      this.provider.send(args, callback);
    });
  }

  assertCertainError(error, expected_error_msg) {
    const message = error.message;
    const matchedIndex = message.search(expected_error_msg);
    let matchedString = message;

    if (matchedIndex === 0) {
      matchedString = message.substring(matchedIndex, matchedIndex + expected_error_msg.length);
    }

    expect(matchedString).toEqual(expected_error_msg);
  }

  async expectThrow(promise, reason) {
    try {
      await promise;
      throw new Error('Did not throw');
    } catch (e) {
      this.assertCertainError(e, REQUIRE_MSG);

      if (reason && process.env.COVERAGE !== 'true') {
        this.assertCertainError(e, `${REQUIRE_MSG} ${reason}`);
      }
    }
  }

  async expectAssertFailure(promise) {
    try {
      await promise;
      throw new Error('Did not throw');
    } catch (e) {
      this.assertCertainError(e, ASSERT_MSG);
    }
  }

}

class Sushi {
  constructor(provider, networkId, testing, options) {
    var realProvider;

    if (typeof provider === 'string') {
      if (provider.includes('wss')) {
        realProvider = new Web3.providers.WebsocketProvider(provider, options.ethereumNodeTimeout || 10000);
      } else {
        realProvider = new Web3.providers.HttpProvider(provider, options.ethereumNodeTimeout || 10000);
      }
    } else {
      realProvider = provider;
    }

    this.web3 = new Web3(realProvider);

    if (testing) {
      this.testing = new EVM(realProvider);
      this.snapshot = this.testing.snapshot();
    }

    if (options.defaultAccount) {
      this.web3.eth.defaultAccount = options.defaultAccount;
    }

    this.contracts = new Contracts(realProvider, networkId, this.web3, options);
    this.sushiAddress = contractAddresses.sushi[networkId];
    this.masterChefAddress = contractAddresses.masterChef[networkId];
    this.wethAddress = contractAddresses.weth[networkId];
    this.xSushiAddress = contractAddresses.xSushi[networkId];
    this.makerAddress = contractAddresses.maker[networkId];
  }

  async resetEVM() {
    this.testing.resetEVM(this.snapshot);
  }

  addAccount(address, number) {
    this.accounts.push(new Account(this.contracts, address, number));
  }

  setProvider(provider, networkId) {
    this.web3.setProvider(provider);
    this.contracts.setProvider(provider, networkId);
    this.operation.setNetworkId(networkId);
  }

  setDefaultAccount(account) {
    this.web3.eth.defaultAccount = account;
    this.contracts.setDefaultAccount(account);
  }

  getDefaultAccount() {
    return this.web3.eth.defaultAccount;
  }

  loadAccount(account) {
    const newAccount = this.web3.eth.accounts.wallet.add(account.privateKey);

    if (!newAccount || account.address && account.address.toLowerCase() !== newAccount.address.toLowerCase()) {
      throw new Error(`Loaded account address mismatch.
        Expected ${account.address}, got ${newAccount ? newAccount.address : null}`);
    }
  }

  toBigN(a) {
    return BigNumber$1(a);
  }

}

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80
});

const Context = createContext({
  sushi: undefined
});

const SushiProvider = ({
  children,
  provider
}) => {
  const [sushi, setSushi] = useState();
  window.sushi = sushi;
  window.eth = provider;
  useEffect(() => {
    if (provider) {
      const chainId = Number(provider.chainId);
      const sushiLib = new Sushi(provider, chainId, false, {
        defaultAccount: provider.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000
      });
      setSushi(sushiLib);
      window.sushisauce = sushiLib;
    } else {
      const chainId = config.chainId;
      const sushiLib = new Sushi(config.rpc, chainId, false, {
        defaultAccount: '0x0000000000000000000000000000000000000000',
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000
      });
      setSushi(sushiLib);
      window.sushisauce = sushiLib;
    }
  }, [provider]);
  return React__default.createElement(Context.Provider, {
    value: {
      sushi
    }
  }, children);
};

const useSushi = () => {
  const {
    sushi
  } = useContext(Context);
  return sushi;
};

BigNumber$1.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80
});
const MaxUint256 = '999999999900000000000000000000000000000';
const getLPValue = async (masterChefContract, lpContract, tokenContract, token2Contract, pid, rewardToken, version, rewardTokenContract) => {
  let cacheValue = localStorage.getItem('CACHE_usePrice_value');
  cacheValue = cacheValue || {};
  let prices = JSON.parse(cacheValue);
  let tokenAmountWholeLP = await tokenContract.methods.balanceOf(lpContract.options.address).call();
  const tokenDecimals = await tokenContract.methods.decimals().call();
  const balance = await lpContract.methods.balanceOf(masterChefContract.options.address).call();
  const totalSupply = await lpContract.methods.totalSupply().call();
  let avaiableReward = 0;
  let totalLockedReward = await masterChefContract.methods.totalLock(rewardToken).call();
  let totalPoolSupply = await masterChefContract.methods.getLpPoolBalance(pid).call();
  const rewardBalance = await rewardTokenContract.methods.balanceOf(masterChefContract.options.address).call();

  if (rewardToken.toLowerCase() === tokenContract._address.toLowerCase()) {
    avaiableReward = Number(rewardBalance) - Number(totalPoolSupply) - Number(totalLockedReward);
  } else {
    avaiableReward = Number(rewardBalance) - Number(totalLockedReward);
  }

  avaiableReward = new BigNumber$1(avaiableReward);
  totalLockedReward = new BigNumber$1(totalLockedReward);
  totalPoolSupply = new BigNumber$1(totalPoolSupply);
  const lpContractToken2 = await token2Contract.methods.balanceOf(lpContract.options.address).call();
  const token2Decimals = await token2Contract.methods.decimals().call();
  const portionLp = new BigNumber$1(totalPoolSupply).div(new BigNumber$1(totalSupply));
  const totalLpToken2Value = portionLp.times(lpContractToken2).times(new BigNumber$1(2));
  const tokenAmount = new BigNumber$1(tokenAmountWholeLP).times(portionLp).div(new BigNumber$1(10).pow(tokenDecimals));
  const token2Amount = new BigNumber$1(lpContractToken2).times(portionLp).div(new BigNumber$1(10).pow(token2Decimals));
  const tokenAmountTotal = new BigNumber$1(tokenAmountWholeLP).times(portionLp).div(new BigNumber$1(10).pow(tokenDecimals));
  const token2AmountTotal = new BigNumber$1(lpContractToken2).times(portionLp).div(new BigNumber$1(10).pow(token2Decimals));
  let tokenPrice = 0;

  if (tokenContract._address.toLowerCase() === BSCX_TOKEN.toLowerCase()) {
    tokenPrice = prices.bscx;
  } else if (tokenContract._address.toLowerCase() === LZ_TOKEN.toLowerCase()) {
    tokenPrice = prices.lz;
  } else if (tokenContract._address.toLowerCase() === HEROEGG_TOKEN.toLowerCase()) {
    tokenPrice = prices.heroegg;
  } else if (tokenContract._address.toLowerCase() === HERON_TOKEN.toLowerCase()) {
    tokenPrice = prices.heron;
  } else if (tokenContract._address.toLowerCase() === ROFI_TOKEN.toLowerCase()) {
    tokenPrice = prices.rofi;
  } else if (tokenContract._address.toLowerCase() === ROFI2_TOKEN.toLowerCase()) {
    tokenPrice = prices.rofi;
  } else if (tokenContract._address.toLowerCase() === LZP_TOKEN.toLowerCase()) {
    tokenPrice = prices.lzp;
  }

  let rewardPrice = 0;

  if (rewardToken.toLowerCase() === LZP_TOKEN.toLowerCase()) {
    rewardPrice = prices.lzp;
  } else if (rewardToken.toLowerCase() === LZT_TOKEN.toLowerCase()) {
    rewardPrice = 160;
  } else if (rewardToken.toLowerCase() === ITAM_TOKEN.toLowerCase()) {
    rewardPrice = prices.itam;
  }

  tokenPrice = new BigNumber$1(tokenPrice);
  let rewardTokenPrice = new BigNumber$1(rewardPrice);
  var tokenPriceInToken2 = tokenPrice;
  var totalToken2Value = totalLpToken2Value.div(new BigNumber$1(10).pow(token2Decimals));
  var usdValue = tokenAmountTotal.times(tokenPrice).times(2);

  if (token2Contract._address.toLowerCase() === tokenContract._address.toLowerCase()) {
    let amountToken = totalPoolSupply.div(new BigNumber$1(10).pow(tokenDecimals));
    usdValue = amountToken.times(tokenPrice);
  }

  return {
    pid,
    avaiableReward,
    totalPoolSupply,
    tokenAmount,
    token2Amount,
    totalToken2Value,
    tokenPriceInToken2,
    usdValue,
    poolWeight: await getPoolWeight(masterChefContract, pid),
    tokenAmountTotal,
    token2AmountTotal,
    rewardTokenPrice: rewardTokenPrice,
    version: version
  };
};
const getPrices = async () => {
  var {
    data
  } = await axios.get(`${config.api}/block/price`);
  return data;
};
const saveCountry = async account => {
  var {
    data
  } = await axios.get(`${config.api}/detail/${account}`);
  return data.data;
};
const getMasterChefContract = (sushi, version) => {
  var chef = sushi && sushi.contracts && sushi.contracts.masterChef;

  if (version === VERSIONS.V2) {
    chef = sushi && sushi.contracts && sushi.contracts.masterChefV2;
  } else if (version === VERSIONS.V3) {
    chef = sushi && sushi.contracts && sushi.contracts.masterChefV3;
  } else if (version === VERSIONS.V4) {
    chef = sushi && sushi.contracts && sushi.contracts.masterChefV4;
  }

  return chef;
};
const getLaunchPoolV1Contract = sushi => {
  return sushi && sushi.contracts && sushi.contracts.launchPoolXV1;
};
const getLaunchPoolZDContract = sushi => {
  return sushi && sushi.contracts && sushi.contracts.launchPoolZD;
};
const getLaunchPoolTOOLSContract = sushi => {
  return sushi && sushi.contracts && sushi.contracts.launchPoolXTOOLS;
};
const getLaunchPoolXPOContract = sushi => {
  return sushi && sushi.contracts && sushi.contracts.launchPoolXXPO;
};
const getFarms = sushi => {
  return sushi ? sushi.contracts.pools.map(({
    pid,
    project,
    name,
    symbol,
    icon,
    icon2,
    description,
    tokenAddress,
    tokenSymbol,
    token2Symbol,
    token2Address,
    symbolShort,
    tokenContract,
    token2Contract,
    isHot,
    isNew,
    lpAddress,
    lpContract,
    protocal,
    iconProtocal,
    pairLink,
    addLiquidityLink,
    removeLiquidityLink,
    rewardToken,
    version,
    old,
    stake,
    isConvertNft,
    decimals,
    decimalsReward,
    rewardTokenContract,
    rewardLogo
  }) => ({
    pid,
    project,
    id: symbol,
    name,
    lpToken: symbol,
    lpTokenAddress: lpAddress,
    lpContract,
    tokenAddress,
    token2Address,
    tokenSymbol,
    token2Symbol,
    token2Contract,
    symbol,
    symbolShort,
    isHot,
    isNew,
    tokenContract,
    earnToken: 'bscx',
    earnTokenAddress: sushi.contracts.sushi.options.address,
    icon,
    icon2,
    description,
    protocal,
    iconProtocal,
    pairLink,
    addLiquidityLink,
    removeLiquidityLink,
    rewardToken,
    version,
    old,
    stake,
    isConvertNft,
    decimals,
    decimalsReward,
    rewardTokenContract,
    rewardLogo
  })) : [];
};
const getPoolWeight = async (masterChefContract, pid) => {
  const {
    allocPoint,
    rewardToken
  } = await masterChefContract.methods.poolInfo(pid).call();
  const totalAllocPoint = await masterChefContract.methods.totalAllocPoints(rewardToken).call();
  return new BigNumber$1(allocPoint).div(new BigNumber$1(totalAllocPoint));
};
const getEarned = async (masterChefContract, pid, account, isConvertNft) => {
  try {
    const reward = await masterChefContract.methods.pendingReward(pid, account).call();
    var realReward = reward;

    if (isConvertNft) {
      const userNftInfo = await masterChefContract.methods.userNftInfo(pid, account).call();
      realReward = Number(realReward) + Number(userNftInfo.rewardDebt);
    }

    return realReward;
  } catch (e) {
    return 0;
  }
};
const getAmountNFTConvert = async (masterChefContract, pid, account, isConvertNft) => {
  try {
    var amount = 0;

    if (isConvertNft) {
      const collection = await masterChefContract.methods.collections(pid).call();
      amount = await masterChefContract.methods.convertNftAmounts(collection).call();
    }

    return amount;
  } catch (e) {
    return 0;
  }
};
const getTotalUserLocked = async (masterChefContract, account, pid) => {
  return masterChefContract.methods.lockOf(account, pid).call();
};
const getTotalUserLockedV1 = async (masterChefV1Contract, account) => {
  return masterChefV1Contract.methods.lockOf(account).call();
};
const getLPTokenStaked = async (sushi, pid, version) => {
  var chef = getMasterChefContract(sushi, version);

  try {
    const balance = await chef.methods.getLpPoolBalance(pid).call();
    return new BigNumber$1(balance);
  } catch (e) {
    console.log(e);
    return;
  }
};
const getPendingNFT = async (sushi, account, pid) => {
  var chef = getMasterChefContract(sushi, 'V3');

  try {
    const userNftInfo = await chef.methods.userNftInfo(pid, account).call();
    const collection = await chef.methods.collections(pid).call();
    const convertNftAmount = await chef.methods.convertNftAmounts(collection).call();
    return Math.floor(userNftInfo.rewardTokenNftAmount / convertNftAmount);
  } catch (e) {
    console.log(e);
    return 0;
  }
};
const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods.approve(masterChefContract.options.address, MaxUint256).send({
    from: account
  });
};
const getAmountLPStakeBSCX = async (sushi, account) => {
  try {
    const lpStakeBSCX = sushi.contracts.lpStakeBSCX;
    return await lpStakeBSCX.methods.balanceOf(account).call();
  } catch (e) {
    console.log(e);
  }
};
const getLZBalance = async (sushi, account) => {
  try {
    const contract = sushi.contracts.sushi;
    return await contract.methods.balanceOf(account).call();
  } catch (e) {
    console.log(e);
  }
};
const checkPoolActive = async pid => {
  var p = supportedPools.find(e => e.pid === pid);

  if (p) {
    if (p.startAt >= new Date().getTime() / 1000) {
      return false;
    } else if (!p.startAt) {
      return true;
    } else {
      if (localStorage.getItem('POOLACTIVE' + pid + '-' + p.startAt)) {
        return true;
      } else {
        var {
          data
        } = await axios.get(`${config.api}/poolActive/${pid}`);

        if (data.active) {
          localStorage.setItem('POOLACTIVE' + pid + '-' + p.startAt, true);
        }

        return data.active;
      }
    }
  } else {
    return false;
  }
};
const getNewRewardPerBlock = async (sushi, pid1 = 0, version, rewardToken) => {
  var chef = getMasterChefContract(sushi, version);

  try {
    const reward = await chef.methods.tokenRewardPerBlock(rewardToken).call();
    const totalAllocPoints = await chef.methods.totalAllocPoints(rewardToken).call();
    const poolInfo = await chef.methods.poolInfo(pid1).call();
    const realReward = poolInfo.allocPoint / totalAllocPoints * reward;
    return new BigNumber$1(realReward);
  } catch (e) {
    return;
  }
};
const stake = async (masterChefContract, pid, amount, account, referral, decimals) => {
  return masterChefContract.methods.deposit(pid, new BigNumber$1(amount).times(new BigNumber$1(10).pow(decimals)).toString(), referral).send({
    from: account
  }).on('transactionHash', tx => {
    console.log(tx);
    return tx.transactionHash;
  });
};
const unstake = async (masterChefContract, pid, amount, account, decimals) => {
  return masterChefContract.methods.withdraw(pid, new BigNumber$1(amount).times(new BigNumber$1(10).pow(decimals)).toString()).send({
    from: account
  }).on('transactionHash', tx => {
    console.log(tx);
    return tx.transactionHash;
  });
};
const harvest = async (masterChefContract, pid, account) => {
  return masterChefContract.methods.claimReward(pid).send({
    from: account
  }).on('transactionHash', tx => {
    console.log(tx);
    return tx.transactionHash;
  });
};
const claimNft = async (masterChefContract, pid, account) => {
  var isLzFarm = pid == 1 ? false : true;
  return masterChefContract.methods.claimNFT(pid, isLzFarm).send({
    from: account
  }).on('transactionHash', tx => {
    console.log(tx);
    return tx.transactionHash;
  });
};
const getStaked = async (masterChefContract, pid, account) => {
  try {
    const {
      amount
    } = await masterChefContract.methods.userInfo(pid, account).call();
    return new BigNumber$1(amount);
  } catch {
    return new BigNumber$1(0);
  }
};
const getCanUnlockBSCX = async (contractBSCX, account) => {
  return new BigNumber$1(await contractBSCX.methods.canUnlockAmount(account).call());
};
const getCanUnlockToken = async (contract, account, pid) => {
  return new BigNumber$1(await contract.methods.canUnlockAmount(account, pid).call());
};
const unlock = async (contract, account) => {
  return contract.methods.unlock().send({
    from: account
  }).on('transactionHash', tx => {
    console.log(tx);
    return tx.transactionHash;
  });
};
const unlockZD = async (contract, account, pid) => {
  return contract.methods.unlock(pid).send({
    from: account
  }).on('transactionHash', tx => {
    console.log(tx);
    return tx.transactionHash;
  });
};

const Farms = ({
  children,
  web3
}) => {
  const [unharvested, setUnharvested] = useState(0);
  const sushi = useSushi();
  const farms = getFarms(sushi);
  return React__default.createElement(context.Provider, {
    value: {
      farms,
      unharvested
    }
  }, children);
};

let _$6 = t => t,
    _t$6,
    _t2$3;
const Context$1 = createContext({
  onPresent: () => {},
  onDismiss: () => {}
});

const Modals = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState();
  const [modalKey, setModalKey] = useState();
  const handlePresent = useCallback((modalContent, key) => {
    setModalKey(key);
    setContent(modalContent);
    setIsOpen(true);
  }, [setContent, setIsOpen, setModalKey]);
  const handleDismiss = useCallback(() => {
    setContent(undefined);
    setIsOpen(false);
  }, [setContent, setIsOpen, modalKey]);
  return React__default.createElement(Context$1.Provider, {
    value: {
      content,
      isOpen,
      onPresent: handlePresent,
      onDismiss: handleDismiss
    }
  }, children, isOpen && React__default.createElement(StyledModalWrapper, null, React__default.createElement(StyledModalBackdrop, {
    onClick: handleDismiss
  }), React__default.isValidElement(content) && React__default.cloneElement(content, {
    onDismiss: handleDismiss
  })));
};

const StyledModalWrapper = styled.div(_t$6 || (_t$6 = _$6`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 90;
  top: 0; right: 0; bottom: 0; left: 0;
`));
const StyledModalBackdrop = styled.div(_t2$3 || (_t2$3 = _$6`
  background-color: rgba(0, 0, 0, 0.45);
  position: absolute;
  opacity: 0.9;
  top: 0; right: 0; bottom: 0; left: 0;
`));

var Context$2 = createContext({
  transactions: {},
  onAddTransaction: tx => {}
});

const ADD_TRANSACTION = 'ADD_TRANSACTION';
const RECEIVE_TX_RECEIPT = 'RECEIVE_TX_RECEIPT';
const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
const addTransaction = transaction => ({
  type: ADD_TRANSACTION,
  transaction
});
const setTransactions = transactions => ({
  type: SET_TRANSACTIONS,
  transactions
});
const initialState = {
  initialized: false,
  transactions: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return { ...state,
        transactions: { ...state.transactions,
          [action.transaction.hash]: action.transaction
        }
      };

    case RECEIVE_TX_RECEIPT:
      return { ...state,
        transactions: { ...state.transactions,
          [action.txHash]: { ...state.transactions[action.txHash],
            receipt: action.receipt
          }
        }
      };

    case SET_TRANSACTIONS:
      return { ...state,
        transactions: action.transactions,
        initialized: true
      };

    default:
      return state;
  }
};

const TransactionsProvider = ({
  children
}) => {
  const [{
    initialized,
    transactions
  }, dispatch] = useReducer(reducer, initialState);
  const handleAddTransaction = useCallback(tx => {
    dispatch(addTransaction(tx));
  }, [dispatch]);
  const fetchTransactions = useCallback(async () => {
    try {
      const txsRaw = localStorage.getItem('transactions');
      const txs = JSON.parse(txsRaw) || {};
      dispatch(setTransactions(txs));
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);
  useEffect(() => {
    if (initialized) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [initialized, transactions]);
  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);
  return React__default.createElement(Context$2.Provider, {
    value: {
      transactions,
      onAddTransaction: handleAddTransaction
    }
  }, children);
};

const useModal = (modal, key) => {
  const {
    onDismiss,
    onPresent
  } = useContext(Context$1);
  const handlePresent = useCallback(() => {
    onPresent(modal, key);
    setTimeout(() => {
      localStorage.setItem('CACHE_BSC_TRY_CONNECT', '1');
    }, 100);
  }, [key, modal, onPresent]);
  return [handlePresent, onDismiss];
};

const white = '#FFF';
const black = '#000';
const green = {
  500: '##00d1810'
};
const red = {
  100: '#FFFDFE',
  200: '#070F23',
  300: '#252E44',
  500: '#5B5A99'
};
const grey = {
  100: '#bdbdbd',
  200: '#252E44',
  300: '#252E44',
  400: '#4F4937',
  500: '#252E44'
};

const theme = {
  borderRadius: 12,
  breakpoints: {
    mobile: 400
  },
  color: {
    black,
    grey,
    primary: {
      light: red[200],
      main: red[500]
    },
    secondary: {
      main: green[500]
    },
    white
  },
  siteWidth: 1200,
  spacing: {
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 48,
    7: 64
  },
  topBarSize: 62
};

let _$7 = t => t,
    _t$7,
    _t2$4;

const Page = ({
  children
}) => React__default.createElement(StyledPage, null, React__default.createElement(StyledMain, null, children));

const StyledPage = styled.div(_t$7 || (_t$7 = _$7`
    min-width: ${0};
    *, *:before, *:after {
        -moz-box-sizing: border-box; 
        -webkit-box-sizing: border-box; 
        box-sizing: border-box;
    }
    display: flex;
    justify-content: center;
`), main_42 ? '100%' : '100%');
const StyledMain = styled.div(_t2$4 || (_t2$4 = _$7`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${0}px);

  @media (max-width: 768px) {
    min-height: 100%;
  }
`), props => props.theme.topBarSize);

const useTokenLocked = account => {
  const [totalLocked, setTotalLocked] = useState(new BigNumber$1(0));
  const sushi = useSushi();
  const masterChefContract = getLaunchPoolV1Contract(sushi);
  const fetchTokenLocked = useCallback(async () => {
    const totalLocked = await getTotalUserLockedV1(masterChefContract, account);
    setTotalLocked(new BigNumber$1(totalLocked));
  }, [masterChefContract, account]);
  useEffect(() => {
    if (masterChefContract && account) {
      fetchTokenLocked();
      const interval = setInterval(async () => {
        fetchTokenLocked();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [masterChefContract, setTotalLocked, account]);
  return totalLocked;
};

const useTokenLockedWithPID = (account, pid, token) => {
  const [totalLocked, setTotalLocked] = useState(new BigNumber$1(0));
  const sushi = useSushi();
  let masterChefContract = getLaunchPoolZDContract(sushi);

  if (token == 'TOOLS') {
    masterChefContract = getLaunchPoolTOOLSContract(sushi);
  } else if (token == 'XPO') {
    masterChefContract = getLaunchPoolXPOContract(sushi);
  }

  const fetchTokenLocked = useCallback(async () => {
    const totalLocked = await getTotalUserLocked(masterChefContract, account, pid);
    setTotalLocked(new BigNumber$1(totalLocked));
  }, [masterChefContract, account]);
  useEffect(() => {
    if (masterChefContract && account) {
      fetchTokenLocked();
      const interval = setInterval(async () => {
        fetchTokenLocked();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [masterChefContract, setTotalLocked, account]);
  return totalLocked;
};

const useFarms = () => {
  const {
    farms
  } = useContext(context);
  return [farms];
};

const useTotalLocked = account => {
  const [totalLocked, setTotalLocked] = useState({});
  const sushi = useSushi();
  const [farms] = useFarms();
  const fetchTokenLocked = useCallback(async () => {
    const tokenLockeds = await Promise.all(farms.map(({
      pid,
      version
    }) => {
      let masterChef = getMasterChefContract(sushi, version);
      return getTotalUserLocked(masterChef, account, pid);
    }));
    let total = {};
    tokenLockeds.map((item, key) => {
      const symbol = farms[key].rewardToken.symbol;

      if (total[symbol]) {
        total[symbol] += Number(item);
      } else {
        total[symbol] = 0;
        total[symbol] = Number(item);
      }
    });
    setTotalLocked(total);
  }, [account]);
  useEffect(() => {
    if (account) {
      fetchTokenLocked();
    }
  }, [setTotalLocked, account]);
  return totalLocked;
};

const useCanUnlockAmount = account => {
  const [balance, setBalance] = useState(new BigNumber$1(0));
  const sushi = useSushi();
  const masterChefContract = getLaunchPoolV1Contract(sushi);
  const fetchBalance = useCallback(async () => {
    const balance = await getCanUnlockBSCX(masterChefContract, account);
    setBalance(balance);
  }, [account, masterChefContract]);
  useEffect(() => {
    if (account && masterChefContract) {
      fetchBalance();
      const interval = setInterval(async () => {
        fetchBalance();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [account, setBalance, masterChefContract]);
  return balance;
};

const useCanUnlockZD = (account, pid, token) => {
  const [balance, setBalance] = useState(new BigNumber$1(0));
  const sushi = useSushi();
  let masterChefContract = getLaunchPoolZDContract(sushi);

  if (token == 'TOOLS') {
    masterChefContract = getLaunchPoolTOOLSContract(sushi);
  } else if (token == 'XPO') {
    masterChefContract = getLaunchPoolXPOContract(sushi);
  }

  const fetchBalance = useCallback(async () => {
    const balance = await getCanUnlockToken(masterChefContract, account, pid);
    setBalance(balance);
  }, [account, masterChefContract]);
  useEffect(() => {
    if (account && masterChefContract) {
      fetchBalance();
      const interval = setInterval(async () => {
        fetchBalance();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [account, setBalance, masterChefContract]);
  return balance;
};

const useUnlock = account => {
  const sushi = useSushi();
  const masterChefContract = getLaunchPoolV1Contract(sushi);
  const doTx = useCallback(async () => {
    try {
      const txHash = await unlock(masterChefContract, account);
      return txHash;
    } catch (ex) {
      return '';
    }
  }, []);
  return {
    onUnlock: doTx
  };
};

const useUnlockZD = account => {
  const sushi = useSushi();
  let masterChefContract = getLaunchPoolZDContract(sushi);
  const doTx = useCallback(async (pid, token) => {
    try {
      if (token == 'TOOLS') {
        masterChefContract = getLaunchPoolTOOLSContract(sushi);
      } else if (token == 'XPO') {
        masterChefContract = getLaunchPoolXPOContract(sushi);
      }

      const txHash = await unlockZD(masterChefContract, account, pid);
      return txHash;
    } catch (ex) {
      return '';
    }
  }, []);
  return {
    onUnlockZD: doTx
  };
};

const getBalanceNumber = (balance, decimals = 18) => {
  const displayBalance = balance.dividedBy(new BigNumber$1(10).pow(decimals));
  return displayBalance.toNumber();
};
const getFullDisplayBalance = (balance, decimals = 18) => {
  return balance.dividedBy(new BigNumber$1(10).pow(decimals)).toString();
};

let _$8 = t => t,
    _t$8,
    _t2$5,
    _t3$2,
    _t4$1,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9;

const LockedRewards = ({
  web3
}) => {
  const totalUserLocked = useTokenLocked(web3 && web3.account);
  const totalRewardLocked = useTotalLocked(web3 && web3.account);
  const canUnlockAmount = useCanUnlockAmount(web3 && web3.account);
  const lockedPool0 = useTokenLockedWithPID(web3 && web3.account, 0, 'TOOLS');
  const lockedPool1 = useTokenLockedWithPID(web3 && web3.account, 1, 'TOOLS');
  const lockedPoolXPO28 = useTokenLockedWithPID(web3 && web3.account, 28, 'XPO');
  const lockedPoolXPO29 = useTokenLockedWithPID(web3 && web3.account, 29, 'XPO');
  const lockedPoolXPO30 = useTokenLockedWithPID(web3 && web3.account, 30, 'XPO');
  const lockedPoolXPO31 = useTokenLockedWithPID(web3 && web3.account, 31, 'XPO');
  const lockedPoolXPO0 = useTokenLockedWithPID(web3 && web3.account, 0, 'XPO');
  const lockedPoolXPO1 = useTokenLockedWithPID(web3 && web3.account, 1, 'XPO');
  const lockedZDPool0 = useTokenLockedWithPID(web3 && web3.account, 0, '');
  const lockedZDPool1 = useTokenLockedWithPID(web3 && web3.account, 1, '');
  const lockedZDPool2 = useTokenLockedWithPID(web3 && web3.account, 2, '');
  const lockedZDPool3 = useTokenLockedWithPID(web3 && web3.account, 3, '');
  const lockedZDPool4 = useTokenLockedWithPID(web3 && web3.account, 4, '');
  const lockedZDPool5 = useTokenLockedWithPID(web3 && web3.account, 5, '');
  const lockedZDPool6 = useTokenLockedWithPID(web3 && web3.account, 6, '');
  const lockedZDPool7 = useTokenLockedWithPID(web3 && web3.account, 7, '');
  const lockedZDPool8 = useTokenLockedWithPID(web3 && web3.account, 8, '');
  const lockedZDPool9 = useTokenLockedWithPID(web3 && web3.account, 9, '');
  const unlockAmount0 = useCanUnlockZD(web3 && web3.account, 0, 'TOOLS');
  const unlockAmount1 = useCanUnlockZD(web3 && web3.account, 1, 'TOOLS');
  const unlockAmountXPO28 = useCanUnlockZD(web3 && web3.account, 28, 'XPO');
  const unlockAmountXPO29 = useCanUnlockZD(web3 && web3.account, 29, 'XPO');
  const unlockAmountXPO30 = useCanUnlockZD(web3 && web3.account, 30, 'XPO');
  const unlockAmountXPO31 = useCanUnlockZD(web3 && web3.account, 31, 'XPO');
  const unlockAmountXPO0 = useCanUnlockZD(web3 && web3.account, 0, 'XPO');
  const unlockAmountXPO1 = useCanUnlockZD(web3 && web3.account, 1, 'XPO');
  const unlockAmountZD0 = useCanUnlockZD(web3 && web3.account, 0, '');
  const unlockAmountZD1 = useCanUnlockZD(web3 && web3.account, 1, '');
  const unlockAmountZD2 = useCanUnlockZD(web3 && web3.account, 2, '');
  const unlockAmountZD3 = useCanUnlockZD(web3 && web3.account, 3, '');
  const unlockAmountZD4 = useCanUnlockZD(web3 && web3.account, 4, '');
  const unlockAmountZD5 = useCanUnlockZD(web3 && web3.account, 5, '');
  const unlockAmountZD6 = useCanUnlockZD(web3 && web3.account, 6, '');
  const unlockAmountZD7 = useCanUnlockZD(web3 && web3.account, 7, '');
  const unlockAmountZD8 = useCanUnlockZD(web3 && web3.account, 8, '');
  const unlockAmountZD9 = useCanUnlockZD(web3 && web3.account, 9, '');
  let cacheValue = localStorage.getItem('CACHE_usePrice_value');
  let prices = JSON.parse(cacheValue);

  const getAmountInUSD = (amount, project) => {
    let price = 0;

    switch (project) {
      case "LZ":
        price = prices.lz;
        break;

      case "BSCX":
        price = prices.bscx;
        break;
    }

    let usdAmount = amount.times(price);
    return usdAmount;
  };

  let totalAmountInUsd = new BigNumber$1(0);
  let amountInUsdBSCX = getAmountInUSD(totalUserLocked, 'BSCX');
  totalAmountInUsd = totalAmountInUsd.plus(amountInUsdBSCX);
  const [pendingTx, setPendingTx] = useState(false);
  const {
    onUnlock
  } = useUnlock(web3 && web3.account);
  const {
    onUnlockZD
  } = useUnlockZD(web3 && web3.account);
  const handleUnlock = useCallback(async () => {
    try {
      const txHash = await onUnlock();
    } catch (e) {
      console.log(e);
    }
  }, [onUnlock]);
  const handleUnlockZD = useCallback(async (pid, token) => {
    try {
      const txHash = await onUnlockZD(pid, token);
    } catch (e) {
      console.log(e);
    }
  }, [onUnlockZD]);
  return React__default.createElement(LockedRewardsStyle, null, React__default.createElement(BoxItemScroll, null, React__default.createElement(Row, {
    className: 'row-claim'
  }, React__default.createElement(Col, {
    className: "col-12"
  }, React__default.createElement(TextMin, null, "Pool: 1"), React__default.createElement(TextMedium, null, totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPool0).toFixed(2)).toLocaleString('en-US')} TOOLS` : '~', React__default.createElement("br", null), "Can unlock: ", unlockAmount0 ? `${parseFloat(getBalanceNumber(unlockAmount0).toFixed(2)).toLocaleString('en-US')} TOOLS` : '0')), React__default.createElement(ReleaseButton, {
    onClick: async () => {
      setPendingTx(true);
      await handleUnlockZD(0, 'TOOLS');
      setPendingTx(false);
    }
  }, pendingTx ? 'Release...' : 'Release')), React__default.createElement(Row, {
    className: 'row-claim'
  }, React__default.createElement(Col, {
    className: "col-12"
  }, React__default.createElement(TextMin, null, "Pool: 2"), React__default.createElement(TextMedium, null, totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPool1).toFixed(2)).toLocaleString('en-US')} TOOLS` : '~', React__default.createElement("br", null), "Can unlock: ", unlockAmount1 ? `${parseFloat(getBalanceNumber(unlockAmount1).toFixed(2)).toLocaleString('en-US')} TOOLS` : '0')), React__default.createElement(ReleaseButton, {
    onClick: async () => {
      setPendingTx(true);
      await handleUnlockZD(1, 'TOOLS');
      setPendingTx(false);
    }
  }, pendingTx ? 'Release...' : 'Release')), React__default.createElement(Row, {
    className: 'row-claim'
  }, React__default.createElement(Col, {
    className: "col-12"
  }, React__default.createElement(TextMin, null, "Pool: 3"), React__default.createElement(TextMedium, null, totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPoolXPO0).toFixed(2)).toLocaleString('en-US')} TOOLS` : '~', React__default.createElement("br", null), "Can unlock: ", unlockAmountXPO0 ? `${parseFloat(getBalanceNumber(unlockAmountXPO0).toFixed(2)).toLocaleString('en-US')} TOOLS` : '0')), React__default.createElement(ReleaseButton, {
    onClick: async () => {
      setPendingTx(true);
      await handleUnlockZD(0, 'XPO');
      setPendingTx(false);
    }
  }, pendingTx ? 'Release...' : 'Release')), React__default.createElement(Row, {
    className: 'row-claim'
  }, React__default.createElement(Col, {
    className: "col-12"
  }, React__default.createElement(TextMin, null, "Pool: 4"), React__default.createElement(TextMedium, null, totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPoolXPO1).toFixed(2)).toLocaleString('en-US')} TOOLS` : '~', React__default.createElement("br", null), "Can unlock: ", unlockAmountXPO1 ? `${parseFloat(getBalanceNumber(unlockAmountXPO1).toFixed(2)).toLocaleString('en-US')} TOOLS` : '0')), React__default.createElement(ReleaseButton, {
    onClick: async () => {
      setPendingTx(true);
      await handleUnlockZD(1, 'XPO');
      setPendingTx(false);
    }
  }, pendingTx ? 'Release...' : 'Release')), React__default.createElement(Row, {
    className: 'row-claim'
  }, React__default.createElement(Col, {
    className: "col-12"
  }, React__default.createElement(TextMin, null, "Pool: 5"), React__default.createElement(TextMedium, null, totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPoolXPO28).toFixed(2)).toLocaleString('en-US')} XPO` : '~', React__default.createElement("br", null), "Can unlock: ", unlockAmountXPO28 ? `${parseFloat(getBalanceNumber(unlockAmountXPO28).toFixed(2)).toLocaleString('en-US')} XPO` : '0')), React__default.createElement(ReleaseButton, {
    onClick: async () => {
      setPendingTx(true);
      await handleUnlockZD(28, 'XPO');
      setPendingTx(false);
    }
  }, pendingTx ? 'Release...' : 'Release')), React__default.createElement(Row, {
    className: 'row-claim'
  }, React__default.createElement(Col, {
    className: "col-12"
  }, React__default.createElement(TextMin, null, "Pool: 6"), React__default.createElement(TextMedium, null, totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPoolXPO29).toFixed(2)).toLocaleString('en-US')} XPO` : '~', React__default.createElement("br", null), "Can unlock: ", unlockAmountXPO29 ? `${parseFloat(getBalanceNumber(unlockAmountXPO29).toFixed(2)).toLocaleString('en-US')} XPO` : '0')), React__default.createElement(ReleaseButton, {
    onClick: async () => {
      setPendingTx(true);
      await handleUnlockZD(29, 'XPO');
      setPendingTx(false);
    }
  }, pendingTx ? 'Release...' : 'Release')), React__default.createElement(Row, {
    className: 'row-claim'
  }, React__default.createElement(Col, {
    className: "col-12"
  }, React__default.createElement(TextMin, null, "Pool: 7"), React__default.createElement(TextMedium, null, totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPoolXPO30).toFixed(2)).toLocaleString('en-US')} XPO` : '~', React__default.createElement("br", null), "Can unlock: ", unlockAmountXPO30 ? `${parseFloat(getBalanceNumber(unlockAmountXPO30).toFixed(2)).toLocaleString('en-US')} XPO` : '0')), React__default.createElement(ReleaseButton, {
    onClick: async () => {
      setPendingTx(true);
      await handleUnlockZD(30, 'XPO');
      setPendingTx(false);
    }
  }, pendingTx ? 'Release...' : 'Release')), React__default.createElement(Row, {
    className: 'row-claim'
  }, React__default.createElement(Col, {
    className: "col-12"
  }, React__default.createElement(TextMin, null, "Pool: 8"), React__default.createElement(TextMedium, null, totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPoolXPO31).toFixed(2)).toLocaleString('en-US')} XPO` : '~', React__default.createElement("br", null), "Can unlock: ", unlockAmountXPO31 ? `${parseFloat(getBalanceNumber(unlockAmountXPO31).toFixed(2)).toLocaleString('en-US')} XPO` : '0')), React__default.createElement(ReleaseButton, {
    onClick: async () => {
      setPendingTx(true);
      await handleUnlockZD(31, 'XPO');
      setPendingTx(false);
    }
  }, pendingTx ? 'Release...' : 'Release')), React__default.createElement(Row, {
    className: 'row-claim'
  }, React__default.createElement(Col, {
    className: "col-12"
  }, React__default.createElement(TextMin, null, "Pool: 1"), React__default.createElement(TextMedium, null, totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool0).toFixed(2)).toLocaleString('en-US')} zSEED` : '~', React__default.createElement("br", null), "Can unlock: ", unlockAmountZD0 ? `${parseFloat(getBalanceNumber(unlockAmountZD0).toFixed(5)).toLocaleString('en-US')} zSEED` : '0')), React__default.createElement(ReleaseButton, {
    onClick: async () => {
      setPendingTx(true);
      await handleUnlockZD(0, '');
      setPendingTx(false);
    }
  }, pendingTx ? 'Release...' : 'Release')), React__default.createElement(Row, {
    className: 'row-claim'
  }, React__default.createElement(Col, {
    className: "col-12"
  }, React__default.createElement(TextMin, null, "Pool: 2"), React__default.createElement(TextMedium, null, totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool1).toFixed(2)).toLocaleString('en-US')} zSEED` : '~', React__default.createElement("br", null), "Can unlock: ", unlockAmountZD1 ? `${parseFloat(getBalanceNumber(unlockAmountZD1).toFixed(5)).toLocaleString('en-US')} zSEED` : '0')), React__default.createElement(ReleaseButton, {
    onClick: async () => {
      setPendingTx(true);
      await handleUnlockZD(1, '');
      setPendingTx(false);
    }
  }, pendingTx ? 'Release...' : 'Release')), React__default.createElement(Row, {
    className: 'row-claim'
  }, React__default.createElement(Col, {
    className: "col-12"
  }, React__default.createElement(TextMin, null, "Pool: 3"), React__default.createElement(TextMedium, null, totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool2).toFixed(2)).toLocaleString('en-US')} zSEED` : '~', React__default.createElement("br", null), "Can unlock: ", unlockAmountZD2 ? `${parseFloat(getBalanceNumber(unlockAmountZD2).toFixed(5)).toLocaleString('en-US')} zSEED` : '0')), React__default.createElement(ReleaseButton, {
    onClick: async () => {
      setPendingTx(true);
      await handleUnlockZD(2, '');
      setPendingTx(false);
    }
  }, pendingTx ? 'Release...' : 'Release')), React__default.createElement(Row, {
    className: 'row-claim'
  }, React__default.createElement(Col, {
    className: "col-12"
  }, React__default.createElement(TextMin, null, "Pool: 4"), React__default.createElement(TextMedium, null, totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool3).toFixed(4)).toLocaleString('en-US')} zSEED` : '~', React__default.createElement("br", null), "Can unlock: ", unlockAmountZD3 ? `${parseFloat(getBalanceNumber(unlockAmountZD3).toFixed(5)).toLocaleString('en-US')} zSEED` : '0')), React__default.createElement(ReleaseButton, {
    onClick: async () => {
      setPendingTx(true);
      await handleUnlockZD(3, '');
      setPendingTx(false);
    }
  }, pendingTx ? 'Release...' : 'Release')), React__default.createElement(Row, {
    className: 'row-claim'
  }, React__default.createElement(Col, {
    className: "col-12"
  }, React__default.createElement(TextMin, null, "Pool: 5"), React__default.createElement(TextMedium, null, totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool4).toFixed(3)).toLocaleString('en-US')} zSEED` : '~', React__default.createElement("br", null), "Can unlock: ", unlockAmountZD4 ? `${parseFloat(getBalanceNumber(unlockAmountZD4).toFixed(5)).toLocaleString('en-US')} zSEED` : '0')), React__default.createElement(ReleaseButton, {
    onClick: async () => {
      setPendingTx(true);
      await handleUnlockZD(4, '');
      setPendingTx(false);
    }
  }, pendingTx ? 'Release...' : 'Release')), React__default.createElement(TextMin, null)));
};

const LockedRewardsStyle = styled.div(_t$8 || (_t$8 = _$8`
  padding: 30px 35px 10px;
`));
const BoxItemScroll = styled.div(_t2$5 || (_t2$5 = _$8`
    margin-bottom: 10px;
    height: 250px;
    overflow: hidden;
    overflow-y: scroll;

    &:last-child {
        margin-bottom: 0px;
    }
`));
const Row = styled.div(_t3$2 || (_t3$2 = _$8`
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #96cf24;
    padding: 7px 0px;
    &.align-center {
        align-items: center;
    }
`));
const BoxItem = styled.div(_t4$1 || (_t4$1 = _$8`
    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0px;
    }
    .pool-warning {
        font-size: 12px;
        color: #ffc800;
    }
`));
const ReleaseButton = styled.button(_t5 || (_t5 = _$8`
    color: #5d533f;
    background: #5aa62b;
    border: 1px solid #5d533f;
    cursor: pointer;
    margin-right: 20px;
    border-radius: 2px;
    padding: 2px 10px;
    transition: 0.3s all;
    height: 22px;
    margin-top: 5px;
    &:hover {
        background: #fabc450d
    }
`));
const ReleaseButtonDisable = styled.button(_t6 || (_t6 = _$8`
    color: #5d533f;
    background: #fabc450d;
    border: 1px solid #5d533f;
    cursor: no-drop;
    margin-left: 10px;
    border-radius: 2px;
    padding: 2px 10px;
    transition: 0.3s all;
    height: 22px;
    margin-top: 5px;
    &:hover {
        background: #fabc450d
    }
`));
const Col = styled.div(_t7 || (_t7 = _$8`
    padding-right: 15px;
    padding-left: 15px;
`));
const TextMedium = styled.div(_t8 || (_t8 = _$8`
    font-weight: 500;
    font-size: 12px;
    color: #96CF24;
    word-break: break-word;
    strong {
        font-size: 12px;
    }
    span {
        font-size: 12px;
        margin-left: 5px;
    }
    .st-link {
        color: #5aa62b;
        text-decoration: none;
        font-size: 12px;
        margin-left: 10px;
    }
`));
const TextMin = styled.div(_t9 || (_t9 = _$8`
    font-weight: 500;
    font-size: 14px;
    color: #9CA3AF;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    img {
        margin-left: 5px;
    }
`));

let _$9 = t => t,
    _t$9;

const LockedRewardsModal = ({
  onDismiss,
  web3,
  theme
}) => {
  return React__default.createElement(Modal, {
    theme: theme
  }, React__default.createElement(ModalTitle, {
    text: `Reward Tokens Locked`
  }), React__default.createElement(LockedRewards, {
    web3: web3
  }), React__default.createElement(ModalActions, null, React__default.createElement(CloseButton, {
    onClick: onDismiss
  }, React__default.createElement("div", {
    className: "text"
  }, "Close"))));
};
const CloseButton = styled.div(_t$9 || (_t$9 = _$9`
  width: 100%;
  background: inherit;
  border: 1px solid #6ac92f;
  padding: 5px 30px;
  border-radius: 5px;
  cursor: pointer;
  .text {
    background: linear-gradient(270deg, #96CF24 10.53%, #5AA62B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:hover {
    background: linear-gradient(270deg, #96CF24 10.53%, #5AA62B 100%);
    .text {
      background: #fff;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`));

var CACHE = {
  time: parseInt(localStorage.getItem('CACHE_useBlock_time') || '0'),
  old: 6 * 1000,
  value: parseInt(localStorage.getItem('CACHE_useBlock_value') || '0')
};

const useBlock = () => {
  const [block, setBlock] = useState(CACHE.value);
  const getBlock = useCallback(async () => {
    if (CACHE.time + CACHE.old <= new Date().getTime()) {
      var {
        data
      } = await axios.get(`${config.api}/block`);
      var latestBlockNumber = data;
      CACHE.time = new Date().getTime();
      CACHE.value = latestBlockNumber;
      localStorage.setItem('CACHE_useBlock_time', CACHE.time);
      localStorage.setItem('CACHE_useBlock_value', CACHE.value);
      setBlock(latestBlockNumber);
    } else {
      setBlock(CACHE.value);
    }
  }, []);
  useEffect(() => {
    const interval = setInterval(async () => {
      getBlock();
    }, 6000);
    getBlock();
    return () => clearInterval(interval);
  }, []);
  return block;
};

var CACHE$1 = {
  time: parseInt(localStorage.getItem('CACHE_usePrice_time') || '0'),
  old: 5 * 1000,
  value: localStorage.getItem('CACHE_usePrice_value') || '{}'
};

const usePrice = project => {
  const [price, setPrice] = useState(new BigNumber$1(0));
  const sushi = useSushi();
  const farms = getFarms(sushi);
  const block = useBlock();
  const fetchStakedValue = useCallback(async () => {
    var prices;
    prices = await getPrices();
    CACHE$1.time = new Date().getTime();
    CACHE$1.value = JSON.stringify(prices);
    localStorage.setItem('CACHE_usePrice_time', CACHE$1.time);
    localStorage.setItem('CACHE_usePrice_value', CACHE$1.value);
    let price = 0;

    switch (project) {
      case "ZSEED":
        price = prices.zseed;
        break;

      case "BSCX":
        price = prices.bscx;
        break;

      case "LZ":
        price = prices.lz;
        break;

      case "TOOLS":
        price = prices.tools;
        break;

      case "ZDCASH":
        price = prices.zdcash;
        break;
    }

    if (price > 0) {
      setPrice(new BigNumber$1(price));
    }
  }, [block, sushi, project]);
  useEffect(() => {
    if (sushi) {
      fetchStakedValue();
    }
  }, [block, setPrice, sushi, project]);
  return price;
};

const useStakeBSCX = account => {
  const [balance, setBalance] = useState(new BigNumber$1(0));
  const sushi = useSushi();
  useEffect(() => {
    async function fetchData() {
      const res = await getAmountLPStakeBSCX(sushi, account);
      setBalance(new BigNumber$1(res));
    }

    if (sushi && account) {
      fetchData();
    }
  }, [sushi, setBalance, account]);
  return balance;
};

const useLZBalance = account => {
  const [balance, setBalance] = useState(new BigNumber$1(0));
  const sushi = useSushi();
  useEffect(() => {
    async function fetchData() {
      const res = await getLZBalance(sushi, account);
      setBalance(new BigNumber$1(res));
    }

    if (sushi && account) {
      fetchData();
    }
  }, [sushi, setBalance, account]);
  return balance;
};

var Logo = "logo-icon~LsXVGIxE.svg";

let _$a = t => t,
    _t$a,
    _t2$6,
    _t3$3,
    _t4$2,
    _t5$1;

const Loader = ({
  text
}) => {
  return React__default.createElement(StyledLoader, null, React__default.createElement(CardIcon, null, React__default.createElement(StyledBSCX, null, React__default.createElement("img", {
    src: Logo,
    alt: ""
  }))), !!text && React__default.createElement(StyledText, null, text));
};

const spin = keyframes(_t$a || (_t$a = _$a`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`));
const scale = keyframes(_t2$6 || (_t2$6 = _$a`
  0%   {transform: scale(.8);}
  100% {transform: scale(1);}
`));
const StyledLoader = styled.div(_t3$3 || (_t3$3 = _$a`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`));
const StyledBSCX = styled.div(_t4$2 || (_t4$2 = _$a`
  font-size: 32px;
  position: relative;
  animation: 0.8s ${0} infinite;
`), scale);
const StyledText = styled.div(_t5$1 || (_t5$1 = _$a`
  color: ${0};
`), props => props.theme.color.grey[100]);

const useSaveCountry = account => {
  const sushi = useSushi();
  const address = localStorage.getItem('CACHE_ADDRESS_COUNTRY');
  const fetchData = useCallback(async () => {
    if (address != account) {
      const result = await saveCountry(account);
      localStorage.setItem('CACHE_ADDRESS_COUNTRY', account);
    }
  }, [sushi, account]);
  useEffect(() => {
    if (account) {
      fetchData();
    }
  }, [sushi, account]);
  return true;
};

let _$b = t => t,
    _t$b;

const StyledCard = styled.div(_t$b || (_t$b = _$b`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid #f5f5fa;
`));

let _$c = t => t,
    _t$c;

const StyledCard$1 = styled.div(_t$c || (_t$c = _$c`
  background: #38393b;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
`));

let _$d = t => t,
    _t$d;

const Value = ({
  value,
  decimals
}) => {
  const [start, updateStart] = useState(0);
  const [end, updateEnd] = useState(0);
  useEffect(() => {
    if (typeof value === 'number') {
      updateStart(end);
      updateEnd(value);
    }
  }, [value]);
  return React__default.createElement(StyledValue, null, typeof value == 'string' ? value : React__default.createElement(CountUp, {
    start: start,
    end: end,
    decimals: decimals !== undefined ? decimals : end < 0 ? 4 : end > 1e5 ? 0 : 3,
    duration: 1,
    separator: ","
  }));
};

const StyledValue = styled.span(_t$d || (_t$d = _$d`
  font-size: 16px;

  span {
    font-size: 16px;
  }
`));

var CACHE$2 = {
  time: 0,
  old: 0,
  value: []
};

const useAllStakedValue = () => {
  const [balances, setBalance] = useState(CACHE$2.value);
  const sushi = useSushi();
  const farms = getFarms(sushi);
  const masterChefContract = getMasterChefContract(sushi);
  const block = 0;
  const fetchAllStakedValue = useCallback(async () => {
    const balances = await Promise.all(farms.map(({
      pid,
      lpContract,
      tokenContract,
      token2Contract,
      project,
      rewardToken,
      version,
      rewardTokenContract
    }) => {
      let masterChef = getMasterChefContract(sushi, version);
      return getLPValue(masterChef, lpContract, tokenContract, token2Contract, pid, rewardToken.address, version, rewardTokenContract);
    }));
    setBalance(balances);
  }, [sushi]);
  useEffect(() => {
    if (sushi) {
      fetchAllStakedValue();
    }
  }, [block, setBalance, sushi]);
  return balances;
};

const usePoolActive = pid => {
  const [active, setActive] = useState(true);
  const getData = useCallback(async () => {
    setActive(await checkPoolActive(pid));
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return active;
};

const useEarnings = (pid, version, account, isConvertNft) => {
  const [balance, setBalance] = useState(new BigNumber$1(0));
  const sushi = useSushi();
  const masterChefContract = getMasterChefContract(sushi, version);
  const block = useBlock();
  const fetchBalance = useCallback(async () => {
    let masterChef = masterChefContract;
    const balance = await getEarned(masterChef, pid, account, isConvertNft);
    setBalance(new BigNumber$1(balance));
  }, [account, masterChefContract, sushi]);
  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchBalance();
      const interval = setInterval(async () => {
        fetchBalance();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [account, block, masterChefContract, setBalance, sushi]);
  return balance;
};

const useNFTAmount = (pid, version, account, isConvertNft) => {
  const [balance, setBalance] = useState(new BigNumber$1(0));
  const sushi = useSushi();
  const masterChefContract = getMasterChefContract(sushi, version);
  const block = useBlock();
  const fetchBalance = useCallback(async () => {
    let masterChef = masterChefContract;
    const balance = await getAmountNFTConvert(masterChef, pid, account, isConvertNft);
    setBalance(new BigNumber$1(balance));
  }, [account, masterChefContract, sushi]);
  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchBalance();
      const interval = setInterval(async () => {
        fetchBalance();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [account, block, masterChefContract, setBalance, sushi]);
  return balance;
};

var abi = [
	{
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "delegator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "fromDelegate",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "toDelegate",
				type: "address"
			}
		],
		name: "DelegateChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "delegate",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "previousBalance",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "newBalance",
				type: "uint256"
			}
		],
		name: "DelegateVotesChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Lock",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
		],
		name: "DELEGATION_TYPEHASH",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "DOMAIN_TYPEHASH",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_transferBurnExceptAddress",
				type: "address"
			}
		],
		name: "addTransferBurnExceptAddress",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "burn",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "burnFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			}
		],
		name: "canUnlockAmount",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "cap",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "uint32",
				name: "",
				type: "uint32"
			}
		],
		name: "checkpoints",
		outputs: [
			{
				internalType: "uint32",
				name: "fromBlock",
				type: "uint32"
			},
			{
				internalType: "uint256",
				name: "votes",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "circulatingSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "subtractedValue",
				type: "uint256"
			}
		],
		name: "decreaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "delegatee",
				type: "address"
			}
		],
		name: "delegate",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "delegatee",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "nonce",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "expiry",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "delegateBySig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "delegator",
				type: "address"
			}
		],
		name: "delegates",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "farmingEnabled",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "getCurrentVotes",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			}
		],
		name: "getPriorVotes",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "addedValue",
				type: "uint256"
			}
		],
		name: "increaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			}
		],
		name: "lastUnlockBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "lock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "lockFromBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			}
		],
		name: "lockOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "lockToBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "mint",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "numCheckpoints",
		outputs: [
			{
				internalType: "uint32",
				name: "",
				type: "uint32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_transferBurnExceptAddress",
				type: "address"
			}
		],
		name: "removeTransferBurnExceptAddress",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_tranferBurnRate",
				type: "uint256"
			}
		],
		name: "setTransferBurnRate",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "startFarming",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_holder",
				type: "address"
			}
		],
		name: "totalBalanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalLock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_to",
				type: "address"
			}
		],
		name: "transferAll",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "transferBurnRate",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "unlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];
var networks = {
};
var ERC20ABI = {
	abi: abi,
	networks: networks
};

const getContract = (provider, address) => {
  const web3 = new Web3(provider || config.rpc);
  const contract = new web3.eth.Contract(ERC20ABI.abi, address);
  return contract;
};
const getAllowance = async (lpContract, masterChefContract, account) => {
  try {
    const allowance = await lpContract.methods.allowance(account, masterChefContract.options.address).call();
    return allowance;
  } catch (e) {
    return '0';
  }
};
const getBalance = async (provider, tokenAddress, userAddress) => {
  const lpContract = getContract(provider, tokenAddress);

  try {
    const balance = await lpContract.methods.balanceOf(userAddress).call();
    return balance;
  } catch (e) {
    return '0';
  }
};

const useAllowance = (lpContract, version, account) => {
  const [allowance, setAllowance] = useState(new BigNumber$1(0));
  const sushi = useSushi();
  const masterChefContract = getMasterChefContract(sushi, version);
  const fetchAllowance = useCallback(async () => {
    let masterChef = masterChefContract;
    const allowance = await getAllowance(lpContract, masterChef, account);
    setAllowance(new BigNumber$1(allowance));
  }, [account, masterChefContract, lpContract]);
  useEffect(() => {
    if (account && masterChefContract && lpContract) {
      fetchAllowance();
    }

    let refreshInterval = setInterval(fetchAllowance, 6000);
    return () => clearInterval(refreshInterval);
  }, [account, masterChefContract, lpContract]);
  return allowance;
};

const useApprove = (lpContract, version, account) => {
  const sushi = useSushi();
  const masterChefContract = getMasterChefContract(sushi, version);
  const handleApprove = useCallback(async () => {
    try {
      let masterChef = masterChefContract;
      const tx = await approve(lpContract, masterChef, account);
      return tx;
    } catch (e) {
      return false;
    }
  }, [account, lpContract, masterChefContract]);
  return {
    onApprove: handleApprove
  };
};

const isAddress = address => {
  const web3 = new Web3(config.rpc);
  return web3.utils.isAddress(address);
};

const useStake = (pid, version, decimals, account) => {
  const sushi = useSushi();
  const masterChefContract = getMasterChefContract(sushi, version);
  let masterChef = masterChefContract;
  const handleStake = useCallback(async amount => {
    try {
      let referral = localStorage.getItem('LZ_REFERRAL');

      if (!isAddress(referral)) {
        referral = cookie.get('_ezdnewref') || cookie.get('_ezdref');
      }

      if (!isAddress(referral)) {
        referral = '0x0000000000000000000000000000000000000000';
      }

      const txHash = await stake(masterChef, pid, amount, account, referral, decimals);
      return txHash;
    } catch (ex) {
      console.log('xxx: ', ex);
      return '';
    }
  }, [account, pid, sushi, masterChef]);
  return {
    onStake: handleStake
  };
};

const useUnstake = (pid, version, decimals, account) => {
  const sushi = useSushi();
  const masterChefContract = getMasterChefContract(sushi, version);
  let masterChef = masterChefContract;
  const handleUnstake = useCallback(async amount => {
    const txHash = await unstake(masterChef, pid, amount, account, decimals);
    console.log(txHash);
  }, [account, pid, sushi]);
  return {
    onUnstake: handleUnstake
  };
};

const useReward = (pid, version, account) => {
  const sushi = useSushi();
  const masterChefContract = getMasterChefContract(sushi, version);
  const handleReward = useCallback(async () => {
    try {
      let masterChef = masterChefContract;
      const txHash = await harvest(masterChef, pid, account);
      console.log(txHash);
      return txHash;
    } catch (ex) {
      console.error(ex);
      return '';
    }
  }, [account, pid, sushi, masterChefContract]);
  return {
    onReward: handleReward
  };
};

const useClaimNft = (pid, version, account) => {
  const sushi = useSushi();
  const masterChefContract = getMasterChefContract(sushi, version);
  const claim = useCallback(async () => {
    try {
      const txHash = await claimNft(masterChefContract, pid, account);
      console.log(txHash);
      return txHash;
    } catch (ex) {
      console.error(ex);
      return '';
    }
  }, [account, pid, sushi, masterChefContract, claimNft]);
  return {
    onClaimNft: claim
  };
};

const useTokenBalance = (tokenAddress, account, ethereum) => {
  const [balance, setBalance] = useState(new BigNumber$1(0));
  const block = useBlock();
  const fetchBalance = useCallback(async () => {
    const balance = await getBalance(ethereum, tokenAddress, account);
    setBalance(new BigNumber$1(balance));
  }, [account, ethereum, tokenAddress]);
  useEffect(() => {
    if (account) {
      fetchBalance();
    }
  }, [account, ethereum, setBalance, block, tokenAddress]);
  return balance;
};

const useStakedBalance = (pid, version, account) => {
  const [balance, setBalance] = useState(new BigNumber$1(0));
  const sushi = useSushi();
  const masterChefContract = getMasterChefContract(sushi, version);
  const block = useBlock();
  let masterChef = masterChefContract;
  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChef, pid, account);
    setBalance(new BigNumber$1(balance));
  }, [account, pid, sushi]);
  useEffect(() => {
    if (account && sushi) {
      fetchBalance();
    }
  }, [account, pid, setBalance, block, sushi]);
  return balance;
};

const usePendingNft = (account, pid) => {
  const [balance, setBalance] = useState(0);
  const sushi = useSushi();
  useEffect(() => {
    async function fetchData() {
      const res = await getPendingNFT(sushi, account, pid);
      setBalance(res);
    }

    if (sushi && account) {
      fetchData();
      const interval = setInterval(async () => {
        fetchData();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [sushi, setBalance, account]);
  return balance;
};

let _$e = t => t,
    _t$e,
    _t2$7;

const Input = ({
  endAdornment,
  onChange,
  placeholder,
  startAdornment,
  value,
  theme: _theme = 'light'
}) => {
  return React__default.createElement(StyledInputWrapper, {
    className: `${_theme}`
  }, !!startAdornment && startAdornment, React__default.createElement(StyledInput, {
    className: `${_theme}`,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }), !!endAdornment && endAdornment);
};

const StyledInputWrapper = styled.div(_t$e || (_t$e = _$e`
  align-items: center;
  border-radius: ${0}px;
  display: flex;
  height: 48px;

  &.light {
    background: #F5F5F9;
  }
  &.dark {
    background: #3E414B;
  }
`), props => props.theme.borderRadius);
const StyledInput = styled.input(_t2$7 || (_t2$7 = _$e`
  background: none;
  border: 0;
  font-size: 18px;
  font-weight: 500;
  flex: 1;
  height: 48px;
  margin: 0;
  padding: 0;
  outline: none;
  max-width: 225px;

  &.light {
    color: #535353;
  }
  &.dark {
    color: #ffffff;
  }
`));

let _$f = t => t,
    _t$f,
    _t2$8,
    _t3$4,
    _t4$3,
    _t5$2,
    _t6$1,
    _t7$1,
    _t8$1,
    _t9$1;

const TokenInput = ({
  max,
  symbol,
  onChange,
  onSelectMax,
  value,
  theme: _theme = 'light'
}) => {
  return React__default.createElement(StyledTokenInput, null, React__default.createElement(Box, {
    className: `${_theme}`
  }, React__default.createElement(StyleBox, null, React__default.createElement(StyleLabel, {
    className: `${_theme}`
  }, "Amount"), React__default.createElement(StyledMaxText, {
    className: `${_theme}`
  }, "Balance: ", max.toLocaleString('en-US'))), React__default.createElement(BoxInput, null, React__default.createElement(Input, {
    endAdornment: React__default.createElement(StyledTokenAdornmentWrapper, null, React__default.createElement("div", {
      className: 'max',
      onClick: onSelectMax
    }, "Max"), React__default.createElement(StyledSpacer, null), React__default.createElement(StyledTokenSymbol, {
      className: `${_theme}`
    }, symbol)),
    onChange: onChange,
    placeholder: "0",
    value: value,
    theme: _theme
  }))));
};

const StyleBox = styled.div(_t$f || (_t$f = _$f`
  display: flex;
  justify-content: space-between;
  align-items: center;
`));
const StyleLabel = styled.div(_t2$8 || (_t2$8 = _$f`
  color: #535353;
  font-weight: 500;
  width: 40%;

  &.light {
    color: #535353;
  }
  &.dark {
    color: #ffffff;
  }
`));
const StyledTokenInput = styled.div(_t3$4 || (_t3$4 = _$f`
  padding: 24px;
`));
const Box = styled.div(_t4$3 || (_t4$3 = _$f`
  border-radius: 10px;
  padding: 10px 20px;

  &.light {
    background: #F5F5F9;
  }
  &.dark {
    background: #3E414B;
  }
`));
const StyledSpacer = styled.div(_t5$2 || (_t5$2 = _$f`
  width: ${0}px;
`), props => props.theme.spacing[3]);
const StyledTokenAdornmentWrapper = styled.div(_t6$1 || (_t6$1 = _$f`
  align-items: center;
  display: flex;

  .max {
    font-size: 14px;
    cursor: pointer;
    background: linear-gradient(270deg, #96CF24 10.53%, #5AA62B 100%);
    border-radius: 3px;
    color: #fff;
    padding: 6px 10px;
  }
`));
const StyledMaxText = styled.div(_t7$1 || (_t7$1 = _$f`
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  height: 44px;
  justify-content: flex-end;
  &.light {
    color: #535353;
  }
  &.dark {
    color: #ffffff;
  }
`));
const StyledTokenSymbol = styled.span(_t8$1 || (_t8$1 = _$f`
  font-weight: 500;
  &.light {
    color: #535353;
  }
  &.dark {
    color: #ffffff;
  }
`));
const BoxInput = styled.div(_t9$1 || (_t9$1 = _$f`
  input {
      width: 40%;
  }
`));

let _$g = t => t,
    _t$g;

const Spacer = ({
  size: _size = 'md'
}) => {
  const {
    spacing
  } = useContext(ThemeContext);
  let s;

  switch (_size) {
    case 'bg':
      s = spacing[7];
      break;

    case 'lg':
      s = spacing[6];
      break;

    case 'sm':
      s = spacing[2];
      break;

    case 'md':
    default:
      s = spacing[4];
  }

  return React__default.createElement(StyledSpacer$1, {
    size: s
  });
};

const StyledSpacer$1 = styled.div(_t$g || (_t$g = _$g`
  height: ${0}px;
  width: ${0}px;
`), props => props.size, props => props.size);

let _$h = t => t,
    _t$h,
    _t2$9,
    _t3$5,
    _t4$4,
    _t5$3,
    _t6$2,
    _t7$2;

const ModalSuccess = ({
  text,
  amount,
  symbol,
  txhash
}) => {
  return React__default.createElement(StyledSuccessWrap, null, React__default.createElement(StyledModalSuccess, null, React__default.createElement(Spacer, {
    size: "md"
  }), React__default.createElement(StyleMaxText, null, "Your deposit is done!"), React__default.createElement(Spacer, {
    size: "md"
  }), React__default.createElement(StyleInfo, null, React__default.createElement(StyleLabel$1, null, "Amount:"), React__default.createElement(StyleContent, null, amount, " ", symbol))));
};

const StyledSuccessWrap = styled.div(_t$h || (_t$h = _$h``));
const StyledModalSuccess = styled.div(_t2$9 || (_t2$9 = _$h`
  padding: ${0}px;
  text-align: center;
  // display: none;
`), props => props.theme.spacing[4]);
const StyleMaxText = styled.div(_t3$5 || (_t3$5 = _$h`
  color: #535353;
  font-size: 22px;
`));
const StyleInfo = styled.div(_t4$4 || (_t4$4 = _$h`
  display: flex;
  justify-content: space-between;
`));
const StyleLabel$1 = styled.div(_t5$3 || (_t5$3 = _$h`
  color: #535353;
`));
const StyleContent = styled.div(_t6$2 || (_t6$2 = _$h`
  color: #535353;
`));
const StyledLink$1 = styled.a(_t7$2 || (_t7$2 = _$h`
  color: #535353;
  &.other-stake{
    padding: 10px;
    background-color: ${0};
    display: block;
    border-radius: 12px;
    text-align: center;
    color: ${0};
    text-decoration: none;
    font-weight: bold;
  }
`), props => props.theme.color.primary.main, props => props.theme.color.grey[500]);

const DepositModal = ({
  max,
  onConfirm,
  onDismiss,
  tokenName: _tokenName = '',
  decimals,
  theme: _theme = 'light'
}) => {
  const [val, setVal] = useState('');
  const [pendingTx, setPendingTx] = useState(false);
  const [successTx, setSuccessTx] = useState(false);
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max, decimals);
  }, [max]);
  const handleChange = useCallback(e => {
    setVal(e.currentTarget.value);
  }, [setVal]);
  const handleSelectMax = useCallback(() => {
    setVal(fullBalance);
  }, [fullBalance, setVal]);
  return React__default.createElement(Modal, {
    theme: _theme
  }, React__default.createElement(ModalTitle, {
    text: successTx ? '' : `Deposit ${_tokenName} Tokens`
  }), !successTx && React__default.createElement("span", null, React__default.createElement(TokenInput, {
    value: val,
    onSelectMax: handleSelectMax,
    onChange: handleChange,
    max: fullBalance,
    symbol: _tokenName,
    theme: _theme
  }), React__default.createElement(ModalActions, null, React__default.createElement(Button, {
    text: "Cancel",
    variant: "default",
    onClick: onDismiss
  }), React__default.createElement(Button, {
    variant: "secondary",
    disabled: pendingTx,
    text: pendingTx ? 'Pending Confirmation...' : 'Confirm',
    onClick: async () => {
      if (val && parseFloat(val) > 0) {
        setPendingTx(true);
        var tx = await onConfirm(val);
        setPendingTx(false);

        if (tx) {
          setSuccessTx(true);
        } else {
          if (onDismiss) onDismiss();
        }
      }
    }
  }))), successTx && React__default.createElement("span", null, React__default.createElement(ModalSuccess, {
    amount: val,
    symbol: _tokenName,
    txhash: "4f95c6770c75ddd3388f525",
    text: "deposit"
  }), React__default.createElement(ModalActions, null, React__default.createElement(Button, {
    text: "Close",
    variant: "default",
    onClick: onDismiss
  }))));
};

const WithdrawModal = ({
  onConfirm,
  onDismiss,
  max,
  tokenName: _tokenName = '',
  decimals,
  theme: _theme = 'light'
}) => {
  const [val, setVal] = useState('');
  const [pendingTx, setPendingTx] = useState(false);
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max, decimals);
  }, [max]);
  const handleChange = useCallback(e => {
    setVal(e.currentTarget.value);
  }, [setVal]);
  const handleSelectMax = useCallback(() => {
    setVal(fullBalance);
  }, [fullBalance, setVal]);
  return React__default.createElement(Modal, {
    theme: _theme
  }, React__default.createElement(ModalTitle, {
    text: `Withdraw ${_tokenName}`
  }), React__default.createElement(TokenInput, {
    onSelectMax: handleSelectMax,
    onChange: handleChange,
    value: val,
    max: fullBalance,
    symbol: _tokenName,
    theme: _theme
  }), React__default.createElement(ModalActions, null, React__default.createElement(Button, {
    text: "Cancel",
    variant: "default",
    onClick: onDismiss
  }), React__default.createElement(Button, {
    variant: "secondary",
    disabled: pendingTx,
    text: pendingTx ? 'Pending Confirmation' : 'Confirm',
    onClick: async () => {
      if (val && parseFloat(val) > 0) {
        setPendingTx(true);
        await onConfirm(val);
        setPendingTx(false);
        onDismiss();
      }
    }
  })));
};

let _$i = t => t,
    _t$i,
    _t2$a,
    _t3$6,
    _t4$5,
    _t5$4,
    _t6$3,
    _t7$3,
    _t8$2,
    _t9$2,
    _t10,
    _t11,
    _t12,
    _t13,
    _t14,
    _t15,
    _t16,
    _t17,
    _t18,
    _t19,
    _t20,
    _t21;
const HEDER_HEIGHT = 370;

const FarmCards = ({
  theme,
  web3,
  setVisibleWalletModal,
  setVisibleUserWalletModal
}) => {
  const [farms] = useFarms();
  const [farmsValue, setFarmsValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const stakedValue = useAllStakedValue();
  const [searchText, setSearchText] = useState('');
  const [farmDisplay, setFarmDisplay] = useState([]);
  useEffect(() => {
    const farms_lp = Object.values(farms).filter(farm => !farm.stake);
    setFarmDisplay(farms);
  }, [farms]);
  const rows = farmDisplay.reduce((farmRows, farm, i) => {
    var sv = (stakedValue || []).find(e => {
      return parseInt(e.pid) == farm.pid && e.version == farm.version;
    });
    const farmWithStakedValue = { ...farm,
      tokenAmount: (sv || {}).tokenAmount || new BigNumber$1(0),
      token2Amount: (sv || {}).token2Amount || new BigNumber$1(0),
      totalToken2Value: (sv || {}).totalToken2Value || new BigNumber$1(0),
      tokenPriceInToken2: (sv || {}).tokenPriceInToken2 || new BigNumber$1(0),
      poolWeight: (sv || {}).poolWeight || new BigNumber$1(0),
      usdValue: (sv || {}).usdValue || new BigNumber$1(0),
      rewardTokenPrice: (sv || {}).rewardTokenPrice || new BigNumber$1(0),
      avaiableReward: (sv || {}).avaiableReward || new BigNumber$1(0)
    };
    const newFarmRows = [...farmRows];
    newFarmRows[newFarmRows.length - 1].push(farmWithStakedValue);
    return newFarmRows;
  }, [[]]);

  const handleSearchFarm = e => {
    const farms_lp = Object.values(farms).filter(farm => farm.addLiquidityLink !== '');

    if (e.target.value === '') {
      return setFarmDisplay(farms);
    }

    setSearchText(e.target.value);
    let searchResult = farms.filter(farm => farm.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFarmDisplay(searchResult);
  };

  const innerHeight = window.innerHeight - HEDER_HEIGHT;
  return React__default.createElement(FarmPageWrapper, null, React__default.createElement("div", {
    className: "actions-area"
  }, React__default.createElement("div", {
    className: 'search-area'
  }, React__default.createElement("div", {
    className: "wrap-search"
  }, React__default.createElement("input", {
    type: `text`,
    className: `${theme}`,
    placeholder: 'Search pool',
    onChange: handleSearchFarm
  }), React__default.createElement("img", {
    className: "icon-search",
    src: "https://lzp.s3.ap-southeast-1.amazonaws.com/search.png"
  })))), React__default.createElement(CardItem, null, React__default.createElement(StyledCards, {
    maxHeight: `${innerHeight}px`
  }, !!rows[0].length && rows.map((farmRow, i) => React__default.createElement(StyledRow, {
    key: i
  }, farmRow.map((farm, j) => React__default.createElement(FarmCard, {
    theme: theme,
    web3: web3,
    setVisibleWalletModal: setVisibleWalletModal,
    key: j,
    farm: farm
  })))))));
};

const FarmCard = ({
  farm,
  web3,
  setVisibleWalletModal,
  theme
}) => {
  let poolActive = usePoolActive(farm.pid);
  const sushi = useSushi();
  const [newReward, setNewRewad] = useState();
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [pendingTx, setPendingTx] = useState(false);
  const [pendingTxNft, setPendingTxNft] = useState(false);
  const [pendingTxClaimNFT, setPendingTxClaimNFT] = useState(false);
  const [pendingEnableFarm, setPendingEnableFarm] = useState(false);
  const [totalStake, setTotalStake] = useState();
  useEffect(() => {
    async function fetchData() {
      const data = await getLPTokenStaked(sushi, farm.pid, farm.version);
      setTotalStake(data);
    }

    if (sushi) {
      fetchData();
    }
  }, [sushi, setTotalStake]);
  useEffect(() => {
    async function fetchData() {
      const supply = await getNewRewardPerBlock(sushi, farm.pid, farm.version, farm.rewardToken.address);
      setNewRewad(supply);
    }

    if (sushi && poolActive) {
      fetchData();
    }
  }, [sushi, setNewRewad, poolActive]);
  let apy = newReward && farm.poolWeight && farm.rewardTokenPrice && farm.usdValue ? parseFloat(farm.rewardTokenPrice.times(NUMBER_BLOCKS_PER_YEAR).times(newReward.div(new BigNumber$1(10).pow(farm.decimalsReward))).div(farm.usdValue).times(100).toFixed(2)) : 0;
  let earnings = useEarnings(farm.pid, farm.version, web3.account, farm.isConvertNft);
  let nftAmountConvert = useNFTAmount(farm.pid, farm.version, web3.account, farm.isConvertNft);
  let earningNFT = earnings.div(nftAmountConvert);
  let amountConvertNft = useNFTAmount(farm.pid, farm.version, web3.account, farm.isConvertNft);
  let earned = getBalanceNumber(earnings, farm.decimalsReward);
  let harvestDisable = earned < 1 && farm.isConvertNft ? 'disable' : '';
  const allowance = useAllowance(farm.lpContract, farm.version, web3.account);
  const {
    onApprove
  } = useApprove(farm.lpContract, farm.version, web3.account);
  const handleApprove = useCallback(async () => {
    try {
      const txHash = await onApprove();
    } catch (e) {
      console.log(e);
    }
  }, [onApprove]);
  const tokenBalance = useTokenBalance(farm.lpContract.options.address, web3.account, web3.library && web3.library.provider);
  const stakedBalance = useStakedBalance(farm.pid, farm.version, web3.account);
  const pendingNFT = usePendingNft(web3.account, farm.pid);
  const {
    onStake
  } = useStake(farm.pid, farm.version, farm.decimals, web3.account);
  const {
    onUnstake
  } = useUnstake(farm.pid, farm.version, farm.decimals, web3.account);
  const [onPresentDeposit] = useModal(React__default.createElement(DepositModal, {
    theme: theme,
    max: tokenBalance,
    onConfirm: onStake,
    tokenName: farm.lpToken.toUpperCase(),
    decimals: farm.decimals
  }));
  const [onPresentWithdraw] = useModal(React__default.createElement(WithdrawModal, {
    theme: theme,
    max: stakedBalance,
    onConfirm: onUnstake,
    tokenName: farm.lpToken.toUpperCase(),
    decimals: farm.decimals
  }));
  var shareOfPool = 0;

  if (totalStake && stakedBalance) {
    shareOfPool = stakedBalance.div(totalStake).toNumber();
  }

  const stakedVal = getBalanceNumber(stakedBalance, farm.decimals).toFixed(3);
  const {
    onReward
  } = useReward(farm.pid, farm.version, web3.account);
  const {
    onClaimNft
  } = useClaimNft(farm.pid, farm.version, web3.account);
  const handleHarvest = useCallback(async () => {
    if (harvestDisable) {
      return;
    }

    try {
      const txHash = await onReward();
    } catch (error) {
      console.log(error);
    }
  }, [onReward, harvestDisable]);
  const handleClaimNFT = useCallback(async () => {
    if (pendingNFT > 0) {
      try {
        const txHash = await onClaimNft();
      } catch (error) {
        console.log(error);
      }
    }
  }, [onClaimNft, pendingNFT]);
  var claimButtonStyle = pendingNFT > 0 ? 'btn-nft-default' : 'btn-nft-disable';

  if (main_42) {
    return React__default.createElement("span", {
      style: {
        width: '100%'
      }
    }, React__default.createElement(FarmDetail, {
      className: `mobile ${theme}`,
      onClick: () => setIsShowDetail(!isShowDetail)
    }, !farm.stake && React__default.createElement("div", {
      className: 'farm-icon',
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, React__default.createElement("img", {
      style: {
        height: '32px',
        borderRadius: '50%'
      },
      src: farm.icon,
      alt: ''
    }), React__default.createElement("img", {
      style: {
        height: '19px',
        borderRadius: '50%',
        marginLeft: '-10px',
        background: '#DCDCDC'
      },
      src: farm.icon2,
      alt: ''
    })), farm.stake && React__default.createElement("div", {
      className: 'farm-icon',
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, React__default.createElement("img", {
      style: {
        height: '32px',
        borderRadius: '50%'
      },
      src: farm.icon,
      alt: ''
    })), React__default.createElement("div", {
      className: `farm-name ${theme}`
    }, farm.name), React__default.createElement("div", {
      className: 'farm-title farm-earned'
    }, React__default.createElement("div", {
      className: 'subtitle'
    }, farm.isConvertNft ? 'Earned NFT' : 'Earned'), React__default.createElement("div", {
      className: `value ${theme}`
    }, React__default.createElement(Value, {
      value: earned
    }), " ", !farm.isConvertNft && farm.rewardToken.symbol)), React__default.createElement("div", {
      className: 'farm-title farm-APR'
    }, React__default.createElement("div", {
      className: 'subtitle'
    }, "APY"), React__default.createElement("div", {
      className: 'value'
    }, apy ? `${apy.toLocaleString('en-US')}%` : '~')), React__default.createElement("div", {
      className: 'farm-detail'
    }, React__default.createElement("img", {
      src: isShowDetail ? 'https://lzp.s3.ap-southeast-1.amazonaws.com/arrow-up.svg' : 'https://lzp.s3.ap-southeast-1.amazonaws.com/arrow-down.svg',
      alt: ''
    }))), React__default.createElement(MoreDetails, {
      className: `mobile ${!isShowDetail ? 'detail-hidden' : 'detail-open'}`
    }, React__default.createElement("div", {
      className: 'harvest'
    }, React__default.createElement("div", {
      className: 'content'
    }, React__default.createElement("div", {
      className: 'reward-info'
    }, React__default.createElement("div", {
      className: "title"
    }, "Available:\u00A0"), !farm.isConvertNft && React__default.createElement("div", null, React__default.createElement(Value, {
      value: earned
    })), farm.isConvertNft && React__default.createElement("div", null, React__default.createElement(Value, {
      value: earned
    }))), !farm.isConvertNft && React__default.createElement("div", {
      className: 'reward-info'
    }, React__default.createElement("div", {
      className: "title"
    }, "Locked:"), React__default.createElement("div", null, React__default.createElement(Value, {
      value: 0
    }))), farm.isConvertNft && React__default.createElement("div", {
      className: 'reward-info'
    }, React__default.createElement("div", {
      className: "title"
    }, "Pending NFT: "), React__default.createElement("div", null, "\u00A0\u00A0\u00A0", React__default.createElement("span", {
      className: "padding-nft"
    }, pendingNFT)))), !web3.account && React__default.createElement("div", {
      className: 'btn btn-harvest',
      onClick: setVisibleWalletModal
    }, "Harvest"), web3.account && React__default.createElement("div", null, React__default.createElement("div", {
      className: `btn btn-harvest ${harvestDisable}`,
      onClick: async () => {
        setPendingTx(true);
        await handleHarvest();
        setPendingTx(false);
      }
    }, React__default.createElement("span", null, pendingTx ? 'Collecting...' : 'Harvest')), farm.isConvertNft && React__default.createElement("div", {
      className: `${claimButtonStyle}`,
      onClick: async () => {
        setPendingTxClaimNFT(true);
        await handleClaimNFT();
        setPendingTxClaimNFT(false);
      }
    }, pendingTxClaimNFT ? 'Claim...' : 'Claim NFT'))), !web3.account && React__default.createElement("div", {
      className: 'enable-farm'
    }, React__default.createElement("div", {
      className: 'btn',
      onClick: setVisibleWalletModal
    }, 'Enable Farm')), web3.account && React__default.createElement("div", {
      className: 'enable-farm'
    }, !allowance.toNumber() ? React__default.createElement("div", {
      className: 'btn',
      onClick: async () => {
        setPendingEnableFarm(true);
        await handleApprove();
        setPendingEnableFarm(false);
      }
    }, pendingEnableFarm ? 'Enable...' : 'Enable Farm') : React__default.createElement("div", {
      className: 'stake-unstake'
    }, React__default.createElement("div", null, React__default.createElement("div", {
      className: 'token-info'
    }, React__default.createElement("div", {
      className: "title"
    }, "Tokens Staked:\u00A0 "), React__default.createElement("div", null, React__default.createElement(ValueStyled, null, " ", stakedVal))), React__default.createElement("div", {
      className: 'token-info'
    }, React__default.createElement("div", {
      className: "title"
    }, "Share of Pool:\u00A0 "), React__default.createElement("div", null, (shareOfPool * 100).toFixed(5), "%"))), React__default.createElement("div", {
      className: "stake-action"
    }, React__default.createElement("div", {
      className: 'btn approved btn-stake',
      onClick: onPresentDeposit
    }, "Stake LP"), React__default.createElement("div", {
      className: 'unstake',
      onClick: onPresentWithdraw
    }, " - ")))), React__default.createElement("div", {
      className: 'more-info'
    }, React__default.createElement("div", {
      className: 'token-info'
    }, React__default.createElement("div", {
      className: 'link-area'
    }, React__default.createElement("div", {
      className: 'item'
    }, React__default.createElement("a", {
      target: "_blank",
      href: farm.addLiquidityLink
    }, "Get ", farm.lpToken)), React__default.createElement("div", {
      className: 'item'
    }, React__default.createElement("a", {
      href: `https://bscscan.com/address/${farm.lpTokenAddress}`,
      target: "_blank"
    }, "View contract")))), React__default.createElement("div", {
      className: 'farm-info'
    }, React__default.createElement("div", {
      className: 'farm-title farm-liquidity'
    }, React__default.createElement("div", {
      className: 'subtitle'
    }, "TVL"), React__default.createElement("div", {
      className: 'value'
    }, farm.usdValue && React__default.createElement("div", null, "$", parseFloat(farm.usdValue.toFixed(0)).toLocaleString('en-US')))), React__default.createElement("div", {
      className: 'farm-title farm-mutiplier'
    }, React__default.createElement("div", {
      className: 'subtitle'
    }, "Reward"), !farm.isConvertNft && React__default.createElement("div", {
      className: 'value'
    }, newReward ? `${getBalanceNumber(newReward, farm.decimalsReward).toFixed(2)} ${farm.rewardToken.symbol} / Block` : '~'), farm.isConvertNft && React__default.createElement("div", {
      className: 'value'
    }, newReward ? `${getBalanceNumber(newReward, farm.decimalsReward).toFixed(5)} / Block` : '~'))))));
  }

  return React__default.createElement("span", {
    style: {
      width: '100%'
    }
  }, React__default.createElement(WrapFarmDetail, {
    className: `${theme}`
  }, React__default.createElement("span", null, React__default.createElement(FarmDetail, {
    onClick: () => setIsShowDetail(!isShowDetail)
  }, !farm.stake && React__default.createElement("div", {
    className: 'farm-icon',
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, React__default.createElement("img", {
    style: {
      height: '40px',
      borderRadius: '50%'
    },
    src: farm.icon,
    alt: ''
  }), React__default.createElement("img", {
    style: {
      height: '30px',
      borderRadius: '50%',
      marginLeft: '-10px',
      background: '#DCDCDC'
    },
    src: farm.icon2,
    alt: ''
  })), farm.stake && React__default.createElement("div", {
    className: 'farm-icon',
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, React__default.createElement("img", {
    style: {
      height: '32px',
      borderRadius: '50%'
    },
    src: farm.icon,
    alt: ''
  })), React__default.createElement("div", {
    className: `farm-name ${theme}`
  }, farm.name), React__default.createElement("div", {
    className: 'farm-title farm-earned farm-earned-desktop'
  }, React__default.createElement("div", null, React__default.createElement("img", {
    style: {
      height: '23px',
      borderRadius: '50%',
      marginRight: '10px'
    },
    src: farm.rewardLogo,
    alt: ''
  })), React__default.createElement("div", null, React__default.createElement("div", {
    className: 'subtitle'
  }, farm.isConvertNft ? 'Earned NFT' : 'Earned'), React__default.createElement("div", {
    className: `value ${theme}`
  }, React__default.createElement(Value, {
    value: earned
  }), " ", !farm.isConvertNft && farm.rewardToken.symbol))), React__default.createElement("div", {
    className: 'farm-title farm-APR'
  }, React__default.createElement("div", {
    className: 'subtitle'
  }, "APY"), React__default.createElement("div", {
    className: 'value'
  }, apy ? `${apy.toLocaleString('en-US')}%` : '~')), React__default.createElement("div", {
    className: 'farm-title farm-liquidity'
  }, React__default.createElement("div", {
    className: 'subtitle'
  }, "TVL"), React__default.createElement("div", {
    className: `value ${theme}`
  }, farm.usdValue && React__default.createElement("span", {
    className: "tvl-value"
  }, "$", parseFloat(farm.usdValue.toFixed(0)).toLocaleString('en-US')))), React__default.createElement("div", {
    className: 'farm-title farm-mutiplier'
  }, React__default.createElement("div", {
    className: 'subtitle'
  }, "Reward"), !farm.isConvertNft && React__default.createElement("div", {
    className: 'value-reward'
  }, newReward ? `${getBalanceNumber(newReward, farm.decimalsReward).toFixed(2)} ${farm.rewardToken.symbol} / Block` : '~'), farm.isConvertNft && React__default.createElement("div", {
    className: 'value-reward'
  }, newReward ? `${getBalanceNumber(newReward, farm.decimalsReward).toFixed(5)} / Block` : '~')), React__default.createElement("div", {
    className: 'farm-detail'
  }, React__default.createElement("div", {
    className: 'text'
  }, "Detail"), React__default.createElement("img", {
    src: isShowDetail ? 'https://lzp.s3.ap-southeast-1.amazonaws.com/arrow-up.svg' : 'https://lzp.s3.ap-southeast-1.amazonaws.com/arrow-down.svg',
    alt: ''
  }))))), React__default.createElement(WrapMoreDetails, null, React__default.createElement("span", {
    className: `${!isShowDetail ? 'detail-hidden' : 'detail-open'}`,
    style: {
      width: '100%',
      maxWidth: '1200px'
    }
  }, React__default.createElement(MoreDetails, null, React__default.createElement("div", {
    className: 'link-area'
  }, React__default.createElement("div", {
    className: 'item'
  }, React__default.createElement("a", {
    target: "_blank",
    href: farm.addLiquidityLink
  }, "Get ", farm.lpToken)), React__default.createElement("div", {
    className: 'item'
  }, React__default.createElement("a", {
    href: `https://bscscan.com/address/${farm.lpTokenAddress}`,
    target: "_blank"
  }, "View contract"))), React__default.createElement("div", {
    className: 'harvest'
  }, React__default.createElement("div", {
    className: 'content'
  }, React__default.createElement("div", {
    className: 'reward-info'
  }, React__default.createElement("div", {
    className: "title"
  }, "Available:\u00A0"), !farm.isConvertNft && React__default.createElement("div", null, React__default.createElement(Value, {
    value: earned
  })), farm.isConvertNft && React__default.createElement("div", null, React__default.createElement(Value, {
    value: earned
  }))), !farm.isConvertNft && React__default.createElement("div", {
    className: 'reward-info'
  }, React__default.createElement("div", {
    className: "title"
  }, "Locked:"), React__default.createElement("div", null, React__default.createElement(Value, {
    value: 0
  }))), farm.isConvertNft && React__default.createElement("div", {
    className: 'reward-info'
  }, React__default.createElement("div", {
    className: "title"
  }, "Pending NFT: "), React__default.createElement("div", null, "\u00A0\u00A0\u00A0", React__default.createElement("span", null, pendingNFT)))), !web3.account && React__default.createElement("div", {
    className: 'btn',
    onClick: setVisibleWalletModal
  }, "Harvest"), web3.account && React__default.createElement("div", null, React__default.createElement("div", {
    className: `btn ${harvestDisable}`,
    onClick: async () => {
      setPendingTx(true);
      await handleHarvest();
      setPendingTx(false);
    }
  }, React__default.createElement("span", null, pendingTx ? 'Collecting...' : 'Harvest')), farm.isConvertNft && React__default.createElement("div", {
    className: `${claimButtonStyle}`,
    onClick: async () => {
      setPendingTxClaimNFT(true);
      await handleClaimNFT();
      setPendingTxClaimNFT(false);
    }
  }, pendingTxClaimNFT ? 'Claim...' : 'Claim NFT'))), React__default.createElement("div", null), !web3.account && React__default.createElement("div", {
    className: 'enable-farm'
  }, React__default.createElement("div", {
    className: 'btn',
    onClick: setVisibleWalletModal
  }, 'Enable Farm')), web3.account && React__default.createElement("div", {
    className: 'enable-farm'
  }, !allowance.toNumber() ? React__default.createElement("div", {
    className: 'btn',
    onClick: async () => {
      try {
        setPendingEnableFarm(true);
        await handleApprove();
        setPendingEnableFarm(false);
      } catch (e) {
        console.log(e);
      }
    }
  }, pendingEnableFarm ? 'Enable...' : 'Enable Farm') : React__default.createElement("div", {
    className: 'stake-unstake'
  }, React__default.createElement("div", null, React__default.createElement("div", {
    className: 'token-info'
  }, React__default.createElement("div", {
    className: "title"
  }, "Tokens Staked:\u00A0 "), React__default.createElement("div", null, React__default.createElement(ValueStyled, null, " ", stakedVal))), React__default.createElement("div", {
    className: 'token-info'
  }, React__default.createElement("div", {
    className: "title"
  }, "Share of Pool:\u00A0 "), React__default.createElement("div", null, (shareOfPool * 100).toFixed(5), "%"))), React__default.createElement("div", {
    className: "stake-action"
  }, React__default.createElement("div", {
    className: 'btn approved',
    onClick: onPresentDeposit
  }, "Stake LP"), React__default.createElement("div", {
    className: 'unstake',
    onClick: onPresentWithdraw
  }, " - "))))))));
};

const MoreDetails = styled.div(_t$i || (_t$i = _$i`
  padding: 15px 20px;
  width: 100%;
  z-index: 1;
  display: grid;
  grid-template-columns: 25% 30% 3% 35%;

  .btn-nft-default {
    margin-top: 10px;
    border: 1px solid #96CF24;
    padding: 3px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px !important;
    color: #96CF24;
    font-family: UniviaPro-Light;
  }

  .btn-nft-disable {
    margin-top: 10px;
    border: 1px solid rgb(205 212 190);
    padding: 3px 12px;
    border-radius: 5px;
    cursor: not-allowed;
    font-size: 14px !important;
    color: #9CA3AF;
    font-family: UniviaPro-Light;
  }

  .link-area {
    display: grid;
    .item {
      display: flex;
      align-items: center;
      a {
        font-size: 14px;
        font-weight: 500;
        line-height: 23px;
        background: linear-gradient(to right, #5AA62B 0%, #96CF24 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    @media (max-width: 767px) {
      .item {
        margin-bottom: 10px;
        a {
          font-size: 12px;
          line-height: 14px;
        }
      }
    }
  }
  .enable-farm {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border: 1px solid rgba(128,128,128,0.4);
    border-radius: 15px;
    justify-content: center;

    .stake-action {
      display: flex;
      align-items: center;
    }

    .btn {
      background: linear-gradient(270deg, #96CF24 10.53%, #5AA62B 100%);
      border-radius: 5px;
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 500;
      line-height: 30px;
      width: 180px;
      text-align: center;
      padding: 0 40px;
      cursor: pointer;
      height: 32px;
      max-width: 200px;

      &.approved {
        width: 90px;
        padding: 0 10px;
      }
    }    
    .unstake {
      border-radius: 5px;
      color: #96CF24;
      font-size: 28px;
      line-height: 27px;
      padding: 0 10px;
      cursor: pointer;
      font-weight: 600 !important;
      border: 1px solid #96CF24;
      margin-left: 5px;
      height: 32px;
    }
    .stake-unstake {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .token-info {
        display: flex;
        .title {
          font-size: 14px !important;
          font-weight: 300;
          color: #9CA3AF;
          min-width: 100px;
          font-weight: 600;
        }
      }
    }
  }
  .harvest {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border: 1px solid rgba(128, 128, 128, 0.4);
    border-radius: 15px;
    .padding-nft {
      font-size: 16px;
    }
    .content {
      .label {
        color: #535353;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        span {
          color: #50E3C2;
        }
      }
      .value {
        color: #535353;
        font-size: 18px;
        font-weight: 500;
      }
      .reward-info {
        font-size: 14px;
        display: flex;
        .title {
          font-size: 14px !important;
          color: #9CA3AF;
          min-width: 70px;
          font-weight: 600;
        }
      }
    }
    .btn {
      background: linear-gradient(270deg, #96CF24 10.53%, #5AA62B 100%);
      border-radius: 5px;
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 500;
      line-height: 30px;
      text-align: center;
      padding: 0 10px;
      cursor: pointer;
      height: 32px;
    }

    .disable {
      cursor: not-allowed;
      background: #9CA3AF;
    }
  }
  @media (max-width: 768px) {
    padding: 0px 0px;
    &.detail-hidden {
      max-height: 0px;
      overflow: hidden;
      transition: max-height 0.15s ease-out;
    }

    &.detail-open {
      padding: 15px 20px;
      max-height: 292px;
      transition: max-height 0.25s ease-in;
    }
  }
  &.mobile {
    grid-template-columns: none;
    .harvest {
      margin-bottom: 10px;
      .btn-harvest {
        width: 90px;
        height: 32px;
      }

      .disable {
        cursor: not-allowed;
        background: #9CA3AF;
      }
    }
    .enable-farm {
      .btn, .stake-unstake {
        width: 100%;
        .btn {
          margin-bottom: 0;
        }
      }
      .btn-stake {
        width: 90px;
        height: 32px;
        margin-left: 10px;
      }
    }
    .more-info {
      margin-top: 10px;
      display: grid;
      grid-template-columns: 50% 50%;
      .farm-info {
        .farm-title {
          text-align: right;
          color: #535353;
          .subtitle {
            font-size: 12px;
            line-height: 23px;
            color: #9CA3AF;
          }
          .value {
            font-size: 14px;
            font-weight: 500;
            @media (max-width: 767px) {
              font-size: 12px;
              line-height: 14px;
            }
          }
        }
      }
    }
  }
`));
const FarmDetail = styled.div(_t2$a || (_t2$a = _$i`
  padding: 10px 10px;
  z-index: 1;
  display: grid;
  column-gap: 8px;
  grid-template-columns: 68px 200px 226px 180px 200px 215px 65px;
  cursor: pointer;
  &.mobile {
    border-bottom: 1px solid rgba(128, 128, 128, 0.2);
    grid-template-columns: 12% 30% 32% 15% 0%;
    padding: 10px 20px;
  }
  &.light {
    background: #ffffff;
  }
  &.dark {
    background: #1B1D1C;
  }
  .farm-name {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 16px;
    }

    &.light {
      color: #535353;
    }
    &.dark {
      color: #ffffff;
    }
  }
  .farm-title {
    .tvl-value {
      font-size: 16px;
      font-weight: 600;
    }
    .subtitle {
      color: #9CA3AF;
      font-size: 14px;
      line-height: 12px;
      font-weight: 400;
      margin-bottom: 10px;

      @media (max-width: 767px) {
        font-size: 12px;
        line-height: 14px;
      }
    }
    .light {
      color: #535353;
    }
    .dark {
      color: #ffffff;
    }
    .value {
      font-size: 16px;
      line-height: 17px;
      @media (max-width: 767px) {
        font-size: 14px;
        line-height: 14px;
        font-weight: 600;

        span {
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
    &.farm-earned{
      .value {
        @media (max-width: 767px) {
          font-weight: 600;
        }
        &.light {
          color: #535353;
        }
        &.dark {
          color: #FFFFFF;
        }
      }
    }
    &.farm-earned-desktop {
      display: flex;
      align-items: center;
    }
    &.farm-APR {
      .value {
        background: linear-gradient(to right,#5AA62B 0%,#96CF24 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @media (max-width: 767px) {

          span {

          }
        }
      }
    }
  }
  .farm-detail {
    display: flex;
    align-items: center;
    cursor: pointer;
    .text {
      font-size: 14px;
      font-weight: 500;
      line-height: 14px;
      padding-right: 8px;
      background: linear-gradient(to right,#5AA62B 0%,#96CF24 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .value-reward {
    font-weight: 600;
    font-size: 16px;
  }
`));
const RainbowLight = keyframes(_t3$6 || (_t3$6 = _$i`

	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`));
const StyledLink$2 = styled(Link)(_t4$5 || (_t4$5 = _$i`
  text-decoration: none;
`));
const StyledCards = styled.div(_t5$4 || (_t5$4 = _$i`
  width: 100%;

  @media (max-width: 768px) {
    width: 100vw;
    margin: 0 auto;
    max-height: 100%;
  }
`));
const NumberClock = styled.span(_t6$3 || (_t6$3 = _$i`
  background: #40444F;
  border-radius: 10px;
  padding: 5px 10px;
`));
const WrapFarmDetail = styled.span(_t7$3 || (_t7$3 = _$i`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);

  &.light {
    background: #ffffff;
  }

  &.dark {
    background: #1B1D1C;
  }
`));
const WrapMoreDetails = styled.span(_t8$2 || (_t8$2 = _$i`
  width: 100%;
  display: flex;
  justify-content: center;

  .detail-hidden {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.15s ease-out;
  }

  .detail-open {
    max-height: 120px;
    transition: max-height 0.25s ease-in;
  }
`));
const CardHeader = styled.div(_t9$2 || (_t9$2 = _$i`
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;

  @media (max-width: 768px) {
    display: block;
    padding: 0px;
  }
`));
const CardHeaderLeft = styled.div(_t10 || (_t10 = _$i`

`));
const CardTextShow = styled.div(_t11 || (_t11 = _$i`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #CECDBA;
  font-weight: 500;
  padding: 5px 0px;
`));
const CardHeaderRight = styled.div(_t12 || (_t12 = _$i`
  min-width: 300px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`));
const CardCountDown = styled.div(_t13 || (_t13 = _$i`
  text-align: center;
  color: #CECDBA;
  font-size: 14px;
  margin-top: 10px;
`));
const CardStatus = styled.div(_t14 || (_t14 = _$i`
  border: 1px solid #2FF37D;
  box-sizing: border-box;
  border-radius: 10px;
  color: #2FF37D;
  width: 100px;
  text-align: center;
  text-transform: capitalize;
`));
const CardItem = styled.div(_t15 || (_t15 = _$i`
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`));
const ProjectName = styled.span(_t16 || (_t16 = _$i`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #CECDBA;
`));
const StyledLoadingWrapper = styled.div(_t17 || (_t17 = _$i`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`));
const StyledRow = styled.div(_t18 || (_t18 = _$i`
  display: flex;
  // margin-bottom: ${0}px;
  flex-flow: row wrap;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`), props => props.theme.spacing[4]);
const StyledTitle = styled.h4(_t19 || (_t19 = _$i`
  color: ${0};
  font-size: 20px;
  font-weight: 700;
  margin: ${0}px 0 0;
  padding: 0;
`), props => props.theme.color.white, props => props.theme.spacing[2]);
const ValueStyled = styled.span(_t20 || (_t20 = _$i`
  font-size: 1.6rem;
`));
const FarmPageWrapper = styled.div(_t21 || (_t21 = _$i`
  .actions-area {
    padding: 0 100px;
    display: flex;
    width: 100%;
    justify-content: center;

    .search-area {
      justify-content: flex-end;
      width: 100%;
      max-width: 1200px;
      display: flex;

      .wrap-search {
        position: relative;
        .icon-search {
          position: absolute;
          right: 5px;
          top: 3px;
        }
      }

      .label {
        margin-left: 20px;
        color: #535353;
        font-size: 14px;
        font-weight: 500;
      }
      .light {
        background: #FFFFFF;
      }
      .dark {
        background: #2A2C32;
      }
      input {
        border-radius: 15px;
        color: #9CA3AF;
        font-size: 14px;
        font-weight: 500;
        padding: 5px 10px;
        width: 280px;
        border: none;
        font-weight: 600;
        &:focus {
          outline: none;
        }
      }
    }
  }
`));

let _$j = t => t,
    _t$j,
    _t2$b,
    _t3$7,
    _t4$6;

const Home = ({
  theme,
  web3,
  subPage,
  setVisibleWalletModal,
  setVisibleUserWalletModal
}) => {
  const [isBusy, setBusy] = useState(true);
  let dataPrices = usePrice('LZ');

  function checkData() {
    let cacheValue = localStorage.getItem('CACHE_usePrice_value');
    let prices = JSON.parse(cacheValue) || {};

    if (prices.lz && isBusy) {
      setBusy(false);
    }
  }

  useEffect(() => {
    setInterval(async () => {
      checkData();
    }, 1000);
  });
  const [isShowLockedToken, seIsShowLockedToken] = useState(false);
  const [balanceDetails, setBalanceDetails] = useState(localStorage.getItem('POOL_BALANCE_DETAILS') ? true : false);
  const stakeLPBalance = useStakeBSCX(web3 && web3.account);
  const lzBalance = useLZBalance(web3 && web3.account);
  const totalUserLocked = useTokenLocked(web3 && web3.account);
  const totalRewardLocked = useTotalLocked(web3 && web3.account);
  const country = useSaveCountry(web3 && web3.account);

  const toggleBalanceDetail = value => {
    setBalanceDetails(value);
    localStorage.setItem('POOL_BALANCE_DETAILS', value);
  };

  const [onPresentShowLockedRewards] = useModal(React__default.createElement(LockedRewardsModal, {
    web3: web3,
    theme: theme
  }));

  if (web3.chainId !== 56 && web3.active) {
    return React__default.createElement(Page, null, React__default.createElement(Box$1, {
      className: "mt-4"
    }, React__default.createElement("div", {
      className: "warning-text"
    }, "Please connect to Binance Smart Chain network."), React__default.createElement("div", {
      className: "box-bottom"
    }, web3.account && React__default.createElement("div", {
      className: "wrap-box-bottom"
    }, React__default.createElement("div", {
      className: "address",
      onClick: setVisibleUserWalletModal
    }, React__default.createElement("img", {
      src: "https://lzp.s3.ap-southeast-1.amazonaws.com/logo.png"
    }), "\u00A0\u00A0 ", web3.account && React__default.createElement("span", null, web3.account.substr(0, 6), "...", web3.account.substr(web3.account.length - 4, web3.account.length)))))));
  }

  const eyesOpen = React__default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M7.99967 3.33301C4.62428 3.33301 2.64398 5.77443 1.80651 7.12551C1.57922 7.49221 1.46557 7.67556 1.47696 7.98045C1.48836 8.28533 1.61988 8.46586 1.88292 8.82691C2.8596 10.1675 5.07266 12.6663 7.99967 12.6663C10.9267 12.6663 13.1397 10.1675 14.1164 8.82691C14.3795 8.46586 14.511 8.28533 14.5224 7.98045C14.5338 7.67556 14.4201 7.49221 14.1928 7.12551C13.3554 5.77443 11.3751 3.33301 7.99967 3.33301Z",
    stroke: "url(#paint0_linear)",
    strokeWidth: "2"
  }), React__default.createElement("circle", {
    cx: "7.99967",
    cy: "7.99967",
    r: "2.66667",
    fill: "url(#paint1_linear)"
  }), React__default.createElement("defs", null, React__default.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "13.2628",
    y1: "12.6663",
    x2: "1.33301",
    y2: "12.6663",
    gradientUnits: "userSpaceOnUse"
  }, React__default.createElement("stop", {
    stopColor: "#96CF24"
  }), React__default.createElement("stop", {
    offset: "1",
    stopColor: "#5AA62B"
  })), React__default.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "10.1049",
    y1: "10.6663",
    x2: "5.33301",
    y2: "10.6663",
    gradientUnits: "userSpaceOnUse"
  }, React__default.createElement("stop", {
    stopColor: "#96CF24"
  }), React__default.createElement("stop", {
    offset: "1",
    stopColor: "#5AA62B"
  }))));
  const eyesClose = React__default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.6635 7.87554C10.6005 6.50162 9.49782 5.39894 8.1239 5.33594L10.6635 7.87554ZM5.53213 6.98681C5.40378 7.29912 5.33301 7.64118 5.33301 7.99976C5.33301 9.47252 6.52692 10.6664 7.99967 10.6664C8.35826 10.6664 8.70031 10.5957 9.01263 10.4673L5.53213 6.98681Z",
    fill: "url(#paint0_linear)"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.804 12.2585L9.29426 10.7488C8.86628 10.9095 8.43253 11 8.00012 11C7.16684 11 6.32853 10.6638 5.53623 10.1374C4.74828 9.61388 4.07153 8.94552 3.58252 8.39062C3.48037 8.2747 3.40578 8.1899 3.34432 8.11527C3.30156 8.06334 3.27365 8.02645 3.25519 8C3.27365 7.97355 3.30156 7.93666 3.34432 7.88473C3.40578 7.8101 3.48037 7.7253 3.58252 7.60938C3.93136 7.21353 4.37574 6.75995 4.88787 6.34241L3.46766 4.9222C2.91257 5.39138 2.44386 5.87648 2.08203 6.28706C2.05896 6.31324 2.03497 6.34012 2.01029 6.36776C1.68385 6.7335 1.23828 7.23271 1.23828 8C1.23828 8.76729 1.68385 9.2665 2.01029 9.63224L2.01039 9.63235C2.03503 9.65995 2.05899 9.6868 2.08203 9.71294C2.63741 10.3432 3.4446 11.1489 4.42947 11.8032C5.41 12.4547 6.63341 13 8.00012 13C9.03039 13 9.97922 12.6901 10.804 12.2585ZM6.12314 3.33503C6.70747 3.1284 7.33693 3 8.00012 3C9.36684 3 10.5903 3.54532 11.5708 4.19676C12.5557 4.85109 13.3628 5.65685 13.9182 6.28706C13.9413 6.31324 13.9653 6.34012 13.99 6.36776C14.3164 6.7335 14.762 7.23271 14.762 8C14.762 8.76729 14.3164 9.2665 13.99 9.63224L13.9899 9.63225C13.9653 9.65989 13.9413 9.68677 13.9182 9.71294C13.7197 9.93825 13.4889 10.186 13.2294 10.4413L11.8151 9.02698C12.0382 8.80815 12.2403 8.59192 12.4177 8.39062C12.5199 8.2747 12.5945 8.1899 12.6559 8.11527C12.6987 8.06334 12.7266 8.02645 12.7451 8C12.7266 7.97355 12.6987 7.93666 12.6559 7.88473C12.5945 7.8101 12.5199 7.7253 12.4177 7.60938C11.9287 7.05448 11.252 6.38612 10.464 5.86262C9.67172 5.33623 8.83341 5 8.00012 5C7.93172 5 7.86327 5.00227 7.79482 5.00672L6.12314 3.33503Z",
    fill: "url(#paint1_linear)"
  }), React__default.createElement("path", {
    d: "M3.33301 1.33301L13.9997 11.9997",
    stroke: "url(#paint2_linear)",
    strokeWidth: "2"
  }), React__default.createElement("defs", null, React__default.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "10.1024",
    y1: "10.6664",
    x2: "5.33301",
    y2: "10.6664",
    gradientUnits: "userSpaceOnUse"
  }, React__default.createElement("stop", {
    stopColor: "#96CF24"
  }), React__default.createElement("stop", {
    offset: "1",
    stopColor: "#5AA62B"
  })), React__default.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "13.3384",
    y1: "13",
    x2: "1.23828",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, React__default.createElement("stop", {
    stopColor: "#96CF24"
  }), React__default.createElement("stop", {
    offset: "1",
    stopColor: "#5AA62B"
  })), React__default.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12.8769",
    y1: "11.9997",
    x2: "3.33301",
    y2: "11.9997",
    gradientUnits: "userSpaceOnUse"
  }, React__default.createElement("stop", {
    stopColor: "#96CF24"
  }), React__default.createElement("stop", {
    offset: "1",
    stopColor: "#5AA62B"
  }))));
  return React__default.createElement(Page, null, React__default.createElement(PageTitle, null, React__default.createElement("div", null, React__default.createElement("div", {
    className: 'title'
  }, "Pools"), React__default.createElement("div", {
    className: 'subtitle'
  }, "Just stake some tokens to earn.", React__default.createElement("br", null), " High APR, low risk")), React__default.createElement("div", {
    className: ""
  }, React__default.createElement(CardWrap, null, React__default.createElement("div", {
    className: "card-top"
  }, React__default.createElement("div", {
    className: "title-card"
  }, "LZ/BUSD LP Balance", !balanceDetails && React__default.createElement("div", {
    onClick: () => toggleBalanceDetail(true),
    className: "eye-button"
  }, eyesOpen), balanceDetails && React__default.createElement("div", {
    onClick: () => toggleBalanceDetail(false),
    className: "eye-button"
  }, eyesClose)), !balanceDetails && React__default.createElement("div", {
    className: "balance"
  }, parseFloat(getBalanceNumber(stakeLPBalance).toFixed(4)).toLocaleString('en-US')), balanceDetails && React__default.createElement("div", {
    className: "balance-close"
  }, "******"), React__default.createElement("div", {
    className: `total-locked ${theme}`
  }, "Total Locked: ", !balanceDetails ? '0 LZ' : '***')), React__default.createElement("div", {
    className: "card-bottom",
    onClick: onPresentShowLockedRewards
  }, React__default.createElement("div", {
    className: "address"
  }, web3.account && React__default.createElement("span", null, web3.account.substr(0, 6), "...", web3.account.substr(web3.account.length - 4, web3.account.length))), React__default.createElement("div", {
    className: "balance"
  }, !balanceDetails ? parseFloat(getBalanceNumber(lzBalance).toFixed(4)).toLocaleString('en-US') : '***', " \u00A0", React__default.createElement("img", {
    src: "https://lzp.s3.ap-southeast-1.amazonaws.com/lz-logo.png"
  })))))), React__default.createElement(Box$1, {
    className: "mt-4"
  }, !isBusy ? React__default.createElement(FarmCards, {
    theme: theme,
    web3: web3,
    setVisibleWalletModal: setVisibleWalletModal,
    setVisibleUserWalletModal: setVisibleUserWalletModal
  }) : React__default.createElement(StyledLoadingWrapper$1, null, React__default.createElement(Loader, {
    text: "Loading ..."
  })), React__default.createElement("div", {
    className: "box-bottom"
  }, isShowLockedToken && React__default.createElement(LockedRewards, {
    web3: web3
  }), web3.account && React__default.createElement("div", {
    className: "wrap-box-bottom"
  }, React__default.createElement("div", {
    className: "address",
    onClick: setVisibleUserWalletModal
  }, React__default.createElement("img", {
    src: "https://lzp.s3.ap-southeast-1.amazonaws.com/logo.png"
  }), "\u00A0\u00A0 ", web3.account && React__default.createElement("span", null, web3.account.substr(0, 6), "...", web3.account.substr(web3.account.length - 4, web3.account.length))), React__default.createElement("div", {
    className: "menu",
    onClick: () => seIsShowLockedToken(!isShowLockedToken)
  }, isShowLockedToken && React__default.createElement("img", {
    src: "https://lzp.s3.ap-southeast-1.amazonaws.com/menu-close.png"
  }), !isShowLockedToken && React__default.createElement("img", {
    src: "https://lzp.s3.ap-southeast-1.amazonaws.com/menu.png"
  }))), !web3.active && React__default.createElement("div", {
    className: "wrap-box-bottom"
  }, React__default.createElement("div", {
    className: "lz-button-container forced-dark",
    onClick: setVisibleWalletModal
  }, React__default.createElement("div", {
    className: "lz-button-text footer__connect-wallet-button"
  }, "Connect Wallet"))))));
};

const CardWrap = styled.div(_t$j || (_t$j = _$j`
  background: radial-gradient(100% 299.2% at 3.59% 3.24%, rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0.07) 100%);
  box-sizing: border-box;
  backdrop-filter: blur(28.7878px);
  border-radius: 20px;
  min-width: 380px;
  margin-top: 50px;

  @media (max-width: 768px) {
    min-width: 220px;
    margin-top: 20px;
  }

  .card-top {
    padding: 10px 20px;
    @media (max-width: 768px) {
      padding: 10px;
    }

    .title-card {
      font-size: 12px;
      line-height: 16px;
      display: flex;

      .eye-button {
          margin-left: 8px;
          cursor: pointer;
      }
    }

    .balance {
      font-style: italic;
      font-size: 36px;
      line-height: 43px;
    }

    .balance-close {
      font-size: 36px;
      line-height: 43px;
    }

    .total-locked {
      font-weight: 600;
      font-size: 14px;
      line-height: 25px;
    }
    .light {
      color: #535353;
    }
    .dark {
      color: #ffffff;
    }
  }
  .card-bottom {
    padding: 30px 20px;
    @media (max-width: 768px) {
      padding: 20px 10px;
    }
    border-radius: 0px 0px 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
    position: relative;
    height: 50px;

    .address {
      text-shadow: 0px 2px 2.39899px rgba(0, 0, 0, 0.25);
      position: absolute;
      z-index: 1;

      span {
        font-size: 14px;
      }
    }
    .balance {
      background: linear-gradient(270deg, #96CF24 10.53%, #5AA62B 100%);
      border-radius: 5px;
      padding: 3px 6px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
      position: absolute;
      z-index: 1;
      right: 20px;
      font-size: 14px;
    }

  }
  .card-bottom::after {
    content: "";
    opacity: 0.6;
    background: linear-gradient(270deg,#96CF24 10.53%,#5AA62B 100%);
    max-width: 100%;
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 20px 20px;
  }
`));
const PageTitle = styled.div(_t2$b || (_t2$b = _$j`
  width: 1350px;
  max-width: 1350px;
  text-align: left;
  color: #96CF24;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  margin-top: 16px;

  .title {
    @media (max-width: 768px) {
      display: none;
    }
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    background: linear-gradient(to right, #5AA62B 0%, #96CF24 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .subtitle {
    font-size: 36px;
    font-weight: 300;
    line-height: 40px;
    margin-top: 38px;
    background: linear-gradient(to right, #5AA62B 0%, #96CF24 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 30px;
    }
  }
  @media (max-width: 768px) {
    width: 100vw;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`));
const Box$1 = styled.div(_t3$7 || (_t3$7 = _$j`
  width: 100%;
  z-index: 2;
  &.mt-4 {
      margin-top: 40px;
      @media (max-width: 767px) {
          margin-top: 38px;
          margin-bottom: 25px;
      }
  }
  .box-bottom {
    display: none;
  }
  .warning-text {
    color: #ff7570;
  }
  @media (max-width: 767px) {
    .box-bottom {
      display: block;
      width: 100%;
      background: #1B1D1C;
      position: fixed;
      bottom: 0;
      left: 0;
      .wrap-box-bottom {
        display: flex;
        justify-content: space-between;
        padding: 15px 25px;

        .address {
          display: flex;
          align-items: center;
          span {
            color: #9CA3AF;
          }
        }
        .menu {
          cursor: pointer;
        }

        .lz-button-container {
            border-radius: 5px;
            justify-content: center;
            display: flex;
            cursor: pointer;
            position: relative;
            border: 1px solid rgb(150, 207, 36);
        }
        .lz-button-container:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 1px;
            border-radius: 5px;
            -webkit-mask: linear-gradient(270deg,#96cf24 10.53%,#5aa62b) content-box,linear-gradient(270deg,#96cf24 10.53%,#5aa62b);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
        }
        .footer__connect-wallet-button {
            padding: 5px 15px;
            font-size: 14px;
        }
        .lz-button-text {
            padding: 5px 15px;
            font-size: 14px;
            background: linear-gradient(90deg,#5aa62b 0,#96cf24);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .lz-button-container:hover {
            background-image: linear-gradient(270deg,#96cf24 10.53%,#5aa62b),linear-gradient(90deg,#5aa62b 0,#96cf24);
        }
        .lz-button-container:hover .lz-button-text {
            background: #fff;
            -webkit-background-clip: text;
            background-clip: text;
        }
      }
    }
  }
`));
const StyledLoadingWrapper$1 = styled.div(_t4$6 || (_t4$6 = _$j`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`));

let _$k = t => t,
    _t$k;

const App = ({
  theme,
  web3,
  subPage,
  setVisibleWalletModal,
  setVisibleUserWalletModal,
  xStorageClient
}) => {
  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {
    if (main_42) setShowMenu(false);
  }, [main_42]);
  useEffect(() => {
    if (xStorageClient) {
      xStorageClient.get('LZ_REFERRAL').then(address => address ? ethers.utils.getAddress(address) : undefined).then(address => {
        localStorage.setItem('LZ_REFERRAL', address);
      }).catch(console.error);
    }
  }, [xStorageClient]);
  return React__default.createElement(Providers, {
    web3: web3
  }, React__default.createElement(BodyWrapper, {
    className: `pool-interface ${theme}`,
    showMenu: showMenu
  }, React__default.createElement(Home, {
    theme: theme,
    web3: web3,
    setVisibleWalletModal: setVisibleWalletModal,
    setVisibleUserWalletModal: setVisibleUserWalletModal,
    subPage: subPage
  })), React__default.createElement(Disclaimer, null));
};

const Providers = ({
  children,
  web3
}) => {
  const library = web3 && web3.library || {};
  const provider = library.provider || library._web3Provider;
  return React__default.createElement(ThemeProvider, {
    theme: theme
  }, React__default.createElement(UseWalletProvider, {
    chainId: config.chainId,
    connectors: {
      walletconnect: {
        rpcUrl: config.rpc
      }
    }
  }, React__default.createElement(SushiProvider, {
    provider: provider
  }, React__default.createElement(TransactionsProvider, null, React__default.createElement(Farms, {
    web3: web3
  }, React__default.createElement(Modals, null, children))))));
};

const Disclaimer = () => {
  const markSeen = useCallback(() => {
    localStorage.setItem('disclaimer', 'seen');
  }, []);
  const [onPresentDisclaimerModal] = useModal(React__default.createElement(DisclaimerModal, {
    onConfirm: markSeen
  }));
  useEffect(() => {
  }, []);
  return React__default.createElement("div", null);
};

const BodyWrapper = styled.div(_t$k || (_t$k = _$k`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;

  &.pool-interface {
    width: 100%;
    background: var(--layout-background-color);
    color: var(--color-text-default);
    padding-top: 2rem;
    height: 100vh;
    position: relative;
  }
`));

var index = (({
  theme,
  useWeb3React,
  useSubPage,
  setVisibleWalletModal,
  setVisibleUserWalletModal,
  xStorageClient
}) => {
  const {
    account
  } = useWeb3React();
  const web3 = useWeb3React();
  const subPage = useSubPage();
  return React__default.createElement(App, {
    theme: theme,
    web3: web3,
    setVisibleWalletModal: setVisibleWalletModal,
    setVisibleUserWalletModal: setVisibleUserWalletModal,
    subPage: subPage,
    xStorageClient: xStorageClient
  });
});

export default index;
//# sourceMappingURL=index.modern.js.map
