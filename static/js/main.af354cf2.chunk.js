(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),s=(a(15),a(1)),i=a(2),l=a(4),h=a(3),u=a(5),m=(a(17),a(18),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",{className:"navbar"},c.a.createElement("div",{className:"navLabel right"},"React Clicky Game"),c.a.createElement("div",{className:"scorecard left"},"Score: ",this.props.score," | High Score: ",this.props.highscore)))}}]),t}(c.a.Component)),d=a(8),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t="images/"+this.props.char+".jpg";return c.a.createElement("div",null,c.a.createElement("img",{src:t,alt:this.props.char,onClick:function(){return e.props.onImageClick(e.props.char)},className:"compImg"}))}}]),t}(c.a.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={clickedImgs:[],score:0,highscore:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=["andy","angela","darryl","dwight","jim","kevin","michael","oscar","stanley","toby"],a=function(a){if(-1===e.state.clickedImgs.indexOf(a)){var n={clickedImgs:[].concat(Object(d.a)(e.state.clickedImgs),[a]),score:e.state.score+1};e.state.score+1>e.state.highscore&&(n.highscore=e.state.highscore+1),e.state.score+1===t.length?(alert("You won the game!"),e.setState({clickedImgs:[],score:0})):e.setState(n)}else e.setState({clickedImgs:[],score:0})};return c.a.createElement("div",null,c.a.createElement("div",{className:"jumbotron ui card"},c.a.createElement("div",{className:"content"},c.a.createElement(m,{score:this.state.score,highscore:this.state.highscore}),function(){for(var e=[];e.length!==t.length;){var n=Math.floor(Math.random()*t.length);-1===e.indexOf(t[n])&&e.push(t[n])}return e.map(function(e){return c.a.createElement(p,{char:e,onImageClick:a})})}(),c.a.createElement("p",null))))}}]),t}(c.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.af354cf2.chunk.js.map