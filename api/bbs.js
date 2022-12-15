import Http from '@/utils/request.js'

//获取 帖子 
const getBbs =(data)=>{
	return Http.request({
		url:"/bbs",
		data
	})
}
//获取 帖子数据 
const getPostList =(data)=>{
	return Http.request({
		url:"/post/list",
		data
	})
}

// 喜欢 帖子 点赞 
const support =(data)=>{
	return Http.request({
		url:"/post/support",
		method:"POST",
		data
	})
}
// 取消帖子 
const unsupport =(data)=>{
	return Http.request({
		url:"/post/unsupport",
		method:"POST",
		data
	})
}
// 获取 详情 数据 
const getItme =(data)=>{
	return Http.request({
		url:"/post/read",
		data
	})
}


export default {
	getBbs,
	getPostList,
	support,
	unsupport,
	getItme
}