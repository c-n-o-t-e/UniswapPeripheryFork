async function main() {
  const UniswapV2Router02 = await ethers.getContractFactory("UniswapV2Router02");
  const uniswapV2Router02 = await UniswapV2Router02.deploy('0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512','0x2AF142784eD8f0ED17101bb091D58519560825e3');

  console.log("UniswapV2Router02 deployed to:", uniswapV2Router02.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

