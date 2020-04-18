 /**
 * Created by Administrator on 2020/4/10.
 */
import {
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
} from './mutation-types'
 import {
 reqUser,
 reqLogout,
 }
 from '../api'
 //同步记录用户信息
 export default{
   recordUser ({commit},userInfo){
     commit(RECEIVE_USER_INFO,{userInfo})
   },
   //异步获取用户信息
   async getUserInfo({commit}){
      const result = await reqUser()
     if(result.code===0){
       const userInfo = result.data
       commit(RECEIVE_USER_INFO,{userInfo})
     }
   },
   //异步登出
   async logout({commit}){
      const result = await reqLogout()
     if(result.code===0){
       commit(RESET_USER_INFO)
     }
   },

 }

