const App = {
  async load() {
    await this.loadWeb3();
    await this.loadAccount();
    await this.loadContract();
    this.setupSubmitButton();
  },

  async loadWeb3() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } catch (error) {
        console.error('User denied account access');
      }
    } else if (typeof window.web3 !== 'undefined') {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.error('No Ethereum provider detected');
    }
  },

  async loadAccount() {
    const accounts = await window.web3.eth.getAccounts();
    if (accounts.length > 0) {
      this.account = accounts[0];
      $('.acc').attr('placeholder', this.account);
    } else {
      console.error('No accounts found');
    }
  },

  async loadContract() {
    this.contract = new window.web3.eth.Contract(abi, address);
  },

  async giveLoan() {
    const amount = $('#loanAmnt').val();
    const interest = $('#intrst').val();
    const proposalID = new URLSearchParams(window.location.search).get('borrower');

    try {
      const acceptedProposal = await this.contract.methods
        .acceptProposal(amount, interest, proposalID)
        .send({ from: this.account, gas: 3000000, gasPrice: 1000000000 });
      console.log('Loan given:', acceptedProposal);
    } catch (error) {
      console.error('Error giving loan:', error);
    }
  },

  setupSubmitButton() {
    $('#submit').on('click', (e) => {
      e.preventDefault();
      this.giveLoan();
    });
  },
};

$(document).ready(() => {
  App.load();
});
