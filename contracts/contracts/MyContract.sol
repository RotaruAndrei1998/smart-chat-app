// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";


contract MyToken is
ERC721,
ERC721Enumerable,
ERC721URIStorage,
Pausable,
Ownable
{
    event NewMessageEvent(
        address from,
        uint256 timestamp,
        string message,
        string messageType
    );

    struct Message {
        address from;
        uint256 timestamp;
        string message;
        string messageType;
    }

    function getMessageType(uint8 _messageType)
    private
    view
    returns (string memory messageType)
    {
        if (_messageType == 0) {
            require(msg.value >= 0.0001 ether, "Not enought ether for mint");
            return "simple";
        }

        if (_messageType == 1) {
            require(msg.value >= 0.0005 ether, "Not enought ether for mint");
            return "medium";
        }
        require(msg.value >= 0.001 ether, "Not enought ether for mint");
        return "high";
    }

    Message[] messages;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Decentralized Chat", "DCC") {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function safeMint(address to, string memory name, string memory img) public payable {
        require(msg.value >= 0.001 ether, "Not enought ether for mint");
        require(balanceOf(msg.sender) == 0, "Already minted an NFT");


        string memory json = Base64.encode(bytes(string(abi.encodePacked('{"name": "', bytes(name),'", "image_data": "', bytes(img), '"}'))));
        string memory uri = string(abi.encodePacked('data:application/json;base64,', json));


        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);

        _setTokenURI(tokenId, uri);
    }

    function sendMessage(string memory _message, uint8 _messageType)
    public
    payable
    {
        require(
            balanceOf(msg.sender) == 1,
            "You are not authorized to send messages."
        );


        Message memory message = Message(
            msg.sender,
            block.timestamp,
            _message,
            getMessageType(_messageType)
        );
        messages.push(message);

        emit NewMessageEvent(
            msg.sender,
            block.timestamp,
            _message,
            getMessageType(_messageType)
        );
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) whenNotPaused {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId)
    internal
    override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721, ERC721URIStorage)
    returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC721Enumerable)
    returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function getMessages() public view returns (Message[] memory) {
        return messages;
    }
}
