export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return  new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000); // fake request time
    });
  }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }
}

