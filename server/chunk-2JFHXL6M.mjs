import './polyfills.server.mjs';
import{D as b,G as A,H as M,I as E,a as r,b as c,c as d,d as s,e as h,f,g as o,h as a,i as p,j as g,k as m,l as _,q as v,t as y,v as C,w as V,z as D}from"./chunk-O2LWIYDE.mjs";import{a as l,b as u}from"./chunk-5XUXGTUW.mjs";var P={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},De=u(l({},P),{"[class.ng-submitted]":"isSubmitted"});var k=new c("CallSetDisabledState",{providedIn:"root",factory:()=>F}),F="always";var R=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=s({type:e})}static{this.\u0275inj=r({})}}return e})();var w=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:k,useValue:t.callSetDisabledState??F}]}}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=s({type:e})}static{this.\u0275inj=r({imports:[R]})}}return e})();var G=()=>["/"],n=class e{title="Your App Title";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["app-root"]],standalone:!0,features:[m],decls:7,vars:2,consts:[[3,"routerLink"],[1,"brand-name"],[1,"content"]],template:function(t,i){t&1&&(o(0,"main")(1,"a",0)(2,"header",1)(3,"h1"),g(4,"Todo List"),a()()(),o(5,"section",2),p(6,"router-outlet"),a()()),t&2&&(h(),f("routerLink",_(1,G)))},dependencies:[w,E,b,A]})};var I=[];var S={providers:[v({eventCoalescing:!0}),M(I),V()]};var T={providers:[D()]},N=y(S,T);var j=()=>C(n,N),We=j;export{We as a};