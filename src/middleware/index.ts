
// Configure middleware. (Can be re-generated.)
import { App } from '../app.interface';

import oauth from './oauth';
// !code: imports // !end
// !code: init // !end

// tslint:disable-next-line no-unused-variable
let moduleExports = function (app: App) {
  // !code: func_init // !end
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  // Your middleware should include:
  //   app.use(oauth());
  // !<DEFAULT> code: middleware
  app.use(oauth());
  // !end
  // !code: func_return // !end
};

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
