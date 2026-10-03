const calculateBill=(price,quantity,discountPercent=0,taxPercent=18)=>{

       let subtotal=price*quantity
       let discount = discountPercent/100*subtotal
       let taxable_amount=(subtotal-discount)*taxPercent/100
       let final_amount=subtotal-discount+taxable_amount
        
        return {Total:subtotal, discount:discount,Tax:taxable_amount, final_Amount:final_amount}
}

const result= calculateBill(100,5,5,20)
console.log(result)