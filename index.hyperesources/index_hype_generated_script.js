//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"delay",source:"function(hypeDocument, element, event) {hypeDocument.pauseTimelineNamed('entangle');\nwindow.setTimeout((function () {\n    hypeDocument.continueTimelineNamed('entangle', hypeDocument.kDirectionForward, false);\n}), 5000); // time to resume in ms\t\n\t\n}",identifier:"11"},{name:"color",source:"function(hypeDocument, element, event) {var x = hypeDocument.getElementById(\"photo1\");\n\n//x.style.backgroundColor = \"rgb(255, 0, 0)\"\n\nx.style.backgroundColor = \"#FF2600\"\n\t\n}",identifier:"15"},{name:"changeRed",source:"function(hypeDocument, element, event) {\tvar x = hypeDocument.getElementById(\"photo1\");\nx.style.backgroundColor = \"#FF2600\";\nvar y = hypeDocument.getElementById(\"photo2\");\ny.style.backgroundColor = \"#FF2600\";\n\n\t\n}",identifier:"18"},{name:"changeBlue",source:"function(hypeDocument, element, event) {\t\n\tvar x = hypeDocument.getElementById(\"photo1\");\nx.style.backgroundColor =\"#FF40FF\";\nvar y = hypeDocument.getElementById(\"photo2\");\ny.style.backgroundColor = \"#FF40FF\";\n}",identifier:"19"},{name:"clasMove",source:"function(hypeDocument, element, event) {\thypeDocument.getElementById(\"pho1\").style.display = \"block\";\n\thypeDocument.getElementById(\"move\").style.display = \"none\";\n}",identifier:"27"},{name:"hidePho1",source:"function(hypeDocument, element, event) {\thypeDocument.getElementById(\"pho1\").style.display = \"none\";\n\t\n}",identifier:"28"},{name:"redwave",source:"function(hypeDocument, element, event) {\t\n\tvar x1 = hypeDocument.getElementById(\"peak1\");\nx1.style.backgroundColor = \"#FF2600\";\nvar x2 = hypeDocument.getElementById(\"peak2\");\nx2.style.backgroundColor = \"#FF2600\";\nvar x3 = hypeDocument.getElementById(\"water\");\nx3.style.backgroundColor = \"#FF2600\";\n}",identifier:"143"},{name:"bluechange",source:"function(hypeDocument, element, event) {\tvar x1 = hypeDocument.getElementById(\"peak1\");\nx1.style.backgroundColor =\"#FF40FF\";\nvar x2 = hypeDocument.getElementById(\"peak2\");\nx2.style.backgroundColor = \"#FF40FF\";\nvar x3 = hypeDocument.getElementById(\"water\");\nx3.style.backgroundColor = \"#FF40FF\";\n\n\t\n}",identifier:"144"},{name:"hide2",source:"function(hypeDocument, element, event) {\thypeDocument.getElementById(\"peak1\").style.display = \"none\";\n\t\n}",identifier:"151"},{name:"hideWave",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.getElementById(\"wa\").style.display = \"none\";\n\thypeDocument.getElementById(\"pa1\").style.display = \"none\";\n\thypeDocument.getElementById(\"pa2\").style.display = \"none\";\n\n\t\n}",identifier:"172"},{name:"showWave",source:"function(hypeDocument, element, event) {\thypeDocument.getElementById(\"wa\").style.display = \"block\";\n\thypeDocument.getElementById(\"pa1\").style.display = \"block\";\n\thypeDocument.getElementById(\"pa2\").style.display = \"block\";\n\t\n}",identifier:"173"},{name:"wrong",source:"function(hypeDocument, element, event) {\t\n\twindow.score = window.score-5;\n\talert ('Your score  '+window.score);\n}",identifier:"196"},{name:"correct",source:"function(hypeDocument, element, event) {\twindow.score = 10;\n\talert (window.score);\n}",identifier:"197"},{name:"initial",source:"function(hypeDocument, element, event) {\t\twindow.score=0;\n\t\n\t\n}",identifier:"198"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"0":{p:1,n:"water_waves_ocean_ripple_high_quality_animated_gif.gif",g:"180",t:"@1x"},"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,[],d,[{n:"splash",o:"163",X:[0]},{n:"classical",o:"20",X:[1]},{n:"entangle",o:"1",X:[2]},{n:"Quantum",o:"34",X:[3]}],[{A:{a:[{p:4,h:"198"}]},o:"165",p:"600px",cA:false,Y:1240,Z:800,c:"#CCFDE1",L:[],bY:1,d:1240,U:{},T:{"167_pressed":{i:"167_pressed",n:"167_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#FFB0AE",s:"#FF2600",o:"199"},{y:1,i:"g",s:"#FFB0AE",z:0,o:"199",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["200","199"],n:"Untitled Layout","_":0,v:{"199":{b:305,z:2,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#FF2600",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"167_pressed",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"20"}]},F:"center",G:"#000000",aP:"pointer",w:"Classical World<br>",x:"visible",I:"Solid",a:121,y:"preserve",J:"Solid"},"200":{G:"#000000",aU:8,c:373,d:187,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",K:"Solid",t:16,L:"Solid",Z:"break-word",M:1,w:"<span id=\"docs-internal-guid-f69dfc4d-f7e2-c7b7-bdc0-8346201248d1\"><p dir=\"ltr\" style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-east-asian: normal; font-variant-position: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Game 3 (spooky action at a distance)</span></p><br><p dir=\"ltr\" style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-east-asian: normal; font-variant-position: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">In this game you will be moving two quantum objects in both the classical and  quantum world around &nbsp;to observe their change in behavior when you entangle them before moving them and when you don\u2019t. How an entangled photon can move faster than the speed of light is a big puzzle in physics which you might be able solve.</span></p><div><span style=\"font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-east-asian: normal; font-variant-position: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\"><br></span></div></span>",N:1,j:"absolute",x:"visible",O:1,k:"div",y:"preserve",P:1,z:1,aS:8,aT:8,a:173,b:70}}},{A:{a:[{p:4,h:"28"}]},o:"22",p:"600px",cA:false,Y:1240,Z:800,c:"#000000",L:[],bY:1,d:1240,U:{},T:{"156_pressed":{i:"156_pressed",n:"156_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#AAFCAC",s:"#00F900",o:"201"},{y:1,i:"g",s:"#AAFCAC",z:0,o:"201",f:"c"}],f:30},"184_pressed":{i:"184_pressed",n:"184_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"n",e:"#90FBA1",s:"#00F900",o:"213"},{y:1,i:"n",s:"#90FBA1",z:0,o:"213",f:"c"}],f:30},"29":{i:"29",n:"classical",z:15,b:[],a:[{y:0,i:"e",s:1,z:0,o:"202",f:"c"},{f:"c",y:0,z:15,i:"a",e:672,s:124,o:"202"},{f:"c",y:0,z:15,i:"b",e:236,s:236,o:"202"},{y:15,i:"a",s:672,z:0,o:"202",f:"c"},{y:15,i:"b",s:236,z:0,o:"202",f:"c"}],f:30},"154_pressed":{i:"154_pressed",n:"154_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#A5FCCE",s:"#00F900",o:"205"},{y:1,i:"g",s:"#A5FCCE",z:0,o:"205",f:"c"}],f:30},"182_pressed":{i:"182_pressed",n:"182_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"n",e:"#90FBA1",s:"#00F900",o:"203"},{y:1,i:"n",s:"#90FBA1",z:0,o:"203",f:"c"}],f:30},"185_pressed":{i:"185_pressed",n:"185_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"n",e:"#90FBA1",s:"#00F900",o:"207"},{y:1,i:"n",s:"#90FBA1",z:0,o:"207",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"183_pressed":{i:"183_pressed",n:"183_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"n",e:"#90FBA1",s:"#00F900",o:"209"},{y:1,i:"n",s:"#90FBA1",z:0,o:"209",f:"c"}],f:30}},bZ:180,O:["204","205","201","208","206","214","212","202","211","210","203","209","213","207"],n:"Untitled Layout","_":1,v:{"205":{b:77,z:8,K:"Solid",c:65,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#00F900",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"154_pressed",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",G:"#000000",aP:"pointer",w:"Entangle<br>",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"211":{c:56,d:58,I:"Solid",J:"Solid",K:"Solid",g:"#FF40FF",L:"Solid",M:1,i:"pho1",w:"",aI:"50%",A:"#D8DDE4",N:1,x:"visible",O:1,aJ:"50%",j:"absolute",C:"#D8DDE4",z:1,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",P:1,a:672,aL:"50%",b:236},"208":{b:76,z:7,K:"Solid",c:109,L:"Solid",d:37,aS:6,M:2,bD:"none",N:2,aT:6,dB:"button",O:2,aU:6,P:2,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{b:"29",p:3,z:false,symbolOid:"21"}]},F:"center",G:"#FF40FF",aP:"pointer",w:"Step2<br>Change photon 1<br>",x:"visible",I:"Solid",a:525,y:"preserve",J:"Solid"},"203":{b:469,z:11,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:79,aJ:6,m:"rgba(216, 216, 216, 0.658)",n:"#00F900",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",aN:"182_pressed",t:13,aA:{a:[{p:4,h:"196"}]},F:"center",G:"#000000",aP:"pointer",w:"Particle Things<br>",x:"visible",I:"Solid",a:68,y:"preserve",J:"Solid"},"214":{aV:8,w:"photon 1<br>",x:"visible",a:659,Z:"break-word",b:186,y:"preserve",j:"absolute",z:2,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:16,r:"inline",aU:8,G:"#00F900"},"206":{aV:8,w:"photon 2<br>",x:"visible",a:107,Z:"break-word",b:186,y:"preserve",j:"absolute",z:6,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:16,r:"inline",aU:8,G:"#00F900"},"212":{c:56,d:58,I:"Solid",e:1,J:"Solid",K:"Solid",g:"#FF2600",L:"Solid",M:1,w:"",aI:"50%",A:"#D8DDE4",N:1,O:1,x:"visible",aJ:"50%",j:"absolute",C:"#D8DDE4",z:4,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",P:1,a:124,aL:"50%",b:236},"201":{b:77,z:9,K:"Solid",c:109,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#00F900",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"156_pressed",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"34"}]},F:"center",G:"#000000",aP:"pointer",w:"Quantum World<br>",x:"visible",I:"Solid",a:120,y:"preserve",J:"Solid"},"209":{b:506,z:12,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:79,aJ:6,m:"rgba(216, 216, 216, 0.658)",n:"#00F900",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",aN:"183_pressed",t:13,aA:{a:[{p:4,h:"196"}]},F:"center",G:"#000000",aP:"pointer",w:"Wave Things<br>",x:"visible",I:"Solid",a:68,y:"preserve",J:"Solid"},"204":{b:71,z:5,K:"Solid",c:99,L:"Solid",d:41,aS:6,M:2,bD:"none",N:2,aT:6,dB:"button",O:2,aU:6,P:2,i:"move",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"27"}]},F:"center",G:"#FF40FF",aP:"pointer",w:"Step 1<br>Move photon<br>classical world<br>",x:"visible",I:"Solid",a:362,y:"preserve",J:"Solid"},"210":{G:"#000000",aU:8,c:196,d:37,I:"None",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"None",K:"None",t:18,L:"None",Z:"break-word",M:0,w:"<font color=\"#ff40ff\">What makes up reality?</font><br>",N:0,A:"#00F900",O:0,x:"visible",j:"absolute",y:"preserve",k:"div",C:"#00F900",z:10,B:"#00F900",D:"#00F900",aS:8,P:0,aT:8,a:26,b:400},"207":{b:600,z:14,K:"Solid",c:150,L:"Solid",d:39,aS:6,M:1,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:79,aJ:6,m:"rgba(216, 216, 216, 0.658)",n:"#00F900",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",aN:"185_pressed",t:13,aA:{a:[{p:4,h:"197"}]},F:"center",G:"#000000",aP:"pointer",w:"Both Waves and Partiles at the same time (wavicles)<br>",x:"visible",I:"Solid",a:60,y:"preserve",J:"Solid"},"202":{c:56,d:58,I:"Solid",e:1,J:"Solid",K:"Solid",g:"#FF2600",L:"Solid",M:1,i:"pho2",w:"",aI:"50%",A:"#D8DDE4",N:1,O:1,x:"visible",aJ:"50%",j:"absolute",C:"#D8DDE4",z:3,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",P:1,a:124,aL:"50%",b:236},"213":{b:543,z:13,K:"Solid",c:133,L:"Solid",d:27,aS:6,M:1,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:79,aJ:6,m:"rgba(216, 216, 216, 0.658)",n:"#00F900",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",aN:"184_pressed",t:13,aA:{a:[{p:4,h:"196"}]},F:"center",G:"#000000",aP:"pointer",w:"Sometimes Waves<br>Sometimes Particles<br>",x:"visible",I:"Solid",a:68,y:"preserve",J:"Solid"}}},{o:"3",p:"600px",cA:false,Y:1240,Z:800,L:[],c:"#000000",bY:1,d:1240,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"189_pressed":{i:"189_pressed",n:"189_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"n",e:"#90FBA1",s:"#00F900",o:"219"},{y:1,i:"n",s:"#90FBA1",z:0,o:"219",f:"c"}],f:30},"190_pressed":{i:"190_pressed",n:"190_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"n",e:"#90FBA1",s:"#00F900",o:"216"},{y:1,i:"n",s:"#90FBA1",z:0,o:"216",f:"c"}],f:30},"187_pressed":{i:"187_pressed",n:"187_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"n",e:"#90FBA1",s:"#00F900",o:"215"},{y:1,i:"n",s:"#90FBA1",z:0,o:"215",f:"c"}],f:30},"188_pressed":{i:"188_pressed",n:"188_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"n",e:"#90FBA1",s:"#00F900",o:"222"},{y:1,i:"n",s:"#90FBA1",z:0,o:"222",f:"c"}],f:30},"16_pressed":{i:"16_pressed",n:"16_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#FF9697",s:"#FF2600",o:"217"},{y:1,i:"g",s:"#FF9697",z:0,o:"217",f:"c"}],f:30},"17_pressed":{i:"17_pressed",n:"17_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#FFDCFF",s:"#FE41FF",o:"220"},{y:1,i:"g",s:"#FFDCFF",z:0,o:"220",f:"c"}],f:30},"10":{f:30,z:15,i:"10",n:"entangle",j:{"0":[[187,436,187,436,122,266,194,230],[194,230,233.59595959595958,209.63636363636363,321,206,408,211],[408,211,475,215,540.39393939393938,227.46464646464648,586,214],[586,214,638.36363636363637,198.36363636363637,698,210,753,211],[753,211,849,213,935,221,935,221]]},a:[{y:0,i:"e",s:1,z:0,o:"224",f:"c"},{o:"224",y:0,z:15,i:"a",e:906,a:"0",f:"c",s:158},{o:"224",y:0,z:15,i:"b",e:191,a:"0",f:"c",s:406},{f:"c",p:2,y:5,z:0.15,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:4,h:"11"}]},o:"10"},{f:"c",p:2,y:5.15,z:0,i:"ActionHandler",s:{a:[{p:4,h:"15"}]},o:"10"},{y:15,i:"b",s:191,z:0,o:"224",f:"c"},{y:15,i:"a",s:906,z:0,o:"224",f:"c"}],b:[]},"158_pressed":{i:"158_pressed",n:"158_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#9DFBA9",s:"#00F900",o:"225"},{y:1,i:"g",s:"#9DFBA9",z:0,o:"225",f:"c"}],f:30}},bZ:180,O:["225","217","220","223","221","224","218","215","222","219","216"],n:"Untitled Layout","_":2,v:{"216":{b:715,z:13,K:"Solid",c:150,L:"Solid",d:39,aS:6,M:1,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:79,aJ:6,m:"rgba(216, 216, 216, 0.658)",n:"#00F900",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",aN:"190_pressed",t:13,aA:{a:[{p:4,h:"197"}]},F:"center",G:"#000000",aP:"pointer",w:"Both Waves and Partiles at the same time (wavicles)<br>",x:"visible",I:"Solid",a:54,y:"preserve",J:"Solid"},"219":{b:658,z:12,K:"Solid",c:133,L:"Solid",d:27,aS:6,M:1,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:79,aJ:6,m:"rgba(216, 216, 216, 0.658)",n:"#00F900",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",aN:"189_pressed",t:13,aA:{a:[{p:4,h:"196"}]},F:"center",G:"#000000",aP:"pointer",w:"Sometimes Waves<br>Sometimes Particles<br>",x:"visible",I:"Solid",a:62,y:"preserve",J:"Solid"},"222":{b:621,z:11,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:79,aJ:6,m:"rgba(216, 216, 216, 0.658)",n:"#00F900",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",aN:"188_pressed",t:13,aA:{a:[{p:4,h:"196"}]},F:"center",G:"#000000",aP:"pointer",w:"Wave Things<br>",x:"visible",I:"Solid",a:62,y:"preserve",J:"Solid"},"225":{b:30,z:8,K:"Solid",c:102,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#00F900",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"158_pressed",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"34"}]},F:"center",G:"#000000",aP:"pointer",w:"Quantum World<br>",x:"visible",I:"Solid",a:125,y:"preserve",J:"Solid"},"215":{b:584,z:10,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:79,aJ:6,m:"rgba(216, 216, 216, 0.658)",n:"#00F900",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",aN:"187_pressed",t:13,aA:{a:[{p:4,h:"196"}]},F:"center",G:"#000000",aP:"pointer",w:"Particle Things<br>",x:"visible",I:"Solid",a:62,y:"preserve",J:"Solid"},"218":{G:"#000000",aU:8,c:198,d:19,I:"None",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"None",K:"None",t:18,L:"None",Z:"break-word",M:0,w:"<font color=\"#ff40ff\">What makes up reality?</font><br>",N:0,A:"#00F900",O:0,x:"visible",j:"absolute",y:"preserve",k:"div",C:"#00F900",z:9,B:"#00F900",D:"#00F900",aS:8,P:0,aT:8,a:53,b:527},"221":{b:329,z:4,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#FF40FF",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{b:"10",p:3,z:false,symbolOid:"2"}]},F:"center",G:"#000000",aP:"pointer",w:"entangle<br>",x:"visible",I:"Solid",a:15,y:"preserve",J:"Solid"},"224":{b:406,c:56,d:58,I:"Solid",e:1,J:"Solid",K:"Solid",g:"#00E823",L:"Solid",M:1,i:"photo1",w:"",aI:"50%",N:1,O:1,A:"#D8DDE4",x:"visible",aJ:"50%",j:"absolute",C:"#D8DDE4",z:3,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",tX:0.5,P:1,a:158,aL:"50%",tY:0.5},"217":{b:125,z:5,K:"Solid",c:54,L:"Solid",d:25,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#FF2600",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"16_pressed",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"18"}]},F:"center",G:"#000000",aP:"pointer",w:"Change Photon 1<br>",x:"visible",I:"Solid",a:119,y:"preserve",J:"Solid"},"220":{b:125,z:6,K:"Solid",c:54,L:"Solid",d:25,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#FE41FF",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"17_pressed",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"19"}]},F:"center",G:"#000000",aP:"pointer",w:"Change Photon 1<br>",x:"visible",I:"Solid",a:199,y:"preserve",J:"Solid"},"223":{c:58,d:58,I:"Solid",J:"Solid",K:"Solid",g:"#FF2600",L:"Solid",M:1,i:"photo2",w:"",aI:"50%",A:"#D8DDE4",N:1,x:"visible",O:1,aJ:"50%",j:"absolute",C:"#D8DDE4",z:1,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",P:1,a:158,aL:"50%",b:200}}},{A:{a:[{b:"136",p:3,z:false,symbolOid:"35"},{p:4,h:"172"}]},o:"36",p:"600px",cA:false,Y:1240,Z:800,c:"#000000",L:[],bY:1,d:1240,U:{},T:{"195_pressed":{i:"195_pressed",n:"195_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"n",e:"#90FBA1",s:"#00F900",o:"243"},{y:1,i:"n",s:"#90FBA1",z:0,o:"243",f:"c"}],f:30},"193_pressed":{i:"193_pressed",n:"193_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"n",e:"#90FBA1",s:"#00F900",o:"228"},{y:1,i:"n",s:"#90FBA1",z:0,o:"228",f:"c"}],f:30},"161_pressed":{i:"161_pressed",n:"161_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#96FB9F",s:"#00F900",o:"239"},{f:"c",y:0,z:1,i:"c",e:39,s:57,o:"239"},{y:1,i:"g",s:"#96FB9F",z:0,o:"239",f:"c"},{y:1,i:"c",s:39,z:0,o:"239",f:"c"}],f:30},"194_pressed":{i:"194_pressed",n:"194_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"n",e:"#90FBA1",s:"#00F900",o:"237"},{y:1,i:"n",s:"#90FBA1",z:0,o:"237",f:"c"}],f:30},"140_pressed":{i:"140_pressed",n:"140_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#FFA5A4",s:"#FF2600",o:"229"},{y:1,i:"g",s:"#FFA5A4",z:0,o:"229",f:"c"}],f:30},"139_pressed":{i:"139_pressed",n:"139_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#FFC5FE",s:"#FF40FF",o:"227"},{y:1,i:"g",s:"#FFC5FE",z:0,o:"227",f:"c"}],f:30},"136":{i:"136",n:"test2",z:5.01,b:[],a:[{f:"c",p:2,y:0,z:5.01,i:"ActionHandler",e:{a:[{}]},s:{a:[{}]},o:"136"},{f:"c",p:2,y:5.01,z:0,i:"ActionHandler",s:{a:[{p:4,h:"173"}]},o:"136"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"192_pressed":{i:"192_pressed",n:"192_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"n",e:"#90FBA1",s:"#00F900",o:"240"},{y:1,i:"n",s:"#90FBA1",z:0,o:"240",f:"c"}],f:30},"162_pressed":{i:"162_pressed",n:"162_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#9DFCB2",s:"#00F900",o:"226"},{y:1,i:"g",s:"#9DFCB2",z:0,o:"226",f:"c"}],f:30}},bZ:180,O:["239","226","229","227","231","232","236","235","234","230","241","238","242","233","240","228","237","243"],n:"Untitled Layout","_":3,v:{"233":{b:412,z:20,K:"None",c:198,L:"None",d:25,aS:8,M:0,N:0,aT:8,dB:"button",O:0,aU:8,P:0,aV:8,j:"absolute",k:"div",A:"#00F900",B:"#00F900",Z:"break-word",r:"inline",C:"#00F900",s:"Helvetica,Arial,Sans-Serif",D:"#00F900",t:18,G:"#000000",aP:"pointer",w:"<font color=\"#ff40ff\">What makes up reality?</font><br>",x:"visible",I:"None",a:38,y:"preserve",J:"None"},"236":{c:60,d:60,I:"Solid",J:"Solid",K:"Solid",g:"#FF2600",L:"Solid",M:1,i:"peak2",w:"",aI:"50%",A:"rgba(255, 255, 255, 0.631)",N:1,x:"visible",O:1,aJ:"50%",j:"absolute",C:"rgba(255, 255, 255, 0.631)",z:3,k:"div",D:"rgba(255, 255, 255, 0.631)",aK:"50%",B:"rgba(255, 255, 255, 0.631)",P:1,a:490,aL:"50%",b:254},"231":{aV:8,w:"New<font color=\"#00f900\">Photon 2</font>",x:"visible",a:181,Z:"break-word",b:200,y:"preserve",j:"absolute",z:15,k:"div",s:"Helvetica,Arial,Sans-Serif",aT:8,d:18,c:104,aS:8,t:16,G:"#000000",aU:8,r:"inline"},"242":{b:304,z:19,K:"None",c:343,L:"None",d:11,M:0,e:1,N:0,O:0,P:0,h:"180",Q:0,i:"water1",R:"#000000",j:"absolute",S:0,aI:60,k:"div",T:1,aJ:60,aK:60,p:"no-repeat",A:"#D8DDE4",aL:60,q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",w:"",x:"visible",I:"None",a:198,J:"None"},"239":{b:34,z:12,K:"Solid",c:57,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#00F900",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"161_pressed",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"20"}]},F:"center",G:"#000000",aP:"pointer",w:"Classical<br>",x:"visible",I:"Solid",a:64,y:"preserve",J:"Solid"},"228":{b:506,z:22,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:79,aJ:6,m:"rgba(216, 216, 216, 0.658)",n:"#00F900",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",aN:"193_pressed",t:13,aA:{a:[{p:4,h:"196"}]},F:"center",G:"#000000",aP:"pointer",w:"Wave Things<br>",x:"visible",I:"Solid",a:68,y:"preserve",J:"Solid"},"234":{aV:8,w:"Wave<br>",x:"visible",a:333,Z:"break-word",b:264,y:"preserve",j:"absolute",z:16,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",i:"wa",aS:8,t:16,aU:8,G:"#00F900",r:"inline"},"240":{b:469,z:21,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:79,aJ:6,m:"rgba(216, 216, 216, 0.658)",n:"#00F900",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",aN:"192_pressed",t:13,aA:{a:[{p:4,h:"196"}]},F:"center",G:"#000000",aP:"pointer",w:"Particle Things<br>",x:"visible",I:"Solid",a:68,y:"preserve",J:"Solid"},"237":{b:543,z:23,K:"Solid",c:133,L:"Solid",d:27,aS:6,M:1,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:79,aJ:6,m:"rgba(216, 216, 216, 0.658)",n:"#00F900",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",aN:"194_pressed",t:13,aA:{a:[{p:4,h:"196"}]},F:"center",G:"#000000",aP:"pointer",w:"Sometimes Waves<br>Sometimes Particles<br>",x:"visible",I:"Solid",a:68,y:"preserve",J:"Solid"},"226":{b:34,z:13,K:"Solid",c:67,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#00F900",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"162_pressed",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",G:"#000000",aP:"pointer",w:"Entangle<br>",x:"visible",I:"Solid",a:151,y:"preserve",J:"Solid"},"232":{aV:8,w:"Photon 1<br>",x:"visible",a:522,Z:"break-word",b:195,y:"preserve",j:"absolute",z:14,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:16,r:"inline",aU:8,G:"#00F900"},"243":{b:600,z:24,K:"Solid",c:150,L:"Solid",d:39,aS:6,M:1,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:79,aJ:6,m:"rgba(216, 216, 216, 0.658)",n:"#00F900",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",aN:"195_pressed",t:13,aA:{a:[{p:4,h:"197"}]},F:"center",G:"#000000",aP:"pointer",w:"Both Waves and Particles at the same time (wavicles)<br>",x:"visible",I:"Solid",a:60,y:"preserve",J:"Solid"},"229":{b:114,z:10,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#FF2600",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"140_pressed",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"143"}]},F:"center",G:"#000000",aP:"pointer",w:"red<br>",x:"visible",I:"Solid",a:77,y:"preserve",J:"Solid"},"235":{c:60,d:58,I:"Solid",J:"Solid",K:"Solid",g:"#FF2600",L:"Solid",M:1,i:"peak1",w:"",aI:"50%",A:"rgba(216, 221, 228, 0.650)",N:1,x:"visible",O:1,aJ:"50%",j:"absolute",C:"rgba(216, 221, 228, 0.650)",z:2,k:"div",D:"rgba(216, 221, 228, 0.650)",aK:"50%",B:"rgba(216, 221, 228, 0.650)",P:1,a:191,aL:"50%",b:255},"230":{aV:8,w:"Particle<br>",x:"visible",a:192,Z:"break-word",b:273,y:"preserve",j:"absolute",z:18,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",i:"pa2",aS:8,t:13,aU:8,G:"#000000",r:"inline"},"241":{G:"#000000",aU:8,c:65,aV:8,d:18,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:13,Z:"break-word",i:"pa1",w:"Particle<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:17,aS:8,aT:8,a:500,b:270},"238":{p:"no-repeat",c:347,q:"100% 100%",d:21,I:"None",e:1,J:"None",K:"None",g:"#FF2600",L:"None",M:0,i:"water",w:"",aI:60,A:"#D8DDE4",N:0,O:0,x:"visible",aJ:60,j:"absolute",C:"#D8DDE4",z:1,k:"div",D:"#D8DDE4",aK:60,B:"#D8DDE4",P:0,a:198,aL:60,b:289},"227":{b:114,z:8,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#FF40FF",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"139_pressed",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"144"}]},F:"center",G:"#000000",aP:"pointer",w:"blue<br>",x:"visible",I:"Solid",a:229,y:"preserve",J:"Solid"}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
