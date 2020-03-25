import SoapResponseType from '@/types/soapResponseType'
import { ResponseEnum } from '@/enums/ResponseEnum'

class SoapLibraryClient {
    public login: string
    public token: string
    public url: string

    constructor (login: string, token: string) {
        this.login = login
        this.token = token
        this.url = 'mySoapUrl'
    }

    public get(params: string): SoapResponseType {
        return { data: { response: this.url + params, status: ResponseEnum.ok } }
    }
    
    public post(params: string): SoapResponseType {
        return { data: { response:this.url + params, status: ResponseEnum.ok } }
    }
}

export default SoapLibraryClient