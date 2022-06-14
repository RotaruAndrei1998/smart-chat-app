// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function getBalance(address) {
  const balanceBigInt = await hre.waffle.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

async function printBalances(addresses) {
  let idx = 0;
  for (const address of addresses) {
    console.log(`Address ${idx} balance: `, await getBalance(address));
    idx++;
  }
}

async function main() {
  const [owner, person1, person2, person3] = await hre.ethers.getSigners();

  const MyContract = await hre.ethers.getContractFactory("MyToken");
  const myContract = await MyContract.deploy();
  await myContract.deployed();
  console.log("Contract deployed at: ", myContract.address);
  const addresses = [owner.address, person1.address, myContract.address];
  console.log("#### start ###");
  await printBalances(addresses);

  const createAccountValue1 = { value: hre.ethers.utils.parseEther("10") };
  await myContract
    .connect(person1)
    .safeMint(person1.address, "hahaha", createAccountValue1);
  console.log("### after ###");
  await printBalances(addresses);
  console.log("### messages ###");
  const results = await Promise.allSettled([
    myContract
      .connect(person1)
      .sendMessage("hahaha primul mesaj ba", 0, createAccountValue1),
    myContract
      .connect(person1)
      .sendMessage("hahaha, mesaj 2 ba", 2, createAccountValue1),
    myContract
      .connect(person1)
      .sendMessage("ce sa mai scriu si aici", 2, createAccountValue1),
    myContract
      .connect(person2)
      .sendMessage("ce sa mai scriu si aici", 2, createAccountValue1),
    myContract
      .connect(owner)
      .sendMessage("ce sa mai scriu si aici", 2, createAccountValue1),
  ]);

  await printBalances(addresses);
  console.log(await myContract.connect(owner).getMessages());
  console.log(results)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
