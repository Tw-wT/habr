import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginPassword,
} from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'asdasd',
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('asdasd');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
