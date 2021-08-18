const utils = require('./utils');
const MoCToken = artifacts.require('./token/MoCToken.sol');

module.exports = async (deployer, currentNetwork) => {
  if (utils.isDevelopment(currentNetwork)) {
    await deployer.deploy(MoCToken);
  }
};
