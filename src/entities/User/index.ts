import { UserSchema, User } from './model/types/user';
import { userReducer, userActions } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData,
};
