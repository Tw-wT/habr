import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('321'),
        )).toEqual({ username: '321' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123'),
        )).toEqual({ password: '123' });
    });
});
