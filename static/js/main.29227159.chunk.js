(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{14:function(e,t,a){},29:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(9),s=a.n(c),o=(a(28),a(29),a(14),a(13)),l=a(2),i=a(3),u=a(6),h=a(5),g=a(0),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={value:""},e.SubmitHandler=function(t){t.preventDefault(),console.log(" \u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439",e.state.value),e.props.onSubmit(e.state.value.trim().toLowerCase()),e.setState({value:""})},e.changeHandler=function(t){e.setState({value:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.value;return console.log(e),Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.SubmitHandler,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:"SearchForm-input",type:"text",onChange:this.changeHandler,value:e,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),p=m,d=a(11),b=a.n(d),f=a(23),j=a(12),y=a.n(j),O=function(){function e(t,a){Object(l.a)(this,e),this.BASE_URL=t,this.API_KEY=a,this._searchQuery="",this._searchPage=1}return Object(i.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"resetPage",value:function(){return this._searchPage=1}},{key:"searchPage",get:function(){return this._searchPage},set:function(e){return this._searchPage+=e}},{key:"getImages",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y.a.defaults.baseURL=this.BASE_URL,console.log("this.searchQuery",this.searchQuery,"searchPage",this.searchPage),t="?q=".concat(this.searchQuery,"&page=").concat(this.searchPage,"&key=").concat(this.API_KEY,"&image_type=photo&orientation=horizontal&per_page=12"),e.prev=3,e.next=6,y.a.get(t);case 6:return a=e.sent,e.next=9,a.data.hits;case 9:return r=e.sent,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(3),console.log("err",e.t0.message);case 16:case"end":return e.stop()}}),e,this,[[3,13]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsx)("li",{children:Object(g.jsx)("img",{src:this.props.webformatURL,alt:"",className:"ImageGalleryItem-image",onClick:this.props.showImageHandle})})}}]),a}(r.Component),I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(g.jsx)("ul",{className:"ImageGallery",children:this.props.arreyImages.map((function(t){return console.log(t.largeImageURL),Object(g.jsx)(v,{webformatURL:t.webformatURL,showImageHandle:e.props.showImageHandler(t.largeImageURL)},t.id)}))})}}]),a}(r.Component),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsx)("button",{type:"button",className:"Button",onClick:this.props.loadMorer,children:this.props.text})}}]),a}(r.Component),S=document.querySelector("#modal-root"),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onClickOverlayHandler=function(t){t.currentTarget===t.target&&e.props.closeModal()},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(c.createPortal)(Object(g.jsx)("div",{className:"Overlay",onClick:this.onClickOverlayHandler,children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{src:this.props.fullImageURL,alt:""})})}),S)}}]),a}(r.Component),k=new O("https://pixabay.com/api/","23145424-17de0e2191faefedd106abc58");console.log("SEARCH",k);var H=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={arreyImages:[],searchQuery:"",searchValue:"",status:"init",openModal:!1},e.fullImageURL="",e.closeModal=function(){e.fullImageURL="",e.setState({openModal:!1})},e.showImageHandler=function(t){e.fullImageURL=t,e.setState({openModal:!0})},e.onsubmitHandler=function(t){e.setState((function(){return{searchQuery:t}}))},e.scrollHandler=function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),800)},e.loadMoreHandler=function(){k.searchPage=1,console.log("searchPage",k.searchPage),k.searchQuery=e.state.searchQuery,k.getImages().then((function(t){e.setState((function(e){return{arreyImages:[].concat(Object(o.a)(e.arreyImages),Object(o.a)(t))}})),console.log(t)})).catch((function(e){console.log("\u041d\u0410\u0425\u0406\u0411\u0410 \u0422\u0410\u041a\u0415 \u0420\u041e\u0411\u0418\u0422\u0418",e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.searchQuery!==this.state.searchQuery&&(k.resetPage(),k.searchQuery=this.state.searchQuery,k.getImages().then((function(e){a.setState({arreyImages:e}),console.log(e)})).catch((function(e){console.log(e)})))}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(p,{onSubmit:this.onsubmitHandler}),this.state.arreyImages.length>0&&Object(g.jsx)(I,{arreyImages:this.state.arreyImages,scrollHandler:this.scrollHandler(),showImageHandler:this.showImageHandler}),this.state.arreyImages.length>0&&Object(g.jsx)(x,{loadMorer:this.loadMoreHandler,text:"LOAD MORE..."}),this.state.openModal&&Object(g.jsx)(w,{fullImageURL:this.fullImageURL,closeMOdal:this.closeMOdal})]})}}]),a}(r.Component),L=H;s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.29227159.chunk.js.map