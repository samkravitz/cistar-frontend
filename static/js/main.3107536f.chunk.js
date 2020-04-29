(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(72)},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setNumReactants",function(){return P}),a.d(n,"setNumProducts",function(){return R}),a.d(n,"setNumDiluents",function(){return _}),a.d(n,"parseReactantFile",function(){return O}),a.d(n,"parseProductFile",function(){return A}),a.d(n,"parseDiluentFile",function(){return D}),a.d(n,"updateReactant",function(){return w}),a.d(n,"updateProduct",function(){return k}),a.d(n,"updateDiluent",function(){return I});var r={};a.r(r),a.d(r,"setTemperature",function(){return j}),a.d(r,"setPressure",function(){return U}),a.d(r,"setPhysicalState",function(){return L}),a.d(r,"setHeatOfReaction",function(){return F}),a.d(r,"setCp",function(){return M});var o={};a.r(o),a.d(o,"calculate",function(){return H});var l=a(0),c=a.n(l),i=a(16),u=a.n(i),s=a(30),p=a(31),m=a(38),d=a(32),E=a(39),h=a(73),y=a(74),f=a(75),g=a(3),v=a(6),T=a.n(v),C=a(11),b=a(8),x=a.n(b),S="https://cistar-backend.herokuapp.com",N={SET_REACTANT:"SET_REACTANT",SET_PRODUCT:"SET_PRODUCT",SET_DILUENT:"SET_DILUENT",SET_NUM_REACTANTS:"SET_NUM_REACTANTS",SET_NUM_PRODUCTS:"SET_NUM_PRODUCTS",SET_NUM_DILUENTS:"SET_NUM_DILUENTS",SET_TEMPERATURE:"SET_TEMPERATURE",SET_PRESSURE:"SET_PRESSURE",SET_PHYSICAL_STATE:"SET_PHYSICAL_STATE",SET_HEAT_OF_REACTION:"SET_HEAT_OF_REACTION",SET_CP:"SET_CP",SET_HNUMS:"SET_HNUMS",SET_MATRIX:"SET_MATRIX",SET_REACTION_INFO:"SET_REACTION_INFO",SET_CAMEO_TABLE:"SET_CAMEO_TABLE"},P=function(e){return function(t){t({type:N.SET_NUM_REACTANTS,payload:e})}},R=function(e){return function(t){t({type:N.SET_NUM_PRODUCTS,payload:e})}},_=function(e){return function(t){t({type:N.SET_NUM_DILUENTS,payload:e})}},O=function(e,t,a){return function(){var n=Object(C.a)(T.a.mark(function n(r){var o,l;return T.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x.a.post("".concat(S,"/pdf"),a,{headers:{"Content-Type":"multipart/form-data"},params:{temperature:t}});case 3:o=n.sent,r({type:N.SET_REACTANT,payload:{index:e,data:o.data}}),n.next=12;break;case 7:n.prev=7,n.t0=n.catch(0),l=n.t0.response?n.t0.response.data.error:n.t0,r({type:N.SET_REACTANT,payload:{index:e,data:{}}}),alert(l);case 12:case"end":return n.stop()}},n,null,[[0,7]])}));return function(e){return n.apply(this,arguments)}}()},A=function(e,t){return function(){var a=Object(C.a)(T.a.mark(function a(n){var r,o;return T.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,x.a.post("".concat(S,"/pdf"),t,{headers:{"Content-Type":"multipart/form-data"}});case 3:r=a.sent,n({type:N.SET_PRODUCT,payload:{index:e,data:r.data}}),a.next=12;break;case 7:a.prev=7,a.t0=a.catch(0),o=a.t0.response?a.t0.response.data.error:a.t0,n({type:N.SET_PRODUCT,payload:{index:e,data:{}}}),alert(o);case 12:case"end":return a.stop()}},a,null,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()},D=function(e,t){return function(){var a=Object(C.a)(T.a.mark(function a(n){var r,o;return T.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,x.a.post("".concat(S,"/pdf"),t,{headers:{"Content-Type":"multipart/form-data"}});case 3:r=a.sent,n({type:N.SET_DILUENT,payload:{index:e,data:r.data}}),a.next=12;break;case 7:a.prev=7,a.t0=a.catch(0),o=a.t0.response?a.t0.response.data.error:a.t0,n({type:N.SET_DILUENT,payload:{index:e,data:{}}}),alert(o);case 12:case"end":return a.stop()}},a,null,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()},w=function(e,t){return function(a){a({type:N.SET_REACTANT,payload:{index:e,data:t}})}},k=function(e,t){return function(a){a({type:N.SET_PRODUCT,payload:{index:e,data:t}})}},I=function(e,t){return function(a){a({type:N.SET_DILUENT,payload:{index:e,data:t}})}},j=function(e){return function(t){t({type:N.SET_TEMPERATURE,payload:e})}},U=function(e){return function(t){t({type:N.SET_PRESSURE,payload:e})}},L=function(e){return function(t){t({type:N.SET_PHYSICAL_STATE,payload:e})}},F=function(e){return function(t){t({type:N.SET_HEAT_OF_REACTION,payload:e})}},M=function(e){return function(t){t({type:N.SET_CP,payload:e})}},H=function(e){return function(){var t=Object(C.a)(T.a.mark(function t(a,n){var r,o,l,c,i,u,s,p,m,d;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().compound,o=r.reactants,l=r.products,c=r.diluents,i=W(o,l,c),a({type:N.SET_HNUMS,payload:i}),t.prev=3,u=Object.keys(i).map(function(){var e=Object(C.a)(T.a.mark(function e(t){var a,n;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("".concat(S,"/graph"),Object.keys(i["".concat(t)]));case 2:return a=e.sent,(n=a.data).name=t,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),t.next=7,Promise.all(u);case 7:return s=t.sent,a({type:N.SET_MATRIX,payload:s}),t.next=11,x.a.post("".concat(S,"/calculate"),{operatingParams:e,reactants:o});case 11:return p=t.sent,a({type:N.SET_REACTION_INFO,payload:p.data}),t.next=15,x.a.post("".concat(S,"/cameo"),{reactants:o,products:l,diluents:c});case 15:m=t.sent,a({type:N.SET_CAMEO_TABLE,payload:m.data}),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(3),d=t.t0.response?t.t0.response.data.error:t.t0,alert(d);case 23:case"end":return t.stop()}},t,null,[[3,19]])}));return function(e,a){return t.apply(this,arguments)}}()},W=function(e,t,a){var n={};return e.forEach(function(e){e.productName&&(n[e.productName]=e.hNumbers)}),t.forEach(function(e){e.productName&&(n[e.productName]=e.hNumbers)}),a.forEach(function(e){e.productName&&(n[e.productName]=e.hNumbers)}),n},B={compound:n,operatingParams:r,report:o},z=a(14),V=a(2),X=a(36),Y=a.n(X),J=function(e,t){var a=je.getState(),n=JSON.stringify(Object(V.a)({type:"CISTAR_REACTION",title:e,location:t},a));Y()(new Blob(Object(z.a)(n)),e+".json","text/json")},q=function(e){try{var t=JSON.parse(e.target.result);if("CISTAR_REACTION"!==t.type)throw new Error("Invalid file type");var a=t.compound;je.dispatch({type:N.SET_NUM_REACTANTS,payload:a.numReactants}),je.dispatch({type:N.SET_NUM_PRODUCTS,payload:a.numProducts}),je.dispatch({type:N.SET_NUM_DILUENTS,payload:a.numDiluents}),a.reactants.forEach(function(e,t){je.dispatch({type:N.SET_REACTANT,payload:{index:t,data:e}})}),a.products.forEach(function(e,t){je.dispatch({type:N.SET_PRODUCT,payload:{index:t,data:e}})}),a.diluents.forEach(function(e,t){je.dispatch({type:N.SET_DILUENT,payload:{index:t,data:e}})});var n=t.operatingParams;return je.dispatch({type:N.SET_TEMPERATURE,payload:n.temperature}),je.dispatch({type:N.SET_PRESSURE,payload:n.pressure}),je.dispatch({type:N.SET_PHYSICAL_STATE,payload:n.physicalState}),je.dispatch({type:N.SET_HEAT_OF_REACTION,payload:n.heatOfReaction}),je.dispatch({type:N.SET_CP,payload:n.cp}),{title:t.title,location:t.location}}catch(r){return alert("Unable to load reaction."),{title:"",location:""}}},G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",location:""},a.onChangeTitle=function(e){e.preventDefault(),a.setState({title:e.target.value})},a.onChangeLocation=function(e){e.preventDefault(),a.setState({location:e.target.value})},a.handleChangeR=function(e){var t=parseInt(e.target.value);a.props.setNumReactants(t)},a.handleChangeP=function(e){var t=parseInt(e.target.value);a.props.setNumProducts(t)},a.handleChangeD=function(e){var t=parseInt(e.target.value);a.props.setNumDiluents(t)},a.handleChangeTemperature=function(e){a.props.setTemperature(e.target.value)},a.handleChangePressure=function(e){a.props.setPressure(e.target.value)},a.handleChangePhysicalState=function(e){a.props.setPhysicalState(e.target.value)},a.handleChangeHeatOfReaction=function(e){a.props.setHeatOfReaction(e.target.value)},a.handleChangeCp=function(e){a.props.setCp(e.target.value)},a.saveReaction=function(){J(a.state.title,a.state.location)},a.loadReaction=function(e){var t=new FileReader;t.onload=function(e){var t=q(e);a.setState({title:t.title,location:t.location})},t.readAsText(e.target.files[0])},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Header",style:$.main},c.a.createElement("div",{className:"HeaderFlex",style:$.flexTop},c.a.createElement("div",{className:"TopWrapper"},c.a.createElement("h1",{style:{paddingBottom:".5em"}},"CISTAR Web Tool"),c.a.createElement("div",{className:"TitleLocation",style:{paddingLeft:"1em"}},c.a.createElement("div",{className:"Title",style:$.titleLocation},c.a.createElement("h6",{style:{paddingRight:"1em"}},"Title: "),c.a.createElement(h.a,{type:"text",name:"title",value:this.state.title,onChange:this.onChangeTitle})),c.a.createElement("div",{className:"Location",style:$.titleLocation},c.a.createElement("h6",{style:{paddingRight:"1em"}},"Location: "),c.a.createElement(h.a,{type:"text",name:"title",value:this.state.location,onChange:this.onChangeLocation})),c.a.createElement(y.a,{color:"primary",onClick:this.saveReaction},"Save Reaction"),c.a.createElement("div",{className:"inputWrapper"},"Load Reaction",c.a.createElement(h.a,{type:"file",name:"file",encType:"multipart/form-data",onChange:this.loadReaction})))),c.a.createElement("div",{className:"OperatingParams"},c.a.createElement("h4",null,"Operating Parameters: "),c.a.createElement("div",{className:"Params",style:$.operatingParams},c.a.createElement("h6",null,"Temperature (\xb0C)"),c.a.createElement(h.a,{type:"text",name:"temperature",onChange:this.handleChangeTemperature,value:this.props.temperature}),c.a.createElement("h6",{style:{paddingTop:"1em"}},"Pressure (bar)"),c.a.createElement(h.a,{type:"text",name:"pressure",onChange:this.handleChangePressure,value:this.props.pressure}),c.a.createElement("h6",{style:{paddingTop:"1em"}},"State"),c.a.createElement(h.a,{type:"select",name:"st",id:"exampleSelect",onChange:this.handleChangePhysicalState,value:this.props.physicalState},c.a.createElement("option",null,"Liquid"),c.a.createElement("option",null,"Gas")),c.a.createElement("h6",{style:{paddingTop:"1em"}},"Heat of Reaction (cal / g)"),c.a.createElement(h.a,{type:"text",name:"heatOfReaction",onChange:this.handleChangeHeatOfReaction,value:this.props.heatOfReaction}),c.a.createElement("h6",{style:{paddingTop:"1em",color:"black"}},"Cp (mix) (cal/g/\xb0C)"),c.a.createElement(h.a,{type:"text",name:"cp",onChange:this.handleChangeCp,value:this.props.cp})))),c.a.createElement("div",{className:"ReactantsProductsDiluents",style:$.rpd},c.a.createElement("span",{style:$.rpd.element},c.a.createElement(f.a,{for:"Reactants"},"Reactants"),c.a.createElement(h.a,{type:"select",name:"Reactants",id:"Reactants",onChange:this.handleChangeR,value:this.props.numReactants},c.a.createElement("option",null,"1"),c.a.createElement("option",null,"2"),c.a.createElement("option",null,"3"),c.a.createElement("option",null,"4"))),c.a.createElement("span",{style:$.rpd.element},c.a.createElement(f.a,{for:"Products"},"Products"),c.a.createElement(h.a,{type:"select",name:"Products",id:"Products",onChange:this.handleChangeP,value:this.props.numProducts},c.a.createElement("option",null,"1"),c.a.createElement("option",null,"2"),c.a.createElement("option",null,"3"),c.a.createElement("option",null,"4"))),c.a.createElement("span",{style:$.rpd.element},c.a.createElement(f.a,{for:"Diluents"},"Diluents"),c.a.createElement(h.a,{type:"select",name:"Diluents",id:"Diluents",onChange:this.handleChangeD,value:this.props.numDiluents},c.a.createElement("option",null,"0"),c.a.createElement("option",null,"1"),c.a.createElement("option",null,"2")))),c.a.createElement("span",{style:{color:"#c71e1e"}},"* Inputs in red are required user inputs *"))}}]),t}(l.Component),$={main:{backgroundColor:"#f1f1f1",marginBottom:"2em",padding:"1em 3em"},flexTop:{display:"flex",justifyContent:"space-between"},flexBottom:{},titleLocation:{display:"flex",alignItems:"center",paddingBottom:"1em"},operatingParams:{color:"#c71e1e",padding:"1em"},rpd:{display:"flex",justifyContent:"space-evenly",element:{width:"33%",padding:"1em"}}},K={setNumReactants:B.compound.setNumReactants,setNumProducts:B.compound.setNumProducts,setNumDiluents:B.compound.setNumDiluents,setTemperature:B.operatingParams.setTemperature,setPressure:B.operatingParams.setPressure,setPhysicalState:B.operatingParams.setPhysicalState,setHeatOfReaction:B.operatingParams.setHeatOfReaction,setCp:B.operatingParams.setCp},Q=Object(g.b)(function(e){return{temperature:e.operatingParams.temperature,pressure:e.operatingParams.pressure,physicalState:e.operatingParams.physicalState,heatOfReaction:e.operatingParams.heatOfReaction,cp:e.operatingParams.cp,numReactants:e.compound.numReactants,numProducts:e.compound.numProducts,numDiluents:e.compound.numDiluents}},K)(G),Z={display:"grid",gridTemplateRows:"repeat(6, 1fr) 1fr repeat(13, minmax(auto, 1fr))",textAlign:"center",alignItems:"start",backgroundColor:"#f1f1f1"},ee={parseReactantFile:B.compound.parseReactantFile,updateReactant:B.compound.updateReactant},te=Object(g.b)(function(e){return{temperature:e.operatingParams.temperature,reactants:e.compound.reactants}},ee)(function(e){var t=function(t){var a=Object(V.a)({},e.reactants[e.index]);a[t.target.name]=t.target.value,e.updateReactant(e.index,a)},a=e.number,n=e.index,r=e.reactants[n];return c.a.createElement("div",{className:"Reactant",style:Object(V.a)({},Z)},c.a.createElement("h4",{sm:"4"},"Reactant ",a),c.a.createElement(h.a,{type:"file",name:"file",encType:"multipart/form-data",onChange:function(t){if(t.target.files[0]){var a=new FormData;a.set("file",t.target.files[0],t.target.files[0].name),e.parseReactantFile(e.index,e.temperature,a)}}}),c.a.createElement(h.a,{type:"text",name:"productName",value:r.productName||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"molWtFraction",value:r.molWtFraction||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"molWt",value:r.molWt||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"casNo",value:r.casNo||"",onChange:t}),c.a.createElement("br",null),c.a.createElement(h.a,{type:"text",name:"ph",value:r.ph||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"boilingPt",value:r.boilingPt||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"flashPt",value:r.flashPt||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"upperExplosionLim",value:r.upperExplosionLim||"",onChange:t})," ",c.a.createElement(h.a,{type:"text",name:"lowerExplosionLim",value:r.lowerExplosionLim||"",onChange:t})," ",c.a.createElement(h.a,{type:"text",name:"vapourPressure",value:r.vapourPressure||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"vapourDensity",value:r.vapourDensity||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"relDensity",value:r.relDensity||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"autoIgnitionTemp",value:r.autoIgnitionTemp||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"decompositionTemp",value:r.decompositionTemp||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"viscosity",value:r.viscosity||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"thermalConductivity",value:r.viscosity||"",onChange:t})," ",c.a.createElement(h.a,{type:"text",name:"cp",value:r.cp||"",onChange:t})," ")}),ae={display:"grid",gridTemplateRows:"repeat(6, 1fr) 1fr repeat(13, minmax(auto, 1fr))",textAlign:"center",alignItems:"start",backgroundColor:"#f1f1f1"},ne={parseProductFile:B.compound.parseProductFile,updateProduct:B.compound.updateProduct},re=Object(g.b)(function(e){return{temperature:e.operatingParams.temperature,products:e.compound.products}},ne)(function(e){var t=function(t){var a=Object(V.a)({},e.products[e.index]);a[t.target.name]=t.target.value,e.updateProduct(e.index,a)},a=e.number,n=e.index,r=e.products[n];return c.a.createElement("div",{className:"Product",style:Object(V.a)({},ae)},c.a.createElement("h4",{sm:"4"},"Product ",a),c.a.createElement(h.a,{type:"file",name:"file",encType:"multipart/form-data",onChange:function(t){if(t.target.files[0]){var a=new FormData;a.set("file",t.target.files[0],t.target.files[0].name),e.parseProductFile(e.index,a)}}}),c.a.createElement(h.a,{type:"text",name:"productName",value:r.productName||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"molWtFraction",value:r.molWtFraction||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"molWt",value:r.molWt||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"casNo",value:r.casNo||"",onChange:t}),c.a.createElement("br",null),c.a.createElement(h.a,{type:"text",name:"ph",value:r.ph||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"boilingPt",value:r.boilingPt||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"flashPt",value:r.flashPt||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"upperExplosionLim",value:r.upperExplosionLim||"",onChange:t})," ",c.a.createElement(h.a,{type:"text",name:"lowerExplosionLim",value:r.lowerExplosionLim||"",onChange:t})," ",c.a.createElement(h.a,{type:"text",name:"vapourPressure",value:r.vapourPressure||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"vapourDensity",value:r.vapourDensity||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"relDensity",value:r.relDensity||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"autoIgnitionTemp",value:r.autoIgnitionTemp||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"decompositionTemp",value:r.decompositionTemp||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"viscosity",value:r.viscosity||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"thermalConductivity",value:r.viscosity||"",onChange:t})," ",c.a.createElement(h.a,{type:"text",name:"cp",value:r.cp||"",onChange:t})," ")}),oe={main:{display:"grid",gridTemplateRows:"repeat(6, 1fr) 1fr repeat(13, minmax(auto, 1fr))",margin:"0",textAlign:"center"}},le=Object(g.b)(function(e){return{numReactants:e.compound.numReactants,numProducts:e.compound.numProducts,numDiluents:e.compound.numDiluents}})(function(e){var t=e.numReactants+e.numProducts+e.numDiluents>6?"start":"center";return c.a.createElement("div",{className:"Properties",style:Object(V.a)({},oe.main,{alignItems:t})},c.a.createElement("h2",{style:{alignSelf:"end"}},"Property"),c.a.createElement("div",null),c.a.createElement("h6",null,"Product Name"),c.a.createElement("h6",{style:{color:"#c71e1e"}}," Initial Weight Fraction"),c.a.createElement("h6",null,"Mol. Weight (g/mol)"),c.a.createElement("h6",null,"CAS-No."),c.a.createElement("h5",null,"Physical and Chemical Properties"),c.a.createElement("h6",null,"pH at 20\xb0C (g/l)"),c.a.createElement("h6",null,"Initial boiling point (\xb0C)"),c.a.createElement("h6",null,"Flash point (\xb0C)"),c.a.createElement("h6",null,"Upper explosion limit (% V)"),c.a.createElement("h6",null,"Lower explosion limit (% V)"),c.a.createElement("h6",null,"Vapour pressure at 20\xb0C (hPa)"),c.a.createElement("h6",null,"Vapour density (Air = 1.0)"),c.a.createElement("h6",null,"Relative density at 25\xb0C (g/cm3)"),c.a.createElement("h6",null,"Auto ignition temperature (\xb0C)"),c.a.createElement("h6",null,"Decomposition temperature (\xb0C)"),c.a.createElement("h6",null,"Viscosity ()"),c.a.createElement("h6",null,"Thermal Conductivity - k"),c.a.createElement("h6",{style:{color:"#c71e1e"}},"Specific heat capacity - Cp (cal/g/\xb0C)"))}),ce={display:"grid",gridTemplateRows:"repeat(6, 1fr) 1fr repeat(13, minmax(auto, 1fr))",textAlign:"center",alignItems:"start",backgroundColor:"#f1f1f1"},ie={parseDiluentFile:B.compound.parseDiluentFile,updateDiluent:B.compound.updateDiluent},ue=Object(g.b)(function(e){return{temperature:e.operatingParams.temperature,diluents:e.compound.diluents}},ie)(function(e){var t=function(t){var a=Object(V.a)({},e.diluents[e.index]);a[t.target.name]=t.target.value,e.updateDiluent(e.index,a)},a=e.number,n=e.index,r=e.diluents[n];return c.a.createElement("div",{className:"Diluent",style:Object(V.a)({},ce)},c.a.createElement("h4",{sm:"4"},"Diluent ",a),c.a.createElement(h.a,{type:"file",name:"file",encType:"multipart/form-data",onChange:function(t){if(t.target.files[0]){var a=new FormData;a.set("file",t.target.files[0],t.target.files[0].name),e.parseDiluentFile(e.index,a)}}}),c.a.createElement(h.a,{type:"text",name:"productName",value:r.productName||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"molWtFraction",value:r.molWtFraction||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"molWt",value:r.molWt||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"casNo",value:r.casNo||"",onChange:t}),c.a.createElement("br",null),c.a.createElement(h.a,{type:"text",name:"ph",value:r.ph||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"boilingPt",value:r.boilingPt||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"flashPt",value:r.flashPt||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"upperExplosionLim",value:r.upperExplosionLim||"",onChange:t})," ",c.a.createElement(h.a,{type:"text",name:"lowerExplosionLim",value:r.lowerExplosionLim||"",onChange:t})," ",c.a.createElement(h.a,{type:"text",name:"vapourPressure",value:r.vapourPressure||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"vapourDensity",value:r.vapourDensity||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"relDensity",value:r.relDensity||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"autoIgnitionTemp",value:r.autoIgnitionTemp||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"decompositionTemp",value:r.decompositionTemp||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"viscosity",value:r.viscosity||"",onChange:t}),c.a.createElement(h.a,{type:"text",name:"thermalConductivity",value:r.viscosity||"",onChange:t})," ",c.a.createElement(h.a,{type:"text",name:"cp",value:r.cp||"",onChange:t})," ")}),se={display:"flex",justifyContent:"center"},pe={calculate:B.report.calculate},me=Object(g.b)(function(e){return{numReactants:e.compound.numReactants,numProducts:e.compound.numProducts,numDiluents:e.compound.numDiluents,reactants:e.compound.reactants,operatingParams:e.operatingParams}},pe)(function(e){var t=function(e){if(!e.temperature)throw new Error("Please enter a temperature");if(isNaN(Number(e.temperature)))throw new Error("Please enter a valid temperature");if(!e.pressure)throw new Error("Please enter a pressure");if(isNaN(Number(e.pressure))||Number(e.pressure)<0)throw new Error("Please enter a valid pressure");if(!e.heatOfReaction)throw new Error("Please enter a heat of reaction");if(isNaN(Number(e.temperature)))throw new Error("Please enter a valid heat of reaction")},a=function(e){var t=[];if(e.forEach(function(e,a){var n=e.cp,r=e.molWtFraction,o=a+1;if(""===n)throw new Error("Please enter a valid cp for reactant "+o);if(isNaN(Number(n))||Number(n)<0)throw new Error("Please enter a valid cp for reactant "+o);if(isNaN(Number(r))||Number(r)<0)throw new Error("Please enter a valid weight fraction for reactant "+o);t.push(Number(r))}),1!==t.reduce(function(e,t){return e+t},0))throw new Error("Please make sure weight fractions add to 1")},n=e.numReactants,r=e.numProducts,o=e.numDiluents;return c.a.createElement("div",{className:"Body"},c.a.createElement("div",{style:se},c.a.createElement(le,null),Object(z.a)(Array(n)).map(function(e,t){return c.a.createElement(te,{key:t,index:t,number:t+1})}),Object(z.a)(Array(r)).map(function(e,t){return c.a.createElement(re,{key:t,index:t,number:t+1})}),Object(z.a)(Array(o)).map(function(e,t){return c.a.createElement(ue,{key:t,index:t,number:t+1})})),c.a.createElement("div",{style:se},c.a.createElement(y.a,{color:"primary",onClick:function(){try{t(e.operatingParams),""!==e.operatingParams.cp||a(e.reactants),e.calculate(e.operatingParams)}catch(n){alert(n)}}},"Calculate")))}),de={main:{padding:"1rem",width:"100vw"},table:{borderSpacing:"0",border:"1px solid black",align:"center"},th:{margin:"0",padding:"0.5rem",borderBottom:"1px solid black",borderRight:"1px solid black",lineHeight:"1.5"},td:{margin:"0",padding:"0.5rem",borderBottom:"1px solid black",borderRight:"1px solid black"},caption:{captionSide:"top",color:"black"}},Ee=Object(g.b)(function(e){return{matrix:e.report.matrix}})(function(e){var t=e.matrix;return c.a.createElement("div",{className:"Matrix",style:de.main},c.a.createElement("table",{align:"center",style:de.table},c.a.createElement("caption",{style:de.caption},"Hazard Matrix"),c.a.createElement("thead",null,c.a.createElement("tr",null,["Name","Flammability","Reactivity","Skin absorption","Skin contact","Eye contact","Respiratory","Carcinogen","Reproductive hazard","Sensitizer","Other","Ingestion"].map(function(e,t){return c.a.createElement("th",{style:de.th,key:t},e)}))),c.a.createElement("tbody",null,t.map(function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",{style:Object(V.a)({},de.th)},e.name),c.a.createElement("td",{style:Object(V.a)({},de.th,{color:e.flammability,backgroundColor:e.flammability})},e.flammability),c.a.createElement("td",{style:Object(V.a)({},de.th,{color:e.reactivity,backgroundColor:e.reactivity})},e.reactivity),c.a.createElement("td",{style:Object(V.a)({},de.th,{color:e.skinAbsorption,backgroundColor:e.skinAbsorption})},e.skinAbsorption),c.a.createElement("td",{style:Object(V.a)({},de.th,{color:e.skinContact,backgroundColor:e.skinContact})},e.skinContact),c.a.createElement("td",{style:Object(V.a)({},de.th,{color:e.eyeContact,backgroundColor:e.eyeContact})},e.eyeContact),c.a.createElement("td",{style:Object(V.a)({},de.th,{color:e.respiratory,backgroundColor:e.respiratory})},e.respiratory),c.a.createElement("td",{style:Object(V.a)({},de.th,{color:e.carcinogen,backgroundColor:e.carcinogen})},e.carcinogen),c.a.createElement("td",{style:Object(V.a)({},de.th,{color:e.reproductiveHazard,backgroundColor:e.reproductiveHazard})},e.reproductiveHazard),c.a.createElement("td",{style:Object(V.a)({},de.th,{color:e.sensitizer,backgroundColor:e.sensitizer})},e.sensitizer),c.a.createElement("td",{style:Object(V.a)({},de.th,{color:e.other,backgroundColor:e.other})},e.other),c.a.createElement("td",{style:Object(V.a)({},de.th,{color:e.ingestion,backgroundColor:e.ingestion})},e.ingestion))}))))}),he={main:{padding:"1rem",width:"100vw"},table:{borderCollapse:"separate",borderSpacing:"0px",border:"1px solid black",align:"center"},th:{margin:"0",padding:"0.5rem",borderBottom:"1px solid black",borderRight:"1px solid black",lineHeight:"1.5"},td:{margin:"0",padding:"0.5rem",borderBottom:"1px solid black",borderRight:"1px solid black"},caption:{captionSide:"top",color:"black"}},ye=Object(g.b)(function(e){return{hNums:e.report.hNums}})(function(e){var t=e.hNums;return c.a.createElement("div",{className:"HTable",style:he.main},c.a.createElement("table",{align:"center",style:he.table},c.a.createElement("caption",{style:he.caption},"Hazard Statements"),c.a.createElement("thead",null,c.a.createElement("tr",null,["Name","H-Number","H-Statement"].map(function(e,t){return c.a.createElement("th",{style:he.th,key:t},e)}))),c.a.createElement("tbody",null,Object.keys(t).map(function(e,a){return c.a.createElement("tr",{key:a},c.a.createElement("td",{style:he.td},e),c.a.createElement("td",{style:he.td},c.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},Object.keys(t[e]).map(function(e,t){return c.a.createElement("span",{key:t},e)}))),c.a.createElement("td",{style:he.td},c.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},Object.values(t[e]).map(function(e,t){return c.a.createElement("span",{key:t},e)}))))}))))}),fe={main:{padding:"1rem",paddingTop:"2rem",width:"100vw",textAlign:"center"}},ge=Object(g.b)(function(e){return{reactionInfo:e.report.reactionInfo}})(function(e){var t=e.reactionInfo;return c.a.createElement("div",{className:"Calculation",style:fe.main},c.a.createElement("h4",null,"Calculation"),c.a.createElement("span",null,"Adiabatic temperature change: ",Number(t.adiabaticTemp).toFixed(3)," \xb0C")," ",c.a.createElement("br",null),c.a.createElement("span",null,"Calculated final temperature: ",Number(t.finalTemp).toFixed(3)," \xb0C")," ",c.a.createElement("br",null),c.a.createElement("span",null,"Calculated final pressure: ",Number(t.adiabaticPressure).toFixed(3)," bar"))}),ve=(a(70),Object(g.b)(function(e){return{cameoTable:e.report.cameoTable}})(function(e){var t=e.cameoTable;return console.log(t),c.a.createElement("div",{className:"Cameo"},c.a.createElement("caption",null,"Cameo Matrix"),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))})),Te={main:{padding:"1rem",paddingTop:"2rem",width:"100vw",textAlign:"center"}},Ce=Object(g.b)(function(e){return{matrix:e.report.matrix}})(function(e){return 0===e.matrix.length?null:c.a.createElement("div",{className:"Report",style:Te.main},c.a.createElement("h2",null,"Report"),c.a.createElement(ge,null),c.a.createElement(ye,null),c.a.createElement(Ee,null),c.a.createElement(ve,null))}),be=function(e){return c.a.createElement("div",{className:"Main"},c.a.createElement(Q,null),c.a.createElement(me,null),c.a.createElement(Ce,null))},xe=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(be,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(71);var Se=a(7),Ne=a(18),Pe={numReactants:1,numProducts:1,numDiluents:0,reactants:[{}],products:[{}],diluents:[]},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;return Object(Ne.a)(e,function(e){var a;switch(t.type){case N.SET_NUM_REACTANTS:var n=t.payload;if(e.numReactants=n,(a=n-e.reactants.length)>=0)for(var r=0;r<a;r++)e.reactants.push({});else for(var o=0;o>a;o--)e.reactants.pop();return;case N.SET_NUM_PRODUCTS:var l=t.payload;if(e.numProducts=l,(a=l-e.products.length)>=0)for(var c=0;c<a;c++)e.products.push({});else for(var i=0;i>a;i--)e.products.pop();return;case N.SET_NUM_DILUENTS:var u=t.payload;if(e.numDiluents=u,(a=u-e.diluents.length)>=0)for(var s=0;s<a;s++)e.diluents.push({});else for(var p=0;p>a;p--)e.diluents.pop();return;case N.SET_REACTANT:return void(e.reactants[t.payload.index]=t.payload.data);case N.SET_PRODUCT:return void(e.products[t.payload.index]=t.payload.data);case N.SET_DILUENT:return void(e.diluents[t.payload.index]=t.payload.data);default:return}})},_e={temperature:"0",pressure:"1",physicalState:"Liquid",heatOfReaction:"",cp:""},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.SET_TEMPERATURE:return Object(V.a)({},e,{temperature:t.payload});case N.SET_PRESSURE:return Object(V.a)({},e,{pressure:t.payload});case N.SET_PHYSICAL_STATE:return Object(V.a)({},e,{physicalState:t.payload});case N.SET_HEAT_OF_REACTION:return Object(V.a)({},e,{heatOfReaction:t.payload});case N.SET_CP:return Object(V.a)({},e,{cp:t.payload});default:return e}},Ae={matrix:[],hNums:{},cameoTable:"",reactionInfo:{adiabaticTemp:"",finalTemp:"",adiabaticPressure:""}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;return Object(Ne.a)(e,function(e){switch(t.type){case N.SET_HNUMS:return void(e.hNums=t.payload);case N.SET_MATRIX:return void(e.matrix=t.payload);case N.SET_REACTION_INFO:return void(e.reactionInfo=t.payload);case N.SET_CAMEO_TABLE:return void(e.cameoTable=t.payload);default:return}})},we=function(){return Object(Se.c)({compound:Re,operatingParams:Oe,report:De})},ke=a(37);a.d(t,"store",function(){return je});var Ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Se.d,je=Object(Se.e)(we(),Ie(Object(Se.a)(ke.a)));u.a.render(c.a.createElement(function(){return c.a.createElement(g.a,{store:je},c.a.createElement(xe,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.3107536f.chunk.js.map