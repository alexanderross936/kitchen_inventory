(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);n(71);var a=n(0),r=n.n(a),l=n(24),o=n.n(l),c=(n(76),n(12)),i=n(13),s=n(15),u=n(14),m=n(7),p=n.n(m),d=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Hello"))}}]),n}(r.a.Component),h=n(121),g=n(128),E=n(103),f=n(122),v=n(123),b=n(42),y=n(20),O=n(25),j=n(21),w=n.n(j),S=n(29),I=n(127),A=function(e,t){return function(n){var a=Object(I.a)();n({type:"SET_ALERT",payload:{msg:e,alertType:t,id:a}}),setTimeout((function(){return n({type:"REMOVE_ALERT",payload:a})}),5e3)}},C=function(e){e?p.a.defaults.headers.common["x-auth-token"]=e:delete p.a.defaults.headers.common["x-auth-token"]},k=function(){return function(){var e=Object(S.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&C(localStorage.token),e.prev=1,e.next=4,p.a.get("http://whispering-journey-02450.herokuapp.com/api/user");case 4:n=e.sent,t({type:"USER_LOADED",payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"AUTH_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},x=Object(O.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e({type:"LOGOUT"})}}})((function(e){var t=e.auth,n=t.isAuthenticated,l=t.loading,o=e.logout,c=r.a.createElement(a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(y.b,{to:"/sum",style:{textDecoration:"none"}},r.a.createElement(E.a,{color:"white"},"Ingredients List"))),r.a.createElement(g.a,null,r.a.createElement(y.b,{to:"/recipes_list",style:{textDecoration:"none"}},r.a.createElement(E.a,{color:"white"},"Recipes List")))),r.a.createElement(g.a,null,r.a.createElement(y.b,{to:"/add_recipe",style:{textDecoration:"none"}},r.a.createElement(E.a,{color:"white"},"Add Recipe"))),r.a.createElement(g.a,null,r.a.createElement(y.b,{to:"/add_ingredients",style:{textDecoration:"none"}},r.a.createElement(E.a,{color:"white"},"Add Ingredients"))),r.a.createElement(g.a,null,r.a.createElement("a",{onClick:o,href:"#!"},r.a.createElement("span",{className:"hide-sm",style:{textDecoration:"none"}},r.a.createElement(E.a,{color:"white"},"Logout"))))),i=r.a.createElement(a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement(y.b,{to:"/login",style:{textDecoration:"none"}},r.a.createElement(E.a,{color:"white"},"Login"))),r.a.createElement(g.a,null,r.a.createElement(y.b,{to:"/register",style:{textDecoration:"none"}},r.a.createElement(E.a,{color:"white"},"Register"))));return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{position:"relative"},r.a.createElement(v.a,null,r.a.createElement(b.a,{variant:"title",color:"inherit",style:{flexGrow:"1"}},"Kitchen Inventory"),!l&&r.a.createElement(a.Fragment,null,n?c:i))))})),L=n(5),T=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredient:"",type:"",amount:""},e.handleChangeIngredient=function(t){e.setState({ingredient:t.target.value}),console.log(e.state.ingredient)},e.handleChangeAmount=function(t){e.setState({amount:t.target.value}),console.log(e.state.amount)},e.handleChangeType=function(t){e.setState({type:t.target.value}),console.log(e.state.type)},e.handleSubmit=function(t){t.preventDefault();var n={ingredient:e.state.ingredient,type:e.state.type,amount:e.state.amount};p.a.post("https://whispering-journey-02450.herokuapp.com/api/add_ingredient",n),e.setState({ingredient:"",type:"",amount:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Ingredient"),r.a.createElement("input",{id:"ingredient",name:"ingredient",type:"text",value:this.state.ingredient,onChange:this.handleChangeIngredient}),r.a.createElement("br",null),r.a.createElement("h3",null,"Amount"),r.a.createElement("input",{id:"amount",name:"amount",type:"text",value:this.state.amount,onChange:this.handleChangeAmount}),r.a.createElement("br",null),r.a.createElement("h3",null,"Type"),r.a.createElement("input",{id:"type",name:"type",type:"type",value:this.state.type,onChange:this.handleChangeType}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit Ingredient"})))}}]),n}(r.a.Component),R=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://whispering-journey-02450.herokuapp.com/api").then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){console.log(this.state.data),console.log(typeof this.state.data);var e=this.state.data;console.log(Object.values(e));var t=Object.values(e),n=t.filter((function(e){return""!=e._id.Ingredient}));console.log(n);var a=t.map((function(e){return r.a.createElement("p",null,r.a.createElement("h3",null,"ID: ",e._id),r.a.createElement("h3",null,"Ingredient: ",e.Ingredient),r.a.createElement("h3",null,"Amount: ",e.Amount),r.a.createElement("h3",null,"Type: ",e.Type),r.a.createElement("h3",null,"FLOZ: ",e.floz),r.a.createElement("h3",null,"Cup: ",e.cup),r.a.createElement("h3",null,"tbs: ",e.tbs),r.a.createElement("h3",null,"tsp: ",e.tsp),r.a.createElement("h3",null,"mL: ",e.ml),r.a.createElement("h3",null,"L: ",e.L))}));return r.a.createElement("p",null,a)}}]),n}(r.a.Component),D=n(124),_=n(125),z=n(126),U=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://whispering-journey-02450.herokuapp.com/api/recipes").then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){console.log(this.state.data),console.log(this.props.match),console.log(typeof this.state.data);var e=this.state.data;console.log(Object.values(e));var t=Object.values(e).map((function(e){return r.a.createElement("p",null,r.a.createElement(D.a,null,r.a.createElement(_.a,{title:e.Title}),r.a.createElement(z.a,null,r.a.createElement(y.b,{to:"/recipe/".concat(e._id)},r.a.createElement(E.a,{style:{textDecoration:"none"},variant:"contained"},"See more Details")))))}));return r.a.createElement("p",null,t)}}]),n}(r.a.Component),M=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:"",ingredients:"",amounts:"",types:"",directions:""},e.second={title:"",ingredients:"",amounts:"",types:"",directions:""},e.handleChangeTitle=function(t){e.setState({title:t.target.value},(function(){console.log(this.state.title)}))},e.handleChangeIngredients=function(t){e.setState({ingredients:t.target.value},(function(){console.log(this.state.ingredients)}))},e.handleChangeAmounts=function(t){e.setState({amounts:t.target.value},(function(){console.log(this.state.amounts)}))},e.handleChangeType=function(t){e.setState({types:t.target.value},(function(){console.log(this.state.types)}))},e.handleChangeDirections=function(t){e.setState({directions:t.target.value},(function(){console.log(this.state.directions)}))},e.handleAddIngredient=function(t){e.second.ingredients+=e.state.ingredients+", ",console.log(e.second.title),console.log(e.second.ingredients),e.second.amounts+=e.state.amounts+", ",console.log(e.second.amounts),e.second.types+=e.state.types+", ",console.log(e.second.types),e.setState({ingredients:"",amounts:"",types:""})},e.handleSubmit=function(t){t.preventDefault();var n={title:e.state.title,ingredients:e.second.ingredients,amounts:e.second.amounts,types:e.second.types,directions:e.state.directions};console.log(n),p.a.post("https://whispering-journey-02450.herokuapp.com/api/add_recipe",n);e.state;e.setState({title:"",ingredients:"",amounts:"",types:"",directions:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=[this.second],t=r.a.createElement("table",null,e.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Ingredients:"),r.a.createElement("p",null,e.ingredients)),r.a.createElement("td",null,r.a.createElement("b",null,"Amount"),r.a.createElement("p",null,e.amounts)),r.a.createElement("td",null,r.a.createElement("b",null,"Measurement Type"),r.a.createElement("p",null,e.types)))})));return r.a.createElement("div",null,r.a.createElement("input",{id:"title",name:"title",type:"text",value:this.state.title,onChange:this.handleChangeTitle}),r.a.createElement("br",null),r.a.createElement("h3",null,"Recipe"),r.a.createElement("p",null,this.state.title),r.a.createElement("h3",null,"Ingredients and Measurement"),r.a.createElement("p",null,t),r.a.createElement("h3",null,"Directions"),r.a.createElement("p",null,this.state.directions),"Ingredients:",r.a.createElement("input",{id:"ingredients",name:"ingredients",type:"text",value:this.state.ingredients,onChange:this.handleChangeIngredients}),r.a.createElement("br",null),"Amount:",r.a.createElement("input",{id:"amounts",name:"amounts",type:"text",value:this.state.amounts,onChange:this.handleChangeAmounts}),r.a.createElement("br",null),"Measurement Type:",r.a.createElement("select",{id:"types",name:"types",value:this.state.value,onChange:this.handleChangeType},r.a.createElement("option",{value:"oz"},"oz"),r.a.createElement("option",{value:"tsp"},"tsp"),r.a.createElement("option",{value:"floz"},"floz"),r.a.createElement("option",{value:"L"},"L"),r.a.createElement("option",{value:"ml"},"ml"),r.a.createElement("option",{value:"lb"},"lb"),r.a.createElement("option",{value:"g"},"g"),r.a.createElement("option",{value:"cup"},"cup"),r.a.createElement("option",{value:"tbs"},"tbs")),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleAddIngredient},"Add Ingredient"),r.a.createElement("br",null),"Directions:",r.a.createElement("input",{id:"directions",name:"directions",type:"text",onChange:this.handleChangeDirections}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleSubmit},"Sub"))}}]),n}(r.a.Component),N=n(31),G=n(16),F=n(41),H=(n(56),Object(O.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(S.a)(w.a.mark((function n(a){var r,l,o,c;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={headers:{"Content-Type":"application/json"}},l=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,p.a.post("http://whispering-journey-02450.herokuapp.com//api/login",l,r);case 5:o=n.sent,a({type:"LOGIN_SUCCESS",payload:o.data}),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(2),(c=n.t0.response.data.errors)&&c.forEach((function(e){return a(A(e.msg,"danger"))})),a({type:"LOGIN_FAIL"});case 14:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuthenticated,l=Object(a.useState)({email:"",password:""}),o=Object(F.a)(l,2),c=o[0],i=o[1],s=c.email,u=c.password,m=function(e){i(Object(G.a)(Object(G.a)({},c),{},Object(N.a)({},e.target.name,e.target.value)))},p=function(){var e=Object(S.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(s,u);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?r.a.createElement(L.a,{to:"/Home"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Sign In"),r.a.createElement("form",{onSubmit:function(e){return p(e)}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",value:s,onChange:function(e){return m(e)},minLength:"6"})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Password",name:"password",value:u,onChange:function(e){return m(e)},minLength:"6"})),r.a.createElement("input",{type:"submit",value:"Login"})))}))),P=Object(O.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:A,register:function(e){var t=e.name,n=e.email,a=e.password;return function(){var e=Object(S.a)(w.a.mark((function e(r){var l,o,c,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={headers:{"Content-Type":"application/json"}},o=JSON.stringify({name:t,email:n,password:a}),e.prev=2,e.next=5,p.a.post("http://whispering-journey-02450.herokuapp.com/api/register",o,l);case 5:c=e.sent,r({type:"REGISTER_SUCCESS",payload:c.data}),r(k()),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(2),i=e.t0.response.data.errors,console.log(i),i&&i.forEach((function(e){return r(A(e.msg,"danger"))})),r({type:"REGISTER_FAIL"});case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,n=e.register,l=e.isAuthenticated,o=Object(a.useState)({name:"",email:"",password:"",password2:""}),c=Object(F.a)(o,2),i=c[0],s=c[1],u=i.name,m=i.email,p=i.password,d=i.password2,h=function(e){return s(Object(G.a)(Object(G.a)({},i),{},Object(N.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(S.a)(w.a.mark((function e(a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),p!==d?t("Passwords do not match","danger"):n({name:u,email:m,password:p});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l?r.a.createElement(L.a,{to:"/Home"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Sign Up"),r.a.createElement("form",{onSubmit:function(e){return g(e)}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",value:u,onChange:function(e){return h(e)},minLength:"6"})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",value:m,onChange:function(e){return h(e)},minLength:"6"})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Password",name:"password",value:p,onChange:function(e){return h(e)},minLength:"6"})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Confirm password",name:"password2",value:d,onChange:function(e){return h(e)},minLength:"6"})),r.a.createElement("input",{type:"submit",value:"Register"})))})),J=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e.handleUseRecipe=function(){var t=e.state.data.Ingredients;console.log(t);var n,a=t.split(", "),r=e.state.data.Amounts.split(", "),l=e.state.data.Types.split(", "),o=r.map((function(e){return-1*e}));console.log(a),console.log(r),console.log(l),console.log(typeof o);var c,i=[];for(n=0;n<a.length-1;n++)i.push({Ingredient:a[n],Type:l[n],Amount:o[n]});for(console.log(i),c=0;c<i.length;c++){var s=i[c];p.a.post("https://whispering-journey-02450.herokuapp.com/use_recipe",s),console.log(s),alert("Recipe ingredients have been subtracted from ingredient list")}},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;p.a.get("https://whispering-journey-02450.herokuapp.com/api/recipe/".concat(t)).then((function(t){e.setState({data:t.data}),console.log(e.state.data)}))}},{key:"render",value:function(){var e=r.a.createElement("p",null,r.a.createElement(D.a,null,r.a.createElement(_.a,{title:this.state.Title}),r.a.createElement(z.a,null,r.a.createElement("h3",null,"Ingredients: ",this.state.data.Ingredients),r.a.createElement("h3",null,"Amounts: ",this.state.data.Amounts),r.a.createElement("h3",null,"Measurements: ",this.state.data.Types),r.a.createElement("h3",null,"Directions: ",this.state.data.Directions),r.a.createElement(E.a,{onClick:this.handleUseRecipe},"Use Recipe"))));return console.log(this.state.data),console.log(this.state.data.Amounts),console.log(this.state.data.Ingredients),console.log(this.state.data.Types),r.a.createElement("div",null,r.a.createElement("span",null,e))}}]),n}(r.a.Component),W=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://whispering-journey-02450.herokuapp.com/api/sum").then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){console.log(this.state.data),console.log(typeof this.state.data);var e=this.state.data;console.log(Object.values(e));var t=Object.values(this.state.data);console.log(t);var n=[],a=t.reduce((function(e,t){return e[t.Ingredient]||(e[t.Ingredient]={Ingredient:t.Ingredient,floz:0,tsp:0,tbs:0,L:0,ml:0,cup:0,oz:0,lb:0,g:0},n.push(e[t.Ingredient])),e[t.Ingredient].floz+=t.floz,e[t.Ingredient].tsp+=t.tsp,e[t.Ingredient].tbs+=t.tbs,e[t.Ingredient].L+=t.L,e[t.Ingredient].ml+=t.ml,e[t.Ingredient].cup+=t.cup,e[t.Ingredient].oz+=t.oz,e[t.Ingredient].lb+=t.lb,e[t.Ingredient].g+=t.g,e}),{});console.log(a);var l,o,c=Object.values(a),i=[],s=[];for(l=0;l<c.length;l++)0===c.floz&&0===c.tsp&&0===c.tbs&&0===c.L&&0===c.ml&&0===c.cup?s.push(c[l]):i.push(c[l]);for(console.log(i),console.log(s),console.log(i),console.log(s),console.log(c),o=0;o<c.length;o++)0!==c[o].j&&"NaN"!==c[o].j||(c[o].j="N/A");console.log(c);var u=c.map((function(e){return r.a.createElement(D.a,null,r.a.createElement("h3",null,r.a.createElement(_.a,{title:e.Ingredient})),r.a.createElement(z.a,null,r.a.createElement("p",null,r.a.createElement("h3",null,"tbs: ",e.tbs),r.a.createElement("h3",null,"tsp: ",e.tsp),r.a.createElement("h3",null,"floz: ",e.floz),r.a.createElement("h3",null,"cup: ",e.cup),r.a.createElement("h3",null,"mL: ",e.ml),r.a.createElement("h3",null,"L: ",e.L),r.a.createElement("h3",null,"oz: ",e.oz),r.a.createElement("h3",null,"lb: ",e.lb),r.a.createElement("h3",null,"g: ",e.g))))}));return r.a.createElement("p",null,u)}}]),n}(r.a.Component);var B=function(){return r.a.createElement(y.a,null,r.a.createElement(x,null),r.a.createElement(L.d,null,r.a.createElement(L.b,{exact:!0,path:"/",component:d}),r.a.createElement(L.b,{exact:!0,path:"/add_ingredients",component:T}),r.a.createElement(L.b,{exact:!0,path:"/ingredients_list",component:R}),r.a.createElement(L.b,{exact:!0,path:"/recipes_list",component:U}),r.a.createElement(L.b,{exact:!0,path:"/add_recipe",component:M}),r.a.createElement(L.b,{exact:!0,path:"/login",component:H}),r.a.createElement(L.b,{exact:!0,path:"/register",component:P}),r.a.createElement(L.b,{path:"/recipe/:id",component:J}),r.a.createElement(L.b,{path:"/sum",component:W})))},V=n(61),q=function(e){var t=e.alerts;null!==t&&t.length>0&&t.map((function(e){return r.a.createElement("div",{key:e.id},e.msg)}))};q.PropTypes={alerts:n.n(V).a.array.isRequired};Object(O.b)((function(e){return{alerts:e.alert}}))(q);var K=n(28),Z=n(62),$=n(63),Q=n(64),X=[{id:1,msg:"Please log in",alertType:"success"}],Y={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null},ee=Object(K.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_ALERT":return[].concat(Object(Q.a)(e),[t.payload]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==a}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"USER_LOADED":return Object(G.a)(Object(G.a)({},e),{},{isAuthenticated:!0,loading:!1,user:a});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",a.token),Object(G.a)(Object(G.a)(Object(G.a)({},e),a),{},{isAuthenticated:!0,loading:!1});case"REGISTER_FAIL":case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOUT":return localStorage.removeItem("token"),Object(G.a)(Object(G.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});default:return e}}}),te=[$.a],ne=Object(K.createStore)(ee,{},Object(Z.composeWithDevTools)(K.applyMiddleware.apply(void 0,te)));localStorage.token&&C(localStorage.token);var ae=function(){return Object(a.useEffect)((function(){ne.dispatch(k())}),[]),r.a.createElement(O.a,{store:ne},r.a.createElement("div",{className:"App"},r.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,n){e.exports=n(102)},76:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.4e1f2cce.chunk.js.map