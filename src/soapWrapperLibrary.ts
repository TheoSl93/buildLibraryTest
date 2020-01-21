import SoapLibraryClient from 'src/soapLibraryClient'
import SoapResponseType from 'types/soapResponseType'

class SoapWrapperLibrary {
    public client: SoapLibraryClient

    constructor (login: string, token: string) {
        this.client = new SoapLibraryClient(login, token)
    }

    public fetchInfo (info: string): SoapResponseType {
        return this.client.get(info)
    }
    public postInfo (info: string): SoapResponseType {
        return this.client.post(info)
    }
}