export class AuthService {
    isLogged = false;

    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLogged);
            }, 800)
        })

        return promise;
    }

    login() {
        this.isLogged = true;
    } 

    logout() {
        this.isLogged = false;
    }
}