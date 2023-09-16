// SPDX-License-Identifier: BUSL-1.1

pragma solidity 0.8.18;
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ACME is ERC20 {
    constructor() ERC20("ACME", "ACME") {}

    function mint(uint256 quantity) external {
        _mint(msg.sender, quantity);
    }
}