// declaring all objects
var price , crust_price, topping_price ;
    let total = 0;
    function Getpizza(size,crust,topping, total ){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}

// submit button
$(document).ready(function(){
    $("button.submit").click(function(event){
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name='toppings']:checked"), function(){ 
    ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));

    // manulating size inputs
    switch(psize){
    case "0":
    price =0;
    break;
    case "large":
    price = 1500;
    console.log(price);
    break;
    case "medium":
    price = 700;
    console.log("The price is "+price);
    break;
    case "small":
    price = 400;
    console.log(price);
    default:
    console.log("error"); 
    }

    // manupulating crust inputs
    switch(pcrust){
    case "0":
    crust_price = 0;
    break;
    case "Crispy":
    crust_price = 180;
    break;
    case "Stuffed":
    crust_price = 150;
    break;
    case "Gluten-free":
    crust_price = 100;
    break;
    default:
    console.log("No price"); 
    }
    let topping_value = ptopping.length *100;
    console.log("toppins value" + topping_value);

    // submitting null values
    if((psize == "0") && (pcrust == "0")){
    console.log("nothing selected");
    $("button.submit").show(); 
    $("div.choise").hide();
    alert("kindly, select pizza size and crust"); 
    }
    else{
    $("button.submit").hide(); 
    $("div.choise").slideDown(1000);
    }

    // displaying total 
    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);

    // AddP button
    $("button.addP").click(function(){ 
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name='toppings']:checked"), function(){ 
    ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));

    switch(psize){
    case "0":
    price =0;
    break;
    case "large":
    price = 1500;
    console.log(price);
    break;
    case "medium":
    price = 700;
    console.log("The price is "+price);
    break;
    case "small":
    price = 400;
    console.log(price);
    default:
    console.log("error"); 
    }
    switch(pcrust){
    case "0":
    crust_price = 0;
    break;
    case "Crispy":
    crust_price = 180;
    break;
    case "Stuffed":
    crust_price = 150;
    break;
    case "Gluten-free":
    crust_price = 100;
    break;
    default:
    console.log("No price"); 
    }
    let topping_value = ptopping.length * 50;
    console.log("toppins value" + topping_value);
    total = price + crust_price + topping_value;
    console.log(total);

    checkoutTotal = checkoutTotal + total;
    console.log(checkoutTotal);

    // constractor function
    var newOrder = new Getpizza(psize, pcrust,ptopping,total);
    $("#neworderp").append('<tr><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
    console.log(newOrder); 
    });

    // Checkout button
    $("button#checkout").click(function(){ 
        $("button#checkout").hide();
        $("button.addP").hide();
        $("button.deliver").slideDown(1100);
        $("#addedprice").slideDown(1100);
        console.log("Your total CHARGE is sh. "+checkoutTotal);
        alert("Dear customer Your bill is sh. "+checkoutTotal);
    });

    // home delivery button
    $("button.deliver").click(function(){
        $(".table").hide();
        $(".summarypreview h2").hide();
        $(".delivery").slideDown(1100);
        $("#addedprice").hide();
        $("button.deliver").hide();
        $("#pizzatotal").hide();
        let deliceryamount= checkoutTotal+ 100;
        // alert("Your total pay sh. "+deliceryamount+" on delivery");
        alert("Your bill plus delivery fee is: "+deliceryamount +" please provide us direction Information for delivery")
    });

    // when one clicks place order button
    $("button#final-order").click(function(event){
        event.preventDefault();

        $("#pizzatotal").hide();
        $(".location").hide();
        $("button#final-order").hide();
        let deliceryamount= checkoutTotal+100;
        console.log("Dear customer your total charge is: "+ deliceryamount);
        let location = $("input#location").val();
        let phone = $("input#phone").val(); 

        if ( $("input#location").val() && $("input#phone").val()!=""){
        alert("Dear Customer your order has been recieved successfully and it will be delivered shortly at "+ location+ ". pay this on delivery sh. "+deliceryamount);
        }

        else {
            alert("Please fill in the details for delivery!");
            $(".delivery").show();
            $("button#final-order").show();
            }
    });
    event.preventDefault();
    });
});
