(this["webpackJsonpsocial-site"]=this["webpackJsonpsocial-site"]||[]).push([[0],{36:function(t,e,s){},49:function(t,e,s){},56:function(t,e,s){"use strict";s.r(e);var n=s(4),a=s(0),c=s.n(a),r=s(22),i=s.n(r),o=(s(49),s(13)),j=s(14),l=s(17),u=s(16),b=(s(35),s(28)),d=(s(36),s(24)),h=s(6),O=s(25),x=s(20),p=s(23),f=s(29),m=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(j.a)(s,[{key:"buildPostCards",value:function(){var t=this;return void 0===this.props.postList?Object(n.jsx)(O.a,{className:"no-posts",children:Object(n.jsxs)(O.a.Body,{children:[Object(n.jsx)(x.a,{children:Object(n.jsx)("h3",{children:"No Posts"})}),Object(n.jsx)(x.a,{children:Object(n.jsxs)("p",{children:["Go to the ",Object(n.jsx)("b",{children:"Add Post"})," Page to create a post or two."]})})]})}):this.props.postList.map((function(e){return Object(n.jsx)(O.a,{className:"post",children:Object(n.jsx)(O.a.Body,{children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(x.a,{children:Object(n.jsxs)("h3",{children:["Username: ",e.username," "]})}),Object(n.jsx)(x.a,{children:Object(n.jsxs)("p",{children:[" ",e.text," "]})}),Object(n.jsxs)(x.a,{children:[Object(n.jsx)(p.a,{children:Object(n.jsxs)("p",{children:["Likes: ",e.likes," "]})}),Object(n.jsx)(p.a,{children:Object(n.jsx)(f.a,{onClick:function(){return t.increaseLikeCount(e.id)},children:"Thumb"})})]})]})})})}))}},{key:"render",value:function(){return Object(n.jsx)(x.a,{className:"postList",children:this.buildPostCards()})}}]),s}(c.a.Component),v=s(19),k=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={id:0,ref:c.a.createRef(),username:"",text:"",likes:0},n}return Object(j.a)(s,[{key:"handleChange",value:function(t){var e={};e[t.target.name]=t.target.value,this.setState(e)}},{key:"submitHandler",value:function(t){t.preventDefault(),this.props.onsubmit(this.state.id,this.state.ref,this.state.username,this.state.text,this.state.likes),this.setState((function(t){return{id:t.id+1,ref:t.ref+1,username:"",text:"",likes:0}}))}},{key:"render",value:function(){var t=this;return Object(n.jsxs)(v.a,{onChange:function(e){return t.handleChange(e)},onSubmit:function(e){return t.submitHandler(e)},children:[Object(n.jsxs)(v.a.Group,{controlId:"postUsername",children:[Object(n.jsx)(v.a.Label,{children:"Username"}),Object(n.jsx)(v.a.Control,{name:"username",type:"text",value:this.state.username})]}),Object(n.jsxs)(v.a.Group,{controlId:"postText",children:[Object(n.jsx)(v.a.Label,{children:"Post"}),Object(n.jsx)(v.a.Control,{name:"text",type:"text",value:this.state.text})]}),Object(n.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]})}}]),s}(c.a.Component),y=s(43),C=s(21),g=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(n.jsxs)(C.a,{bg:"dark",variant:"dark",expand:"md",children:[Object(n.jsx)(C.a.Brand,{children:"MyFace"}),Object(n.jsx)(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(C.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(y.a,{className:"mr-auto",children:[Object(n.jsx)(C.a.Text,{children:Object(n.jsx)(d.b,{to:"/",children:"View Posts"})}),Object(n.jsx)(C.a.Text,{children:Object(n.jsx)(d.b,{to:"/add",children:"Add Posts"})})]})})]})}}]),s}(c.a.Component),P=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={posts:[],postRefs:[]},n}return Object(j.a)(s,[{key:"updatePosts",value:function(t,e,s,n,a){var c={id:t,ref:e,username:s,text:n,likes:a};this.setState((function(t){return{posts:t.posts.concat(c)}})),console.log(this.state.posts)}},{key:"increaseLikeCount",value:function(t){var e=this;console.log("test"),this.state.posts.map((function(s){s.id===t&&e.setState((function(t){return{likes:t.likes+1}}))}))}},{key:"render",value:function(){var t=this;return Object(n.jsxs)(d.a,{children:[Object(n.jsx)(g,{}),Object(n.jsx)(b.a,{children:Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{path:"/add",children:Object(n.jsx)(k,{onsubmit:function(e,s,n,a,c){return t.updatePosts(e,s,n,a,c)}})}),Object(n.jsx)(h.a,{exact:!0,path:"/",children:Object(n.jsx)(m,{postList:this.state.posts})}),Object(n.jsx)(h.a,{path:"/",children:"Error: 404 not found"})]})})]})}}]),s}(c.a.Component),L=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,58)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;s(t),n(t),a(t),c(t),r(t)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),L()}},[[56,1,2]]]);
//# sourceMappingURL=main.6ef2d495.chunk.js.map