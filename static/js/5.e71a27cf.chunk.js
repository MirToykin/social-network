(this["webpackJsonpreact-it-kam-1"]=this["webpackJsonpreact-it-kam-1"]||[]).push([[5],{509:function(e,t,n){"use strict";n.r(t);var a=n(120),r=n(57),o=n(495),s=n(496),l=n(497),i=n(0),c=n.n(i),u=n(23),g=n(221),m=n(11),p=n(61),f=n(468),h=n(507),d=n(429),b=Object(f.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(2)},ul:{justifyContent:"center"}}}})),w=Object(d.a)({ul:{justifyContent:"center"}})(h.a);function E(e){var t=e.totalCount,n=e.pageSize,a=e.currentPage,r=e.handlePageNumClick,o=b(),s=Math.ceil(t/n);return c.a.createElement("div",{className:o.root},c.a.createElement(w,{siblingCount:5,count:s,page:a,onChange:r}))}var P=n(431),C=n(506),j=n(26),O=n(434),k=n(505),v=n(504),F=n(488),y=n(165),I=n(472),N=n(485),S=n(49),z=n(156),U=n.n(z),D=n(56),x=n.n(D),T=Object(f.a)((function(e){return{inline:{display:"inline"},avatar:{width:e.spacing(9),height:e.spacing(9)},listItemText:{marginLeft:e.spacing(3)}}}));function q(e){var t=e.followed,n=e.isFollowingInProgress,a=e.unfollow,r=e.follow,o=e.id,s=e.smallPhoto,l=e.name,u=e.status,g=T(),m=Object(i.useState)(null),p=Object(j.a)(m,2),f=p[0],h=p[1],d=Boolean(f),b=function(){h(null)};return c.a.createElement(O.a,{alignItems:"center"},c.a.createElement(v.a,null,c.a.createElement(I.a,{edge:"end",className:g.menuButton,onClick:function(e){h(e.currentTarget)}},c.a.createElement(F.a,{src:s||x.a,alt:l,className:g.avatar})),c.a.createElement(U.a,{anchorEl:f,anchorOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:b},t?c.a.createElement(N.a,{disabled:n.some((function(e){return e===e})),onClick:function(){return function(e){a(e),b()}(o)}},"Unfollow"):c.a.createElement(N.a,{disabled:n.some((function(e){return e===e})),onClick:function(){return function(e){r(e),b()}(o)}},"Follow"),c.a.createElement(N.a,{onClick:b,component:S.b,to:"/profile/".concat(o)},"Go to account"))),c.a.createElement(k.a,{className:g.listItemText,primary:c.a.createElement(y.a,{color:"primary"},l),secondary:c.a.createElement(y.a,{color:"textPrimary"},u||"No status")}))}var B=n(474),J=n(239),M=n(510),G=function(e){var t=Object(f.a)((function(e){return{list:{width:"100%",backgroundColor:e.palette.background.paper,borderRadius:4},inline:{display:"inline"},grid:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}}}))();return c.a.createElement("div",{className:t.usersContainer},c.a.createElement(E,{totalCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,handlePageNumClick:e.handlePageNumClick}),c.a.createElement(B.a,{container:!0,justify:"center",spacing:3,className:t.grid},c.a.createElement(B.a,{item:!0,xs:12,sm:6,md:5},c.a.createElement(J.a,null,c.a.createElement(P.a,{className:t.list},e.isFetching?c.a.createElement(p.a,null):null,e.users.map((function(t,n){var a;return c.a.createElement(i.Fragment,{key:t.id},c.a.createElement(q,(a={id:t.id,status:t.status,name:t.name,smallPhoto:t.photos.small,followed:t.followed},Object(m.a)(a,"status",t.status),Object(m.a)(a,"follow",e.follow),Object(m.a)(a,"unfollow",e.unfollow),Object(m.a)(a,"isFollowingInProgress",e.isFollowingInProgress),Object(m.a)(a,"toggleIsFollowingInProgress",e.toggleIsFollowingInProgress),a)),n!==e.users.length-1&&c.a.createElement(C.a,{variant:"middle",component:"li"}))}))))),c.a.createElement(M.a,{xsDown:!0},c.a.createElement(B.a,{item:!0,sm:6,md:7},c.a.createElement(J.a,null,c.a.createElement(y.a,{variant:"h6",color:"secondary",align:"center"},"Some content"))))),c.a.createElement(E,{totalCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,handlePageNumClick:e.handlePageNumClick}))},L=n(19),R=function(e){return e.users.usersData},A=function(e){return e.users.totalUsersCount},H=function(e){return e.users.pageSize},K=function(e){return e.users.currentPage},Q=function(e){return e.users.isFetching},V=function(e){return e.users.isFollowingInProgress},W=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.requestUsersData(this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return c.a.createElement(G,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,handlePageNumClick:this.props.requestUsersData,isFetching:this.props.isFetching,isFollowingInProgress:this.props.isFollowingInProgress})}}]),t}(c.a.Component);t.default=Object(L.compose)(Object(u.b)((function(e){return{users:R(e),totalUsersCount:A(e),pageSize:H(e),currentPage:K(e),isFetching:Q(e),isFollowingInProgress:V(e)}}),(function(e){return{follow:function(t){e(Object(g.b)(t))},unfollow:function(t){return e(Object(g.d)(t))},requestUsersData:function(t,n){return e(Object(g.c)(t,n))}}})))(W)}}]);
//# sourceMappingURL=5.e71a27cf.chunk.js.map