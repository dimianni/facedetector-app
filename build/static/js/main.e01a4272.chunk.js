(this.webpackJsonpbrain=this.webpackJsonpbrain||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/Dimianni.8fe6c552.svg"},20:function(e,t,a){e.exports=a(38)},25:function(e,t,a){},26:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),s=a.n(i),r=(a(25),a(1)),c=a(2),l=a(3),m=a(4),u=(a(26),function(e){var t=e.onRouteChange;return e.isSignedIn?o.a.createElement("nav",null,o.a.createElement("p",{className:"navEl",onClick:function(){return t("signout")}},"Sign Out")):o.a.createElement("nav",{className:"nav"},o.a.createElement("p",{className:"navEl",onClick:function(){return t("signin")}},"Sign In"),o.a.createElement("p",{className:"navEl",onClick:function(){return t("register")}},"Register"))}),p=a(18),d=a.n(p),h=a(13),g=function(e){var t=e.onInputChange,a=e.onButtonSubmit,n=e.name;return o.a.createElement("div",{className:"welcome-wrapper"},o.a.createElement("div",{className:"welcome"},"Hello ".concat(n,"!")),o.a.createElement("p",{className:"intro"},"Welcome to Dimianni Face Detector!"),o.a.createElement("p",{className:"postIntro"},"This app can detect a face on almost any picture! ",o.a.createElement("br",null)," ",o.a.createElement("span",null,"Give it a try! ")),o.a.createElement("p",{className:"preInput"},"Please insert a link to a picture:"),o.a.createElement("div",{className:"imageInputCont"},o.a.createElement("input",{type:"text",className:"imageInput",placeholder:"Link . . .",onChange:t,onFocus:function(e){return e.target.placeholder=""}}),o.a.createElement(h.Link,{to:"img",smooth:!0,offset:50,duration:700},o.a.createElement("button",{className:"imageBtn",onClick:a},"Detect"))))},f=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:"",name:""},e.onEmailChange=function(t){e.setState({email:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onNameChange=function(t){e.setState({name:t.target.value})},e.onSubmitRegister=function(){fetch("https://protected-fjord-47913.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password,name:e.state.name})}).then((function(e){return e.json()})).then((function(t){t.id&&(e.props.loadUser(t),e.props.onRouteChange("home"))}))},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("article",{className:"c2"},o.a.createElement("div",{className:"signin"},o.a.createElement("h1",{class:"signup1"},"REGISTER"),o.a.createElement("input",{className:"inputs",type:"name",name:"name",id:"name",placeholder:"Name . . .",onFocus:function(e){return e.target.placeholder=""},onChange:this.onNameChange}),o.a.createElement("input",{className:"inputs",type:"email",name:"email-address",id:"email-address",placeholder:"Email . . .",onFocus:function(e){return e.target.placeholder=""},onChange:this.onEmailChange}),o.a.createElement("input",{className:"inputs",type:"password",name:"password",id:"password",placeholder:"Password . . .",onFocus:function(e){return e.target.placeholder=""},onChange:this.onPasswordChange}),o.a.createElement("input",{onClick:this.onSubmitRegister,className:"btn",type:"submit",value:"Let's Go!"})))}}]),a}(n.Component),b=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",null,"Built with ",o.a.createElement("span",{role:"img",alt:"love","aria-label":""},"\u2764\ufe0f")),o.a.createElement("div",null,"\xa9 2020 by ",o.a.createElement("a",{href:"http://dimianni.biz/"},"Dimianni"),"."))},E=function(e){var t=e.image,a=e.box,n={top:a.topRow,bottom:a.bottomRow,left:a.leftCol,right:a.rightCol},i={display:"none"};return o.a.createElement("div",{className:"img-wrapper"},o.a.createElement("img",{name:"img",id:"inputImage",alt:"",src:t,style:t?{display:"block"}:i}),o.a.createElement("div",{className:"bounding-box",style:t?n:i}))},v=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={signInEmail:"",signInPassword:""},e.onEmailChange=function(t){e.setState({signInEmail:t.target.value})},e.onPasswordChange=function(t){e.setState({signInPassword:t.target.value})},e.onSubmitSignIn=function(){fetch("https://protected-fjord-47913.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.signInEmail,password:e.state.signInPassword})}).then((function(e){return e.json()})).then((function(t){t.id&&(e.props.loadUser(t),e.props.onRouteChange("home"))}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return o.a.createElement("article",{className:"c2"},o.a.createElement("div",{className:"signin"},o.a.createElement("h1",{class:"signup1"},"SIGN IN"),o.a.createElement("input",{className:"inputs",type:"email",name:"email-address",id:"email-address",placeholder:"Email . . .",onFocus:function(e){return e.target.placeholder=""},onChange:this.onEmailChange}),o.a.createElement("input",{className:"inputs",type:"password",name:"password",id:"password",placeholder:"Password . . .",onFocus:function(e){return e.target.placeholder=""},onChange:this.onPasswordChange}),o.a.createElement("input",{onClick:this.onSubmitSignIn,className:"btn",type:"submit",value:"Let's Go!"}),o.a.createElement("div",{className:"noAcc"},"Don't have an account?"),o.a.createElement("div",{className:""},o.a.createElement("button",{onClick:function(){return e("register")},className:"btnReg"},"Register"))))}}]),a}(n.Component),y=a(19),w=a.n(y),C={particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#e25a76"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}}},N={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",password:"",entries:0,joined:""}},S=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state=N,e.onInputChange=function(t){e.setState({input:t.target.value})},e.calcFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImage"),n=Number(a.height),o=Number(a.width);return{leftCol:t.left_col*o,topRow:t.top_row*n,rightCol:o-t.right_col*o,bottomRow:n-t.bottom_row*n}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://protected-fjord-47913.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://protected-fjord-47913.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calcFaceLocation(t))}))},e.onRouteChange=function(t){"signout"===t?e.setState(N):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,password:t.password,entries:t.entries,joined:t.joined}})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.box,i=e.route;return o.a.createElement("div",{className:"app"},o.a.createElement(w.a,{className:"particles",params:C}),o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("img",{src:d.a,className:"logo",alt:"FaceDec"}),o.a.createElement(u,{onRouteChange:this.onRouteChange,isSignedIn:t}))),"home"===i?o.a.createElement("div",{className:"welcomeNImg"},o.a.createElement(g,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit,name:this.state.user.name}),o.a.createElement(E,{box:n,image:a})):"signin"===i?o.a.createElement(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):o.a.createElement(f,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}),o.a.createElement(b,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(37);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.e01a4272.chunk.js.map