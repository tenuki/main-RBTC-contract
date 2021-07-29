pragma solidity ^0.5.8;

import "moc-governance/contracts/Governance/Governor.sol";
import "moc-governance/contracts/Governance/ChangeContract.sol";

/**
 * @dev This contract is used to batch execute multiple changes
 * with MoC --- governance.
 */

contract BatchExecuteChange is ChangeContract {
  address[] public mocChangers;

  constructor(address[] memory _mocChangers) public {
    require(_mocChangers.length > 0, "No changers provided");
    mocChangers = _mocChangers;
  }

  function execute() external {
    for (uint256 i = 0; i < mocChangers.length; i++) {
        ChangeContract(mocChangers[i]).execute();
    }
  }

}
