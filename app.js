const calculateExpence = document.getElementById("calculate-btn");

// input in the form


calculateExpence.addEventListener('click', function(event){
    
    let income = document.getElementById("income-input").value;
   

    let food = document.getElementById("food-input").value;

    let rent = document.getElementById("rent-input").value;
    let clothes = document.getElementById("cloth-input").value;

    const totalExpence = document.getElementById("totalExp");
    const expence =  parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    totalExpence.innerText = parseFloat(expence);

    const balance = document.getElementById("balance_rest")
    const totalbalances = parseFloat(income) - (parseFloat(food) +  parseFloat(rent) + parseFloat(clothes));
    balance.innerText = parseFloat(totalbalances);

    const savings = document.getElementById("save-btn");
    savings.addEventListener('click', function(event){
        if(savings < 0){
           return alert " please put a positive number."
        }
        const savingAmount = document.getElementById("inputSave").value;
         const savingMoney= parseFloat((savingAmount * totalbalances )/ 100)

        const remainingBalance = document.getElementById("rest-balance").innerText;

        const remainingBalance = parseFloat(totalbalances - savingMone)

       

    })
   
    

    

})