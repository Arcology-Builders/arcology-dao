// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";

contract ArcologyHouseToken is ERC20, ERC20Mintable {
    // ... see "Tokens" for more info
}

contract MyCrowdsale is Crowdsale, MintedCrowdsale {
    constructor(
        uint256 rate,    // rate in TKNbits
        address payable wallet,
        IERC20 token
    )
        MintedCrowdsale()
        Crowdsale(rate, wallet, token)
        public
    {

    }
}

contract ArcologyCrowdsaleDeployer {
    constructor()
        public
    {
        // create a mintable token
        ERC20Mintable token = new ArcologyHouseToken();

        // create the crowdsale and tell it about the token
        Crowdsale crowdsale = new MyCrowdsale(
            1,               // rate, still in TKNbits
            msg.sender,      // send Ether to the deployer
            token            // the token
        );
        // transfer the minter role from this contract (the default)
        // to the crowdsale, so it can mint tokens
        token.addMinter(address(crowdsale));
        token.renounceMinter();
    }
}