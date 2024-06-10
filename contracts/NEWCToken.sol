pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NEWCToken is ERC20 {
    uint8 private _decimals;

    constructor() ERC20("NewCoin", "NEWC") {
        _decimals = 8;

    }
    function decimals() public view override returns (uint8){
        return _decimals;
    }

    function mint (address account) public {
        _mint(account, 1*(10**uint256(_decimals)));
    }

}