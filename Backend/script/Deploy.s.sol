// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/PayrollManager.sol";
import "../src/EmployeeRegistry.sol";

/**
 * @title Deploy
 * @dev Deployment script for USDC Payroll System
 */
contract Deploy is Script {
    // Arc Network USDC address (placeholder - replace with actual)
    address constant USDC_ADDRESS = 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913;
    
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address deployer = vm.addr(deployerPrivateKey);
        
        console.log("Deploying contracts...");
        console.log("Deployer address:", deployer);
        console.log("USDC address:", USDC_ADDRESS);
        
        vm.startBroadcast(deployerPrivateKey);

        // Deploy EmployeeRegistry first
        EmployeeRegistry employeeRegistry = new EmployeeRegistry(deployer);
        console.log("EmployeeRegistry deployed at:", address(employeeRegistry));

        // Deploy PayrollManager
        PayrollManager payrollManager = new PayrollManager(
            USDC_ADDRESS,
            address(employeeRegistry),
            deployer
        );
        console.log("PayrollManager deployed at:", address(payrollManager));

        vm.stopBroadcast();

        // Log deployment info
        console.log("=== Deployment Summary ===");
        console.log("EmployeeRegistry:", address(employeeRegistry));
        console.log("PayrollManager:", address(payrollManager));
        console.log("Admin:", deployer);
        console.log("USDC Token:", USDC_ADDRESS);
    }
}
