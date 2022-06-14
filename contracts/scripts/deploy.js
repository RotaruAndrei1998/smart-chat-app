const hre = require("hardhat");

async function main(){

    // const [owner, test1, test2] = await hre.ethers.getSigners();
    const MyContract = await hre.ethers.getContractFactory("Greeter");
    const myContract = await MyContract.deploy();
    await myContract.deployed();
    console.log("Contract deployed at: ", myContract.address);
// console.log("start create account");
// console.log(owner)
//     const createAccount = await myContract.connect(owner).safeMint(owner.address, "Nume test", "not an image", {value: hre.ethers.utils.parseEther("0.001")});
//     console.log("stop create account");
//     console.log("start send message");
// try {
//     const sendMessage = await myContract.connect(owner).sendMessage("Mesaj de test", 0, {value: hre.ethers.utils.parseEther("0.0001")});
//     console.log("stop send message", sendMessage);
// } catch (e) {
//     console.log("error", e)
// }
//
//     const messages = await myContract.getMessages();
//     console.log(messages)
//     console.log("fetch accounts")
//     const accounts = await myContract.getAccounts();
//     console.log("fetched accounts: ", accounts)
//     const tokenData = await myContract.getTokenURI(0);
//     console.log("token Data: ", tokenData)

}




// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });