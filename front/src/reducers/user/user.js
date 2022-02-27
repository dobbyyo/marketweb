import produce from 'immer';
import faker from 'faker';
import {
  initialState,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from './userAction';

const dummyUser = (data) => ({
  ...data,
  nickname: faker.name.findName(),
  gender: faker.name.gender(),
  email: faker.internet.email(),
  username: faker.internet.userName(),
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [{ cickname: '도비' }, { nickname: '다민' }],
  Followers: [{ cickname: '도비' }, { nickname: '다민' }],
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // 로그인
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.loginError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.loginError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;