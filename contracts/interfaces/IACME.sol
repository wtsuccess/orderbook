// SPDX-License-Identifier: MIT

pragma solidity 0.8.18;

interface IACME {
    function isBlacklisted(address _user) external view returns (bool);
    function setBlacklist(address _user) external; 
    function setWhitelist(address _user) external;
}