const helloBlockchain = artifacts.require("Migrations");

module.exports = function(deployer) {
    deployer.deploy(helloBlockchain);
};