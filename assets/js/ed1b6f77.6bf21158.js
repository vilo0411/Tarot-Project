"use strict";(self.webpackChunktarot_project=self.webpackChunktarot_project||[]).push([[8799],{1505:(n,t,e)=>{e.d(t,{f:()=>a});var i=e(6540);const a=()=>({playSound:(0,i.useCallback)((n=>{const t=new Audio(n);t.volume=.3;try{const n=t.play();void 0!==n&&n.catch((n=>{console.log("Kh\xf4ng th\u1ec3 ph\xe1t \xe2m thanh:",n)}))}catch(e){console.log("L\u1ed7i khi ph\xe1t \xe2m thanh:",e)}}),[])})},2599:(n,t,e)=>{e.d(t,{A:()=>m});var i=e(6540),a=e(9030);const c="selectorCardContainer_W1Og",s="spreadCardContainer_Q6B5",r="selectedCardContainer_I_mZ",h="card_OaqV",o="cardImage_k3BF";var l=e(4848);const u=function(n){let{card:t,isBack:e=!0,isSelected:i=!1,onClick:u,style:g={},variant:d="selector"}=n,m="selector"===d?c:s;const p=(0,a.Ay)("img/deck/back.jpg"),v=(0,a.Ay)(`img/deck/${t.code}.jpg`),b={...g,..."spread"===d&&!e&&t.isReversed?{transform:"rotate(180deg)"}:{}};return(0,l.jsx)("div",{className:`${m} ${i?r:""}`,onClick:u,style:b,children:(0,l.jsx)("div",{className:h,children:(0,l.jsx)("img",{src:e?p:v,alt:e?"Card Back":t.name,className:o})})})},g={spreadLayout:"spreadLayout_D4os",singleCardLayout:"singleCardLayout_Wo9e",threeCardsLayout:"threeCardsLayout_wWLQ",fiveCardsLayout:"fiveCardsLayout_ecCc",tenCardsLayout:"tenCardsLayout_hfWh",layout:"layout_n6R8",layout1:"layout1_uWJj",singleCard:"singleCard_XqzO",layout3:"layout3_Xgot",layout5:"layout5_HQ84",top:"top_QLST",left:"left_dKNd",center:"center_OFkO",right:"right_GgP1",bottom:"bottom_R2fI",layout10:"layout10_d8pl","celtic-center":"celtic-center_Xd9H","celtic-crossing":"celtic-crossing_cNjz","celtic-below":"celtic-below_eaHC","celtic-left":"celtic-left_kz_Z","celtic-above":"celtic-above_YxYY","celtic-right":"celtic-right_B0Hw","celtic-self":"celtic-self_n_kX","celtic-environment":"celtic-environment_YFhE","celtic-hopes":"celtic-hopes_sldH","celtic-outcome":"celtic-outcome_AD26",cardPositionLabel:"cardPositionLabel_YUR4",emptyPositionLabel:"emptyPositionLabel_z7ow",cardPosition:"cardPosition_Fmdm",emptyPosition:"emptyPosition_pYYv",positionNumber:"positionNumber_DcRP"},d={1:[{position:"L\xe1 B\xe0i Duy Nh\u1ea5t",className:"singleCard"}],3:[{position:"Qu\xe1 Kh\u1ee9",className:"left"},{position:"Hi\u1ec7n T\u1ea1i",className:"center"},{position:"T\u01b0\u01a1ng Lai",className:"right"}],5:[{position:"Ch\u1ee7 \u0110\u1ec1",className:"center"},{position:"Tr\xean",className:"top"},{position:"Tr\xe1i",className:"left"},{position:"Ph\u1ea3i",className:"right"},{position:"D\u01b0\u1edbi",className:"bottom"}],10:[{position:"Hi\u1ec7n T\u1ea1i",className:"celtic-center"},{position:"Th\xe1ch Th\u1ee9c",className:"celtic-crossing"},{position:"D\u01b0\u1edbi \xdd Th\u1ee9c",className:"celtic-below"},{position:"Qu\xe1 Kh\u1ee9 G\u1ea7n",className:"celtic-left"},{position:"T\u01b0\u01a1ng Lai G\u1ea7n",className:"celtic-above"},{position:"K\u1ebft Qu\u1ea3",className:"celtic-right"},{position:"B\u1ea3n Th\xe2n",className:"celtic-self"},{position:"M\xf4i Tr\u01b0\u1eddng",className:"celtic-environment"},{position:"Hy V\u1ecdng/N\u1ed7i S\u1ee3",className:"celtic-hopes"},{position:"K\u1ebft Qu\u1ea3 Cu\u1ed1i",className:"celtic-outcome"}]};const m=function(n){let{selectedCards:t,spreadType:e,isBack:a=!0,showPositions:c=!1}=n;if(!e)return null;const s=d[e.count]||[],r=10===e.count,h=1===e.count,o=3===e.count,m=5===e.count,[p,v]=i.useState(!1);return i.useEffect((()=>{const n=()=>{v(window.innerWidth<=768)};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[]),(0,l.jsx)("div",{className:`\n        ${g.spreadLayout} \n        ${h?g.singleCardLayout:""} \n        ${o?g.threeCardsLayout:""}\n        ${m?g.fiveCardsLayout:""}\n        ${r?g.tenCardsLayout:""}\n      `,children:(0,l.jsxs)("div",{className:`${g.layout} ${g[`layout${e.count}`]}`,children:[s.map(((n,e)=>(0,l.jsxs)("div",{className:`${g.cardPosition} ${g[n.className]||""}`,children:[p&&r&&(0,l.jsx)("div",{className:g.mobilePositionLabel,children:n.position}),t[e]?(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)(u,{card:t[e],isBack:a,isSelected:!1,variant:"spread"}),(c||!p&&r)&&(0,l.jsx)("div",{className:g.cardPositionLabel,children:n.position})]}):(0,l.jsxs)("div",{className:g.emptyPosition,children:[(0,l.jsx)("div",{className:g.positionNumber,children:e+1}),(c||!p&&r)&&(0,l.jsx)("div",{className:g.emptyPositionLabel,children:n.position})]})]},e))),r&&!p&&(0,l.jsxs)("div",{className:g.celticConnectors,children:[(0,l.jsx)("div",{className:g.verticalConnector}),(0,l.jsx)("div",{className:g.horizontalConnector}),(0,l.jsx)("div",{className:g.staffConnector})]})]})})}},2766:(n,t,e)=>{e.d(t,{A:()=>N});e(6540);const i="container_okIi",a="overlay_uCuD",c="fullPage_Sdm9",s="transparent_K6Al",r="content_k3IK",h="message_hQ4U",o="loader_aF47",l="small_oMI_",u="large_YCT2",g="spinner_IHai",d="dots__a0c",m="dot_Qzl2",p="shimmer_OTQx",v="shimmerBar_evyf",b="cards_ScIE",y="card_OMXZ";var f=e(4848);const N=n=>{let{message:t="\u0110ang t\u1ea3i...",size:e="medium",type:N="spinner",showMessage:C=!0,className:x="",overlay:_=!1,fullPage:T=!1,transparent:j=!1}=n;const k=()=>{let n=o;return"small"===e?n+=` ${l}`:"large"===e&&(n+=` ${u}`),n};return(0,f.jsx)("div",{className:(()=>{let n=i;return x&&(n+=` ${x}`),_&&(n+=` ${a}`),T&&(n+=` ${c}`),j&&(n+=` ${s}`),n})(),children:(0,f.jsxs)("div",{className:r,children:[(()=>{switch(N){case"dots":return(0,f.jsxs)("div",{className:`${k()} ${d}`,children:[(0,f.jsx)("div",{className:m}),(0,f.jsx)("div",{className:m}),(0,f.jsx)("div",{className:m})]});case"shimmer":return(0,f.jsx)("div",{className:`${k()} ${p}`,children:(0,f.jsx)("div",{className:v})});case"cards":return(0,f.jsxs)("div",{className:`${k()} ${b}`,children:[(0,f.jsx)("div",{className:y}),(0,f.jsx)("div",{className:y}),(0,f.jsx)("div",{className:y})]});default:return(0,f.jsx)("div",{className:`${k()} ${g}`})}})(),C&&t&&(0,f.jsx)("p",{className:h,children:t})]})})}},3795:(n,t,e)=>{e.d(t,{A:()=>S});var i=e(6540),a=e(7331),c=e(6347),s=e(2599);const r="readingResults_p00_",h="questionContainer_SOR0",o="questionTitle_gROK",l="questionContent_SSPX",u="cardsContainer_pKM1",g="cardsTitle_plEI",d="sectionTitle_Nc1V",m="contentContainer_R6vr",p="emailSection_QLZw",v="emailHeading_IEBK",b="emailDescription_XzJj",y="emailForm_EKBM",f="formFields_fmJp",N="nameInput_dJ3p",C="emailInput_HjKR",x="validEmail_ZF6e",_="validName_R4Dv",T="emailSubmitButton_r0CI",j="emailError_Tbpj",k="controls_HXS6",w="resetButton_ETtb";var $=e(4848);const S=function(n){let{reading:t,aiAnalysis:e,selectedCards:S,onReset:L,question:R,showControls:E=!0,timestamp:A=new Date,onSubmitEmail:P}=n;const[q,D]=(0,i.useState)(""),[K,I]=(0,i.useState)(""),[H,B]=(0,i.useState)(!1),[M,F]=(0,i.useState)(!1),[V,O]=(0,i.useState)(!1),Q=(0,c.W6)();return new Intl.DateTimeFormat("vi-VN",{dateStyle:"full",timeStyle:"medium"}).format(A),(0,$.jsxs)("div",{className:r,children:[(0,$.jsxs)("div",{className:h,children:[(0,$.jsx)("h2",{className:o,children:"C\xe2u H\u1ecfi C\u1ee7a B\u1ea1n"}),(0,$.jsx)("div",{className:l,children:(0,$.jsx)("p",{children:R||"Kh\xf4ng th\u1ec3 hi\u1ec3n th\u1ecb c\xe2u h\u1ecfi"})})]}),(0,$.jsxs)("div",{className:u,children:[(0,$.jsx)("h2",{className:g,children:"L\xe1 B\xe0i C\u1ee7a B\u1ea1n"}),S&&S.length>0?(0,$.jsx)(s.A,{selectedCards:S,spreadType:(()=>{if(!S||0===S.length)return null;switch(S.length){case 1:return{name:"R\xfat 1 L\xe1",count:1};case 3:return{name:"R\xfat 3 L\xe1",count:3};case 5:return{name:"R\xfat 5 L\xe1",count:5};case 10:return{name:"R\xfat 10 L\xe1",count:10};default:return{name:`R\xfat ${S.length} L\xe1`,count:S.length}}})(),isBack:!1}):(0,$.jsx)("p",{children:"Kh\xf4ng c\xf3 l\xe1 b\xe0i n\xe0o \u0111\u01b0\u1ee3c ch\u1ecdn."})]}),(0,$.jsx)("h2",{className:d,children:"K\u1ebft Qu\u1ea3"}),(0,$.jsx)("div",{className:m,children:(0,$.jsx)(a.oz,{children:(()=>{if(e&&"object"==typeof e&&e.text)return e.text;if(t&&t.text){const n=t.text.match(/## K\u1ebft lu\u1eadn\s*\n\n([\s\S]*?)(\n\n|$)/);return n&&n[1]?n[1]:t.text.substring(0,250)+"..."}return"Kh\xf4ng c\xf3 th\xf4ng tin t\xf3m t\u1eaft. Vui l\xf2ng th\u1eed l\u1ea1i."})()})}),(0,$.jsxs)("div",{className:p,children:[(0,$.jsx)("h3",{className:v,children:"Nh\u1eadn ph\xe2n t\xedch chi ti\u1ebft v\u1ec1 b\xe0i Tarot c\u1ee7a b\u1ea1n"}),(0,$.jsx)("p",{className:b,children:"\u0110\u1ec3 nh\u1eadn \u0111\u01b0\u1ee3c ph\xe2n t\xedch chi ti\u1ebft v\xe0 s\xe2u s\u1eafc h\u01a1n v\u1ec1 t\u1eebng l\xe1 b\xe0i v\xe0 \xfd ngh\u0129a trong c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n, vui l\xf2ng \u0111\u1ec3 l\u1ea1i th\xf4ng tin li\xean h\u1ec7:"}),(0,$.jsxs)("form",{onSubmit:async n=>{if(n.preventDefault(),H)if(M)try{O(!0);const n={name:q,email:K,question:R||"Kh\xf4ng c\xf3 c\xe2u h\u1ecfi",selectedCards:S.map((n=>({name:n.name,isReversed:n.isReversed,code:n.code}))),readingType:1===S.length?"M\u1ed9t l\xe1":3===S.length?"Ba l\xe1":5===S.length?"N\u0103m l\xe1":10===S.length?"M\u01b0\u1eddi l\xe1":"Kh\xe1c",timestamp:(new Date).toISOString()},t=await fetch("https://n8n.banhduc.vn/webhook/tarot-reading",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!t.ok)throw new Error(`Webhook request failed with status ${t.status}`);P&&await P(K,S,q),alert("K\u1ebft qu\u1ea3 ph\xe2n t\xedch chi ti\u1ebft s\u1ebd \u0111\u01b0\u1ee3c g\u1eedi \u0111\u1ebfn email c\u1ee7a b\u1ea1n."),Q.push("/reading")}catch(t){console.error("Submission error:",t),alert("C\xf3 l\u1ed7i x\u1ea3y ra. Vui l\xf2ng th\u1eed l\u1ea1i.")}finally{O(!1)}else alert("Vui l\xf2ng nh\u1eadp h\u1ecd v\xe0 t\xean c\u1ee7a b\u1ea1n.");else alert("Vui l\xf2ng nh\u1eadp \u0111\u1ecba ch\u1ec9 email h\u1ee3p l\u1ec7.")},className:y,children:[(0,$.jsxs)("div",{className:f,children:[(0,$.jsx)("input",{type:"text",placeholder:"H\u1ecd v\xe0 t\xean c\u1ee7a b\u1ea1n",value:q,onChange:n=>{const t=n.target.value;D(t),F(t.trim().length>0)},className:`${N} ${M?_:""}`,required:!0}),(0,$.jsx)("input",{type:"email",placeholder:"\u0110\u1ecba ch\u1ec9 email",value:K,onChange:n=>{const t=n.target.value;I(t),B((n=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(n).toLowerCase()))(t))},className:`${C} ${H?x:""}`,required:!0})]}),(0,$.jsx)("button",{type:"submit",className:T,disabled:!H||!M||V,children:V?"\u0110ang g\u1eedi...":"G\u1eedi Cho T\xf4i"})]}),!H&&K&&(0,$.jsx)("p",{className:j,children:"Vui l\xf2ng nh\u1eadp \u0111\u1ecba ch\u1ec9 email h\u1ee3p l\u1ec7"}),!M&&q&&(0,$.jsx)("p",{className:j,children:"Vui l\xf2ng nh\u1eadp h\u1ecd v\xe0 t\xean c\u1ee7a b\u1ea1n"})]}),E&&(0,$.jsx)("div",{className:k,children:(0,$.jsx)("button",{className:w,onClick:L,children:"B\xf3i L\u1ea1i"})})]})}},5460:(n,t,e)=>{e.d(t,{Xs:()=>l});class i{constructor(n){void 0===n&&(n={}),this.config={apiKey:null,apiEndpoint:null,model:null,...n},this.config.apiKey||this.config.skipValidation||console.warn("No API key provided for AI Analysis Client")}async analyzeReading(n,t,e){throw new Error("Method not implemented. Use a specific AI client implementation.")}formatPrompt(n,t,e){throw new Error("Method not implemented. Use a specific AI client implementation.")}processResponse(n){throw new Error("Method not implemented. Use a specific AI client implementation.")}handleError(n){const t=new Error(`AI Analysis Error: ${n.message}`);return t.originalError=n,t.statusCode=n.statusCode||500,t}}const a=(n,t,e)=>{let i="";switch(e){case"single-card":i="Tr\u1ea3i b\xe0i m\u1ed9t l\xe1";break;case"past-present-future":i="Tr\u1ea3i b\xe0i Qu\xe1 kh\u1ee9-Hi\u1ec7n t\u1ea1i-T\u01b0\u01a1ng lai";break;case"cross-spread":i="Tr\u1ea3i b\xe0i Ch\u1eef th\u1eadp";break;case"celtic-cross":i="Tr\u1ea3i b\xe0i Celtic Cross";break;default:i=`Tr\u1ea3i b\xe0i ${e}`}return`L\xe0 m\u1ed9t chuy\xean gia Tarot, h\xe3y \u0111\u01b0a ra c\xe2u tr\u1ea3 l\u1eddi ng\u1eafn g\u1ecdn v\xe0 tr\u1ef1c ti\u1ebfp cho c\xe2u h\u1ecfi d\u1ef1a tr\xean c\xe1c l\xe1 b\xe0i.\n\nC\xe2u h\u1ecfi: ${n}\nC\xe1c l\xe1 b\xe0i: ${t}\nKi\u1ec3u tr\u1ea3i b\xe0i: ${i}\n\n# H\u01b0\u1edbng d\u1eabn:\n1. Tr\u1ea3 l\u1eddi NG\u1eaeN G\u1eccN v\xe0 TR\u1ef0C TI\u1ebeP cho c\xe2u h\u1ecfi (t\u1ed1i \u0111a 150 t\u1eeb)\n2. KH\xd4NG \u0111\u01b0a ra ph\xe2n t\xedch chi ti\u1ebft cho t\u1eebng l\xe1 b\xe0i\n3. CH\u1ec8 t\u1eadp trung v\xe0o vi\u1ec7c tr\u1ea3 l\u1eddi c\xe2u h\u1ecfi d\u1ef1a tr\xean c\xe1c l\xe1 b\xe0i \u0111\xe3 r\xfat\n\nVi\u1ebft c\xe2u tr\u1ea3 l\u1eddi b\u1eb1ng ti\u1ebfng Vi\u1ec7t d\u01b0\u1edbi d\u1ea1ng \u0111o\u1ea1n v\u0103n ng\u1eafn, kh\xf4ng c\xf3 ti\xeau \u0111\u1ec1 hay ph\u1ea7n ri\xeang bi\u1ec7t.`},c={SINGLE_CARD:"L\xe0 m\u1ed9t chuy\xean gia Tarot, h\xe3y \u0111\u01b0a ra c\xe2u tr\u1ea3 l\u1eddi ng\u1eafn g\u1ecdn v\xe0 tr\u1ef1c ti\u1ebfp cho c\xe2u h\u1ecfi d\u1ef1a tr\xean l\xe1 b\xe0i.\n\nC\xe2u h\u1ecfi: {{QUESTION}}\nL\xe1 b\xe0i: {{CARDS}}\nKi\u1ec3u tr\u1ea3i b\xe0i: {{SPREAD_TYPE}}\n\n\u0110\u01b0a ra c\xe2u tr\u1ea3 l\u1eddi ng\u1eafn g\u1ecdn v\xe0 tr\u1ef1c ti\u1ebfp, ch\u1ec9 t\u1eadp trung v\xe0o vi\u1ec7c tr\u1ea3 l\u1eddi c\xe2u h\u1ecfi (t\u1ed1i \u0111a 150 t\u1eeb). \n\nVi\u1ebft c\xe2u tr\u1ea3 l\u1eddi b\u1eb1ng ti\u1ebfng Vi\u1ec7t d\u01b0\u1edbi d\u1ea1ng \u0111o\u1ea1n v\u0103n ng\u1eafn, kh\xf4ng c\xf3 ti\xeau \u0111\u1ec1 hay ph\u1ea7n ri\xeang bi\u1ec7t.",THREE_CARD:"L\xe0 m\u1ed9t chuy\xean gia Tarot, h\xe3y \u0111\u01b0a ra c\xe2u tr\u1ea3 l\u1eddi ng\u1eafn g\u1ecdn v\xe0 tr\u1ef1c ti\u1ebfp cho c\xe2u h\u1ecfi d\u1ef1a tr\xean c\xe1c l\xe1 b\xe0i Qu\xe1 kh\u1ee9-Hi\u1ec7n t\u1ea1i-T\u01b0\u01a1ng lai.\n\nC\xe2u h\u1ecfi: {{QUESTION}}\nC\xe1c l\xe1 b\xe0i: {{CARDS}}\nKi\u1ec3u tr\u1ea3i b\xe0i: {{SPREAD_TYPE}}\n\n\u0110\u01b0a ra c\xe2u tr\u1ea3 l\u1eddi ng\u1eafn g\u1ecdn v\xe0 tr\u1ef1c ti\u1ebfp, ch\u1ec9 t\u1eadp trung v\xe0o vi\u1ec7c tr\u1ea3 l\u1eddi c\xe2u h\u1ecfi (t\u1ed1i \u0111a 150 t\u1eeb). \n\nVi\u1ebft c\xe2u tr\u1ea3 l\u1eddi b\u1eb1ng ti\u1ebfng Vi\u1ec7t d\u01b0\u1edbi d\u1ea1ng \u0111o\u1ea1n v\u0103n ng\u1eafn, kh\xf4ng c\xf3 ti\xeau \u0111\u1ec1 hay ph\u1ea7n ri\xeang bi\u1ec7t.",CELTIC_CROSS:"L\xe0 m\u1ed9t chuy\xean gia Tarot, h\xe3y \u0111\u01b0a ra c\xe2u tr\u1ea3 l\u1eddi ng\u1eafn g\u1ecdn v\xe0 tr\u1ef1c ti\u1ebfp cho c\xe2u h\u1ecfi d\u1ef1a tr\xean tr\u1ea3i b\xe0i Celtic Cross.\n\nC\xe2u h\u1ecfi: {{QUESTION}}\nC\xe1c l\xe1 b\xe0i: {{CARDS}}\nKi\u1ec3u tr\u1ea3i b\xe0i: {{SPREAD_TYPE}}\n\n\u0110\u01b0a ra c\xe2u tr\u1ea3 l\u1eddi ng\u1eafn g\u1ecdn v\xe0 tr\u1ef1c ti\u1ebfp, ch\u1ec9 t\u1eadp trung v\xe0o vi\u1ec7c tr\u1ea3 l\u1eddi c\xe2u h\u1ecfi (t\u1ed1i \u0111a 150 t\u1eeb). \n\nVi\u1ebft c\xe2u tr\u1ea3 l\u1eddi b\u1eb1ng ti\u1ebfng Vi\u1ec7t d\u01b0\u1edbi d\u1ea1ng \u0111o\u1ea1n v\u0103n ng\u1eafn, kh\xf4ng c\xf3 ti\xeau \u0111\u1ec1 hay ph\u1ea7n ri\xeang bi\u1ec7t.",GENERAL:"L\xe0 m\u1ed9t chuy\xean gia Tarot, h\xe3y \u0111\u01b0a ra c\xe2u tr\u1ea3 l\u1eddi ng\u1eafn g\u1ecdn v\xe0 tr\u1ef1c ti\u1ebfp cho c\xe2u h\u1ecfi d\u1ef1a tr\xean c\xe1c l\xe1 b\xe0i.\n\nC\xe2u h\u1ecfi: {{QUESTION}}\nC\xe1c l\xe1 b\xe0i: {{CARDS}}\nKi\u1ec3u tr\u1ea3i b\xe0i: {{SPREAD_TYPE}}\n\n\u0110\u01b0a ra c\xe2u tr\u1ea3 l\u1eddi ng\u1eafn g\u1ecdn v\xe0 tr\u1ef1c ti\u1ebfp, ch\u1ec9 t\u1eadp trung v\xe0o vi\u1ec7c tr\u1ea3 l\u1eddi c\xe2u h\u1ecfi (t\u1ed1i \u0111a 150 t\u1eeb). \n\nVi\u1ebft c\xe2u tr\u1ea3 l\u1eddi b\u1eb1ng ti\u1ebfng Vi\u1ec7t d\u01b0\u1edbi d\u1ea1ng \u0111o\u1ea1n v\u0103n ng\u1eafn, kh\xf4ng c\xf3 ti\xeau \u0111\u1ec1 hay ph\u1ea7n ri\xeang bi\u1ec7t."},s="AIzaSyDo_UPahCaXZIdtGGVDMJy6QrPhLh2gE44",r="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",h="gemini-2.0-flash";"undefined"!=typeof window&&window.location.hostname,"undefined"!=typeof window&&window.location.hostname;const o=new class extends i{constructor(n){void 0===n&&(n={}),super({apiKey:s,apiEndpoint:r,model:h,temperature:.7,maxTokens:500,...n})}formatCardsForPrompt(n){return n.map(((t,e)=>{let i="";switch(n.length){case 1:i="Single Card";break;case 3:i=["Past","Present","Future"][e];break;case 5:i=["Center","Top","Left","Right","Bottom"][e];break;case 10:i=["Situation","Challenge","Conscious","Unconscious","Past","Future","Self","Environment","Hopes/Fears","Outcome"][e];break;default:i=`Position ${e+1}`}return`${e+1}. ${t.name} (${t.isReversed?"Reversed":"Upright"}) - ${i}`})).join("\n")}formatPrompt(n,t,e){try{let i;switch(e){case"single-card":i=c.SINGLE_CARD;break;case"past-present-future":i=c.THREE_CARD;break;case"celtic-cross":i=c.CELTIC_CROSS;break;default:i=c.GENERAL}if(!i)throw console.warn(`No template found for spread type: ${e}, using generateTarotAnalysisPrompt instead`),new Error("Missing prompt template");const a=this.formatCardsForPrompt(t);return i.replace("{{QUESTION}}",n).replace("{{CARDS}}",a).replace("{{SPREAD_TYPE}}",e)}catch(i){console.log("Using functional prompt generation as fallback");const c=this.formatCardsForPrompt(t);return a(n,c,e)}}processResponse(n){const t=n?.candidates?.[0]?.content?.parts?.[0]?.text||"";return{text:t,sentiment:this.analyzeSentiment(t),timestamp:(new Date).toISOString()}}analyzeSentiment(n){let t=0,e=0;["positive","opportunity","growth","strength","success","fortunate"].forEach((e=>{const i=new RegExp(e,"gi"),a=n.match(i);a&&(t+=a.length)})),["challenge","obstacle","difficult","warning","negative","loss"].forEach((t=>{const i=new RegExp(t,"gi"),a=n.match(i);a&&(e+=a.length)}));const i=t+e;if(0===i)return{score:0,magnitude:0};return{score:(t-e)/i,magnitude:i/10}}async sendRequest(n){try{if(!this.config.apiKey)throw new Error("API key is not configured for Gemini API");const t=`${this.config.apiEndpoint}?key=${this.config.apiKey}`,e=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:n}]}],generationConfig:{temperature:this.config.temperature,maxOutputTokens:this.config.maxTokens}})});if(!e.ok){const n=await e.text();throw new Error(`Gemini API Error: ${e.status} - ${n}`)}return await e.json()}catch(t){throw this.handleError(t)}}async analyzeReading(n,t,e){try{let a;try{a=this.formatPrompt(n,t,e)}catch(i){throw console.error("Error formatting prompt:",i),new Error("Failed to format the analysis prompt")}const c=await this.sendRequest(a);return this.processResponse(c)}catch(a){throw this.handleError(a)}}};async function l(n,t,e){return o.analyzeReading(n,t,e)}},6140:(n,t,e)=>{e.d(t,{A:()=>f});var i=e(6540);const a="container_Dca9",c="label_ILAt",s="inputWrapper_FSCr",r="textarea_gr5f",h="submitArrow_oQue",o="active_lO1z",l="invalid_fQnG",u="focused_Fk0K",g="validationMessage_ZDim",d="characterCount_ycit",m="neutral_lc_R",p="warning_wQAY",v="approaching_K6mD",b="good_wppO";var y=e(4848);const f=n=>{let{question:t,onChange:e,isDisabled:f=!1,placeholder:N="Nh\u1eadp c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n \u1edf \u0111\xe2y...",maxLength:C=150,showCharacterCount:x=!1,showHints:_=!1,className:T="",onSubmit:j=()=>{}}=n;const[k,w]=(0,i.useState)(!0),[$,S]=(0,i.useState)(""),[L,R]=(0,i.useState)(0),[E,A]=(0,i.useState)(!1),P=10;(0,i.useEffect)((()=>{R(t.length),t.trim().length<P&&t.trim().length>0?(w(!1),S("C\xe2u h\u1ecfi c\u1ea7n \xedt nh\u1ea5t 10 k\xfd t\u1ef1 \u0111\u1ec3 hi\u1ec7u qu\u1ea3")):(w(!0),S(""))}),[t]);return(0,y.jsxs)("div",{className:(()=>{let n=a;return T&&(n+=` ${T}`),!k&&t.trim().length>0&&(n+=` ${l}`),E&&(n+=` ${u}`),n})(),children:[(0,y.jsx)("label",{htmlFor:"tarot-question",className:c,children:x&&(0,y.jsxs)("span",{className:`${d} ${0===L?m:L<P?p:C&&L>.8*C?v:b}`,children:[L,C?`/${C}`:""]})}),(0,y.jsxs)("div",{className:s,children:[(0,y.jsx)("textarea",{id:"tarot-question",className:r,value:t,onChange:n=>{const t=n.target.value;C&&t.length>C||e(n)},onKeyPress:n=>{"Enter"===n.key&&k&&t.trim().length>=P&&(n.preventDefault(),j())},placeholder:N,disabled:f,"aria-invalid":!k,"aria-describedby":"question-validation-message question-hints",maxLength:C||void 0,onFocus:()=>A(!0),onBlur:()=>A(!1)}),(0,y.jsx)("button",{className:`${h} ${t.trim().length>=P?o:""}`,onClick:n=>{n.preventDefault(),k&&t.trim().length>=P&&j()},disabled:!k||t.trim().length<P||f,"aria-label":"G\u1eedi c\xe2u h\u1ecfi",children:"\u2191"})]}),$&&!k&&(0,y.jsx)("div",{id:"question-validation-message",className:g,role:"alert",children:$})]})}},6996:(n,t,e)=>{e.r(t),e.d(t,{default:()=>T});var i=e(6540),a=e(4435),c=e(797);const s="container_JK52",r="title_ZjoD",h="subtitle_L1lX",o="readingFlow_P0vo",l="questionSection_duzY",u="cardDisplayArea_lPn7",g="instructionBox_udlR",d="loadingContainer_gTUW",m="resultsContainer_mmNa";var p=e(6140),v=e(2766),b=e(8948),y=e(3795),f=e(2599),N=e(8842),C=e(5460),x=e(1505),_=e(4848);const T=function(){const{siteConfig:n}=(0,c.A)(),[t,e]=(0,i.useState)(""),[T,j]=(0,i.useState)([]),[k,w]=(0,i.useState)(!1),[$,S]=(0,i.useState)(!1),[L,R]=(0,i.useState)(null),[E,A]=(0,i.useState)(null),[P,q]=(0,i.useState)(null),{playSound:D}=(0,x.f)(),K={name:"R\xfat 1 L\xe1",count:1,description:"Tr\u1ea3 l\u1eddi nhanh cho m\u1ed9t c\xe2u h\u1ecfi \u0111\u01a1n gi\u1ea3n"},I=n=>["The Fool","The Magician","The High Priestess","The Empress","The Emperor","The Hierophant","The Lovers","The Chariot","Strength","The Hermit","Wheel of Fortune","Justice","The Hanged Man","Death","Temperance","The Devil","The Tower","The Star","The Moon","The Sun","Judgement","The World"][n]||`Unknown Major Arcana (${n})`,H=(n,t)=>t<1||t>14?`Unknown ${n} (${t})`:11===t?`Page of ${B(n)}`:12===t?`Knight of ${B(n)}`:13===t?`Queen of ${B(n)}`:14===t?`King of ${B(n)}`:1===t?`Ace of ${B(n)}`:`${t} of ${B(n)}`,B=n=>n.charAt(0).toUpperCase()+n.slice(1);(0,i.useEffect)((()=>{M()}),[]);const M=()=>{try{const n=[...Array.from({length:22},((n,t)=>({id:`major-${t}`,name:I(t),code:`m${String(t).padStart(2,"0")}`,type:"major",suit:null,number:t}))),...["cups","wands","swords","pentacles"].flatMap((n=>Array.from({length:14},((t,e)=>({id:`${n}-${e+1}`,name:H(n,e+1),code:`${n.charAt(0)}${String(e+1).padStart(2,"0")}`,type:"minor",suit:n,number:e+1})))))],t=n.map((n=>({...n,isReversed:Math.random()>.5}))).sort((()=>Math.random()-.5)).slice(0,K.count);j(t)}catch(n){q(n.message||"Failed to generate random cards")}},F=()=>{e(""),w(!1),R(null),A(null),q(null),M()},V=()=>t.trim()&&T.length===K.count;return(0,_.jsx)(a.A,{title:"B\xf3i B\xe0i Tarot M\u1ed9t L\xe1",description:"Tr\u1ea3i b\xe0i tarot 1 l\xe1 online mi\u1ec5n ph\xed 100%. \u0110\u1eb7t c\xe2u h\u1ecfi v\xe0 r\xfat l\xe1 ng\u1eabu nhi\xean, \u0111\xe1p \xe1n s\u1ebd \u0111\u01b0\u1ee3c gi\u1ea3i \u0111\xe1p",children:(0,_.jsxs)("div",{className:s,children:[(0,_.jsx)("h1",{className:r,children:"B\xf3i B\xe0i Tarot M\u1ed9t L\xe1"}),(0,_.jsx)("p",{className:h,children:"Tr\u1ea3 l\u1eddi nhanh cho m\u1ed9t c\xe2u h\u1ecfi \u0111\u01a1n gi\u1ea3n. L\xe1 b\xe0i \u0111\u01a1n l\u1ebb s\u1ebd cung c\u1ea5p th\xf4ng tin r\xf5 r\xe0ng v\xe0 tr\u1ef1c ti\u1ebfp."}),k||$?$?(0,_.jsx)("div",{className:d,children:(0,_.jsx)(v.A,{message:"\u0110ang ph\xe2n t\xedch b\xe0i Tarot c\u1ee7a b\u1ea1n...",type:"cards"})}):L?(0,_.jsx)("div",{className:m,children:(0,_.jsx)(y.A,{reading:L,aiAnalysis:E,selectedCards:T,onReset:F,showControls:!0,timestamp:new Date,question:t,onSubmitEmail:async(n,t)=>{try{return console.log(`Sending email to ${n} with ${t.length} cards`),!0}catch(P){throw console.error("Email submission failed:",P),P}}})}):(0,_.jsx)(b.A,{message:"Kh\xf4ng th\u1ec3 hi\u1ec3n th\u1ecb k\u1ebft qu\u1ea3 b\xf3i b\xe0i. Vui l\xf2ng th\u1eed l\u1ea1i.",type:"error",retryAction:F}):(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)("div",{className:l,children:(0,_.jsx)(p.A,{question:t,onChange:n=>{e(n.target.value)},isDisabled:$,placeholder:"Nh\u1eadp c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n \u1edf \u0111\xe2y...",showCharacterCount:!0,onSubmit:async()=>{if(V())try{await(async()=>{if(T.length&&t.trim()){S(!0),q(null);try{try{D("/sounds/card-sounds-35956.mp3")}catch(P){console.error("Error playing sound:",P)}const e="single-card",i=await(0,N.h)(t,T,e);console.log("Mock Analysis result:",i),R(i);try{const n=await(0,C.Xs)(t,T,e);console.log("AI Analysis result:",n),A(n)}catch(n){console.warn("AI analysis failed, using only mock analysis:",n)}w(!0)}catch(e){console.error("Error analyzing reading:",e),q(e.message||"An error occurred while analyzing your reading")}finally{S(!1)}}})()}catch(P){console.error("Failed to start reading:",P),q("Kh\xf4ng th\u1ec3 b\u1eaft \u0111\u1ea7u ph\xe2n t\xedch b\xe0i Tarot. Vui l\xf2ng th\u1eed l\u1ea1i.")}}})}),(0,_.jsxs)("div",{className:g,children:[(0,_.jsx)("h3",{children:"H\u01b0\u1edbng D\u1eabn"}),(0,_.jsxs)("ol",{children:[(0,_.jsx)("li",{children:"Vi\u1ebft c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n v\xe0o \xf4 tr\xean"}),(0,_.jsx)("li",{children:"H\xedt th\u1edf s\xe2u v\xe0 t\u1eadp trung v\xe0o c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n"}),(0,_.jsx)("li",{children:"Nh\u1ea5n m\u0169i t\xean ho\u1eb7c ph\xedm Enter \u0111\u1ec3 xem k\u1ebft qu\u1ea3"})]})]}),(0,_.jsx)("div",{className:u,children:(0,_.jsx)(f.A,{selectedCards:T,spreadType:K,isBack:!0})})]}),P&&(0,_.jsx)(b.A,{error:P,type:"error",retryAction:()=>q(null)})]})})}},8842:(n,t,e)=>{function i(n,t,e){return new Promise((i=>{setTimeout((()=>{const s=function(n,t,e){let i="# Ph\xe2n t\xedch b\xe0i Tarot\n\n";switch(i+=`## C\xe2u h\u1ecfi\n"${n}"\n\n`,i+="## C\xe1c l\xe1 b\xe0i \u0111\u01b0\u1ee3c ch\u1ecdn\n",t.forEach(((n,t)=>{i+=`${t+1}. ${n.name} (${n.isReversed?"Ng\u01b0\u1ee3c":"Thu\u1eadn"})\n`})),i+="\n",e){case"single-card":i+=function(n){let t=`## Ph\xe2n t\xedch l\xe1 b\xe0i: ${n.name}\n\n`;n.code.startsWith("m")?(t+=`L\xe1 b\xe0i ${n.name} thu\u1ed9c b\u1ed9 \u1ea8n Ch\xednh (Major Arcana), bi\u1ec3u th\u1ecb cho nh\u1eefng n\u0103ng l\u01b0\u1ee3ng m\u1ea1nh m\u1ebd v\xe0 c\xe1c b\xe0i h\u1ecdc quan tr\u1ecdng trong cu\u1ed9c s\u1ed1ng. `,"m00"===n.code?t+="The Fool t\u01b0\u1ee3ng tr\u01b0ng cho s\u1ef1 kh\u1edfi \u0111\u1ea7u m\u1edbi, tinh th\u1ea7n phi\xeau l\u01b0u, v\xe0 ni\u1ec1m tin v\xe0o cu\u1ed9c s\u1ed1ng. "+(n.isReversed?"Khi xu\u1ea5t hi\u1ec7n \u1edf v\u1ecb tr\xed ng\u01b0\u1ee3c, l\xe1 b\xe0i g\u1ee3i \xfd r\u1eb1ng b\u1ea1n \u0111ang thi\u1ebfu s\u1ef1 chu\u1ea9n b\u1ecb ho\u1eb7c c\xf3 th\u1ec3 \u0111ang h\xe0nh \u0111\u1ed9ng thi\u1ebfu suy ngh\u0129.":"L\xe1 b\xe0i khuy\u1ebfn kh\xedch b\u1ea1n n\u1eafm b\u1eaft c\u01a1 h\u1ed9i m\u1edbi v\xe0 tin t\u01b0\u1edfng v\xe0o h\xe0nh tr\xecnh c\u1ee7a m\xecnh."):"m01"===n.code?t+="The Magician t\u01b0\u1ee3ng tr\u01b0ng cho kh\u1ea3 n\u0103ng bi\u1ebfn \xfd t\u01b0\u1edfng th\xe0nh hi\u1ec7n th\u1ef1c, s\u1ef1 s\xe1ng t\u1ea1o v\xe0 ti\u1ec1m n\u0103ng. "+(n.isReversed?"Khi xu\u1ea5t hi\u1ec7n \u1edf v\u1ecb tr\xed ng\u01b0\u1ee3c, l\xe1 b\xe0i c\u1ea3nh b\xe1o v\u1ec1 vi\u1ec7c l\xe3ng ph\xed ti\u1ec1m n\u0103ng ho\u1eb7c s\u1eed d\u1ee5ng s\u1ee9c m\u1ea1nh c\u1ee7a b\u1ea1n m\u1ed9t c\xe1ch ti\xeau c\u1ef1c.":"L\xe1 b\xe0i cho th\u1ea5y b\u1ea1n c\xf3 t\u1ea5t c\u1ea3 nh\u1eefng c\xf4ng c\u1ee5 c\u1ea7n thi\u1ebft \u0111\u1ec3 th\xe0nh c\xf4ng, ch\u1ec9 c\u1ea7n t\u1eadp trung v\xe0 h\xe0nh \u0111\u1ed9ng."):t+=""+(n.isReversed?"Khi xu\u1ea5t hi\u1ec7n \u1edf v\u1ecb tr\xed ng\u01b0\u1ee3c, l\xe1 b\xe0i n\xe0y th\u01b0\u1eddng bi\u1ec3u th\u1ecb nh\u1eefng th\xe1ch th\u1ee9c ho\u1eb7c n\u0103ng l\u01b0\u1ee3ng b\u1ecb ch\u1eb7n li\xean quan \u0111\u1ebfn c\xe1c ch\u1ee7 \u0111\u1ec1 m\xe0 n\xf3 \u0111\u1ea1i di\u1ec7n.":"L\xe1 b\xe0i mang \u0111\u1ebfn nh\u1eefng th\xf4ng \u0111i\u1ec7p quan tr\u1ecdng v\u1ec1 s\u1ef1 ph\xe1t tri\u1ec3n c\xe1 nh\xe2n v\xe0 tinh th\u1ea7n c\u1ee7a b\u1ea1n.")):(t+=`L\xe1 b\xe0i ${n.name} thu\u1ed9c b\u1ed9 \u1ea8n Ph\u1ee5 (Minor Arcana), `,n.code.startsWith("c")?t+="ch\u1ea5t Cups li\xean quan \u0111\u1ebfn c\u1ea3m x\xfac, m\u1ed1i quan h\u1ec7, t\xecnh y\xeau v\xe0 s\u1ef1 s\xe1ng t\u1ea1o. "+(n.isReversed?"\u1ede v\u1ecb tr\xed ng\u01b0\u1ee3c, l\xe1 b\xe0i g\u1ee3i \xfd v\u1ec1 nh\u1eefng th\xe1ch th\u1ee9c trong \u0111\u1eddi s\u1ed1ng c\u1ea3m x\xfac ho\u1eb7c c\xe1c m\u1ed1i quan h\u1ec7.":"L\xe1 b\xe0i khuy\u1ebfn kh\xedch b\u1ea1n k\u1ebft n\u1ed1i v\u1edbi c\u1ea3m x\xfac v\xe0 nu\xf4i d\u01b0\u1ee1ng c\xe1c m\u1ed1i quan h\u1ec7 quan tr\u1ecdng."):n.code.startsWith("w")?t+="ch\u1ea5t Wands li\xean quan \u0111\u1ebfn n\u0103ng l\u01b0\u1ee3ng, s\xe1ng t\u1ea1o, h\xe0nh \u0111\u1ed9ng v\xe0 tinh th\u1ea7n. "+(n.isReversed?"\u1ede v\u1ecb tr\xed ng\u01b0\u1ee3c, l\xe1 b\xe0i g\u1ee3i \xfd v\u1ec1 s\u1ef1 tr\xec tr\u1ec7 ho\u1eb7c m\u1ea5t c\xe2n b\u1eb1ng trong s\u1ef1 s\xe1ng t\u1ea1o v\xe0 \u0111\u1ed9ng l\u1ef1c.":"L\xe1 b\xe0i khuy\u1ebfn kh\xedch b\u1ea1n h\xe0nh \u0111\u1ed9ng v\u1edbi \u0111am m\xea v\xe0 t\u1ea1o ra nh\u1eefng c\u01a1 h\u1ed9i m\u1edbi."):n.code.startsWith("s")?t+="ch\u1ea5t Swords li\xean quan \u0111\u1ebfn tr\xed tu\u1ec7, suy ngh\u0129, th\xe1ch th\u1ee9c v\xe0 giao ti\u1ebfp. "+(n.isReversed?"\u1ede v\u1ecb tr\xed ng\u01b0\u1ee3c, l\xe1 b\xe0i c\u1ea3nh b\xe1o v\u1ec1 nh\u1eefng kh\xf3 kh\u0103n trong suy ngh\u0129 r\xf5 r\xe0ng ho\u1eb7c giao ti\u1ebfp hi\u1ec7u qu\u1ea3.":"L\xe1 b\xe0i khuy\u1ebfn kh\xedch b\u1ea1n s\u1eed d\u1ee5ng s\u1ee9c m\u1ea1nh c\u1ee7a t\xe2m tr\xed v\xe0 giao ti\u1ebfp m\u1ed9t c\xe1ch ch\xe2n th\u1eadt."):n.code.startsWith("p")&&(t+="ch\u1ea5t Pentacles li\xean quan \u0111\u1ebfn v\u1eadt ch\u1ea5t, s\u1ef1 nghi\u1ec7p, t\xe0i ch\xednh v\xe0 s\u1ee9c kh\u1ecfe. "+(n.isReversed?"\u1ede v\u1ecb tr\xed ng\u01b0\u1ee3c, l\xe1 b\xe0i g\u1ee3i \xfd v\u1ec1 nh\u1eefng th\xe1ch th\u1ee9c trong v\u1ea5n \u0111\u1ec1 t\xe0i ch\xednh ho\u1eb7c v\u1eadt ch\u1ea5t.":"L\xe1 b\xe0i khuy\u1ebfn kh\xedch b\u1ea1n t\u1eadp trung v\xe0o s\u1ef1 \u1ed5n \u0111\u1ecbnh v\xe0 ph\xe1t tri\u1ec3n trong cu\u1ed9c s\u1ed1ng v\u1eadt ch\u1ea5t.")));return t}(t[0]);break;case"past-present-future":i+=function(n){if(3!==n.length)return a(n);let t="## Ph\xe2n t\xedch tr\u1ea3i b\xe0i Qu\xe1 Kh\u1ee9 - Hi\u1ec7n T\u1ea1i - T\u01b0\u01a1ng Lai\n\n";return t+=`### Qu\xe1 Kh\u1ee9: ${n[0].name} (${n[0].isReversed?"Ng\u01b0\u1ee3c":"Thu\u1eadn"})\n`,t+="L\xe1 b\xe0i n\xe0y \u0111\u1ea1i di\u1ec7n cho nh\u1eefng \u1ea3nh h\u01b0\u1edfng t\u1eeb qu\xe1 kh\u1ee9 \u0111\xe3 \u0111\u1ecbnh h\xecnh n\xean t\xecnh hu\u1ed1ng hi\u1ec7n t\u1ea1i c\u1ee7a b\u1ea1n. ",t+=n[0].isReversed?"V\u1ecb tr\xed ng\u01b0\u1ee3c c\u1ee7a l\xe1 b\xe0i g\u1ee3i \xfd r\u1eb1ng c\xf3 nh\u1eefng b\xe0i h\u1ecdc t\u1eeb qu\xe1 kh\u1ee9 m\xe0 b\u1ea1n c\xf3 th\u1ec3 ch\u01b0a ho\xe0n to\xe0n ti\u1ebfp thu, ho\u1eb7c nh\u1eefng tr\u1ea3i nghi\u1ec7m qu\xe1 kh\u1ee9 v\u1eabn \u0111ang \u1ea3nh h\u01b0\u1edfng ti\xeau c\u1ef1c \u0111\u1ebfn hi\u1ec7n t\u1ea1i c\u1ee7a b\u1ea1n.":"N\u0103ng l\u01b0\u1ee3ng c\u1ee7a l\xe1 b\xe0i n\xe0y cho th\u1ea5y nh\u1eefng tr\u1ea3i nghi\u1ec7m qu\xe1 kh\u1ee9 \u0111\xe3 cung c\u1ea5p cho b\u1ea1n n\u1ec1n t\u1ea3ng v\u1eefng ch\u1eafc v\xe0 c\xe1c b\xe0i h\u1ecdc quan tr\u1ecdng.",t+="\n\n",t+=`### Hi\u1ec7n T\u1ea1i: ${n[1].name} (${n[1].isReversed?"Ng\u01b0\u1ee3c":"Thu\u1eadn"})\n`,t+="L\xe1 b\xe0i n\xe0y ph\u1ea3n \xe1nh n\u0103ng l\u01b0\u1ee3ng \u0111ang bao quanh b\u1ea1n \u1edf th\u1eddi \u0111i\u1ec3m hi\u1ec7n t\u1ea1i v\xe0 nh\u1eefng \u1ea3nh h\u01b0\u1edfng tr\u1ef1c ti\u1ebfp \u0111\u1ebfn t\xecnh hu\u1ed1ng c\u1ee7a b\u1ea1n. ",t+=n[1].isReversed?"V\u1ecb tr\xed ng\u01b0\u1ee3c c\u1ee7a l\xe1 b\xe0i g\u1ee3i \xfd r\u1eb1ng b\u1ea1n \u0111ang g\u1eb7p ph\u1ea3i m\u1ed9t s\u1ed1 th\xe1ch th\u1ee9c ho\u1eb7c c\u1ea3n tr\u1edf, c\xf3 th\u1ec3 b\u1ea1n \u0111ang c\u1ea3m th\u1ea5y kh\xf3 kh\u0103n trong vi\u1ec7c th\u1ec3 hi\u1ec7n \u0111\u1ea7y \u0111\u1ee7 ti\u1ec1m n\u0103ng c\u1ee7a m\xecnh.":"N\u0103ng l\u01b0\u1ee3ng t\xedch c\u1ef1c c\u1ee7a l\xe1 b\xe0i n\xe0y g\u1ee3i \xfd r\u1eb1ng b\u1ea1n \u0111ang \u1edf v\u1ecb tr\xed thu\u1eadn l\u1ee3i \u0111\u1ec3 \u0111\u1ed1i m\u1eb7t v\u1edbi c\xe1c t\xecnh hu\u1ed1ng hi\u1ec7n t\u1ea1i.",t+="\n\n",t+=`### T\u01b0\u01a1ng Lai: ${n[2].name} (${n[2].isReversed?"Ng\u01b0\u1ee3c":"Thu\u1eadn"})\n`,t+="L\xe1 b\xe0i n\xe0y cho th\u1ea5y nh\u1eefng n\u0103ng l\u01b0\u1ee3ng \u0111ang ph\xe1t tri\u1ec3n v\xe0 ti\u1ec1m n\u0103ng k\u1ebft qu\u1ea3 n\u1ebfu b\u1ea1n ti\u1ebfp t\u1ee5c con \u0111\u01b0\u1eddng hi\u1ec7n t\u1ea1i. ",t+=n[2].isReversed?"V\u1ecb tr\xed ng\u01b0\u1ee3c c\u1ee7a l\xe1 b\xe0i g\u1ee3i \xfd r\u1eb1ng c\xf3 th\u1ec3 c\xf3 m\u1ed9t s\u1ed1 th\xe1ch th\u1ee9c ho\u1eb7c tr\u1edf ng\u1ea1i trong t\u01b0\u01a1ng lai, ho\u1eb7c b\u1ea1n c\u1ea7n ph\u1ea3i thay \u0111\u1ed5i h\u01b0\u1edbng \u0111i hi\u1ec7n t\u1ea1i \u0111\u1ec3 \u0111\u1ea1t \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 t\u1ed1t h\u01a1n.":"N\u0103ng l\u01b0\u1ee3ng t\xedch c\u1ef1c c\u1ee7a l\xe1 b\xe0i n\xe0y cho th\u1ea5y ti\u1ec1m n\u0103ng t\xedch c\u1ef1c trong t\u01b0\u01a1ng lai n\u1ebfu b\u1ea1n ti\u1ebfp t\u1ee5c con \u0111\u01b0\u1eddng hi\u1ec7n t\u1ea1i v\xe0 t\u1eadn d\u1ee5ng c\u01a1 h\u1ed9i s\u1eafp t\u1edbi.",t+="\n\n",t}(t);break;case"celtic-cross":i+=function(n){if(10!==n.length)return a(n);let t="## Ph\xe2n t\xedch tr\u1ea3i b\xe0i Th\u1eadp T\u1ef1 Celtic\n\n";t+="Tr\u1ea3i b\xe0i Th\u1eadp T\u1ef1 Celtic l\xe0 m\u1ed9t trong nh\u1eefng c\xe1ch tr\u1ea3i b\xe0i Tarot chi ti\u1ebft v\xe0 to\xe0n di\u1ec7n nh\u1ea5t, cung c\u1ea5p c\xe1i nh\xecn s\xe2u s\u1eafc v\u1ec1 nhi\u1ec1u kh\xeda c\u1ea1nh c\u1ee7a t\xecnh hu\u1ed1ng.\n\n";const e=["T\xecnh hu\u1ed1ng hi\u1ec7n t\u1ea1i","Th\xe1ch th\u1ee9c","Qu\xe1 kh\u1ee9 g\u1ea7n","Qu\xe1 kh\u1ee9 xa","M\u1ee5c ti\xeau ho\u1eb7c k\u1ebft qu\u1ea3 t\u1ed1t nh\u1ea5t","T\u01b0\u01a1ng lai g\u1ea7n","Y\u1ebfu t\u1ed1 \u1ea3nh h\u01b0\u1edfng","M\xf4i tr\u01b0\u1eddng xung quanh","Hy v\u1ecdng ho\u1eb7c n\u1ed7i s\u1ee3","K\u1ebft qu\u1ea3 cu\u1ed1i c\xf9ng"];return n.forEach(((n,i)=>{i<e.length&&(t+=`### ${e[i]}: ${n.name} (${n.isReversed?"Ng\u01b0\u1ee3c":"Thu\u1eadn"})\n`,t+=`L\xe1 b\xe0i n\xe0y ${n.isReversed?"\u1edf v\u1ecb tr\xed ng\u01b0\u1ee3c ":""}\u0111\u1ea1i di\u1ec7n cho ${e[i].toLowerCase()} c\u1ee7a b\u1ea1n. `,0===i?t+="\u0110\xe2y l\xe0 n\u0103ng l\u01b0\u1ee3ng trung t\xe2m c\u1ee7a t\xecnh hu\u1ed1ng hi\u1ec7n t\u1ea1i.":1===i?t+="\u0110\xe2y l\xe0 nh\u1eefng tr\u1edf ng\u1ea1i ho\u1eb7c th\xe1ch th\u1ee9c b\u1ea1n \u0111ang \u0111\u1ed1i m\u1eb7t.":9===i&&(t+="\u0110\xe2y l\xe0 ti\u1ec1m n\u0103ng k\u1ebft qu\u1ea3 cu\u1ed1i c\xf9ng c\u1ee7a t\xecnh hu\u1ed1ng."),t+="\n\n")})),t}(t);break;default:i+=a(t)}i+="\n## K\u1ebft lu\u1eadn\n\n",i+="D\u1ef1a tr\xean nh\u1eefng l\xe1 b\xe0i xu\u1ea5t hi\u1ec7n trong b\xe0i \u0111\u1ecdc n\xe0y, ",n.toLowerCase().includes("t\xecnh y\xeau")||n.toLowerCase().includes("t\xecnh c\u1ea3m")?i+="m\u1ed1i quan h\u1ec7 c\u1ee7a b\u1ea1n \u0111ang trong giai \u0111o\u1ea1n chuy\u1ec3n ti\u1ebfp quan tr\u1ecdng. H\xe3y ch\xfa \xfd \u0111\u1ebfn c\u1ea3m x\xfac c\u1ee7a b\u1ea3n th\xe2n v\xe0 \u0111\u1ed1i ph\u01b0\u01a1ng, \u0111\u1ed3ng th\u1eddi t\u1ea1o kh\xf4ng gian cho s\u1ef1 ph\xe1t tri\u1ec3n c\xe1 nh\xe2n.":n.toLowerCase().includes("c\xf4ng vi\u1ec7c")||n.toLowerCase().includes("s\u1ef1 nghi\u1ec7p")?i+="con \u0111\u01b0\u1eddng s\u1ef1 nghi\u1ec7p c\u1ee7a b\u1ea1n \u0111ang \u0111\xf2i h\u1ecfi s\u1ef1 ki\xean nh\u1eabn v\xe0 quy\u1ebft t\xe2m. Nh\u1eefng th\u1eed th\xe1ch hi\u1ec7n t\u1ea1i s\u1ebd gi\xfap b\u1ea1n ph\xe1t tri\u1ec3n nh\u1eefng k\u1ef9 n\u0103ng c\u1ea7n thi\u1ebft cho th\xe0nh c\xf4ng trong t\u01b0\u01a1ng lai.":n.toLowerCase().includes("ti\u1ec1n")||n.toLowerCase().includes("t\xe0i ch\xednh")?i+="t\xecnh h\xecnh t\xe0i ch\xednh c\u1ee7a b\u1ea1n c\xf3 th\u1ec3 c\u1ea3i thi\u1ec7n n\u1ebfu b\u1ea1n ch\u1ee7 \u0111\u1ed9ng l\u1eadp k\u1ebf ho\u1ea1ch v\xe0 c\xf3 nh\u1eefng quy\u1ebft \u0111\u1ecbnh s\xe1ng su\u1ed1t. H\xe3y c\xe2n nh\u1eafc c\u1ea9n th\u1eadn tr\u01b0\u1edbc khi \u0111\u1ea7u t\u01b0 ho\u1eb7c chi ti\xeau l\u1edbn.":i+="h\xe3y tin t\u01b0\u1edfng v\xe0o tr\u1ef1c gi\xe1c c\u1ee7a b\u1ea3n th\xe2n v\xe0 cho ph\xe9p c\xe1c s\u1ef1 ki\u1ec7n di\u1ec5n ra m\u1ed9t c\xe1ch t\u1ef1 nhi\xean. B\u1ea1n \u0111ang tr\xean \u0111\xfang h\u01b0\u1edbng, m\u1eb7c d\xf9 con \u0111\u01b0\u1eddng c\xf3 th\u1ec3 kh\xf4ng lu\xf4n r\xf5 r\xe0ng.";return i}(n,t,e);i({text:s,sentiment:c(),timestamp:(new Date).toISOString()})}),1500)}))}function a(n){let t="## Ph\xe2n t\xedch tr\u1ea3i b\xe0i\n\n";return n.forEach(((n,e)=>{t+=`### L\xe1 ${e+1}: ${n.name} (${n.isReversed?"Ng\u01b0\u1ee3c":"Thu\u1eadn"})\n`,n.code.startsWith("m")?t+="L\xe1 b\xe0i \u1ea8n Ch\xednh n\xe0y \u0111\u1ea1i di\u1ec7n cho m\u1ed9t n\u0103ng l\u01b0\u1ee3ng m\u1ea1nh m\u1ebd trong t\xecnh hu\u1ed1ng c\u1ee7a b\u1ea1n. ":n.code.startsWith("c")?t+="L\xe1 b\xe0i ch\u1ea5t Cups n\xe0y li\xean quan \u0111\u1ebfn c\xe1c kh\xeda c\u1ea1nh c\u1ea3m x\xfac v\xe0 m\u1ed1i quan h\u1ec7 trong t\xecnh hu\u1ed1ng c\u1ee7a b\u1ea1n. ":n.code.startsWith("w")?t+="L\xe1 b\xe0i ch\u1ea5t Wands n\xe0y li\xean quan \u0111\u1ebfn n\u0103ng l\u01b0\u1ee3ng, \u0111am m\xea v\xe0 s\u1ef1 s\xe1ng t\u1ea1o trong t\xecnh hu\u1ed1ng c\u1ee7a b\u1ea1n. ":n.code.startsWith("s")?t+="L\xe1 b\xe0i ch\u1ea5t Swords n\xe0y li\xean quan \u0111\u1ebfn tr\xed tu\u1ec7, giao ti\u1ebfp v\xe0 th\xe1ch th\u1ee9c trong t\xecnh hu\u1ed1ng c\u1ee7a b\u1ea1n. ":n.code.startsWith("p")&&(t+="L\xe1 b\xe0i ch\u1ea5t Pentacles n\xe0y li\xean quan \u0111\u1ebfn kh\xeda c\u1ea1nh v\u1eadt ch\u1ea5t, t\xe0i ch\xednh v\xe0 s\u1ef1 nghi\u1ec7p trong t\xecnh hu\u1ed1ng c\u1ee7a b\u1ea1n. "),t+=n.isReversed?"V\u1ecb tr\xed ng\u01b0\u1ee3c c\u1ee7a l\xe1 b\xe0i g\u1ee3i \xfd v\u1ec1 nh\u1eefng th\xe1ch th\u1ee9c ho\u1eb7c n\u0103ng l\u01b0\u1ee3ng b\u1ecb ch\u1eb7n li\xean quan \u0111\u1ebfn \u0111\u1eb7c t\xednh c\u1ee7a l\xe1 b\xe0i n\xe0y.":"V\u1ecb tr\xed thu\u1eadn c\u1ee7a l\xe1 b\xe0i g\u1ee3i \xfd v\u1ec1 d\xf2ng ch\u1ea3y t\u1ef1 nhi\xean c\u1ee7a n\u0103ng l\u01b0\u1ee3ng v\xe0 \u1ea3nh h\u01b0\u1edfng t\xedch c\u1ef1c li\xean quan \u0111\u1ebfn \u0111\u1eb7c t\xednh c\u1ee7a l\xe1 b\xe0i n\xe0y.",t+="\n\n"})),t}function c(){return{score:1*(2*Math.random()-1).toFixed(2),magnitude:1*Math.random().toFixed(2)}}e.d(t,{h:()=>i})},8948:(n,t,e)=>{e.d(t,{A:()=>N});var i=e(6540);const a="container_qIlN",c="error_U9Ln",s="warning_Rv0R",r="info_efHi",h="content_lAxs",o="iconContainer_vkhA",l="icon__omf",u="messageContainer_akLu",g="title_RTw6",d="message_cOoS",m="details_RWky",p="stackTrace_nB91",v="actions_ANDo",b="retryButton_DFjS",y="dismissButton_gdRO";var f=e(4848);const N=n=>{let{error:t=null,message:e=null,title:N="\u0110\xe3 x\u1ea3y ra l\u1ed7i",retryAction:C=null,dismissible:x=!0,type:_="error",className:T="",showDetails:j=!1,icon:k=null}=n;const[w,$]=(0,i.useState)(!1);if(w||!t&&!e)return null;const S=e||t&&(t.message||t.toString())||"Kh\xf4ng th\u1ec3 x\u1eed l\xfd y\xeau c\u1ea7u c\u1ee7a b\u1ea1n.";return(0,f.jsx)("div",{className:(()=>{let n=a;switch(T&&(n+=` ${T}`),_){case"warning":n+=` ${s}`;break;case"info":n+=` ${r}`;break;default:n+=` ${c}`}return n})(),role:"alert",children:(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("div",{className:o,children:(0,f.jsx)("span",{className:l,children:(()=>{if(k)return k;switch(_){case"warning":return"\u26a0\ufe0f";case"info":return"\u2139\ufe0f";default:return"\u274c"}})()})}),(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("h3",{className:g,children:N}),(0,f.jsx)("p",{className:d,children:S}),j&&t&&t.stack&&(0,f.jsxs)("details",{className:m,children:[(0,f.jsx)("summary",{children:"Xem chi ti\u1ebft l\u1ed7i"}),(0,f.jsx)("pre",{className:p,children:t.stack})]}),(C||x)&&(0,f.jsxs)("div",{className:v,children:[C&&(0,f.jsx)("button",{className:b,onClick:()=>{C&&"function"==typeof C&&C()},"aria-label":"Th\u1eed l\u1ea1i",children:"Th\u1eed l\u1ea1i"}),x&&(0,f.jsx)("button",{className:y,onClick:()=>{$(!0)},"aria-label":"\u0110\xf3ng th\xf4ng b\xe1o l\u1ed7i",children:"\u0110\xf3ng"})]})]})]})})}}}]);