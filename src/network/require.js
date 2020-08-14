import axios from 'axios'

export function requireURL(config) {

	const instance = axios.create({
		baseURL: 'http://152.136.185.210:8000/api/z8',
		timeout: 3000
	})

	//设置请求拦截器
	instance.interceptors.request.use(config => {
		return config
	}, error => {
		console.log(error);
	})

	//设置响应拦截器
	instance.interceptors.response.use(res => {
		return res.data
	}, error => {
		console.log(error);
	})

  return instance(config)
}

