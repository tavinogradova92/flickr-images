(this["webpackJsonpflickr-images"]=this["webpackJsonpflickr-images"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),l=(a(12),a(1)),i=a(2),s=a(4),h=a(3),m=(a(13),function(e){var t=e.title,a=(e.id,e.url);return r.a.createElement("div",{className:"column dib ma2 grow shadow-5"},r.a.createElement("img",{alt:t,src:a}))}),u=function(e){var t=e.photos_arr;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(m,{key:a,url:"https://farm".concat(t[a].farm,".staticflickr.com/").concat(t[a].server,"/").concat(t[a].id,"_").concat(t[a].secret,"_n.jpg"),title:t[a].title})})))},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa1"},r.a.createElement("input",{className:"pa2 ba b--grey",type:"search",placeholder:"search photos",onChange:t}))},f=(a(14),function(e){return r.a.createElement("div",{className:"scrollable"},e.children)}),p=function(){return r.a.createElement("div",{className:"pv4 ph3 ph5-ns tc"},r.a.createElement("a",{class:"link dim gray dib h2 w2 br-100 mr3",href:"https://www.linkedin.com/in/tanjavinogradova/"},r.a.createElement("svg",{viewBox:"0 0 16 16",style:{fill:"currentcolor"}},r.a.createElement("title",null,"LinkedIn"),r.a.createElement("path",{d:"M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z","fill-rule":"nonzero"}))),r.a.createElement("a",{className:"link dim gray dib br-100 h2 w2 mr3 ",href:"https://github.com/tavinogradova92"},r.a.createElement("svg",{"data-icon":"github",viewBox:"0 0 32 32",style:{fill:"currentcolor"}},r.a.createElement("title",null,"GitHub"),r.a.createElement("path",{d:"M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"}))),r.a.createElement("div",{className:"mt2"},r.a.createElement("a",{href:"https://photovinogradova.com/resume",className:"f6 link dim gray dib mr3 mr4-ns",title:"Portfolio"},"Developed by Tanja Vinogradova")))},v=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooops, something is wrong here"):this.props.children}}]),a}(n.Component),g=(a(15),function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={photographs:{},searchfield:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=fd480d49ddad70072e137f3b8ad1f8c1&gallery_id=72157713471498036&format=json&nojsoncallback=1").then((function(e){return e.json()})).then((function(t){e.setState({photographs:t})}))}},{key:"render",value:function(){var e=this.state,t=e.photographs,a=e.searchfield;if(console.log("Knock knock!"),console.log(t),!t.hasOwnProperty("photos"))return r.a.createElement("h1",null,"Loading Data...");var n=t.photos.photo,o=n.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));return n.length?(console.log("Print filtered"),console.log(o),r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f3 f2-m f2-l"},"Flickr Gallery Imitator"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(v,null,r.a.createElement(u,{photos_arr:o}))),r.a.createElement(p,null))):r.a.createElement("h1",null,"Loading...")}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.4186acf9.chunk.js.map