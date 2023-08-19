
/* ===================== Withdraw ===================== */
document.getElementById("btn_withdraw").addEventListener("click", function(){
    const widhtdrawField = document.getElementById("withdraw");
    const newWithdrawAmount = widhtdrawField.value;

    const widhtdrawTotalElement = document.getElementById("withdraw_total");
    const prevWithdrawTotal = widhtdrawTotalElement.innerText;

    const currentWithdrawTotal = parseInt(prevWithdrawTotal) + parseInt(newWithdrawAmount);
    widhtdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById("balance_total");
    const prevBalanceATotal = balanceTotalElement.innerText;



    const newDepositTotal = prevBalanceATotal - newWithdrawAmount;
    balanceTotalElement.innerText = newDepositTotal;

    widhtdrawField.value = '';
});