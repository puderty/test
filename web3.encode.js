var web3 = new Web3(new Web3.providers.HttpProvider());
function encodeAbi(abi, method, params) {
    const contract = new web3.eth.Contract(abi);
    const res = contract.methods[method](params).encodeABI();
    return res;
}


encodeAbi([{"constant":true,"inputs":[{"name":"collection","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"amount","type":"uint256"}],"name":"calculateRoyaltyFeeAndGetRecipient","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    ,'calculateRoyaltyFeeAndGetRecipient',["0x60E4d786628Fea6478F785A6d7e704777c86a7c6", 6334, 10000])