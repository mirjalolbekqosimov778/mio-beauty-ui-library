import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-BrGqR2gj.js";import{I as s,a as d}from"./Icons-B4vH5oWB.js";import"./preload-helper-D9Z9MdNV.js";const x={title:"Example/Icons",component:s},i=()=>{const[o,r]=l.useState(""),n=e=>{e&&navigator.clipboard.writeText(e).then(()=>{r(e),setTimeout(()=>r(""),1500)}).catch(a=>console.error("Failed to copy: ",a))};return t.jsxs("div",{style:{position:"relative"},children:[o&&t.jsxs("div",{style:{position:"absolute",top:30,left:"50%",transform:"translateX(-50%)",background:"#333",color:"#fff",padding:"4px 10px",borderRadius:"4px",fontSize:12,zIndex:1e3,fontFamily:"sans-serif",transition:"opacity 0.3s ease"},children:["Copied: ",o]}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"25px"},children:Object.keys(d).map(e=>t.jsxs("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer"},onClick:()=>n(e),children:[t.jsx(s,{name:e,size:25,fill:"none",fallback:t.jsx("div",{style:{width:25,height:25}})}),t.jsx("div",{style:{fontSize:14,marginTop:4,fontFamily:"sans-serif"},children:e})]},e))})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [copied, setCopied] = useState("");
  const handleCopy = text => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(""), 1500);
    }).catch(err => console.error("Failed to copy: ", err));
  };
  return <div style={{
    position: "relative"
  }}>\r
\r
            {copied && <div style={{
      position: "absolute",
      top: 30,
      left: "50%",
      transform: "translateX(-50%)",
      background: "#333",
      color: "#fff",
      padding: "4px 10px",
      borderRadius: "4px",
      fontSize: 12,
      zIndex: 1000,
      fontFamily: "sans-serif",
      transition: "opacity 0.3s ease"
    }}>\r
                    Copied: {copied}\r
                </div>}\r
\r
            <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "25px"
    }}>\r
                {Object.keys(ImIcons).map(name => <div key={name} style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer"
      }} onClick={() => handleCopy(name)}>\r
                        <Icon name={name} size={25} fill='none' fallback={<div style={{
          width: 25,
          height: 25
        }} />} />\r
                        <div style={{
          fontSize: 14,
          marginTop: 4,
          fontFamily: 'sans-serif'
        }}>{name}</div>\r
                    </div>)}\r
            </div>\r
        </div>;
}`,...i.parameters?.docs?.source}}};const y=["Default"];export{i as Default,y as __namedExportsOrder,x as default};
