import { EnvConfig } from '../../../../tools/env/env-config.interface';


export const Config: EnvConfig = {
    BaseEndpoint: 'http://192.168.2.83:9090/',
    LoginEndpoint: 'http://192.168.2.83:9090/auth/login',
    LogoutEndpoint: 'http://192.168.2.83:9090/'
}; //JSON.parse('<%= ENV_CONFIG %>');

