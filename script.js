const planSelector = document.querySelectorAll(".plans");


console.log("Hello World!", planSelector); 

planSelector.forEach((planSelector)=>{
 planSelector.addEventListener("click", (event)=>{
    //console.log("event")

    if(event.target.checked && event.target.value==="annual-plan-select")   {
        //{console.log("Annual Plan Selected");

        document.querySelector(".plan-type-description").innerHTML  = "Annual Plan";
        document.querySelector(".plan-type-ammount").innerHTML  = "$299.40";
        document.querySelector(".billing-period").innerHTML  = "Billed every year.";
    }
    if(event.target.checked && event.target.value==="monthly-plan-select") {  
        //{console.log("Monthly Plan Selected");

        document.querySelector(".plan-type-description").innerHTML  = "Monthly Plan";
        document.querySelector(".plan-type-ammount").innerHTML  = "$29.99";
        document.querySelector(".billing-period").innerHTML  = "Billed every month.";
        document.querySelector(".billing-ammount").innerHTML  = "$29.99";
     }
    });
});

//Checkout

document.querySelector(".checkout-btn").onclick = () => {
    document.querySelector(".title").innerHTML = "Checkout Successful!";
    
    // Use backticks (`) instead of single quotes (')
    document.querySelector('.container').innerHTML = `
        <div class="success-container">
            <div class="success-icon">
            &#10004;
        </div> 
        <h1>Thanks for your purchase!</h1>
        <button class="back-btn" onclick="location.reload()">Go Back</button>
        </div>
    `;
};