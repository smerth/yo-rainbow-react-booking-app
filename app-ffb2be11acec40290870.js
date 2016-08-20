webpackJsonp([1],{234:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Main=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),u=r(s),c=n(257),f=n(260),p=n(259),d=n(255),m=n(256),h={container:{display:"flex",flexDirection:"column",minHeight:"100%"},main:{flex:1,display:"flex",flexDirection:"column"}};t.Main=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return u["default"].createElement("div",{style:h.container},u["default"].createElement(c.Header,null),u["default"].createElement("main",{style:h.main},u["default"].createElement(d.Booking,null),u["default"].createElement(f.Title,null),u["default"].createElement(p.Techs,null)),u["default"].createElement(m.Footer,null))}}]),t}(s.Component)},236:function(e,t){},252:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.AddAppointment=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),u=r(s),c={addbooking:{marginTop:"1rem"}},f=t.AddAppointment=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"toggleAptDisplay",value:function(){this.props.handleToggle()}},{key:"handleAdd",value:function(e){var t={petName:this.refs.inputPetName.value,ownerName:this.refs.inputOwnerName.value,aptDate:this.refs.inputAptDate.value+" "+this.refs.inputAptTime.value,aptNotes:this.refs.inputAptNotes.value};e.preventDefault(),this.props.addApt(t)}},{key:"render",value:function(){var e={display:this.props.bodyVisible?"block":"none"};return u["default"].createElement("div",{style:c.addbooking,className:"panel panel-primary"},u["default"].createElement("div",{className:"panel-heading apt-addheading",onClick:this.toggleAptDisplay.bind(this)},u["default"].createElement("span",{className:"glyphicon glyphicon-plus"})," Add Appointment"),u["default"].createElement("div",{className:"panel-body",style:e},u["default"].createElement("form",{className:"add-appointment form-horizontal",onSubmit:this.handleAdd.bind(this)},u["default"].createElement("div",{className:"form-group"},u["default"].createElement("label",{className:"col-sm-2 control-label",htmlFor:"petName"},"Pet Name"),u["default"].createElement("div",{className:"col-sm-10"},u["default"].createElement("input",{type:"text",className:"form-control",id:"petName",ref:"inputPetName",placeholder:"Pet's Name"}))),u["default"].createElement("div",{className:"form-group"},u["default"].createElement("label",{className:"col-sm-2 control-label",htmlFor:"petOwner"},"Pet Owner"),u["default"].createElement("div",{className:"col-sm-10"},u["default"].createElement("input",{type:"text",className:"form-control",id:"petOwner",ref:"inputOwnerName",placeholder:"Owner's Name"}))),u["default"].createElement("div",{className:"form-group"},u["default"].createElement("label",{className:"col-sm-2 control-label",htmlFor:"aptDate"},"Date"),u["default"].createElement("div",{className:"col-sm-4"},u["default"].createElement("input",{type:"date",className:"form-control",id:"aptDate",ref:"inputAptDate"})),u["default"].createElement("label",{className:"col-sm-2 control-label",htmlFor:"aptTime"},"Time"),u["default"].createElement("div",{className:"col-sm-4"},u["default"].createElement("input",{type:"time",className:"form-control",id:"aptTime",ref:"inputAptTime"}))),u["default"].createElement("div",{className:"form-group"},u["default"].createElement("label",{className:"col-sm-2 control-label",htmlFor:"aptNotes"},"Apt. Notes"),u["default"].createElement("div",{className:"col-sm-10"},u["default"].createElement("textarea",{className:"form-control",rows:"4",cols:"50",id:"aptNotes",ref:"inputAptNotes",placeholder:"Appointment Notes"}))),u["default"].createElement("div",{className:"form-group"},u["default"].createElement("div",{className:"col-sm-offset-2 col-sm-10"},u["default"].createElement("button",{type:"submit",className:"btn btn-primary pull-right"},"Add Appointment"))))))}}]),t}(s.Component);f.propTypes={bodyVisible:u["default"].PropTypes.bool.isRequired,handleToggle:u["default"].PropTypes.func,addApt:u["default"].PropTypes.func},e.exports=f},253:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.AptList=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),u=r(s),c=t.AptList=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"handleDeleteClick",value:function(){this.props.handleDelete(this.props.whichItem)}},{key:"render",value:function(){return u["default"].createElement("li",{className:"pet-item media"},u["default"].createElement("div",{className:"media-left"},u["default"].createElement("button",{className:"pet-delete btn btn-xs btn-danger",onClick:this.handleDeleteClick.bind(this)},u["default"].createElement("span",{className:"glyphicon glyphicon-remove"}))),u["default"].createElement("div",{className:"pet-info media-body"},u["default"].createElement("div",{className:"pet-head"},u["default"].createElement("span",{className:"pet-name"},this.props.singleItem.petName),u["default"].createElement("span",{className:"apt-date pull-right"}," ",this.props.singleItem.aptDate)),u["default"].createElement("div",{className:"owner-name"},u["default"].createElement("span",{className:"label-item"},"Owner: "),this.props.singleItem.ownerName),u["default"].createElement("div",{className:"apt-notes"},this.props.singleItem.aptNotes)))}}]),t}(s.Component);c.propTypes={singleItem:u["default"].PropTypes.object.isRequired,whichItem:u["default"].PropTypes.object.isRequired,handleDelete:u["default"].PropTypes.func.isRequired},e.exports=c},254:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.SearchAppointments=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),u=r(s),c=t.SearchAppointments=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"handleSort",value:function(e){this.props.handleReOrder(e.target.id,this.props.orderDir)}},{key:"handleSortOrder",value:function(e){this.props.handleReOrder(this.props.orderBy,e.target.id)}},{key:"handleSearch",value:function(e){this.props.handleSearch(e.target.value)}},{key:"render",value:function(){return u["default"].createElement("div",{className:"row search-appointments"},u["default"].createElement("div",{className:"col-sm-offset-3 col-sm-6"},u["default"].createElement("div",{className:"input-group"},u["default"].createElement("input",{id:"SearchApts",onChange:this.handleSearch.bind(this),placeholder:"Search",type:"text",className:"form-control","aria-label":"Search Appointments"}),u["default"].createElement("div",{className:"input-group-btn"},u["default"].createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort by: ",u["default"].createElement("span",{className:"caret"})),u["default"].createElement("ul",{className:"dropdown-menu dropdown-menu-right"},u["default"].createElement("li",null,u["default"].createElement("a",{href:"#",id:"petName",onClick:this.handleSort.bind(this)},"Pet Name ","petName"===this.props.orderBy?u["default"].createElement("span",{className:"glyphicon glyphicon-ok"}):null)),u["default"].createElement("li",null,u["default"].createElement("a",{href:"#",id:"aptDate",onClick:this.handleSort.bind(this)},"Date ","aptDate"===this.props.orderBy?u["default"].createElement("span",{className:"glyphicon glyphicon-ok"}):null)),u["default"].createElement("li",null,u["default"].createElement("a",{href:"#",id:"ownerName",onClick:this.handleSort.bind(this)},"Owner ","ownerName"===this.props.orderBy?u["default"].createElement("span",{className:"glyphicon glyphicon-ok"}):null)),u["default"].createElement("li",{role:"separator",className:"divider"}),u["default"].createElement("li",null,u["default"].createElement("a",{href:"#",id:"asc",onClick:this.handleSortOrder.bind(this)},"Asc ","asc"===this.props.orderDir?u["default"].createElement("span",{className:"glyphicon glyphicon-ok"}):null)),u["default"].createElement("li",null,u["default"].createElement("a",{href:"#",id:"desc",onClick:this.handleSortOrder.bind(this)},"Desc ","desc"===this.props.orderDir?u["default"].createElement("span",{className:"glyphicon glyphicon-ok"}):null)))))))}}]),t}(s.Component);c.propTypes={handleReOrder:u["default"].PropTypes.func.isRequired,orderDir:u["default"].PropTypes.string.isRequired,orderBy:u["default"].PropTypes.string.isRequired},e.exports=c},255:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Booking=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),u=r(s),c=n(161),f=r(c),p=n(464),d=r(p),m=n(253),h=r(m),y=n(252),b=r(y),g=n(254),v=r(g),w={"interface":{border:"1px solid lightgray",borderRadius:"1rem",marginTop:"2rem",marginBottom:"2rem"}};t.Booking=function(e){function t(e,n){a(this,t);var r=o(this,Object.getPrototypeOf(t).call(this,e,n));return r.state={aptBodyVisible:!1,orderBy:"petName",orderDir:"asc",queryText:"",myAppointments:[]},r.toggleAddDisplay=r.toggleAddDisplay.bind(r),r.deleteMessage=r.deleteMessage.bind(r),r.addItem=r.addItem.bind(r),r.reOrder=r.reOrder.bind(r),r.searchApts=r.searchApts.bind(r),r}return l(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;f["default"].get("app/booking/booking.json").then(function(t){e.setState({myAppointments:t.data})})}},{key:"deleteMessage",value:function(e){var t=this.state.myAppointments,n=d["default"].without(t,e);this.setState({myAppointments:n})}},{key:"toggleAddDisplay",value:function(){var e=!this.state.aptBodyVisible;this.setState({aptBodyVisible:e})}},{key:"addItem",value:function(e){var t=this.state.myAppointments;t.push(e),this.setState({myAppointments:t})}},{key:"reOrder",value:function(e,t){this.setState({orderBy:e,orderDir:t})}},{key:"searchApts",value:function(e){this.setState({queryText:e})}},{key:"render",value:function(){var e=this,t=[],n=this.state.orderBy,r=this.state.orderDir,a=this.state.queryText,o=this.state.myAppointments;return o.forEach(function(e){e.petName.toLowerCase().indexOf(a.toLowerCase())===-1&&e.ownerName.toLowerCase().indexOf(a.toLowerCase())===-1&&e.aptDate.toLowerCase().indexOf(a.toLowerCase())===-1&&e.aptNotes.toLowerCase().indexOf(a.toLowerCase())===-1||t.push(e)}),t=d["default"].orderBy(t,function(e){return e[n].toLowerCase()},r),t=t.map(function(t,n){return u["default"].createElement(h["default"],{key:n,singleItem:t,whichItem:t,handleDelete:e.deleteMessage})}),u["default"].createElement("div",{style:w["interface"],className:"interface container"},u["default"].createElement(b["default"],{bodyVisible:this.state.aptBodyVisible,handleToggle:this.toggleAddDisplay,addApt:this.addItem}),u["default"].createElement(v["default"],{orderBy:this.state.orderBy,orderDir:this.state.orderDir,handleReOrder:this.reOrder,handleSearch:this.searchApts}),u["default"].createElement("ul",{className:"item-list media-list"},t))}}]),t}(s.Component)},256:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),u=r(s),c={footer:{padding:"1rem",fontSize:"1rem",backgroundColor:"#1f1f1f",textAlign:"center",color:"white"}};t.Footer=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return u["default"].createElement("footer",{className:"",style:c.footer},u["default"].createElement("div",{className:"container"},"Build with ♥ by  ",u["default"].createElement("a",{href:"https://github.com/smerth/yo-rainbow-react-booking-app"},"Smerth")))}}]),t}(s.Component)},257:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),u=r(s),c={header:{backgroundColor:"#1f1f1f"},title:{display:"inline","float":"left",fontSize:"1.5rem",margin:"1rem",color:"white"},link:{textAlign:"right",margin:"1rem",color:"white"}};t.Header=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return u["default"].createElement("header",{style:c.header},u["default"].createElement("div",{className:"container"},u["default"].createElement("div",{className:"col-xs-8",style:c.title},u["default"].createElement("h3",null,"React Demo: Appointment List")),u["default"].createElement("div",{style:c.link},u["default"].createElement("a",{href:"https://github.com/smerth/yo-rainbow-react-booking-app",target:"_blank"},"Github"))))}}]),t}(s.Component)},258:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Tech=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),u=r(s),c={tech:{height:"200px",marginBottom:"1em"},logo:{width:"5rem",height:"5rem","float":"right",margin:"0 0 .5rem .5rem"},h3:{}},f=t.Tech=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return u["default"].createElement("div",{className:"col-sm-4 col-md-3",style:c.tech},u["default"].createElement("img",{style:c.logo,src:this.props.tech.logo}),u["default"].createElement("h3",{style:c.h3},this.props.tech.title),u["default"].createElement("p",null,this.props.tech.text1),u["default"].createElement("p",null,this.props.tech.text2))}}]),t}(s.Component);f.propTypes={tech:u["default"].PropTypes.object.isRequired}},259:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Techs=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),u=r(s),c=n(161),f=r(c),p=n(258),d={container:{marginTop:"1rem"},h2:{fontWeight:300,fontSize:"1.5rem"},techs:{}};t.Techs=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.state={techs:[]},e}return l(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;f["default"].get("app/techs/techs.json").then(function(t){e.setState({techs:t.data})})}},{key:"render",value:function(){return u["default"].createElement("div",{className:"container",style:d.container},u["default"].createElement("h2",{style:d.h2},"Cooked with all these awesome technologies:"),u["default"].createElement("div",{className:"row",style:d.techs},this.state.techs.map(function(e,t){return u["default"].createElement(p.Tech,{key:t,tech:e})})))}}]),t}(s.Component)},260:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Title=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),u=r(s),c={title:{display:"flex",flexDirection:"column",alignItems:"center",padding:"1rem",backgroundColor:"#cf4646",color:"white"},h1:{fontWeight:300,fontSize:"4rem",margin:"1rem"},logo:{height:"12rem",backgroundColor:"white",borderRadius:"1rem",margin:"1rem"},h2:{fontWeight:300,fontSize:"2rem",margin:".5rem"},a:{fontWeight:"bold",color:"yellow"},about:{marginTop:"2em",columnCount:"2"}};t.Title=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return u["default"].createElement("div",{className:"component-title",style:c.title},u["default"].createElement("h1",{style:c.h1},"About this app"),u["default"].createElement("div",{className:"container",style:c.about},u["default"].createElement("p",null,"This app was built following the Lynda.com tutorial ",u["default"].createElement("a",{href:"https://www.lynda.com/React-js-tutorials/Building-Web-Interface-React-js/495271-2.html?srchtrk=index%3a1%0alinktypeid%3a2%0aq%3areact%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2"},'"Building a Web Interface with React.js"'),". However the build deviates from the tutorial at the outset by electing to use a Yeoman generator from FountainJS called ",u["default"].createElement("a",{href:"https://github.com/FountainJS/generator-fountain-react"},"generator-fountain-react"),"."),u["default"].createElement("p",null,"The Yeoman generator features a robust build process with a ton of features whereas the course code features a simple build process adequate to the needs of the course only. "),u["default"].createElement("p",null,"This deviation raised a lot issues since the course code build process is based on browerify while the fountain build is based on webpack.  Read more about this build ",u["default"].createElement("a",{href:"placeholder://www.later.com"},"here"),"."),u["default"].createElement("p",null,'A React component renders the "add an appointment" form and controls its visibility. A React component renders the search bar and the sort filter.  Another React component renders the list and the toggling of list items.'),u["default"].createElement("p",null,"Data loads from an external json file.  You can add appointments but with each page refresh the original json data re-loads."),u["default"].createElement("p",null,"Obviously to take this further requires user authentication and data persistance using your backend of choice. Also there is no form validation. And a Javascript solution for date and time pciking is necessary as the html date and time input only renders in Chrome."),u["default"].createElement("p",null,"But this demo is all about React...")))}}]),t}(s.Component)},261:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n(235);var a=n(7),o=r(a),l=n(237),i=r(l),s=n(238),u=n(234);n(236),i["default"].render(o["default"].createElement(s.Router,{history:s.browserHistory},o["default"].createElement(s.Route,{path:"/",component:u.Main})),document.getElementById("root"))}},[261]);