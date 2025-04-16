function pageLoad()
{
 document.getElementById("DepartmentSideBox").style.display = 'none';
 showDepartment();
    showStudent();
    console.log("ScriptV3.js has been loaded!");
}
function showStudent()
{
    document.getElementById("StudentSideBox").style.display = 'inline';
    document.getElementById("DepartmentSideBox").style.display = 'none';
}
function showDepartment()
{
    document.getElementById("StudentSideBox").style.display = 'none';
    document.getElementById("DepartmentSideBox").style.display = 'inline';
}
function transSelect(tranType)
{
    if(tranType=="deposit")
    {
        document.getElementById("msg").innerHTML ='Switched to Deposit History';;
        document.getElementById("historyDataDepositSection").style.display = 'inline';
        document.getElementById("historyDataExpenseSection").style.display = 'none';
    }  
    if(tranType=="expense")
    {
        document.getElementById("msg").innerHTML =  'Switched to Expenses History';
        document.getElementById("historyDataDepositSection").style.display = 'none';
        document.getElementById("historyDataExpenseSection").style.display = 'inline';    
    }
    tranType='';
}
function addRow(){
    const expTable = document.getElementById("historyDataDeposit").getElementsByTagName('tbody')[0];
    const newRow = expTable.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const depAmt = document.getElementById("depAmt");
    let d = Date(Date.now());
    let a = d.toString();
    cell1.innerHTML = a;
    cell2.innerHTML = "Deposit";
    cell3.innerHTML = "Net Banking";
    cell4.innerHTML = depAmt.value;
    const curBal = document.getElementById("stuBal").innerHTML;
    let newVal = parseInt(curBal) + parseInt(depAmt.value);
    document.getElementById("stuBal").innerHTML ="";
    document.getElementById("stuBal").innerHTML = newVal;
    depAmt.value= "";


}
