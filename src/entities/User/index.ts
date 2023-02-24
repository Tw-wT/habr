import { UserSchema, User } from './model/types/user';
import { userReducer, userActions } from './model/slice/userSlice';

export {
    userReducer,
    userActions,
    User,
    UserSchema,
};
