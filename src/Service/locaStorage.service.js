/* eslint-disable no-useless-constructor */
class LocalStorageKey {
  TOKEN_ADMIN = "TOKEN_ADMIN";

  USER_LOGIN = "USER_INFOR";
}

class BaseStorage {
  key;

  constructor(_key) {
    this.key = _key;
  }

  set = (value) => {
    const dataString = JSON.stringify(value);
    localStorage.setItem(this.key, dataString);
  };

  get = () => {
    const dataString = localStorage.getItem(this.key);
    if (dataString !== "undefined") {
      return JSON.parse(dataString);
    } else return null;
  };

  remove = () => {
    localStorage.removeItem(this.key);
  };
}

class LocalStorageService extends LocalStorageKey {
  constructor() {
    super();
  }

  clearLocalStorage = () => {
    localStorage.clear();
  };
  /**
   * access token storage
   */

  tokenAdmin = new BaseStorage(this.TOKEN_ADMIN);

  userLogin = new BaseStorage(this.USER_LOGIN);
}

const localStorageServ = new LocalStorageService();

export default localStorageServ;
