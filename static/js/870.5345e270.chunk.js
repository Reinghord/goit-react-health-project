"use strict";(self.webpackChunkreact_health_project=self.webpackChunkreact_health_project||[]).push([[870],{8544:function(n,i,e){e.d(i,{Z:function(){return z}});e(2791);var t,l,d,a,r,o,s,c,x,h,p=e(168),f=e(6444),m=f.ZP.div(t||(t=(0,p.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px 20px 12px 20px;\n  /* background-color: #f0f1f3; */\n  margin-top: 80px;\n\n  @media screen and (max-width: 320px) {\n    width: 320px;\n    margin-left: -20px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    margin-left: -32px;\n    flex-direction: row;\n    padding: 80px 32px 40px 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 517px;\n    /* min-height: 100vh; */\n    flex-direction: column;\n    margin-top: 0;\n    margin-left: 0;\n    padding: 0px;\n  }\n"]))),u=f.ZP.div(l||(l=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 60px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n  @media screen and (min-width: 768px) {\n    &:first-child {\n      margin-right: 97px;\n    }\n  }\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n    height: 178px;\n    &:first-child {\n      margin-right: 0px;\n    }\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]))),g=f.ZP.p(d||(d=(0,p.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #212121;\n  text-align: start;\n  margin-bottom: 30px;\n"]))),w=f.ZP.ul(a||(a=(0,p.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  list-style-position: inside;\n  margin: 0;\n  padding: 0;\n  max-width: 400px;\n  max-height: 180px;\n  overflow-y: scroll;\n  scroll-behavior: smooth;\n\n  &::-webkit-scrollbar {\n    width: 6px;\n    background-color: #f0f1f3;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: #264061;\n  }\n"]))),y=f.ZP.li(r||(r=(0,p.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),j=f.ZP.p(o||(o=(0,p.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n"]))),v=f.ZP.div(s||(s=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  color: #9b9faa;\n"]))),Z=f.ZP.div(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 20px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),b=f.ZP.div(x||(x=(0,p.Z)(["\n  width: 180px;\n  @media screen and (min-width: 768px) {\n    width: 182px;\n  }\n"]))),k=f.ZP.div(h||(h=(0,p.Z)(["\n  width: 88px;\n"]))),P=e(9434),R=function(n){return n.day.daySummary},S=e(231),D=e(5984),_=e(184),z=function(){var n=(0,P.v9)(R),i=(0,P.v9)(S.U6),e=new Date((null===n||void 0===n?void 0:n.date)||new Date).toISOString().split("T")[0];return(0,_.jsxs)(m,{children:[(0,_.jsxs)(u,{children:[(0,_.jsxs)(g,{children:["Summary for ",e]}),(0,_.jsxs)(v,{children:[(0,_.jsxs)(Z,{children:[(0,_.jsx)(b,{children:"Left"}),(0,_.jsxs)(k,{children:[(null===n||void 0===n?void 0:n.dailyRate)>0?Math.round(n.kcalLeft):0," ","kcal"]})," "]}),(0,_.jsxs)(Z,{children:[(0,_.jsx)(b,{children:"Consumed"}),(0,_.jsxs)(k,{children:[(null===n||void 0===n?void 0:n.dailyRate)>0?Math.round(n.kcalConsumed):0," ","kcal"," "]})]}),(0,_.jsxs)(Z,{children:[(0,_.jsx)(b,{children:"Daily rate "}),(0,_.jsxs)(k,{children:[" ",(null===n||void 0===n?void 0:n.dailyRate)>0?Math.round(n.dailyRate):0," ","kcal"," "]})]}),(0,_.jsxs)(Z,{children:[(0,_.jsx)(b,{children:"% of normal"}),(0,_.jsxs)(k,{children:[(null===n||void 0===n?void 0:n.dailyRate)>0?Math.round(n.percentsOfDailyRate):0," ","%"]})]})]})]}),(0,_.jsxs)(u,{children:[(0,_.jsx)(g,{children:"Food not recommended"}),(null===n||void 0===n?void 0:n.dailyRate)>0?(0,_.jsx)(w,{children:i.map((function(n,i){return(0,_.jsxs)(y,{children:[i+1,". ",n]},(0,D.x0)())}))}):(0,_.jsx)(j,{children:" Your diet will be displayed here "})]})]})}},3870:function(n,i,e){e.r(i),e.d(i,{default:function(){return g}});var t,l=e(2791),d=e(168),a=e(6444),r=e(4880).A.desktop,o=a.ZP.div(t||(t=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 81px;\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n    padding-top: 145px;\n  }\n"])),r),s=e(9434),c=e(5888),x=e(6516),h=e(7113),p=e(9903),f=e(8544),m=e(7768),u=e(184);var g=function(){var n=(0,s.I0)(),i=(0,x.z)(),e=(0,s.v9)(h._);return(0,l.useEffect)((function(){n((0,c.d0)({date:(new Date).toISOString().split("T")[0]}))}),[n]),(0,u.jsx)(o,{children:e&&i<=768?(0,u.jsx)(m.Z,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{style:{flexGrow:1},children:(0,u.jsx)(p.Z,{})}),(0,u.jsx)(f.Z,{})]})})}}}]);
//# sourceMappingURL=870.5345e270.chunk.js.map