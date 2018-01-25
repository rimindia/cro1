import { EnvConfig } from '../../../../tools/env/env-config.interface';

export const Config: EnvConfig = {
    BaseEndpoint: 'http://localhost:9090/',
    LoginEndpoint: 'http://localhost:9090/auth/login',
    LogoutEndpoint: 'http://localhost:9090/'
}; //JSON.parse('<%= ENV_CONFIG %>');


