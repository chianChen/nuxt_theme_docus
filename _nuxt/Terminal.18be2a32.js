import{d as v,aj as m,r as h,K as y,b as s,c as o,L as i,f as _,e,F as f,ah as k,p as C,i as g,t as x,k as S}from"./entry.04d1a99c.js";const n=t=>(C("data-v-cc90d45d"),t=t(),g(),t),b={key:0,class:"copied"},w=n(()=>e("div",{class:"scrim"},null,-1)),B=n(()=>e("div",{class:"content"}," Copied! ",-1)),I=[w,B],T=n(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),j={class:"window"},F=n(()=>e("span",{class:"sign"},"$",-1)),L={class:"content"},N={key:1,class:"prompt"},V=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:p}=m(),c=h("init"),d=y(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{p(d.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,q)=>(s(),o("div",{class:"terminal",onClick:l},[i(c)==="copied"?(s(),o("div",b,I)):_("",!0),T,e("div",j,[(s(!0),o(f,null,k(i(d),r=>(s(),o("span",{key:r,class:"line"},[F,e("span",L,x(r),1)]))),128))]),i(c)!=="copied"?(s(),o("div",N," Click to copy ")):_("",!0)]))}});const D=S(V,[["__scopeId","data-v-cc90d45d"]]);export{D as default};
