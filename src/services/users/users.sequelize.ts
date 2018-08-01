
/* tslint:disable:quotemark */
// Defines Sequelize model for service `users`. (Can be re-generated.)
import merge from 'lodash.merge';
import Sequelize, { DefineAttributes } from 'sequelize';
// tslint:disable-next-line no-unused-variable
const DataTypes = (Sequelize as any).DataTypes as Sequelize.DataTypes;
// !code: imports // !end
// !code: init // !end

// Your model may need the following fields:
//   email:      { type: DataTypes.STRING, allowNull: false, unique: true },
//   password:   { type: DataTypes.STRING, allowNull: false },
//   googleId:   { type: DataTypes.STRING },
//   facebookId: { type: DataTypes.STRING },
//   githubId:   { type: DataTypes.STRING },
let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    identity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wechatId: {
      type: DataTypes.STRING,
      allowNull: true
    }
  } as DefineAttributes,
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
