(this["webpackJsonpreact-hw2"]=this["webpackJsonpreact-hw2"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={wrapper:"ContactForm_wrapper__1dNNb",button:"ContactForm_button__3tmtS",input:"ContactForm_input__12asS"}},,,function(e,t,n){e.exports={li:"ContactItem_li__2LvO2",btn:"ContactItem_btn__3D2zf"}},,,,,function(e,t,n){e.exports={input:"Filter_input__OpraD"}},,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),l=(n(20),n(14)),u=n(6),i=n(1),s=n(2),m=n(4),h=n(3),p=(n(21),n(5)),b=n.n(p),f=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(u.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.submit(e.state)},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{className:b.a.wrapper,onSubmit:this.handleSubmit},r.a.createElement("p",null,"Name"),r.a.createElement("input",{className:b.a.input,type:"text",placeholder:"Enter name",name:"name",value:this.state.name,onChange:this.handleChange}),r.a.createElement("p",null,"Number"),r.a.createElement("input",{className:b.a.input,type:"text",placeholder:"Enter number",name:"number",value:this.state.number,onChange:this.handleChange}),r.a.createElement("button",{className:b.a.button,type:"submit"},"Add contact"))}}]),n}(r.a.Component),d=n(8),v=n.n(d);var E=function(e){var t=e.deleteFunction,n=e.contact;return r.a.createElement("li",{className:v.a.li},n.name,": ",n.number,r.a.createElement("button",{type:"button",onClick:function(){return t(n.id)},className:v.a.btn},"Delete"))},C=n(7),g=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.deleteFunction;return r.a.createElement("div",null,r.a.createElement("ul",null,this.props.list.map((function(t){return r.a.createElement(E,{key:Object(C.v4)(),deleteFunction:e,contact:t})}))))}}]),n}(r.a.Component),y=n(13),O=n.n(y);var _=function(e){var t=e.filterChange,n=e.filterValue;return r.a.createElement("input",{className:O.a.input,type:"text",name:"filter",value:n,onChange:t})},j=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(u.a)({},a,r))},e.handleSubmit=function(t){var n={name:t.name,number:t.number,id:Object(C.v4)()};e.state.contacts.find((function(e){return e.name===n.name&&e.number===n.number}))?alert("".concat(n.name," is already in your list")):e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[n])}}))},e.handleDelete=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=t.filter((function(e){return e.name.includes(n)}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(f,{submit:this.handleSubmit}),r.a.createElement("h2",null,"Contacts"),r.a.createElement("h4",null,"Find contacts by name"),r.a.createElement(_,{filterChange:this.handleChange,filterValue:n}),r.a.createElement(g,{deleteFunction:this.handleDelete,list:a}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.47379022.chunk.js.map