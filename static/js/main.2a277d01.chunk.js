(this.webpackJsonpmarkdown_previewer=this.webpackJsonpmarkdown_previewer||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(18),o=n.n(a),d=n(9),s=n(20),c=n(16),l=n.n(c),h=n(17),w=n.n(h),b=(n(14),n(3)),p="#000000",x=Object(s.a)({"@global":{body:{overflowX:"hidden"}},container:{width:"100%",height:"100%",margin:"0",padding:"0",backgroundColor:"#87b5b5"},content:{position:"absolute",height:"80%",width:"100%",top:"10%",display:"flex",flexFlow:"row","@media screen and (max-width: 650px)":{flexFlow:"column",height:"100%",top:0}},pane:{width:"50%",height:"100%",margin:"0",backgroundColor:"#ffffff",transition:"width ".concat(1,"s"),border:"solid 1px ".concat(p),boxShadow:"2px 2px 5px black","@media screen and (max-width: 650px)":{width:"100%",height:"50%",transition:"none"}},textContainer:{height:"".concat(95,"%"),width:"100%",padding:"10px",backgroundColor:"#c0d8d8"},markdownArea:{extend:"textContainer",resize:"none",outline:"none",border:"none"},previewArea:{extend:"textContainer",overflow:"scroll"},paneHeader:{width:"100%",padding:"5px",backgroundColor:"#4aa3a3",margin:0,display:"flex",flexFlow:"row",justifyContent:"space-between",alignContent:"center",borderBottom:"solid 1px ".concat(p),boxShadow:"-2px -2px 5px black","& *":{margin:0,padding:0,fontFamily:"Electrolize, sans-serif"}},arrow:{height:"100%",border:"solid black",borderWidth:"0 3px 3px 0",display:"inline-block",padding:"7px",cursor:"pointer","@media screen and (max-width: 650px)":{display:"none"}},rightArrow:{extend:"arrow",transform:"rotate(-45deg)"},leftArrow:{extend:"arrow",transform:"rotate(135deg)"},hiddenArrow:{display:"none"},hiddenPane:{width:"0%"}}),f=function(){var e=Object(r.useState)("# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n'"),t=Object(d.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(""),o=Object(d.a)(a,2),s=o[0],c=o[1],h=Object(r.useState)({editor:!1,preview:!1}),p=Object(d.a)(h,2),f=p[0],m=p[1];Object(r.useEffect)((function(){var e=w.a.sanitize(n);c(l()(e))}),[]);var u=x(),g=Object(r.useState)(u.rightArrow),j=Object(d.a)(g,2),v=j[0],O=j[1],k=Object(r.useState)(u.leftArrow),A=Object(d.a)(k,2),y=A[0],C=A[1],N={},S={};f.editor&&!f.preview&&(N={width:"100%"},S={width:"0%"}),f.preview&&!f.editor&&(S={width:"100%"},N={width:"0%"});return Object(b.jsx)("div",{className:u.container,children:Object(b.jsxs)("div",{className:u.content,children:[Object(b.jsxs)("div",{className:u.pane,style:N,children:[Object(b.jsxs)("div",{className:u.paneHeader,children:[Object(b.jsx)("p",{children:"Editor"}),Object(b.jsx)("i",{className:v,onClick:function(){f.editor?(m({editor:!1,preview:!1}),O(u.rightArrow),C(u.leftArrow)):(m({editor:!0,preview:!1}),O(u.leftArrow),C(u.hiddenArrow))}})]}),Object(b.jsx)("textarea",{value:n,onChange:function(e){var t=e.target.value;i(t);var n=w.a.sanitize(t);c(l()(n))},className:u.markdownArea})]}),Object(b.jsxs)("div",{className:u.pane,style:S,children:[Object(b.jsxs)("div",{className:u.paneHeader,children:[Object(b.jsx)("i",{className:y,onClick:function(){f.preview?(m({editor:!1,preview:!1}),C(u.leftArrow),O(u.rightArrow)):(m({editor:!1,preview:!0}),C(u.rightArrow),O(u.hiddenArrow))}}),Object(b.jsx)("p",{children:"Previewer"})]}),Object(b.jsx)("div",{className:u.previewArea,dangerouslySetInnerHTML:{__html:s}})]})]})})};n(33);o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.2a277d01.chunk.js.map