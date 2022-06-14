const InfoSection = ({connectToContract}) => {
return <div className="h-full w-full flex flex-col justify-center">
    <div className="flex">
    <div className="flex flex-col bg-[F2F2F2] p-2 m-auto">
        <div className="flex text-3xl m-auto">Smart chat app</div>
        <div className="flex text-2xl">How to use this app: </div>
        <div className="flex">1. Connect to GOERLI test net with RPC: https://eth-goerli.alchemyapi.io/v2/EYXr7BRGjfkGuCfP5KLmEKCDE-6euHYB</div>
        <div className="flex">2. Add some ETH to your account using: https://goerlifaucet.com/ </div>
        <div className="flex">3. If you want to send messages you need to create an account using the form from the right side (0.001 ETH)</div>
        <div className="flex">4. Type a message and press send (normal - 0.0001 ETH | medium - 0.0005 ETH | high - 0.001 ETH)</div>
        <button className="btn m-auto mt-5" onClick={connectToContract}>Connect to contract</button>
    </div>
    </div>

</div>
}

export default  InfoSection;