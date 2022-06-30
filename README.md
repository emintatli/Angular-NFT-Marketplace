### Features

- You can upload pdf & images to ipfs from "/account/create" (pinata api)
- NFT creation
- NFT listing/delisting settings price

# BookNFT - PDF & Image Angular NFT Marketplace 

![Screenshot_5](https://user-images.githubusercontent.com/17429183/176722854-181e1409-ec13-4477-b3bc-5d9fecc078ba.png)

#### Contracts
- Contract files are inside "contract" folder.
**Deployed examples :**
https://mumbai.polygonscan.com/address/0x32e320b4961aff689273bc87727b2067f5142bde
https://mumbai.polygonscan.com/address/0x7b7eea90e9804c57073e50cf1a97f3ef2fc16a57

### Backend
https://github.com/emintatli/PDF-NFT-BE

### Setting up
- In "src/app/services/web.service.ts" you need to change
nftContractAddress & marketplaceContractAddress variables.
also you need to set up a pinata gateway and change pinataGateway variable
- In "src/app/services/api.service.ts" you need to change Backend api URL
- In "src\app\pages\account\create\create.component.html" you need to change 
"BE API URL HERE" (there are 2 of them) to your backend api URL
- You can edit** languages** in "src/app/services/translate.service.ts"
### Screenshots

![Screenshot_1](https://user-images.githubusercontent.com/17429183/176722952-a4f815d1-340e-4f9e-b9e8-ede34841dd77.png)
![Screenshot_2](https://user-images.githubusercontent.com/17429183/176722956-c2f021e5-5306-4711-8397-b432c935ca6d.png)
![Screenshot_3](https://user-images.githubusercontent.com/17429183/176722958-2dfc6457-dd8f-4917-a4c6-995ec8812b73.png)
![Screenshot_4](https://user-images.githubusercontent.com/17429183/176722961-e9b26565-ccf7-4858-8a4c-114a399b6749.png)


