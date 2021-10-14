class AppError extends Error {
    constructor(message, status) {
        super(message);

        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.status = status || 500;
    }
}

class DefaultError extends AppError {
    constructor() {
        super('Algo deu errado.', 500);
    }
}

class GenericError extends AppError {
    constructor(message) {
        super(message, 400);
    }
}

class NotFoundError extends AppError {
    constructor(message) {
        super(message, 400);
    }
}

export { AppError, DefaultError, GenericError, NotFoundError };
