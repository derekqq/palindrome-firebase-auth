interface IState<T> {
  [key: string]: T;
}

interface iUserAPI {}

interface IAuthUser {
  uid: string;
  email: string;
}

interface IAuthSliceState {
  isAuth: boolean;
  user: null | IAuthUser;
}

interface IPalindromeItem {
  sentence: string;
  isPalindrome: boolean;
}

interface IPalindromeSliceState {
  list: IPalindromeItem[];
}

export { IState, IAuthSliceState, IAuthUser, IPalindromeItem, IPalindromeSliceState };
