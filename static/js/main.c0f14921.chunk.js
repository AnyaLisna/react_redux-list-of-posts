(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(26)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(6),l=n.n(c),o=n(5),i=n(2),u=n(13),m=n(3),s=n(14),d="load",f="display",p="remove_article",v="remove_comment";function E(){return function(e){function t(e){return fetch(e).then(function(e){return e.json()}).then(function(e){return e})}e({type:d}),Promise.all([t("https://jsonplaceholder.typicode.com/posts"),t("https://jsonplaceholder.typicode.com/users"),t("https://jsonplaceholder.typicode.com/comments")]).then(function(t){var n=Object(s.a)(t,3),r=n[0],a=n[1],c=n[2],l=r.map(function(e){return Object(m.a)({},e,{user:a.find(function(t){return t.id===e.userId}),comments:c.filter(function(t){return t.postId===e.id})})});e(function(e){return{type:f,articles:e}}(l))})}}var h={requested:!1,articles:null};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(m.a)({},e,{requested:!0});case f:case p:case v:return Object(m.a)({},e,{articles:t.articles});default:return e}};var y=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",null,a.a.createElement("i",null,e.author.name)," ",a.a.createElement("i",null,e.author.email)),a.a.createElement("div",{className:"address"},a.a.createElement("i",null,e.author.address.street),a.a.createElement("i",null,e.author.address.suite),a.a.createElement("i",null,e.author.address.city)))};var x=function(e){return a.a.createElement("div",null,a.a.createElement("div",{className:"removeComment",onClick:function(){return e.removeComment(e.articles,e.postIndex,e.commentIndex)}},"x"),a.a.createElement("cite",null,a.a.createElement("h4",null,e.name," "),e.email),a.a.createElement("blockquote",null,e.body))};var j=Object(i.b)(function(e,t){return{name:t.comment.name,email:t.comment.email,body:t.comment.body,articles:e.articles,commentIndex:t.comment.id,postIndex:t.postIndex}},function(e){return{removeComment:function(t,n,r){return e(function(e,t,n){return{type:v,articles:e.map(function(e){return e.id!==t?e:Object(m.a)({},e,{comments:e.comments.filter(function(e){return e.id!==n})})})}}(t,n,r))}}})(x);var I=function(e){return a.a.createElement("div",{className:"comments"},e.comments.map(function(t){return a.a.createElement(j,{comment:t,postIndex:e.postIndex,key:t.id})}))};var O=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("article",null,a.a.createElement("div",{className:"removeArticle",onClick:function(){return e.removeArticle(e.articles,e.index)}},"x"),a.a.createElement("div",{className:"article"},a.a.createElement("h2",null,e.title),a.a.createElement(y,{author:e.author}),a.a.createElement("p",null,e.text)),a.a.createElement(I,{comments:e.comments,postIndex:e.index})))};var k=Object(i.b)(function(e,t){return{articles:e.articles,title:t.article.title,text:t.article.body,author:t.article.user,comments:t.article.comments,index:t.article.id}},function(e){return{removeArticle:function(t,n){return e(function(e,t){return{type:p,articles:e.filter(function(e){return e.id!==t})}}(t,n))}}})(O);n(24),n(25);var N=function(e){return e.requested?null===e.articles?a.a.createElement("span",{className:"loading"},"Loading..."):e.articles.map(function(e){return a.a.createElement(k,{article:e,key:e.id})}):a.a.createElement("section",{className:"circle"},a.a.createElement("div",{className:"envelope",onClick:e.load}))};var g=Object(i.b)(function(e){return{articles:e.articles,requested:e.requested}},function(e){return{load:function(){return e(E())}}})(N),w=Object(o.c)(b,Object(o.a)(u.a));var q=function(){return a.a.createElement(i.a,{store:w},a.a.createElement(g,null))};l.a.render(a.a.createElement(q,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c0f14921.chunk.js.map