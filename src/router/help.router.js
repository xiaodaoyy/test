/**
 * Created by rm on 2018/1/12.
 */
const HelpMenu = resolve => require(['@/pages/help/helpMenu.vue'], resolve);
const HelpInfo = resolve => require(['@/pages/help/helpInfo.vue'], resolve);
const HelpInfo2 = resolve => require(['@/pages/help/helpInfo2.vue'], resolve);
const HelpInfo3 = resolve => require(['@/pages/help/helpInfo3.vue'], resolve);
const HelpInfo4 = resolve => require(['@/pages/help/helpInfo4.vue'], resolve);
const HelpInfo5 = resolve => require(['@/pages/help/helpInfo5.vue'], resolve);
const HelpInfo6 = resolve => require(['@/pages/help/helpInfo6.vue'], resolve);
const HelpInfo7 = resolve => require(['@/pages/help/helpInfo7.vue'], resolve);
const HelpInfo8 = resolve => require(['@/pages/help/helpInfo8.vue'], resolve);
const HelpInfo9 = resolve => require(['@/pages/help/helpInfo9.vue'], resolve);
const HelpInfo10 = resolve => require(['@/pages/help/helpInfo10.vue'], resolve);
export default [
  {path: '/helpMenu',component: HelpMenu,name:'helpMenu',meta:{title:'帮助',sign:'helpMenu'}},
  {path: '/helpInfo',component: HelpInfo,name:'helpInfo',meta:{title:'帮助详情',sign:'helpMenu'}},
  {path: '/helpInfo2',component: HelpInfo2,name:'helpInfo2',meta:{title:'帮助详情',sign:'helpMenu'}},
  {path: '/helpInfo3',component: HelpInfo3,name:'helpInfo3',meta:{title:'帮助详情',sign:'helpMenu'}},
  {path: '/helpInfo4',component: HelpInfo4,name:'helpInfo4',meta:{title:'帮助详情',sign:'helpMenu'}},
  {path: '/helpInfo5',component: HelpInfo5,name:'helpInfo5',meta:{title:'帮助详情',sign:'helpMenu'}},
  {path: '/helpInfo6',component: HelpInfo6,name:'helpInfo6',meta:{title:'帮助详情',sign:'helpMenu'}},
  {path: '/helpInfo7',component: HelpInfo7,name:'helpInfo7',meta:{title:'帮助详情',sign:'helpMenu'}},
  {path: '/helpInfo8',component: HelpInfo8,name:'helpInfo8',meta:{title:'帮助详情',sign:'helpMenu'}},
  {path: '/helpInfo9',component: HelpInfo9,name:'helpInfo9',meta:{title:'帮助详情',sign:'helpMenu'}},
  {path: '/helpInfo10',component: HelpInfo10,name:'helpInfo10',meta:{title:'帮助详情',sign:'helpMenu'}},
];
