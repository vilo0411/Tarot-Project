"use strict";(self.webpackChunktarot_project=self.webpackChunktarot_project||[]).push([[8895],{1505:(e,n,t)=>{t.d(n,{f:()=>i});var s=t(6540);const i=()=>({playSound:(0,s.useCallback)((e=>{const n=new Audio(e);n.volume=.3;try{const e=n.play();void 0!==e&&e.catch((e=>{console.log("Kh\xf4ng th\u1ec3 ph\xe1t \xe2m thanh:",e)}))}catch(t){console.log("L\u1ed7i khi ph\xe1t \xe2m thanh:",t)}}),[])})},1983:(e,n,t)=>{t.d(n,{A:()=>d});var s=t(6540),i=t(5267);const c="wrapper__8Vv",a="cardLayout_Vy_a",o="cardsContainer_rbh7",r="maxCardsMessage_l2_n";var l=t(4848);const d=function(e){let{shuffledCards:n,selectedCards:t,onCardSelect:d,maxCards:h}=e;const[m,u]=(0,s.useState)(null);(0,s.useEffect)((()=>{const e=new Audio("/Tarot-Project/sounds/card-sounds-35956.mp3");return e.volume=.5,u(e),()=>{e&&(e.pause(),e.currentTime=0)}}),[]);const p=e=>{t.length<h&&((()=>{if(m&&t.length<h)try{m.currentTime=0,m.play().catch((e=>{console.error("Audio play error:",e)}))}catch(e){console.error("Audio error:",e)}})(),d(e))},g=t.length<h;return(0,l.jsxs)("div",{className:c,children:[(0,l.jsx)("div",{className:a,children:(0,l.jsx)("div",{className:o,children:n.map(((e,n)=>t.some((n=>n.code===e.code))?null:(0,l.jsx)(i.A,{card:e,isBack:!0,isSelected:!1,onClick:()=>p(e),variant:"selector",style:{cursor:g?"pointer":"not-allowed"}},e.code||n)))})}),!g&&(0,l.jsxs)("div",{className:r,children:["B\u1ea1n \u0111\xe3 ch\u1ecdn \u0111\u1ee7 ",h," l\xe1 b\xe0i"]})]})}},2947:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var s=t(5267);const i={spreadLayout:"spreadLayout_D4os",layout:"layout_n6R8",layout1:"layout1_uWJj",layout3:"layout3_Xgot",layout5:"layout5_HQ84",top:"top_QLST",left:"left_dKNd",center:"center_OFkO",right:"right_GgP1",bottom:"bottom_R2fI",layout10:"layout10_d8pl","celtic-center":"celtic-center_Xd9H","celtic-crossing":"celtic-crossing_cNjz","celtic-below":"celtic-below_eaHC","celtic-left":"celtic-left_kz_Z","celtic-above":"celtic-above_YxYY","celtic-right":"celtic-right_B0Hw","celtic-self":"celtic-self_n_kX","celtic-environment":"celtic-environment_YFhE","celtic-hopes":"celtic-hopes_sldH","celtic-outcome":"celtic-outcome_AD26",cardPosition:"cardPosition_Fmdm",positionInfo:"positionInfo_ogyo",emptyPosition:"emptyPosition_pYYv",positionNumber:"positionNumber_DcRP"};var c=t(4848);const a={1:[{position:"1"}],3:[{position:"1",className:"center"},{position:"2",className:"left"},{position:"3",className:"right"}],5:[{position:"1",className:"center"},{position:"2",className:"left"},{position:"3",className:"right"},{position:"4",className:"bottom"},{position:"5",className:"top"}],10:[{position:"1",className:"celtic-center"},{position:"2",className:"celtic-crossing"},{position:"3",className:"celtic-below"},{position:"4",className:"celtic-left"},{position:"5",className:"celtic-above"},{position:"6",className:"celtic-right"},{position:"7",className:"celtic-self"},{position:"8",className:"celtic-environment"},{position:"9",className:"celtic-hopes"},{position:"10",className:"celtic-outcome"}]};const o=function(e){let{selectedCards:n,spreadType:t}=e;if(!t)return null;const o=a[t.count]||[];return t.count,(0,c.jsx)("div",{className:i.spreadLayout,children:(0,c.jsx)("div",{className:`${i.layout} ${i[`layout${t.count}`]}`,children:o.map(((e,t)=>(0,c.jsx)("div",{className:`${i.cardPosition} ${i[e.className]||""}`,children:n[t]?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.A,{card:n[t],isBack:!0,isSelected:!0,variant:"spread"}),(0,c.jsx)("div",{className:i.positionInfo})]}):(0,c.jsx)("div",{className:i.emptyPosition,children:(0,c.jsx)("div",{className:i.positionNumber,children:e.position})})},t)))})})}},5267:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);var s=t(9030);const i="selectorCardContainer_W1Og",c="spreadCardContainer_Q6B5",a="selectedCardContainer_I_mZ",o="card_OaqV",r="cardImage_k3BF";var l=t(4848);const d=function(e){let{card:n,isBack:t=!0,isSelected:d=!1,onClick:h,style:m={},variant:u="selector"}=e;const p="selector"===u?i:c,g=(0,s.Ay)("img/deck/back.jpg"),v=(0,s.Ay)(`img/deck/${n.code}.jpg`);return(0,l.jsx)("div",{className:`${p} ${d?a:""}`,onClick:h,style:m,children:(0,l.jsx)("div",{className:o,children:(0,l.jsx)("img",{src:t?g:v,alt:t?"Card Back":n.name,className:r})})})}},5623:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);const s="spreadSelector_lLCy",i="spreadOptions_mUzW",c="spreadOption_A8Wj",a="selected_qDuU";var o=t(4848);const r={SINGLE:{name:"R\xfat 1 L\xe1",count:1,description:"Tr\u1ea3 l\u1eddi nhanh cho m\u1ed9t c\xe2u h\u1ecfi \u0111\u01a1n gi\u1ea3n"},THREE_CARDS:{name:"R\xfat 3 L\xe1",count:3,description:"Qu\xe1 kh\u1ee9 - Hi\u1ec7n t\u1ea1i - T\u01b0\u01a1ng lai"},FIVE_CARDS:{name:"R\xfat 5 L\xe1",count:5,description:"Tr\u1ea3i b\xe0i ch\u1eef th\u1eadp"},TEN_CARDS:{name:"R\xfat 10 L\xe1",count:10,description:"Tr\u1ea3i b\xe0i Celtic Cross"}};const l=function(e){let{onSelectSpread:n,selectedSpread:t}=e;return(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("h3",{children:"Ch\u1ecdn Ki\u1ec3u Tr\u1ea3i B\xe0i"}),(0,o.jsx)("div",{className:i,children:Object.entries(r).map((e=>{let[s,i]=e;return(0,o.jsxs)("button",{className:`${c} ${t?.count===i.count?a:""}`,onClick:()=>n(i),children:[(0,o.jsx)("h4",{children:i.name}),(0,o.jsx)("p",{children:i.description})]},s)}))})]})}},6898:(e,n,t)=>{t.d(n,{A:()=>g});t(6540);var s=t(5267);const i="cardSlot_VbKm",c="cardWrapper_J1l2",a="readingResult_O0s5",o="cardsContainer_TCRj",r="reversed_KEUm",l="cardInfo_GK1J",d="position_YeEy",h="cardName_ww4T",m="orientation_sMOT",u="resetButton_DPzC";var p=t(4848);const g=function(e){let{selectedCards:n=[],onReset:t}=e;const g=["Qu\xe1 Kh\u1ee9","Hi\u1ec7n T\u1ea1i","T\u01b0\u01a1ng Lai"];return(0,p.jsxs)("div",{className:a,children:[(0,p.jsx)("div",{className:o,children:n.map(((e,n)=>e&&e.code?(0,p.jsxs)("div",{className:i,children:[(0,p.jsx)("div",{className:`${c} ${e.isReversed?r:""}`,children:(0,p.jsx)(s.A,{card:e,isBack:!1,isReversed:e.isReversed})}),(0,p.jsxs)("div",{className:l,children:[(0,p.jsx)("div",{className:d,children:g[n]}),(0,p.jsxs)("div",{className:h,children:[e.name,(0,p.jsxs)("span",{className:m,children:["(",e.isReversed?"Ng\u01b0\u1ee3c":"Thu\u1eadn",")"]})]})]})]},e.code):null))}),(0,p.jsx)("button",{className:u,onClick:t,children:"B\xf3i L\u1ea1i"})]})}},7998:(e,n,t)=>{t.d(n,{A:()=>s});const s={container:"container_U4yt",title:"title_gqir",questionInput:"questionInput_b0c5",startButton:"startButton_lvq9",resetButton:"resetButton_SJdO",loadingContainer:"loadingContainer_FFOk",spinner:"spinner_bmhW",spin:"spin_mYy0",apiErrorContainer:"apiErrorContainer_RbtG",analysisResults:"analysisResults_aRip",analysisSection:"analysisSection_lFgm",markdownContainer:"markdownContainer_DsSO"}},8397:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var s=t(6540),i=t(1410),c=(t(797),t(1983)),a=t(5623),o=t(2947),r=t(6898),l=t(7998),d=t(7331),h=t(1505),m=t(4848);const u=function(){const e=()=>[{name:"The Fool",code:"m00"},{name:"The Magician",code:"m01"},{name:"The High Priestess",code:"m02"},{name:"The Empress",code:"m03"},{name:"The Emperor",code:"m04"},{name:"The Hierophant",code:"m05"},{name:"The Lovers",code:"m06"},{name:"The Chariot",code:"m07"},{name:"Strength",code:"m08"},{name:"The Hermit",code:"m09"},{name:"Wheel of Fortune",code:"m10"},{name:"Justice",code:"m11"},{name:"The Hanged Man",code:"m12"},{name:"Death",code:"m13"},{name:"Temperance",code:"m14"},{name:"The Devil",code:"m15"},{name:"The Tower",code:"m16"},{name:"The Star",code:"m17"},{name:"The Moon",code:"m18"},{name:"The Sun",code:"m19"},{name:"Judgement",code:"m20"},{name:"The World",code:"m21"},...["Cups","Wands","Swords","Pentacles"].flatMap((e=>["Ace","2","3","4","5","6","7","8","9","10","Page","Knight","Queen","King"].map(((n,t)=>({name:`${n} of ${e}`,code:`${e.charAt(0).toLowerCase()}${String(t+1).padStart(2,"0")}`})))))],[n,t]=(0,s.useState)(""),[u,p]=(0,s.useState)([]),[g,v]=(0,s.useState)(!1),[_,j]=(0,s.useState)([]),[x,N]=(0,s.useState)(null),[y,C]=(0,s.useState)(null),[b,T]=(0,s.useState)(!1),{playSound:f}=(0,h.f)(),[S,A]=(0,s.useState)(null),k="AIzaSyDo_UPahCaXZIdtGGVDMJy6QrPhLh2gE44";return(0,s.useEffect)((()=>{const n=e().map((e=>({...e,isReversed:Math.random()>.5}))).sort((()=>Math.random()-.5));j(n)}),[]),(0,m.jsx)(i.A,{title:"B\xf3i B\xe0i Tarot",description:"Tr\u1ea3i B\xe0i Tarot Tr\u1ef1c Tuy\u1ebfn",children:(0,m.jsxs)("div",{className:l.A.container,children:[(0,m.jsx)("h1",{className:l.A.title,children:"H\xe3y Th\u1edf S\xe2u, Xua \u0110i M\u1ecdi Suy Ngh\u0129, B\u1eaft \u0110\u1ea7u Cu\u1ed9c H\xe0nh Tr\xecnh Tarot"}),(0,m.jsx)("textarea",{className:l.A.questionInput,placeholder:"C\xe2u h\u1ecfi b\xf3i c\u1ee7a b\u1ea1n (B\u1eaft Bu\u1ed9c)",value:n,onChange:e=>{t(e.target.value)},disabled:g||b}),!g&&!b&&(0,m.jsx)(a.A,{onSelectSpread:e=>{A(e),p([])},selectedSpread:S}),S&&!g&&!b&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.A,{shuffledCards:_,selectedCards:u,onCardSelect:e=>{S&&u.length<S.count&&p([...u,e])},maxCards:S.count}),(0,m.jsx)(o.A,{selectedCards:u,spreadType:S})]}),g||b?b?(0,m.jsxs)("div",{className:l.A.loadingContainer,children:[(0,m.jsx)("div",{className:l.A.spinner}),(0,m.jsx)("p",{children:"\u0110ang ph\xe2n t\xedch b\xf3i b\xe0i c\u1ee7a b\u1ea1n..."})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.A,{selectedCards:u,onReset:()=>{t(""),p([]),v(!1),C(null),N(null);const n=e().map((e=>({...e,isReversed:Math.random()>.5}))).sort((()=>Math.random()-.5));j(n)}}),b?(0,m.jsxs)("div",{className:l.A.loadingContainer,children:[(0,m.jsx)("div",{className:l.A.spinner}),(0,m.jsx)("p",{children:"\u0110ang ph\xe2n t\xedch b\xf3i b\xe0i c\u1ee7a b\u1ea1n..."})]}):x?(0,m.jsxs)("div",{className:l.A.apiErrorContainer,children:[(0,m.jsx)("h3",{children:"L\u1ed7i"}),(0,m.jsx)("p",{children:x.message})]}):(0,m.jsx)("div",{className:l.A.analysisResults,children:y&&(0,m.jsxs)("div",{className:l.A.analysisSection,children:[(0,m.jsx)("h3",{children:"K\u1ebft Qu\u1ea3 B\xf3i B\xe0i"}),(0,m.jsx)("div",{className:l.A.markdownContainer,children:(0,m.jsx)(d.oz,{children:y.text})})]})})]}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("button",{className:l.A.startButton,onClick:async()=>{if(S&&n.trim()&&u.length===S.count){T(!0),f("card-flip");try{await(async(e,n)=>{try{N(null);const t=`B\u1ea1n l\xe0 1 Tarot Reader chuy\xean nghi\u1ec7p. Ng\u01b0\u1eddi d\xf9ng s\u1ebd nh\u1eadp c\xe2u h\u1ecfi v\xe0 r\xfat b\xe0i. Gi\u1ea3i ngh\u0129a b\xf3i b\xe0i tarot b\u1eb1ng ti\u1ebfng Vi\u1ec7t. \n      C\xe2u h\u1ecfi l\xe0: ${e}. \n      C\xe1c l\xe1 b\xe0i \u0111\u01b0\u1ee3c ch\u1ecdn l\u1ea7n l\u01b0\u1ee3t l\xe0: ${n.map((e=>`${e.name}${e.isReversed?" (Ng\u01b0\u1ee3c)":" (Thu\u1eadn)"}`)).join(", ")}. \n\n      # C\xe1c b\u01b0\u1edbc th\u1ef1c hi\u1ec7n:\n      1. **Hi\u1ec3u c\xe2u h\u1ecfi**: \u0110\u1ecdc k\u1ef9 v\xe0 hi\u1ec3u r\xf5 c\xe2u h\u1ecfi \u0111\u01b0\u1ee3c \u0111\u1eb7t ra. N\u1ebfu kh\xf4ng r\xf5 r\xe0ng, h\xe3y suy lu\u1eadn nhi\u1ec1u nh\u1ea5t c\xf3 th\u1ec3 t\u1eeb th\xf4ng tin hi\u1ec7n c\xf3.\n      2. **Ph\xe2n t\xedch t\u1eebng l\xe1 b\xe0i**: V\u1edbi m\u1ed7i l\xe1 b\xe0i \u0111\u01b0\u1ee3c r\xfat, cung c\u1ea5p gi\u1ea3i th\xedch chi ti\u1ebft bao g\u1ed3m:\n         - \xdd ngh\u0129a khi l\xe1 xu\xf4i (v\xe0 \xfd ngh\u0129a khi l\xe1 ng\u01b0\u1ee3c, n\u1ebfu c\u1ea7n) v\xe0 s\u1ef1 li\xean quan c\u1ee7a l\xe1 b\xe0i \u0111\u1ebfn c\xe2u h\u1ecfi \u0111\u01b0\u1ee3c \u0111\u1eb7t ra. T\u1ed1i \u0111a 200 t\u1eeb\n      3. **T\u1ed5ng h\u1ee3p b\xe0i \u0111\u1ecdc**: \u0110\u01b0a ra t\u1ed5ng h\u1ee3p m\u1ea1ch l\u1ea1c v\u1ec1 c\xe1c l\xe1 b\xe0i \u0111\u1ec3 cung c\u1ea5p c\xe2u tr\u1ea3 l\u1eddi c\xf3 \xfd ngh\u0129a.\n\n      # \u0110\u1ecbnh d\u1ea1ng \u0111\u1ea7u ra:\n      - B\u1eaft \u0111\u1ea7u v\u1edbi c\xe2u h\u1ecfi b\u1ea1n \u0111ang gi\u1ea3i \u0111\xe1p.\n      - Li\u1ec7t k\xea c\xe1c l\xe1 b\xe0i tarot \u0111\u01b0\u1ee3c r\xfat.\n      - Cung c\u1ea5p gi\u1ea3i th\xedch cho t\u1eebng l\xe1 b\xe0i, c\xf3 t\xednh \u0111\u1ebfn v\u1ecb tr\xed thu\u1eadn/ng\u01b0\u1ee3c v\xe0 m\u1ed1i li\xean h\u1ec7 v\u1edbi c\xe2u h\u1ecfi. T\u1ed1i \u0111a 200 t\u1eeb.\n      - Ph\xe2n t\xedch m\u1ed1i quan h\u1ec7 gi\u1eefa c\xe1c l\xe1 b\xe0i v\xe0 \xfd ngh\u0129a t\u1ed5ng th\u1ec3.\n      - K\u1ebft lu\u1eadn v\u1edbi l\u1eddi khuy\xean v\xe0 h\u01b0\u1edbng d\u1eabn c\u1ee5 th\u1ec3 cho ng\u01b0\u1eddi \u0111\u1eb7t c\xe2u h\u1ecfi.\n\n      # L\u01b0u \xfd:\n      - Xem x\xe9t b\u1ed1i c\u1ea3nh v\xe0 t\xecnh hu\u1ed1ng hi\u1ec7n t\u1ea1i khi gi\u1ea3i th\xedch.\n      - Duy tr\xec s\u1ef1 nh\u1ea1y c\u1ea3m v\xe0 t\xf4n tr\u1ecdng ni\u1ec1m tin c\u1ee7a ng\u01b0\u1eddi h\u1ecfi.\n      - K\u1ebft lu\u1eadn lu\xf4n ph\u1ea3i duy tr\xec s\u1ef1 li\xean quan v\u1edbi c\xe2u h\u1ecfi`,s=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${k}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:t}]}]})});if(!s.ok){const e=await s.text();throw new Error(`API responded with status ${s.status}: ${e}`)}const i=await s.json(),c=i.candidates[0]?.content?.parts[0]?.text||"Kh\xf4ng c\xf3 k\u1ebft qu\u1ea3 b\xf3i b\xe0i",a={text:c,sentiment:{score:c.includes(["t\xedch c\u1ef1c","hy v\u1ecdng","l\u1ea1c quan"])?1:c.includes(["ti\xeau c\u1ef1c","th\xe1ch th\u1ee9c","kh\xf3 kh\u0103n"])?-1:0,magnitude:c.length}};return C(a),a}catch(t){return console.error("Gemini API Error:",t),N({message:t.message,status:"API Request Error"}),null}})(n,u),v(!0)}catch(e){console.error("Reading analysis error:",e),N({message:"L\u1ed7i trong qu\xe1 tr\xecnh ph\xe2n t\xedch"})}finally{T(!1)}}},disabled:!(n.trim()&&S&&u.length===S.count),children:"B\u1eaft \u0110\u1ea7u B\xf3i"})})]})})}}}]);