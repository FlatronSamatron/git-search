(this["webpackJsonpgit-search"]=this["webpackJsonpgit-search"]||[]).push([[0],{52:function(e,t,r){},80:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r.n(s),n=r(14),c=r.n(n),o=(r(51),r(52),r(29)),i=r(6),u=r(18),l=r(85),j=r(91),d=r(84),h=r(12),p=r(13),b=r.n(p),O=r(20),f=r(21),x=r.n(f),g=r(83),m=r(82),v=r(1),_=function(){return Object(v.jsx)(m.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(v.jsx)("span",{className:"sr-only",children:"Loading..."})})},y=r(89),w=function(e){var t=e.variant,r=void 0===t?"info":t,s=e.children;return Object(v.jsx)(y.a,{variant:r,children:s})},S=function(e){var t=e.userSerch,r=Object(h.b)(),a=Object(i.e)(),n=Object(h.c)((function(e){return e.userList})),c=n.loading,o=n.error,u=n.users;Object(s.useEffect)((function(){var e;""!==t&&localStorage.setItem("search",JSON.stringify(t)),r((e=t,function(){var t=Object(O.a)(b.a.mark((function t(r){var s,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=9;break}return t.next=4,x.a.get("https://api.github.com/search/users?q=".concat(e));case 4:s=t.sent,(a=s.data).items.map(function(){var e=Object(O.a)(b.a.mark((function e(t){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.github.com/users/".concat(t.login));case 2:r=e.sent,s=r.data,t.public_repos=s.public_repos;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r({type:"user_list_request"}),r({type:"user_list_success",payload:a});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"user_list_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.errors:"error"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()))}),[r,t]);var l=u.items?u.items:[],j=l.map((function(e){var t=e.login,r=e.avatar_url;return Object(v.jsxs)("tr",{onClick:function(){return function(e){a.push("/user/".concat(e))}(t)},children:[Object(v.jsx)("td",{children:Object(v.jsx)("img",{className:"avatar",src:r,alt:t})}),Object(v.jsx)("td",{children:t}),Object(v.jsx)("td",{children:"**"})]},t)}));return Object(v.jsx)(v.Fragment,{children:c?Object(v.jsx)(_,{}):o?Object(v.jsx)(w,{variant:"danger",children:o}):Object(v.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,className:"mt-3",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Image"}),Object(v.jsx)("th",{children:"UserName"}),Object(v.jsx)("th",{children:"Repo"})]})}),Object(v.jsx)("tbody",{children:j})]})})},N=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),r=t[0],a=t[1];Object(s.useEffect)((function(){localStorage.getItem("search")?a(JSON.parse(localStorage.getItem("search"))):a("")}),[a]);return Object(v.jsxs)(d.a,{children:[Object(v.jsxs)("div",{className:"search-panel",children:[Object(v.jsx)("h1",{children:"Github Searcher"}),Object(v.jsx)(l.a,{className:"mb-3",children:Object(v.jsx)(j.a,{placeholder:"Search for Users",onChange:function(e){return function(e){var t=e.target.value;a(t)}(e)},value:r})})]}),Object(v.jsx)("div",{children:Object(v.jsx)(S,{userSerch:r})})]})},k=r(86),I=r(87),L=r(88),q=r(90),E=function(e){var t=e.login,r=e.repoSearch,n=Object(s.useState)([]),c=Object(u.a)(n,2),o=c[0],i=c[1],l=Object(h.c)((function(e){return e.userRepo})),j=Object(h.b)(),d=l.loading,p=l.error;Object(s.useEffect)((function(){j(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(r){var s,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get("https://api.github.com/users/".concat(e,"/repos?per_page=100"));case 3:s=t.sent,a=s.data,r({type:"user_repo_request"}),r({type:"user_repo_success",payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:"user_repo_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.errors:"error"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t)),i(l.repo)}),[j,t,i]),a.a.useMemo((function(){var e=l.repo.filter((function(e){return e.name.toString().toLowerCase().trim().indexOf(r.toString().toLowerCase().trim())>=0}));i(e)}),[r,l.repo]);var f=o.map((function(e){var t=e.name,r=e.stargazers_count,s=e.forks_count,a=e.html_url;return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("a",{href:a,children:t})}),Object(v.jsxs)("td",{children:[r,"/",s]})]},t)}));return Object(v.jsx)(v.Fragment,{children:d?Object(v.jsx)(_,{}):p?Object(v.jsx)(w,{variant:"danger",children:p}):Object(v.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,className:"mt-3",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Repo Name"}),Object(v.jsx)("th",{children:"Forks/stars"})]})}),Object(v.jsx)("tbody",{children:f})]})})},R=function(e){var t=e.match.params.login,r=Object(s.useState)(""),a=Object(u.a)(r,2),n=a[0],c=a[1],o=Object(h.c)((function(e){return e.userInfo})),i=Object(h.b)(),p=o.loading,f=o.error,g=o.user;Object(s.useEffect)((function(){i(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(r){var s,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get("https://api.github.com/users/".concat(e));case 3:s=t.sent,a=s.data,r({type:"user_info_request"}),r({type:"user_info_success",payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:"user_info_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.errors:"error"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[i,t]);var m=g.avatar_url,y=g.login,S=g.email,N=g.location,R=g.created_at,C=g.followers,F=g.following,J=g.bio,U=new Date(R).toLocaleString();return Object(v.jsx)(d.a,{children:p?Object(v.jsx)(_,{}):f?Object(v.jsx)(w,{variant:"danger",children:f}):Object(v.jsxs)("div",{className:"search-panel",children:[Object(v.jsx)("h1",{children:"Github Searcher"}),Object(v.jsxs)(k.a,{children:[Object(v.jsx)(I.a,{md:6,className:"p-3",children:Object(v.jsx)(L.a,{className:"user-info-img",fluid:!0,src:m})}),Object(v.jsx)(I.a,{md:6,className:"p-3",children:Object(v.jsxs)(q.a,{className:"text-left",children:[Object(v.jsxs)(q.a.Item,{children:[Object(v.jsx)("strong",{children:"Login:"})," ",y]}),Object(v.jsxs)(q.a.Item,{children:[Object(v.jsx)("strong",{children:"Email:"})," ",S||"none"]}),Object(v.jsxs)(q.a.Item,{children:[Object(v.jsx)("strong",{children:"Location:"})," ",N||"none"]}),Object(v.jsxs)(q.a.Item,{children:[Object(v.jsx)("strong",{children:"Join date:"})," ",U]}),Object(v.jsxs)(q.a.Item,{children:[Object(v.jsx)("strong",{children:"Followers:"})," ",C]}),Object(v.jsxs)(q.a.Item,{children:[Object(v.jsx)("strong",{children:"Following:"})," ",F]})]})}),Object(v.jsx)(I.a,{md:12,children:Object(v.jsx)("p",{children:J})})]}),Object(v.jsx)(l.a,{className:"mb-3",children:Object(v.jsx)(j.a,{placeholder:"Search for User's Repositories",value:n,onChange:function(e){return c(e.target.value)}})}),Object(v.jsx)(E,{login:y,repoSearch:n})]})})};var C=function(){return Object(v.jsxs)(o.a,{children:[Object(v.jsx)(i.a,{path:"/",component:N,exact:!0}),Object(v.jsx)(i.a,{path:"/user/:login",component:R})]})},F=r(15),J=r(45),U=r(46),D=Object(F.combineReducers)({userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user_list_request":return{loading:!0,users:[]};case"user_list_success":return{loading:!1,users:t.payload};case"user_list_fail":return{loading:!1,error:t.payload,users:t.payload};default:return e}},userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user_info_request":return{loading:!0,user:[]};case"user_info_success":return{loading:!1,user:t.payload};case"user_info_fail":return{loading:!1,error:t.payload,user:t.payload};default:return e}},userRepo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{repo:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user_repo_request":return{loading:!0,repo:[]};case"user_repo_success":return{loading:!1,repo:t.payload};case"user_repo_fail":return{loading:!1,error:t.payload,repo:t.payload};default:return e}}}),G=[J.a],M=Object(F.createStore)(D,Object(U.composeWithDevTools)(F.applyMiddleware.apply(void 0,G)));c.a.render(Object(v.jsx)(h.a,{store:M,children:Object(v.jsx)(C,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.587f1c55.chunk.js.map