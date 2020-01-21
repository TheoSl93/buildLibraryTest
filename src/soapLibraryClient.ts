import SoapResponseType from 'types/soapResponseType'

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
        return { data: { response: this.url + params } }
    }
    
    public post(params: string): SoapResponseType {
        return { data: { response:this.url + params } }
    }
}

export default SoapLibraryClient