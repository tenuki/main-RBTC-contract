const testHelperBuilder = require('../mocHelper.js');

const BatchExecuteChange = artifacts.require('./BatchExecuteChange');

let mocHelper;
const zeroAddress = '0x0000000000000000000000000000000000000000';

contract('MoC: BatchExecuteChange', function([owner, userAccount, commissionsAccount]) {
  before(async function() {
    mocHelper = await testHelperBuilder({ owner });
    this.moc = mocHelper.moc;
    this.mockMocInrateChanger = mocHelper.mockMocInrateChanger;
    this.mockMocStateChanger = mocHelper.mockMocStateChanger;
    this.governor = mocHelper.governor;
  });

  beforeEach(async function() {
    await mocHelper.revertState();
  });

  it.only('Run Batch of changers', async function() {
    // Commission rates for test are set in functionHelper.js
    await this.mockMocInrateChanger.setCommissionRates(
      await mocHelper.getCommissionsArrayNonZero()
    );
    // set commissions address
    await this.mockMocInrateChanger.setCommissionsAddress(commissionsAccount);
    console.log('set commissions address');
    await this.governor.executeChange(this.mockMocInrateChanger.address);
    // Set MoCToken address to 0
    await this.mockMocStateChanger.setMoCToken(zeroAddress);
    console.log('set MoCToken address 0');
    await this.governor.executeChange(this.mockMocStateChanger.address);

    console.log('batchExecuteChange new');
    const batchExecuteChange = await BatchExecuteChange.new([
      this.mockMocInrateChanger.address,
      this.mockMocStateChanger.address
    ]);
    // update params
    console.log('execute batchExecuteChange');
    await this.governor.contract.methods
      .executeChange(batchExecuteChange.address)
      .call({ from: owner });
  });
});
