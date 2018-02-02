/**
 * Created by rm on 2018/1/12.
 */
const CheckFamily = resolve => require(['@/pages/socialRelationship/checkFamily.vue'], resolve);
const FamilyFreem_cn = resolve => require(['@/pages/socialRelationship/familyFreem_cn.vue'], resolve);
const FamilyProtocol_cn = resolve => require(['@/pages/socialRelationship/familyProtocol_cn.vue'], resolve);
const AddAtaxia_cn = resolve => require(['@/pages/socialRelationship/addAtaxia_cn.vue'], resolve);
const FamilyFreem_ra = resolve => require(['@/pages/socialRelationship/familyFreem_ra.vue'], resolve);
const FamilyProtocol_ra = resolve => require(['@/pages/socialRelationship/familyProtocol_ra.vue'], resolve);
const AddAtaxia_ra = resolve => require(['@/pages/socialRelationship/addAtaxia_ra.vue'], resolve);
const FamilyFreem = resolve => require(['@/pages/socialRelationship/familyFreem.vue'], resolve);
const FamilyProtocol = resolve => require(['@/pages/socialRelationship/familyProtocol.vue'], resolve);
const SocialTransfer = resolve => require(['@/pages/socialRelationship/socialTransfer.vue'], resolve);
const TransferClassify = resolve => require(['@/pages/socialRelationship/transferClassify.vue'], resolve);
const AddAtaxia = resolve => require(['@/pages/socialRelationship/addAtaxia.vue'], resolve);
const FreemForHz = resolve => require(['@/pages/socialRelationship/freemForHz.vue'], resolve);
const TransfSucc = resolve => require(['@/pages/socialRelationship/transfSucc.vue'], resolve);
const TransfSchedule = resolve => require(['@/pages/socialRelationship/transfSchedule.vue'], resolve);
export default [
  {path: '/checkFamily',component: CheckFamily,name:'checkFamily',meta:{title:'选择成员',sign:'familyFreem',isHandle:'1'}},
  {path: '/familyFreem_cn',component: FamilyFreem_cn,name:'familyFreem_cn',meta:{title:'社保转移',sign:'familyFreem',isHandle:'1'}},
  {path: '/familyProtocol_cn',component: FamilyProtocol_cn,name:'familyProtocol_cn',meta:{title:'添加成员',sign:'familyFreem',isHandle:'1'}},
  {path: '/addAtaxia_cn',component: AddAtaxia_cn,name:'addAtaxia_cn',meta:{title:'添加成员',sign:'familyFreem',isHandle:'1'}},
  {path: '/familyFreem_ra',component: FamilyFreem_ra,name:'familyFreem_ra',meta:{title:'社保转移',sign:'familyFreem',isHandle:'1'}},
  {path: '/familyProtocol_ra',component: FamilyProtocol_ra,name:'familyProtocol_ra',meta:{title:'添加成员',sign:'familyFreem',isHandle:'1'}},
  {path: '/addAtaxia_ra',component: AddAtaxia_ra,name:'addAtaxia_ra',meta:{title:'添加成员',sign:'familyFreem',isHandle:'1'}},
  {path: '/familyFreem',component: FamilyFreem,name:'familyFreem',meta:{title:'家庭共济',sign:'familyFreem',isHandle:'1'}},
  {path: '/familyProtocol',component: FamilyProtocol,name:'familyProtocol',meta:{title:'添加成员',sign:'familyFreem',isHandle:'1'}},
  {path: '/socialTransfer',component: SocialTransfer,name:'socialTransfer',meta:{title:'社保转移',sign:'transferClassify',isHandle:'0'}},
  {path: '/transferClassify',component: TransferClassify,name:'transferClassify',meta:{title:'社保转移',sign:'transferClassify',isHandle:'0'}},
  {path: '/addAtaxia',component: AddAtaxia,name:'addAtaxia',meta:{title:'添加成员',sign:'familyFreem',isHandle:'1'}},
  {path: '/freemForHz',component: FreemForHz,name:'freemForHz',meta:{title:'社保转移',sign:'familyFreem',isHandle:'1'}},
  {path: '/transfSucc',component: TransfSucc,name:'transfSucc',meta:{title:'社保转移成功',sign:'transferClassify',isHandle:'0'}},
  {path: '/transfSchedule',component: TransfSchedule,name:'transfSchedule',meta:{title:'社保转移进度',sign:'transferClassify',isHandle:'0'}},
];
