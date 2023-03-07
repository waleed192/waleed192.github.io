class Account {
    constructor(name, deposit) {
        this.name = name;
        this.balance = deposit;
    }
    static accountInfoList = [];
}

var isDeposit = false;


function createAccHandler() {
    var name = document.getElementById('txt_accName').value;
    var deposit = document.getElementById('txt_deposit').value;
    var errors = '';
    if (name == '' || name == null) errors += 'Name must not be empty \n';
    if (deposit == '' || deposit == null) errors += 'Deposit must not be empty \n';
    if (Number(deposit) <= 0) errors += 'Deposit must be more than 0 \n';

    if (errors == '') {
        var newAccount = new Account(name, deposit);
        Account.accountInfoList.push(newAccount);
        publishTextAreaAccountsList();
        alert('Account Saved successfully');
        document.getElementById('txt_accName').value = '';
        document.getElementById('txt_deposit').value = '';
    }
    else {
        alert(errors);
    }
}

function publishTextAreaAccountsList() {
    var result = '';
    for (let i = 0; i < Account.accountInfoList.length; i++) {
        result += 'Account Name : ' + Account.accountInfoList[i].name + ' Balance : ' + Account.accountInfoList[i].balance + '\n';
    }
    document.getElementById('txt_accountsList').value = result;

}

function publishSelectAccountsList() {
    var selectList = document.getElementById("sel_account");

    clearOptions(selectList);

    for (let i = 0; i < Account.accountInfoList.length; i++) {
        var option = document.createElement("option");
        option.text = Account.accountInfoList[i].name;
        option.value = Account.accountInfoList[i].name;
        selectList.add(option);
    }

}

function clearOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
}


const openModal = function (deposit) {
    isDeposit = deposit;
    publishSelectAccountsList();
    document.getElementById('btn_submit').value = (isDeposit) ? ' Deposit' : ' Debit';
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
};


function closeModal() {
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
    document.getElementById('txt_amount').value='';
    publishTextAreaAccountsList();
}


function addEventshandlers() {
    document.getElementById('btn_deposit').addEventListener("click", openModal);
    document.querySelector(".btn-close").addEventListener("click", closeModal);
    document.querySelector(".overlay").addEventListener("click", closeModal);

}


function debitDepositHandler() {

    var name = document.getElementById('sel_account').value;
    var amount = document.getElementById('txt_amount').value;
    var errors = '';
    if (amount == '' || amount == null) errors += 'Amount must not be empty \n';
    if (Number(amount) <= 0) errors += 'Amount must be more than 0 \n';

    if (errors == '') {
        var i = Account.accountInfoList.findIndex((x) => x.name == name);
        if (isDeposit) {
            Account.accountInfoList[i].balance =Number(Account.accountInfoList[i].balance) + Number(amount);
            closeModal();
        }
        else {
            if (amount > Account.accountInfoList[i].balance) alert('not enough balance');
            else {
                Account.accountInfoList[i].balance = Number(Account.accountInfoList[i].balance) - Number(amount);
                closeModal();
            }
        }
    }
    else {
        alert(errors);
    }


}


window.addEventListener('load', addEventshandlers, false);