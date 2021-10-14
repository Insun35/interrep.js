import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

export default async function request(url: string, config?: AxiosRequestConfig): Promise<any> {
    const { data }: AxiosResponse<any> = await axios(url, config)

    return data?.data
}
