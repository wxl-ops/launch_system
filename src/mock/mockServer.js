import Mock from "mockjs"
import data from "./data.json"

Mock.mock('/loginByPwd',{code:200,data:data.userInfo})