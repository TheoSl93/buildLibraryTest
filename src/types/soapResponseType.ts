import { ResponseEnum } from '@/enums/ResponseEnum'

declare type SoapResponseType = {
    data: {
        response: string,
        status: ResponseEnum,
    }
}

export default SoapResponseType;