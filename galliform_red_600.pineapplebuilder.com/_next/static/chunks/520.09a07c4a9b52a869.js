"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520,2522,5226],{5226:function(e,n,t){t.r(n),t.d(n,{client:function(){return s},default:function(){return f}});var r=t(5893);t(7294);var c=t(3768),u=t(6495),i=t(7446),o=t(7243),a=t(8728),l=t(3200);new u.h;let s=function(){let e=(0,l.q)(e=>{let{graphQLErrors:n,networkError:t,operation:r,forward:c}=e;n&&n.forEach(e=>{let{message:n,extensions:t,path:r}=e;console.warn("[GraphQL error]: Message: ".concat(n,", extensions: ").concat(JSON.stringify(t?t.exception:"No data"),", Path: ").concat(r))}),t&&console.warn({message:"Network Error",description:"A network error has occurred. Please check out your connection."})}),n=new i.u({uri:"https://api.pineapplebuilder.com/graphql"}),t=(0,o.D)([e,n]);return new a.f({link:t,cache:new u.h})}();var f=e=>{let{children:n}=e;return(0,r.jsx)(c.e,{client:s,children:n})}},2522:function(e,n,t){t.r(n),t.d(n,{default:function(){return s},incrementLivePageViewCount:function(){return l}});var r=t(5893),c=t(7294),u=t(5226),i=t(7283);function o(){var e,n;let t=(e=["\n  mutation countView($input: AddViewCountInput) {\n    countView(input: $input) {\n      id\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return o=function(){return t},t}let a=(0,i.ZP)(o()),l=async e=>{try{let n=await u.client.mutate({mutation:a,variables:e});return n}catch(e){}};function s(e){let{pageId:n}=e;return(0,c.useEffect)(()=>{let e=setTimeout(()=>{l({input:{id:n}})},1e4);return()=>clearTimeout(e)},[n]),(0,r.jsx)(u.default,{children:(0,r.jsx)(r.Fragment,{})})}}}]);