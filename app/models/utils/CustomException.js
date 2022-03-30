class CustomException extends Error {
    constructor(status, title, message) {
        super(message)
        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name
        this.status = status;
        this.title = title;
    }
}

module.exports = CustomException 