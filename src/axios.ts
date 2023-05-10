import Axios, { AxiosInstance } from "axios";

let client: AxiosInstance

export function getAxios(): AxiosInstance {
	if (!client) {
		client = Axios.create({
			baseURL: 'http://localhost:3000',
		})
	}
	return client
}
