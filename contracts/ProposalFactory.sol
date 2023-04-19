// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0 <0.9.0;

contract ProposalFactory {

    mapping(address => bool) public allowedDAOs;
    bytes32 public proposalType;

    constructor(bytes32 _proposalType) {
        proposalType = _proposalType;
    }

    function allowDAO(address _daoAddress) public {
        allowedDAOs[_daoAddress] = true;
    }

    function disallowDAO(address _daoAddress) public {
        allowedDAOs[_daoAddress] = false;
    }

    function isDAOAllowed(address _daoAddress) public view returns (bool) {
        return allowedDAOs[_daoAddress];
    }

    function doAction(address _daoAddress) public virtual;
}