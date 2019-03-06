class CsrfToken {
    constructor(token) {
        this.token = token;
    }

    connect(axios) {
        axios.defaults.headers.common['RequestVerificationToken'] = this.token;
    }
}

class BearerToken {
    constructor(token) {
        this.token = token;
    }

    connect(axios) {
        axios.defaults.headers.common('Authorization') = `Bearer ${this.token}`;
    }
}

export { BearerToken, CsrfToken };