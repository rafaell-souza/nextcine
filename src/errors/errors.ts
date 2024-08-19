export class ErrorsHandler extends Error {
    status: number;
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export class BadRequest extends ErrorsHandler {
    constructor(message: string) {
        super(400, message);
    }
}
export class Unauthorized extends ErrorsHandler {
    constructor(message: string) {
        super(401, message);
    }
}
export class Forbidden extends ErrorsHandler {
    constructor(message: string) {
        super(403, message);
    }
}
export class NotFound extends ErrorsHandler {
    constructor(message: string) {
        super(404, message);
    }
}
export class Conflict extends ErrorsHandler {
    constructor(message: string) {
        super(409, message);
    }
}