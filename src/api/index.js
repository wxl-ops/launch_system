import ajax from './ajax'
const BASE_URL = '/api'
// export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')
export const reqUserInfo = ()=>ajax("/loginByPwd")
export const reqStraffInfo = (searchInfo) => ajax(BASE_URL+'search',searchInfo)
/* 转正 */
/* 转正插入 */
export const reqInserEnt = (InserEntInfo) =>{
  console.log(InserEntInfo);
  return ajax('admin/ent/insertEnt',InserEntInfo)
} 
/* 转正编辑 */
export const reqEditEnt = (value) =>{
  console.log(value);
  return ajax('admin/ent/update',value)
} 
/* 转正查询 */
export const reqSearchEnt = (value) =>{
  console.log(value);
  return ajax('admin/ent/list',value)
} 
/* 导出转正 */
export const reqImportEnt = (value) =>{
  console.log(value);
  return ajax('admin/ent/update',value)
} 
/* 导入转正 */
export const reqExportEnt = (value) =>{
  console.log(value);
  return ajax('admin/ent/update',value)
} 



/* 入职表的所有请求 */
/* 查询总条数 */
export const reqSearchOnBoardingAll = () =>{
  return ajax(BASE_URL+'/staffOnBoarding/getTotal')
} 
/* 更新数据 */
export const reqUpdateOnBoarding = (value) =>{
  console.log(value);
  return ajax(BASE_URL+'/staffOnBoarding/update',value,"POST")
}
/* 入职插入 */
export const reqInserOnBoarding = (value) =>{
  console.log(value);
  return ajax(BASE_URL+'/staffOnBoarding/onBoarding',value,"POST")
} 
/* 查询全部并分页 */
export const reqSearchOnBoarding = (value) =>{
  console.log(value);
  return ajax(BASE_URL+'/empEntFormInfo/queryAll',value)
} 
/* 下载全部数据 */
export const reqDownloadAllOnBoarding = () =>{
  return ajax(BASE_URL+'/staffOnBoarding/downloadExcelOfALl')
} 
/* 下载当前页数据 */
export const reqDownloadTargetOnBoarding = () =>{
  return ajax(BASE_URL+'/staffOnBoarding/downloadExcelOfALl')
} 
/* 下载日期内数据 */
export const reqDownloadTimeOnBoarding = (value) =>{
  console.log(value);
  return ajax(BASE_URL+'/staffOnBoarding/downloadExcelOfALl',value)
} 

/* 入职上传 */
export const reqUploadOnBoarding = (value) =>{
  console.log(value);
  return ajax(BASE_URL+'/staffOnBoarding/upload',value,"POST")
} 


/* 转正表的所有请求 */
/* 查询总条数 */
export const reqSearchPositiveAll = () =>{
  return ajax(BASE_URL+'/staffPositiveList/getTotal')
} 
/* 更新数据 */
export const reqUpdatePositive = (value) =>{
  console.log(value);
  return ajax(BASE_URL+'/staffPositiveList/update',value,"POST")
}
/* 转正插入 */
export const reqInserPositive = (value) =>{
  console.log(value);
  return ajax(BASE_URL+'/staffPositiveList/toReg',value)
} 
/* 查询全部并分页 */
export const reqSearchPositive = (value) =>{
  console.log(value);
  return ajax(BASE_URL+'/staffPositiveList/queryAll',value)
} 
/* 转正全部数据 */
export const reqDownloadAllPositive= () =>{
  return ajax(BASE_URL+'/staffPositiveList/downloadExcelOfALl')
} 
/* 下载当前页数据 */
export const reqDownloadTargetPositive = () =>{
  return ajax(BASE_URL+'/staffPositiveList/downloadExcelOfALl')
} 
/* 下载日期内数据 */
export const reqDownloadTimePositive = (value) =>{
  console.log(value);
  return ajax(BASE_URL+'/staffPositiveList/downloadExcelOfALl',value)
} 
/* 转正上传 */
export const reqUploadPositive = (value) =>{
  console.log(value);
  return ajax(BASE_URL+'/staffPositiveList/upload',value,"POST")
} 
