/**
 * Created by rm on 2018/1/12.
 */
const Forecast = resolve => require(['@/pages/consulting/forecast.vue'], resolve);
const ForecastSec = resolve => require(['@/pages/consulting/forecastSec.vue'], resolve);
const Disease = resolve => require(['@/pages/consulting/disease.vue'], resolve);
const FefinedHerbs = resolve => require(['@/pages/consulting/refinedHerbs.vue'], resolve);
const DiseaseProfiles = resolve => require(['@/pages/consulting/diseaseProfiles.vue'], resolve);
const DrugProfiles = resolve => require(['@/pages/consulting/drugProfiles.vue'], resolve);
export default [
  {path: '/forecast',component: Forecast,name:'',title:''},
  {path: '/forecastSec',component: ForecastSec,name:'',title:''},
  {path: '/disease',component: Disease,name:'',title:''},
  {path: '/fefinedHerbs',component: FefinedHerbs,name:'',title:''},
  {path: '/diseaseProfiles',component: DiseaseProfiles,name:'',title:''},
  {path: '/drugProfiles',component: DrugProfiles,name:'',title:''},

];
