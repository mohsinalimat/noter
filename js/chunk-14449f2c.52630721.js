(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14449f2c"],{"22d9":function(e,t,r){"use strict";var s=r("3fcb"),n=r.n(s);n.a},"3fcb":function(e,t,r){},a519:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",["/boards"===this.$route.fullPath?r("div",{staticClass:"container boards-intro"},[r("br"),r("h4",[e._v("Hi "+e._s(e.user.data.name)+" 👋🏼 !")]),e._m(0),r("br"),r("h5",[r("em",[e._v("Noter")]),e._v(" is very easy to begin with 💥 ! Just create a "),r("span",{staticClass:"n-btn",on:{click:e.createBoard}},[e._v("Board")]),e._v(" and start Exploring 🤯 . ")]),r("small",{staticClass:"text-muted"},[e._v("Pro Tip: add an emoji in board title for better experience! ")]),r("br"),r("br"),e._m(1),e._m(2),r("br"),e._m(3),e._m(4)]):e._e(),r("div",[r("router-view",{key:this.$route.params._slug})],1)])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{},[e._v("👏🏼 Welcome to "),r("em",[e._v("Noter")]),e._v(" 👏🏼")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",[e._v("What "),r("em",[e._v(" Noter ")]),e._v(" can Do 😁")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"b-ul"},[r("li",[r("h5",[e._v("Content Blocks")])]),r("li",[e._v("Paragraphs")]),r("li",[e._v("Headings")]),r("li",[e._v("Lists")]),r("li",[e._v("Checklists")]),r("li",[e._v("Code Blocks")]),r("li",[e._v("Links with Preview")]),r("li",[e._v("Tables")]),r("li",[e._v("Images (from link)")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",[e._v("What's in store for "),r("em",[e._v("Noter")]),e._v(" 😋 ?")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"b-ul"},[r("li",[e._v("Board sharing support is coming sooon !")]),r("li",[e._v("Image Support inside Blocks. (uploadable)")]),r("li",[e._v("Improvement in error handling.")]),r("li",[e._v("Refining the end-user experience.")]),r("li",[e._v("Accessibility Improvements.")]),r("li",[e._v("Some major Bug Fixes !")])])}],i=(r("d3b7"),r("25f0"),r("2b0e")),a=i["a"].extend({name:"Boards",computed:{user:function(){return this.$store.getters.giveUser},boards:function(){return this.$store.getters.boards}},methods:{createBoard:function(){var e=Math.random().toString(20).substr(2).toUpperCase();this.$router.push({name:"Board",params:{_slug:e}})}},metaInfo:function(){return{title:"Boards"}},components:{}}),o=a,l=(r("22d9"),r("2877")),c=Object(l["a"])(o,s,n,!1,null,"c9a458d2",null);t["default"]=c.exports}}]);