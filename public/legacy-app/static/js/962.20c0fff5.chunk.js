"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[962],{962:(e,o,t)=>{t.r(o),t.d(o,{default:()=>j});var r=t(43),n=t(711),i=t(177),s=t(717),a=t(464),l=t(0),c=t(890),d=t(134),m=t(579);const h=(0,a.Ay)(d.N_)`
  color: ${e=>{let{theme:o}=e;return o.text}};
  margin: 0 1rem;
  text-decoration: none;

  @media ${l.j.mobile} {
    margin: 0.5rem 0;
  }
`,p=e=>{let{colors:o}=e;const t=u(15,o);return(0,m.jsx)(m.Fragment,{children:t.map(((e,o)=>(0,m.jsx)(f,{position:e.position,size:e.size,color:e.color,type:e.type},o)))})},u=(e,o)=>{const t=[];for(let r=0;r<e;r++){const e=[10*Math.random()-5,10*Math.random()-5,10*Math.random()-5],r=1.5*Math.random()+.5,n=Math.random()>.5?"box":"sphere",i=o[Math.floor(Math.random()*o.length)];t.push({position:e,size:r,type:n,color:i})}return t},f=e=>{let{position:o,size:t,color:n,type:s}=e;const a=(0,r.useRef)();return(0,i.F)((()=>{a.current&&(a.current.rotation.x+=.01,a.current.rotation.y+=.01)})),(0,m.jsxs)("mesh",{ref:a,position:o,children:["box"===s?(0,m.jsx)("boxGeometry",{args:[t,t,t]}):(0,m.jsx)("sphereGeometry",{args:[t/2,32,32]}),(0,m.jsx)("meshStandardMaterial",{color:n})]})},x=a.Ay.section`
  position: relative;
   user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: ${e=>{let{backgroundColor:o}=e;return o}};
  color: ${e=>{let{textColor:o}=e;return o}};
  transition: background-color 0.5s ease, color 0.5s ease;

  @media ${l.j.mobile} {
    padding: 1rem;
  }
`,b=a.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`,g=a.Ay.div`
  z-index: 1;
  position: relative;

  h1 {
    font-size: 2.5rem;

    @media ${l.j.mobile} {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;

    @media ${l.j.mobile} {
      font-size: 0.9rem;
    }
  }
`,j=(a.Ay.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: white;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #eee;
  }

  @media ${l.j.mobile} {
    padding: 0.4rem 0.8rem;
  }
`,()=>{const{theme:e}=(0,c.D)(),[o,t]=(0,r.useState)("#ffffff"),[i,a]=(0,r.useState)("#000000"),l=()=>"light"===e?["#4a90e2","#f39c12","#2ecc71","#e74c3c","#9b59b6"]:["#34495e","#7f8c8d","#c0392b","#27ae60","#8e44ad"];return(0,r.useEffect)((()=>{(()=>{const o=l(),r=o[Math.floor(Math.random()*o.length)];t(r),a("light"===e?"#000":"#fff")})()}),[e]),(0,m.jsxs)(x,{backgroundColor:o,textColor:i,children:[(0,m.jsx)(b,{children:(0,m.jsxs)(n.Hl,{children:[(0,m.jsx)("ambientLight",{intensity:.5}),(0,m.jsx)("pointLight",{position:[10,10,10]}),(0,m.jsx)(p,{colors:l()}),(0,m.jsx)(s.N,{enableZoom:!1,enablePan:!1})]})}),(0,m.jsxs)(g,{children:[(0,m.jsx)("h1",{children:"Welcome to My Portfolio"}),(0,m.jsx)("p",{children:"Full Stack Developer | Automotive Enthusiast | Problem Solver"}),(0,m.jsx)(h,{to:"/contact",children:"Contact Me"})]})]})})}}]);
//# sourceMappingURL=962.20c0fff5.chunk.js.map