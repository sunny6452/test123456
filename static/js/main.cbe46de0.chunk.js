(this.webpackJsonppayrolltest=this.webpackJsonppayrolltest||[]).push([[0],{478:function(e,t,n){},479:function(e,t,n){},507:function(e,t,n){"use strict";n.r(t);n(126),n(136),n(137),n(138),n(139),n(140),n(141),n(142),n(143),n(144),n(145),n(146),n(147),n(148),n(149),n(189),n(191),n(192),n(193),n(194),n(195),n(197),n(151),n(200),n(201),n(98),n(205),n(206),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(156),n(157),n(222),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(159),n(239),n(240),n(241),n(242),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(253),n(254),n(255),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(115),n(273),n(274),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(162),n(294),n(295),n(164),n(296),n(297),n(298),n(299),n(100),n(300),n(301),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(368),n(369),n(171),n(371),n(372),n(373),n(375),n(172),n(376),n(423),n(380),n(470);var o,a=n(0),c=n.n(a),i=n(23),r=n.n(i),s=(n(478),n(479),n(64)),l=n(390),u=n(392),b=n(539),d=n(545),f=n(543),g=n(544),m=n(15),h=function(e){var t=Object(b.a)((function(){return{id:{overflow:"hidden",borderRadius:10,opacity:.7,width:270,height:45,"& label":{fontSize:"14px",fontWeight:"bold",lineHeight:"20px",marginTop:-4}}}}))();return Object(m.jsx)("div",{children:Object(m.jsx)(g.a,{label:e.label,variant:"filled",size:"small",className:t.id,onChange:function(t){e.setUser(t.target.value),e.lcst(e.inputName,t.target.value)},value:e.userValue,type:"\ube44\ubc00\ubc88\ud638"===e.label?"password":"",style:"\ube44\ubc00\ubc88\ud638"===e.label?{marginTop:10}:{marginTop:100}})})},p=function(e,t,n){localStorage.setItem(e,t),n&&(localStorage.removeItem("id"),localStorage.removeItem("pass"),localStorage.removeItem("isRemember"))},j=function(e){var t=e.onLogin,n=e.id,o=e.password,c=e.setId,i=e.setPassword,r=e.isRemember,s=e.setIsRemember,l=e.reset,u=Object(b.a)((function(){return{Section:{position:"absolute",width:"400px",backgroundColor:"#ffffff",borderRadius:"10px"},loginSection:{height:"350px",top:"190px",borderRadius:"10px",backgroundColor:"#ffffff"},loginTitle:{position:"absolute",marginTop:"55px",marginLeft:"70px",fontWeight:"bold",fontSize:"18px",lineHeight:"26px",letterSpacing:"-0.01em"},checkedTitle:{fontSize:"14px",lineHeight:"26px",color:"#666666"},searchButton:{"&.MuiButton-root:hover":{backgroundColor:"#3474E4",fontWeight:"bold"},width:270,height:45,backgroundColor:"#3474E4",borderRadius:10,marginTop:10,fontSize:16},loginChecked:{marginLeft:-125}}}))();return Object(m.jsxs)("article",{className:"".concat(u.Section," ").concat(u.loginSection," "),children:[Object(m.jsx)("h3",{className:u.loginTitle,children:"HTMS \uacc4\uc815 \uc815\ubcf4"}),Object(m.jsx)(h,{reset:l,setUser:c,lcst:p,userValue:n,label:"\uc544\uc774\ub514",inputName:"id"}),Object(m.jsx)(h,{reset:l,setUser:i,lcst:p,userValue:o,label:"\ube44\ubc00\ubc88\ud638",inputName:"pass"}),Object(m.jsx)(d.a,{size:"small",className:u.loginChecked,inputProps:{"aria-label":"checkbox with small size"},checked:r,onChange:Object(a.useCallback)((function(e){s((function(t){return e.target.checked})),p("isRemember",e.target.checked),e.target.checked||p("","",!0)}),[s])}),Object(m.jsx)("span",{className:u.checkedTitle,children:"\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \uc800\uc7a5"}),Object(m.jsx)("br",{}),Object(m.jsx)(f.a,{variant:"contained",className:u.searchButton,color:"primary",disableElevation:!0,onClick:function(e){t(n,o)},children:"\uc870\ud68c\ud558\uae30"})]})},x=c.a.memo(j),O=n(21),S=(n(391),Object(a.createContext)({userState:{userid:"",userpw:"",sabun:""},userActions:{setUserid:function(){},setUserpw:function(){},setSabun:function(){}}})),v=S,k=(S.Consumer,u.a.div(o||(o=Object(l.a)(["\n  margin: 0 auto;\n  text-align: center;\n  font-family: Noto Sans KR;\n  font-style: normal;\n  width: 400px;\n  background-color: #ffffff;\n"])))),C=Object(O.e)((function(e){e.history,Object(a.useContext)(v).userActions;var t=Object(a.useState)(""),n=Object(s.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),r=Object(s.a)(i,2),l=r[0],u=r[1],b=Object(a.useState)(!1),d=Object(s.a)(b,2),f=d[0],g=d[1];Object(a.useEffect)((function(){localStorage.getItem("isRemember")&&(g(!0),c(localStorage.getItem("id")),u(localStorage.getItem("pass")))}),[]);return Object(m.jsx)(k,{children:Object(m.jsx)(x,{id:o,setId:c,password:l,setPassword:u,isRemember:f,setIsRemember:g})})}));var w=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(O.a,{path:"/",component:C,exact:!0})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,547)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),c(e),i(e)}))},R=n(397);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(R.a,{children:Object(m.jsx)(w,{})})}),document.getElementById("root")),I()}},[[507,1,2]]]);
//# sourceMappingURL=main.cbe46de0.chunk.js.map