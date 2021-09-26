# SolidityBoilerplate
Dummy solidity boilerplate

- Installing components:
npm install

- Configuring the .env file:
go to ethereum/ folder and create .env file.
open it and write down this:
MNEMONIC = "[SEED]"
PROVIDER_URL = "[INFURA_URL]"

replace [SEED] with the mnemonic seed of the account which will be the owner of the deployed contract.
replace [INFURA_URL] with the infura link (create an account on infura.io, then create project and copy and paste the rinkeby provider url)

- Compiling
When you modify the .sol contract, then you need to update the json interfaces for the frontend. To do that you have to the file ethereum/compile.js and set generateFolder = true
then save and run the following command on terminal:
node compile.js

- Deploying
If you want to deploy the contract on the blockchain run the following command on terminal:
node deploy.js

then copy the address you see in the output console and add it to the .env file like so:
CONTRACT_ADDRESS = "[ADDRESS]"
replace [ADDRESS] with your address.

- Launching tests:
npm run test
