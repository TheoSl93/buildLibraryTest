import SoapLibraryClient from '@/soapLibraryClient';
import SoapResponseType from '@/types/soapResponseType';
declare class SoapWrapperLibrary {
    client: SoapLibraryClient;
    constructor(login: string, token: string);
    fetchInfo(info: string): SoapResponseType;
    postInfo(info: string): SoapResponseType;
}
export default SoapWrapperLibrary;
