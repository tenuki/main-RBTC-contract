pragma solidity ^0.5.8;

import "moc-governance/contracts/Governance/Governor.sol";
import "moc-governance/contracts/Governance/ChangeContract.sol";

/**
 * @dev This contract is used to batch execute multiple changes
 * with MoC --- governance.
 */

contract BatchExecuteChange is ChangeContract {
  Governor public mocGovernor;
  address[] public mocChangers;

  constructor(Governor _mocGovernor, address[] memory _mocChangers) public {
    mocGovernor = _mocGovernor;
    mocChangers = _mocChangers;
  }

  function execute() external {
    for (uint256 i = 0; i < mocChangers.length; i++) {
            mocGovernor.executeChange(ChangeContract(mocChangers[i]));
        }
  }

}
