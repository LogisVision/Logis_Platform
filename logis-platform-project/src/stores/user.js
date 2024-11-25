import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
        isLogin: false,
        userData: {
          name: "",
          email: "",
        }
      }),
  getters: {
    getIsLogin() {
      return this.isLogin;
    },
    getUserData() {
      return this.userData;
    },
  },
  actions: {
    login(name, email) {
      this.isLogin = true;
      this.userData.name = name;
      this.userData.email = email;
    },
    logout() {
      this.isLogin = false;
      this.userData.name = "";
      this.userData.email = "";
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        key: 'user',
      },
    ],
  },
}
)
