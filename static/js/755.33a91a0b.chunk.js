"use strict";(self.webpackChunkcoctails_list_react=self.webpackChunkcoctails_list_react||[]).push([[755],{595:(e,t,i)=>{i.d(t,{z:()=>o});const o=i(978).ZP.button((()=>({padding:"8px",backgroundColor:"grey",border:"none",borderRadius:"5px",fontWeight:"500",cursor:"pointer","&:hover":{backgroundColor:"blue",color:"white"}})))},627:(e,t,i)=>{i.d(t,{W:()=>o});const o=i(978).ZP.div((()=>({minHeight:"100vh",maxWidth:"1200px",backgroundColor:"transparent",position:"relative",top:0,textAlign:"center",paddingBottom:"20px"})))},736:(e,t,i)=>{i.d(t,{V:()=>o});const o=i(978).ZP.div((()=>({minWidth:"200px",maxWidth:"200px",overflow:"hidden",borderRadius:"5px",img:{width:"100%",height:"300px",objectFit:"cover"}})))},451:(e,t,i)=>{i.d(t,{g:()=>o});const o=i(978).ZP.div((()=>({width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"15px",button:{width:"100%"},"a:hover":{color:"blue"}})))},679:(e,t,i)=>{i.d(t,{Y:()=>o});const o=i(978).ZP.div((()=>({display:"flex",flexDirection:"column"})))},97:(e,t,i)=>{i.d(t,{e:()=>C});var o=i(791),r=i(294);const n={baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjE2MjdjOWNmYzQ5YjY0MDUxZmE4ZWU2NGFmMDM4MSIsInN1YiI6IjY1N2Q4NDZiYjdmYmJkMDZjODMwNTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7NWSj1-y7xBlR5IWWT6t3fEcBUOHkAiJumA6Nwpm4FQ"}};async function a(e){return await r.Z.get("/movie/popular?page=".concat(e),n)}async function s(e,t){return await r.Z.get("/search/movie?query=".concat(e,"&page=").concat(t),n)}var l=i(978);const c=l.ZP.ul((()=>({listStyle:"none",textAlign:"center",padding:"20px",display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"15px",li:{paddingBottom:"8px",position:"relative",objectFit:"cover",boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",width:"150px",border:"solid 1px lightgrey",borderRadius:"6px",overflow:"hidden",display:"flex",flexDirection:"column",gap:"8px",alignItems:"center",div:{width:"100%",height:"200px",overflow:"hidden",img:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 1000ms easy-out"}}},"li:hover":{color:"blue",fontWeight:"700",img:{transform:"scale(1.1)"}}})));var d=i(984);const p=l.ZP.div((()=>({position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#FFF",zIndex:"1000",padding:"15px",display:"flex",gap:"15px",minWidth:"300px"}))),h=l.ZP.div((()=>({position:"fixed",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, .7)",zIndex:"1000"})));var u=i(164);const x=l.ZP.button((()=>({position:"absolute",top:"15px",right:"15px",width:"20px",height:"20px",border:"none",borderRadius:"4px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"grey",fill:"white","&:hover":{backgroundColor:"blue"}})));var g=i(679),m=i(736),f=i(595),v=i(451),b=i(558),y=i(694),j=i(184);const w=e=>{var t;let{onClose:i,movieId:a}=e;const[s,l]=(0,o.useState)(null),{addMovieToList:c}=(0,o.useContext)(b.Z),{removeMovieFromList:d}=(0,o.useContext)(b.Z),{movieList:w}=(0,o.useContext)(b.Z);return(0,o.useEffect)((()=>{!async function(){try{const e=await async function(e){return await r.Z.get("movie/".concat(e),n)}(a);l(e.data)}catch(e){y.Notify.failure("Something went wrong( Try reload the page)))")}}()}),[a]),u.createPortal((0,j.jsx)(h,{onClick:i,children:s&&(0,j.jsxs)(p,{onClick:e=>{e.stopPropagation()},children:[(0,j.jsx)(x,{type:"button",onClick:i,children:(0,j.jsx)("svg",{height:"15px",viewBox:"0 0 512 512",width:"15px",children:(0,j.jsx)("path",{d:"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"})})}),(0,j.jsxs)(m.V,{children:[(0,j.jsx)("img",{src:s.poster_path?"https://image.tmdb.org/t/p/w500/".concat(s.poster_path):"https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg",alt:s.title||s.name}),(0,j.jsxs)(v.g,{children:[null!==w&&void 0!==w&&w.find((e=>e.id===s.id))?(0,j.jsx)(f.z,{type:"button",onClick:()=>d(s.id),children:"Remove from your list"}):(0,j.jsx)(f.z,{type:"button",onClick:()=>c(s),children:"Add in your list"}),s.homepage&&(0,j.jsx)("a",{href:s.homepage,target:"_blank",rel:"noreferrer",children:"See more (homepage)"})]})]}),(0,j.jsxs)(g.Y,{children:[(0,j.jsx)("h2",{children:s.title||s.name}),(0,j.jsx)("p",{children:s.overview}),(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"Average vote "}),s.vote_average]}),(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"Genres: "})," ",null===(t=s.genres)||void 0===t?void 0:t.map((e=>e.name)).toString()]})]})]})}),document.getElementById("portal"))};var k=i(94);const C=e=>{let{searchWord:t=""}=e;const[i,r]=(0,o.useState)(null),[n,l]=(0,o.useState)(null),[p,h]=(0,o.useState)(!1),[u,x]=(0,o.useState)(null),[g,m]=(0,o.useState)(1),[v,b]=(0,o.useState)(0);return(0,o.useEffect)((()=>{!async function(){if(t)if(1!==g||i){if(1!==g&&i)try{const e=await s(t,g);l([...i,...e.data.results])}catch(e){console.log(e.message)}}else try{const e=await s(t,g);if(0===e.data.results.length)return r(null),l(null),void y.Notify.failure("There are no movies( Try reload the page)))");r(e.data.results),l(e.data.results),b(e.data.total_pages)}catch(e){}else if(1!==g||i){if(1!==g&&i)try{const e=await a(g);l([...i,...e.data.results])}catch(e){y.Notify.failure("Something went wrong(( Try reload the page")}}else try{const e=await a(g);r(e.data.results),l(e.data.results),b(e.data.total_pages)}catch(e){y.Notify.failure("Something went wrong(( Try reload the page")}}()}),[t,g,i]),n&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c,{children:n.map((e=>(0,j.jsxs)("li",{id:e.id,onClick:()=>{h(!0),x(e.id)},children:[(0,j.jsx)("div",{children:(0,j.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg",alt:e.title||e.name,width:150})}),e.title||e.name]},(0,d.x0)())))}),g<v?(0,j.jsx)(f.z,{type:"button",onClick:()=>{m(g+1),r([...n])},children:"See more..."}):y.Notify.info("There are all movies"),p&&u&&(0,j.jsx)(w,{onClose:()=>h(!1),movieId:u}),(0,j.jsx)(k.jz,{style:{width:"50px",height:"50px",fill:"#6A5ACD",borderColor:"#6A5ACD",backgroundColor:"#EFFD5F"}})]})}},755:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var o=i(87),r=i(689),n=i(97),a=i(627),s=i(595);const l=i(978).ZP.form((()=>({display:"flex",gap:"20px",justifyContent:"center",input:{padding:"5px",outline:"none",border:"solid 1px grey",borderRadius:"4px","&:focus":{border:"solid 2px blue"}}})));var c=i(694),d=i(184);const p=()=>{const[e,t]=(0,o.lr)(),i=(0,r.s0)();return(0,d.jsxs)(a.W,{children:[(0,d.jsx)("h1",{children:"Here you can search movies"}),(0,d.jsxs)(l,{onSubmit:e=>{e.preventDefault();const o=e.target,r=o.elements.search.value;if(!r)return c.Notify.warning("Search field mustn't be empty"),void i("/search");t({query:r}),o.reset()},children:[(0,d.jsx)("input",{type:"text",name:"search",placeholder:"Enter search word"}),(0,d.jsx)(s.z,{type:"submit",children:"Search"})]}),e.get("query")&&(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.e,{searchWord:e.get("query")})})]})}}}]);
//# sourceMappingURL=755.33a91a0b.chunk.js.map