// Deposit and Withdraw //
document.getElementById("btn_deposit").addEventListener("click", function(){
    const depositField = document.getElementById("deposit");
    const newDepositAmount = depositField.value;


    const depositTotalElement = document.getElementById("deposit_total");
    const prevDepositTotal = depositTotalElement.innerText;


    const currewntTotalDeposit = parseInt(prevDepositTotal) + parseInt(newDepositAmount);
    depositTotalElement.innerText = currewntTotalDeposit;


    const totalBalanceElement = document.getElementById("balance_total");
    const prevTotalBalance = totalBalanceElement.innerText;

    const currenTotalBalance = parseInt(prevTotalBalance) + parseInt(newDepositAmount);
    totalBalanceElement.innerText = currenTotalBalance;


   

    depositField.value = '';
});



