import SoapLibrary from './soapWrapperLibrary'

class Dev {
    public static test () {
        const soap = new SoapLibrary('user', 'password')

        console.log(soap.fetchInfo('foo'))
        console.log(soap.postInfo('bar'))
    }
}

Dev.test()