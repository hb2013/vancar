import { RequestHandler } from 'express';

// tslint:disable-next-line no-unused-variable
export default function (options: any = {}): RequestHandler {
  return function oauth(req, res, next) {
    // tslint:disable-next-line no-console
    console.log('oauth middleware is running');
    next();
  };
}
