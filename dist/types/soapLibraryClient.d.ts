import SoapResponseType from '@/types/soapResponseType';
declare class SoapLibraryClient {
    login: string;
    token: string;
    url: string;
    constructor(login: string, token: string);
    get(params: string): SoapResponseType;
    post(params: string): SoapResponseType;
}
export default SoapLibraryClient;
