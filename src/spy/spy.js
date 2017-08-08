export class Spy {
    constructor(name) {
        this.spy = name;
        this.secretKey = name;
    }

    tryCatchSpy(secretKey) {
        if (secretKey === this.secretKey) {
            this.catchSpy();
        }
    }

    catchSpy() {
        return 'catched';
    }

    getSecretKey() {
        return this.secretKey;
    }

    generateSecretKey() {
        this.secretKey = this.keyRandomizer();
    }

    keyRandomizer() {
        return 'dandelion';
    }
}
