(this.webpackJsonpguybean=this.webpackJsonpguybean||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(31),c=n.n(r),i=(n(38),n(18)),o=n(5),l=n(6),u=n(8),j=n(7),h=(n(39),n(15)),d=n(2),b=n(4),p=n.n(b),O=n(13),m=(n(41),n(42),n(0)),x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={restaurantList:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(O.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token"),e.next=4,fetch("/api/restaurantRoutes/myrestaurants",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,console.log(a),this.setState({restaurantList:a}),console.log("putting restaurant in state"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("ERROR:",e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)("main",{className:"MyRestaurants",children:[Object(m.jsx)("nav",{className:"MyRestaurantsNav"}),Object(m.jsx)("h1",{children:"Restaurants"}),Object(m.jsx)("div",{className:"swiper",children:Object(m.jsx)("section",{className:"restaurantInfo",children:this.state.restaurantList.map((function(e){return Object(m.jsxs)("div",{className:"restaurant",children:[Object(m.jsx)("h2",{className:"restName",children:e.name}),Object(m.jsx)("p",{className:"restNumber",children:e.contactNumber}),Object(m.jsx)("p",{className:"restAddress",children:e.address}),Object(m.jsx)("div",{className:"imageContainer",children:Object(m.jsx)("img",{src:e.pictureURL,alt:"",className:"image"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{})]})}))})})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={restaurants:[{name:"",registrationDate:"",cuisineType:"",address:"",contactNumber:"",paymentOptions:"",restaurantInfo:"",pictureURL:""}]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(O.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token"),e.next=4,fetch("/api/restaurantRoutes/MyRestaurants",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}});case 4:return n=e.sent,console.log("fetching something from my restuarants"),e.next=8,n.json();case 8:a=e.sent,console.log("fetching restaurants response"),this.setState({restaurantList:a}),console.log("putting restaurant in state"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("ERROR:",e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)("main",{className:"Restaurants",children:[Object(m.jsx)("nav",{className:"RestaurantsNav",children:Object(m.jsxs)("ul",{id:"nav",children:[Object(m.jsx)("li",{children:"Home"}),Object(m.jsx)("li",{children:"Company"}),Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{to:"../AddRestaurantForm/AddRestaurantForm.jsx",children:"Add Restaurant"})}),Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{to:"../ContactUs/ContactUs.jsx",children:"Contact Us"})})]})}),Object(m.jsx)("div",{children:Object(m.jsx)(x,{restaurantList:this.state.restaurantlist})})]})}}]),n}(s.a.Component),v=(n(52),n(14)),g=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",error:""},e.handleChange=function(t){var n;e.setState((n={},Object(v.a)(n,t.target.name,t.target.value),Object(v.a)(n,"error",""),n))},e.handleSubmit=function(){var t=Object(O.a)(p.a.mark((function t(n){var a,s,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,fetch("/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password})});case 4:if((a=t.sent).ok){t.next=7;break}throw new Error("Fetch failed - Bad request");case 7:return t.next=9,a.json();case 9:s=t.sent,localStorage.setItem("token",s),r=JSON.parse(atob(s.split(".")[1])).user,e.props.setUserInState(r),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(1),console.log("SignupForm error",t.t0),e.setState({error:"Sign Up Failed - Try Again"});case 19:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"form-container",onSubmit:this.handleSubmit,children:Object(m.jsxs)("form",{autoComplete:"off",children:[Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleChange,required:!0}),Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0}),Object(m.jsx)("button",{type:"submit",children:"LOG IN"})]})}),Object(m.jsxs)("p",{className:"error-message",children:["\xa0",this.state.error]})]})}}]),n}(a.Component),y=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",email:"",password:"",confirm:"",error:""},e.handleChange=function(t){var n;e.setState((n={},Object(v.a)(n,t.target.name,t.target.value),Object(v.a)(n,"error",""),n))},e.handleSubmit=function(){var t=Object(O.a)(p.a.mark((function t(n){var a,s,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,fetch("/api/userRoutes/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.state.name,email:e.state.email,password:e.state.password})});case 4:if(a=t.sent,console.log("sending login details to server"),a.ok){t.next=8;break}throw new Error("Fetch failed - Bad request");case 8:return t.next=10,a.json();case 10:s=t.sent,localStorage.setItem("token",s),r=JSON.parse(atob(s.split(".")[1])).user,e.props.setUserInState(r),e.props.history.push("/Restaurants"),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),e.setState({error:"Sign Up Failed - Try Again"});case 20:case"end":return t.stop()}}),t,null,[[1,17]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.password!==this.state.confirm;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"form-container",children:Object(m.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,required:!0}),Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,required:!0}),Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0}),Object(m.jsx)("label",{children:"Confirm"}),Object(m.jsx)("input",{type:"password",name:"confirm",value:this.state.confirm,onChange:this.handleChange,required:!0}),Object(m.jsx)("button",{type:"submit",disabled:e,children:"SIGN UP"})]})}),Object(m.jsxs)("p",{className:"error-message",children:["\xa0",this.state.error]})]})}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={showLogin:!0},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("main",{className:"AuthPage",children:[Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:function(){return e.setState({showLogin:!e.state.showLogin})},children:this.state.showLogin?"CLICK HERE TO SIGN UP":"CLICK HERE TO LOG IN"})}),this.state.showLogin?Object(m.jsx)(g,{setUserInState:this.props.setUserInState}):Object(m.jsx)(y,{setUserInState:this.props.setUserInState})]})}}]),n}(s.a.Component),S=(n(53),n(33)),w=n.n(S),N=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",registrationDate:"",cuisineType:"",address:"",contactNumber:"",paymentOptions:"",restaurantInfo:"",redirect:!1},e.addRestaurant=function(){var t=Object(O.a)(p.a.mark((function t(n){var a,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("before try"),t.prev=2,console.log("before fetch"),t.next=6,fetch("/api/restaurantRoutes/addrestaurantform",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.state.name,registrationDate:e.state.registrationDate,cuisineType:e.state.cuisineType,address:e.state.address,contactNumber:e.state.contactNumber,paymentOptions:e.state.paymentOptions,restaurantInfo:e.state.restaurantInfo,pictureURL:e.state.pictureURL})});case 6:return a=t.sent,console.log("fetching response"),t.next=10,a.json();case 10:s=t.sent,console.log("Success, this is jireh:",s),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),console.error("Error:",t.t0);case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e}return Object(l.a)(n,[{key:"handleSubmit",value:function(){var e=this;w.a.post().then((function(){return e.setState({redirect:!0})}))}},{key:"render",value:function(){return this.state.redirect?Object(m.jsx)(d.a,{to:"../MyRestaurants/MyRestaurants.jsx"}):Object(m.jsxs)("main",{className:"AddRestaurantForm",children:[Object(m.jsx)("nav",{className:"AddRestaurantFormNav",children:Object(m.jsxs)("ul",{id:"arfNav",children:[Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{to:"../MyRestaurants/MyRestaurants.jsx",children:"Home"})}),Object(m.jsx)("li",{children:"Company"}),Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{to:"../AddRestaurantForm/AddRestaurantForm.jsx",children:"Add Restaurant"})}),Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{to:"../ContactUs/ContactUs.jsx",children:"Contact Us"})})]})}),Object(m.jsxs)("form",{onSubmit:this.addRestaurant,children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Restaurant Name"}),Object(m.jsx)("input",{name:"name",placeholder:"Lau's Cuisine",value:this.state.name,onChange:this.handleChange})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Incorporation Date"}),Object(m.jsx)("input",{type:"date",name:"registrationDate",value:this.state.registrationDate,onChange:this.handleChange})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Cuisine"}),Object(m.jsxs)("select",{name:"cuisineType",value:this.state.cuisineType,onChange:this.handleChange,children:[Object(m.jsx)("option",{value:"Japanese",children:"Japanese"}),Object(m.jsx)("option",{value:"Korean",children:"Korean"}),Object(m.jsx)("option",{value:"Chinese",children:"Chinese"}),Object(m.jsx)("option",{value:"American",children:"American"}),Object(m.jsx)("option",{value:"Indian",children:"Indian"}),Object(m.jsx)("option",{value:"Italian",children:"Italian"}),Object(m.jsx)("option",{value:"Middle Eastern",children:"Middle Eastern"}),Object(m.jsx)("option",{value:"Others",children:"Others"})]})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Address"}),Object(m.jsx)("input",{type:"text",name:"address",placeholder:"123 Eats Way",value:this.state.address,onChange:this.handleChange})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Contact Number"}),Object(m.jsx)("input",{type:"text",name:"contactNumber",placeholder:"(416) 225-1234",value:this.state.contactNumber,onChange:this.handleChange})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Payment Options"}),Object(m.jsx)("input",{type:"text",name:"paymentOptions",placeholder:"Cash, Credit card, etc",value:this.state.paymentOptions,onChange:this.handleChange})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Additional Information"}),Object(m.jsx)("input",{type:"text",name:"restaurantInfo",placeholder:"Cash only, indoors and patio, etc",value:this.state.restaurantInfo,onChange:this.handleChange})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Insert Picture with URL"}),Object(m.jsx)("input",{type:"text",name:"pictureURL",placeholder:"Cash only, indoors and patio, etc",value:this.state.pictureURL,onChange:this.handleChange})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:this.addRestaurant,children:"Add Restaurant"})]})]})}}]),n}(a.Component),R=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:null},e.setUserInState=function(t){e.setState({user:t})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("token");if(e){var t=JSON.parse(atob(e.split(".")[1])).user;this.setState({user:t})}}},{key:"render",value:function(){var e=this;return Object(m.jsx)(h.a,{children:Object(m.jsx)("main",{className:"App",children:this.state.user?Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{path:"/Restaurants",render:function(e){return Object(m.jsx)(f,Object(i.a)({},e))}}),Object(m.jsx)(d.b,{path:"/AddRestaurantForm",render:function(e){return Object(m.jsx)(N,Object(i.a)({},e))}}),Object(m.jsx)(d.a,{to:"/Restaurants"})]}):Object(m.jsx)("div",{children:Object(m.jsx)(d.b,{path:"/",render:function(t){return Object(m.jsx)(C,Object(i.a)({setUserInState:e.setUserInState},t))}})})})})}}]),n}(s.a.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root")),I()}},[[72,1,2]]]);
//# sourceMappingURL=main.a5e51b5f.chunk.js.map