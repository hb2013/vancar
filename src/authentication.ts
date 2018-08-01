
// Configure authentication. (Can be re-generated.)
import authentication from '@feathersjs/authentication';
import jwt from '@feathersjs/authentication-jwt';
import local from '@feathersjs/authentication-local';
import oauth2, { Verifier } from '@feathersjs/authentication-oauth2';
import GoogleStrategy from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';
import WechatStrategy from 'passport-wechat';
import GithubStrategy from 'passport-github';

import { Request,Response } from 'express';
class CustomVerifier extends Verifier {
  // The verify function has the exact same inputs and 
  // return values as a vanilla passport strategy
  verify(req:Request, accessToken:string, refreshToken:string, profile:string, done:Function) {
    // console.log(req);
    // console.log(accessToken);
    // console.log(refreshToken);
    console.log(profile);
    //console.log(done);
    done(null);
  }
}



import { App } from './app.interface';
// !code: imports // !end
// !code: init // !end

let moduleExports = function (app: App) {
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local());
  // !code: loc_1 // !end

  app.configure(oauth2(Object.assign({
    name: 'google',
    Strategy: GoogleStrategy
  }, config.google)));

  app.configure(oauth2(Object.assign({
    name: 'facebook',
    Strategy: FacebookStrategy
  }, config.facebook)));

  app.configure(oauth2(Object.assign({
    name: 'wechat',
    Strategy: WechatStrategy,
    Verifier: CustomVerifier
  }, config.wechat)));

  app.configure(oauth2(Object.assign({
    name: 'github',
    Strategy: GithubStrategy
  }, config.github)));

  // !code: loc_2 // !end

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies),
      ],
      remove: [
        authentication.hooks.authenticate('jwt'),
      ],
    },
  });
  // !code: func_return // !end
};

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
