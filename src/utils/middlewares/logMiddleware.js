const logMiddleware = (request, response, next) => {
    const date = new Date();
    const log = `[${date.getDate()}/${date.getMonth()+1} - ${date.getHours()}:${date.getMinutes()}] -> [${request.method}]:${request.ip}`
    console.log(log);
    next();
}

module.exports = logMiddleware;