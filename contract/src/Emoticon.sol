// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.5.0
pragma solidity ^0.8.27;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {ERC721Pausable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract Emoticon is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Pausable, Ownable {
    uint256 private _nextTokenId;
    string baseURI;
    string public baseExtension = ".json";
    uint256 public cost;
    uint256 public maxSupply;
    uint256 public maxMintAmount = 1;
    uint256 public timeDeployed;
    uint256 public allowMintingAfter = 0;
    bool public isPaused = false;
    bool public isRevealed = true;
    string public notRevealedUri;

    constructor(
        address initialOwner,
        string memory _name,
        string memory _symbol,
        uint256 _cost,
        uint256 _maxSupply,
        uint256 _allowMintingOn,
        string memory _initBaseURI,
        string memory _initNotRevealedUri
    ) ERC721(_name, _symbol) Ownable(initialOwner) {
        if (_allowMintingOn > block.timestamp) {
            allowMintingAfter = _allowMintingOn - block.timestamp;
        }

        cost = _cost;
        maxSupply = _maxSupply;
        timeDeployed = block.timestamp;

        setBaseURI(_initBaseURI);
        setNotRevealedURI(_initNotRevealedUri);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/bafybeihvpqnjoyy72jcwa5nagc5zt3re46h7og4ymqjm2slrs7a6mnawga/";
    }

    function safeMint(address to, string memory uri) public onlyOwner returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        return tokenId;
    }

    function getSecondsUntilMinting() public view returns (uint256) {
        if (block.timestamp < timeDeployed + allowMintingAfter) {
            return (timeDeployed + allowMintingAfter) - block.timestamp;
        } else {
            return 0;
        }
    }

    function setIsRevealed(bool _state) public onlyOwner {
        isRevealed = _state;
    }

    function setCost(uint256 _newCost) public onlyOwner {
        cost = _newCost;
    }

    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }

    function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
        notRevealedUri = _notRevealedURI;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
        baseExtension = _newBaseExtension;
    }

    // The following functions are overrides required by Solidity.
    //
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable, ERC721Pausable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value) internal override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
