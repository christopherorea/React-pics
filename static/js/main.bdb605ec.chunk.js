(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),c=a.n(s),i=a(6),u=a.n(i),o=a(17),l=a(2),m=a(3),p=a(5),h=a(4),f=a(18),v=a.n(f).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID FfAVwrDySRq7stH8Sq0YQlxhxs3cR2IwHY0I49uQI3Q"}}),g=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e}return Object(m.a)(a,[{key:"onFormSubmit",value:function(e){e.preventDefault(),this.props.runMeWhenSubmit(this.state.term)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segments"},r.a.createElement("form",{onSubmit:function(t){return e.onFormSubmit(t)},className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Image Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),a}(r.a.Component),b=(a(42),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).imageRef=r.a.createRef(),e.state={spans:0},e.setSpans=function(){var t=e.imageRef.current.clientHeight,a=Math.ceil(t/10);e.setState({spans:a})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{alt:t,src:a.regular,ref:this.imageRef}))}}]),a}(r.a.Component)),d=function(e){var t=e.images.map((function(e){return r.a.createElement(b,{key:e.id,image:e})}));return r.a.createElement("div",{className:"imageList"},t)},y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"30px"}},r.a.createElement(g,{runMeWhenSubmit:this.onSearchSubmit}),r.a.createElement(d,{images:this.state.images}))}}]),a}(r.a.Component);c.a.render(r.a.createElement(y,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.bdb605ec.chunk.js.map