export class AuthService {
    isLogged = false;
    isUser = false;
    isAdmin = false;

    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLogged);
            }, 800)
        })

        return promise;
    }

    login() {
        this.isUser = true;
        this.isLogged = true;
    } 

    loginAdmin() {
        this.isAdmin = true;
        this.isLogged = true;
    } 

    logout() {
        this.isLogged = false;
        this.isUser = false;
        this.isAdmin = false;
    }
}