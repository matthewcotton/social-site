(this["webpackJsonpsocial-site"]=this["webpackJsonpsocial-site"]||[]).push([[0],{24:function(e,t,s){},53:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s(0),a=s.n(n),c=s(25),i=s.n(c),o=(s(53),s(9)),u=s(10),l=s(12),h=s(11),j=(s(22),s(32)),b=s(47),p=s(6),d=s(18),O=(s(24),s(27)),x=s(23),f=s(33),m=s(44),k=s.p+"static/media/buck0.66e6ba66.jpg",g=s.p+"static/media/buck1.b577b0b4.jpg",v=s.p+"static/media/buck2.cf96d7a3.jpg",y=s.p+"static/media/buck3.17d57ce8.jpg",P=s.p+"static/media/buck4.e874f7ba.jpg",C=s.p+"static/media/buck5.4ea0785f.jpg",L=s.p+"static/media/buck6.b66c59cb.jpg",w=s.p+"static/media/buck7.2b575450.jpg",S=s.p+"static/media/buck8.62b6aa78.jpg",N=s.p+"static/media/buck9.70fc199a.jpg",_=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"selectProfilePic",value:function(e){switch(e%10){case 0:return k;case 1:return g;case 2:return v;case 3:return y;case 4:return P;case 5:return C;case 6:return L;case 7:return w;case 8:return S;case 9:return N;default:return k}}},{key:"render",value:function(){return Object(r.jsx)(m.a,{fluid:!0,className:"mx-auto profile-pic",src:this.selectProfilePic(this.props.userId)})}}]),s}(a.a.Component),B=s.p+"static/media/noun_hoof_3071279.40e06e57.png",I=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"clickHandler",value:function(e){this.props.addLike(e)}},{key:"unknownUsername",value:function(e){return""===e?"Anonymous":e}},{key:"noText",value:function(e){return""===e?"Hey, you didn't eneter any text in this post but I decided to post it anyway.":e}},{key:"render",value:function(){var e=this;return Object(r.jsx)(O.a,{className:"post",children:Object(r.jsx)(O.a.Body,{children:Object(r.jsxs)(j.a,{children:[Object(r.jsxs)(d.a,{children:[Object(r.jsx)(x.a,{md:3,xs:6,children:Object(r.jsx)(_,{userId:this.props.currentPost.id})}),Object(r.jsx)(x.a,{md:9,children:Object(r.jsxs)("p",{children:[" ",this.noText(this.props.currentPost.text)," "]})})]}),Object(r.jsxs)(d.a,{children:[Object(r.jsx)(x.a,{lg:3,md:4,xs:7,children:Object(r.jsxs)("h3",{children:[" ",this.unknownUsername(this.props.currentPost.username)," "]})}),Object(r.jsx)(x.a,{lg:3,md:3,xs:5,children:Object(r.jsxs)(f.a,{className:"like",variant:"warning",id:this.props.currentPost.id,onClick:function(t){return e.clickHandler(t.currentTarget.id)},children:[Object(r.jsx)("img",{className:"like-hoof",src:B,alt:"Hoofs Up!"})," ",this.props.currentPost.likes," "]})})]})]})})})}}]),s}(a.a.Component),T=s(26),U=s.n(T),D=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(r.jsx)(O.a,{className:"no-posts",children:Object(r.jsxs)(O.a.Body,{children:[Object(r.jsx)(d.a,{children:Object(r.jsx)("h3",{children:"No Posts"})}),Object(r.jsx)(d.a,{children:Object(r.jsxs)("p",{children:["Go to the ",Object(r.jsx)(U.a,{to:"/add",children:"Add Post"})," Page to create a post or two."]})})]})})}}]),s}(a.a.Component),J=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"buildPostCards",value:function(){var e=this;return 0===this.props.postList.length?Object(r.jsx)(D,{}):this.props.postList.map((function(t){return Object(r.jsx)(I,{currentPost:t,addLike:e.props.addLike})}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("br",{}),Object(r.jsx)(d.a,{className:"postList",children:this.buildPostCards()})]})}}]),s}(a.a.Component),R=s(21),A=s(29),E=s.n(A),F=(s(64),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).state={id:0,ref:"",username:"",text:"",likes:0},E.a.options={closeButton:"true",positionClass:"toast-top-center",newestOnTop:"true",timeOut:"3000"},E.a.clear(),r}return Object(u.a)(s,[{key:"handleChange",value:function(e){var t={};t[e.target.name]=e.target.value,this.setState(t)}},{key:"checkUsernameLength",value:function(e){return!(e.length>15)}},{key:"submitHandler",value:function(e){if(e.preventDefault(),this.checkUsernameLength(this.state.username)){var t=this.props.postListLength+1,s=a.a.createRef();this.props.onsubmit(t,s,this.state.username,this.state.text,0),E.a.success("Buck up! Your post was successfully published.","Published posted"),this.setState((function(e){return{id:t,ref:"",username:"",text:"",likes:0}}))}else E.a.error("Username is too long. It must be 15 characters or less.","Username Error")}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)("br",{}),Object(r.jsxs)(R.a,{onSubmit:function(t){return e.submitHandler(t)},children:[Object(r.jsxs)(R.a.Group,{controlId:"postUsername",children:[Object(r.jsx)(R.a.Label,{children:"Username"}),Object(r.jsx)(R.a.Control,{name:"username",type:"text",value:this.state.username,placeholder:"enter username (max 20 characters)",onChange:function(t){return e.handleChange(t)}})]}),Object(r.jsxs)(R.a.Group,{controlId:"postText",children:[Object(r.jsx)(R.a.Label,{children:"Post"}),Object(r.jsx)(R.a.Control,{name:"text",type:"text",value:this.state.text,placeholder:"add text",onChange:function(t){return e.handleChange(t)}})]}),Object(r.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]})]})}}]),s}(a.a.Component)),H=s(42),M=s(20),z=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(r.jsxs)(M.a,{bg:"dark",variant:"dark",expand:"md",children:[Object(r.jsx)(U.a,{to:"/",children:Object(r.jsx)(M.a.Brand,{children:"FaceBuck"})}),Object(r.jsx)(M.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(M.a.Collapse,{id:"basic-navbar-nav",children:[Object(r.jsxs)(H.a,{className:"mr-auto",children:[Object(r.jsx)(M.a.Text,{className:"nav-link",children:Object(r.jsx)(U.a,{to:"/",children:"View Posts"})}),Object(r.jsx)(M.a.Text,{className:"nav-link",children:Object(r.jsx)(U.a,{to:"/add",children:"Add Posts"})})]}),Object(r.jsx)(H.a,{children:Object(r.jsx)(M.a.Text,{className:"nav-link",children:Object(r.jsx)("a",{href:"https://www.matthewcotton.dev/#/projects",children:"Back to Portfolio"})})})]})]})}}]),s}(a.a.Component),G=s(46),V=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("br",{}),Object(r.jsxs)(G.a,{className:"footer text-right",children:[Object(r.jsxs)("p",{className:"license",children:[Object(r.jsx)("a",{href:"https://thenounproject.com/search/?q=hoof&i=3071279",target:"_blank",rel:"noreferrer",children:"hoof"})," ","by P Thanga Vignesh from the Noun Project."," "]}),Object(r.jsxs)("p",{className:"license",children:["Photos by"," ",Object(r.jsx)("a",{href:"https://unsplash.com/photos/BGDOQuNBtWs",target:"_blank",rel:"noreferrer",children:"Annie Spratt,"})," ",Object(r.jsx)("a",{href:"https://unsplash.com/photos/62SSgxmRf2Y",target:"_blank",rel:"noreferrer",children:"Anthony Roberts,"})," ",Object(r.jsx)("a",{href:"https://unsplash.com/photos/4vIJuuJE5pQ",target:"_blank",rel:"noreferrer",children:"Diana Parkhouse,"})," ",Object(r.jsx)("a",{href:"https://unsplash.com/photos/pRLmCBgIcq8",target:"_blank",rel:"noreferrer",children:"Dom Roberts,"})," ",Object(r.jsx)("a",{href:"https://unsplash.com/photos/uC3fQgJ5OD0",target:"_blank",rel:"noreferrer",children:"Ernesto Vel\xe1zquez,"})," ",Object(r.jsx)("a",{href:"https://unsplash.com/photos/C5d-P1m24D0",target:"_blank",rel:"noreferrer",children:"James Corbett,"})," ",Object(r.jsx)("a",{href:"https://unsplash.com/photos/-FC5Ozeetuw",target:"_blank",rel:"noreferrer",children:"Ming Jun Tan,"})," ",Object(r.jsx)("a",{href:"https://unsplash.com/photos/zeyMA01ZSvc",target:"_blank",rel:"noreferrer",children:"Pete Wright,"})," ",Object(r.jsx)("a",{href:"https://unsplash.com/photos/bwrPwU0BDlE",target:"_blank",rel:"noreferrer",children:"Rebecca Prest"})," ","and"," ",Object(r.jsx)("a",{href:"https://unsplash.com/photos/bm5CitVijSs",target:"_blank",rel:"noreferrer",children:"Mary Kapka"})," ","on"," ",Object(r.jsx)("a",{href:"https://unsplash.com/",target:"_blank",rel:"noreferrer",children:"Unsplash."})]})]})]})}}]),s}(a.a.Component),q=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).state={posts:[]},r}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("posts");this.setState({listItems:JSON.parse(e)||[]})}},{key:"updatePosts",value:function(e,t,s,r,n){var a=this,c={id:e,ref:t,username:s,text:r,likes:n};this.setState((function(e){return{posts:e.posts.concat(c)}}),(function(){return localStorage.setItem("posts",JSON.stringify(a.state.posts))}))}},{key:"increaseLikeCount",value:function(e){var t=this.state.posts;t[e-1].likes++,this.setState({posts:Object.assign(t,this.state.posts)})}},{key:"render",value:function(){var e=this;return Object(r.jsxs)(b.a,{children:[Object(r.jsx)(z,{}),Object(r.jsx)(j.a,{children:Object(r.jsxs)(p.Switch,{children:[Object(r.jsx)(p.Route,{path:"/add",children:Object(r.jsx)(F,{onsubmit:function(t,s,r,n,a){return e.updatePosts(t,s,r,n,a)},postListLength:this.state.posts.length})}),Object(r.jsx)(p.Route,{exact:!0,path:"/",children:Object(r.jsx)(J,{postList:this.state.posts,addLike:function(t){return e.increaseLikeCount(t)}})}),Object(r.jsx)(p.Route,{path:"/",children:"Error: 404 not found"})]})}),Object(r.jsx)(V,{})]})}}]),s}(a.a.Component),Q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,68)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),r(e),n(e),a(e),c(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(q,{})}),document.getElementById("root")),Q()}},[[66,1,2]]]);
//# sourceMappingURL=main.5b7e1079.chunk.js.map