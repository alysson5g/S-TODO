import colors from 'colors/safe';

import { AppError, DefaultError } from '../class/Error';

function errorHandler(err, req, res, next) {
    const { message, status } = err;

    res.status = status || 500;
    console.log('enter on error', err);
    // res.json({ success: false, error: message });
    if (err instanceof AppError) {
        res.json({ success: false, error: message });
    } else {
        const defError = new DefaultError();
        res.json({ success: false, error: defError.message });
    }

    console.error();
    console.error(colors.red.bold('======================================'));
    console.error(colors.red.bold('app:error'), colors.yellow(message));
    console.error(colors.red.bold('app:stack'), colors.yellow(err.stack));
    console.error(colors.red.bold('======================================'));
    console.error();

    next();
}

export default errorHandler;
