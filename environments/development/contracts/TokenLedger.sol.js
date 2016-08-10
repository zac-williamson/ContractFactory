// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_symbol","type":"bytes4"}],"name":"setTokensSymbol","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"_total","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"title","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_title","type":"bytes32"}],"name":"setTokensTitle","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes4"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"generateTokens","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":true,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}],
    binary: "60606040526104db806100126000396000f36060604052361561008d5760e060020a600035046301eff9f28114610095578063095ea7b3146100af57806318160ddd146100c757806323b872dd146100d55780634a79d50c146100f157806365c0f210146100fa57806370a082311461010557806395d89b4114610125578063a9059cbb14610134578063ca01ba391461014d578063dd62ed3e14610161575b6100ad610002565b6002805463ffffffff191660e060020a600435041790555b005b6100ad6004356024356000548111156101be57610002565b6000545b6060908152602090f35b6100ad6004356024356044358281806000141561021757610002565b6100cb60015481565b6004356001556100ad565b600160a060020a03600435166000908152600360205260409020546100cb565b61019260025460e060020a0281565b6100ad6004356024353381806000141561041257610002565b6100ad60043580600014156104a357610002565b600160a060020a036004803582166000908152602091825260408082206024359490941682529290915220546100cb565b7fffffffff00000000000000000000000000000000000000000000000000000000166060908152602090f35b33600160a060020a039081166000818152600460209081526040808320948716808452949091528120849055839291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906060a45050565b600160a060020a0382166000908152600360205260409020548190101561023d57610002565b604060002054818101101561025157610002565b8483806000141561026157610002565b600460209081526040600081812033600160a060020a031682529092529020548190101561028e57610002565b6004600050600083600160a060020a03168152602001908152602001600020600050600033600160a060020a0316815260200190815260200160002060005054816004600050600085600160a060020a03168152602001908152602001600020600050600033600160a060020a031681526020019081526020016000206000505401101561031b57610002565b846003600050600089600160a060020a03168152602001908152602001600020600082828250540392505081905550846003600050600088600160a060020a03168152602001908152602001600020600082828250540192505081905550846004600050600089600160a060020a03168152602001908152602001600020600050600033600160a060020a031681526020019081526020016000206000828282505403925050819055508486600160a060020a031688600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405180905060405180910390a450505050505050565b600160a060020a0382166000908152600360205260409020548190101561043857610002565b604060002054808201101561044c57610002565b6040600081812080548490039055600160a060020a03808716808352928220805485019055839291908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906060a450505050565b6000548101819010156104b557610002565b600080548201815533600160a060020a031681526003602052604090208054820190555056",
    unlinked_binary: "60606040526104db806100126000396000f36060604052361561008d5760e060020a600035046301eff9f28114610095578063095ea7b3146100af57806318160ddd146100c757806323b872dd146100d55780634a79d50c146100f157806365c0f210146100fa57806370a082311461010557806395d89b4114610125578063a9059cbb14610134578063ca01ba391461014d578063dd62ed3e14610161575b6100ad610002565b6002805463ffffffff191660e060020a600435041790555b005b6100ad6004356024356000548111156101be57610002565b6000545b6060908152602090f35b6100ad6004356024356044358281806000141561021757610002565b6100cb60015481565b6004356001556100ad565b600160a060020a03600435166000908152600360205260409020546100cb565b61019260025460e060020a0281565b6100ad6004356024353381806000141561041257610002565b6100ad60043580600014156104a357610002565b600160a060020a036004803582166000908152602091825260408082206024359490941682529290915220546100cb565b7fffffffff00000000000000000000000000000000000000000000000000000000166060908152602090f35b33600160a060020a039081166000818152600460209081526040808320948716808452949091528120849055839291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906060a45050565b600160a060020a0382166000908152600360205260409020548190101561023d57610002565b604060002054818101101561025157610002565b8483806000141561026157610002565b600460209081526040600081812033600160a060020a031682529092529020548190101561028e57610002565b6004600050600083600160a060020a03168152602001908152602001600020600050600033600160a060020a0316815260200190815260200160002060005054816004600050600085600160a060020a03168152602001908152602001600020600050600033600160a060020a031681526020019081526020016000206000505401101561031b57610002565b846003600050600089600160a060020a03168152602001908152602001600020600082828250540392505081905550846003600050600088600160a060020a03168152602001908152602001600020600082828250540192505081905550846004600050600089600160a060020a03168152602001908152602001600020600050600033600160a060020a031681526020019081526020016000206000828282505403925050819055508486600160a060020a031688600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405180905060405180910390a450505050505050565b600160a060020a0382166000908152600360205260409020548190101561043857610002565b604060002054808201101561044c57610002565b6040600081812080548490039055600160a060020a03808716808352928220805485019055839291908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906060a450505050565b6000548101819010156104b557610002565b600080548201815533600160a060020a031681526003602052604090208054820190555056",
    address: "",
    generated_with: "2.0.9",
    contract_name: "TokenLedger"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("TokenLedger error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("TokenLedger error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("TokenLedger error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("TokenLedger error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.TokenLedger = Contract;
  }

})();
