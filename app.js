console.log('Check Out Page Documantion');
// function handelProductChange(product, isincrese) {
//     const productInput = document.getElementById(product + '-count');
//     const productCountNumber = parseInt(productInput.value);
//     let productNewNumber = productCountNumber;
//     if (isincrese == true) {
//         productNewNumber = productCountNumber + 1;
//     }
//     if (isincrese == false && productCountNumber > 0) {
//         productNewNumber = productCountNumber - 1;
//     }
//     productInput.value = productNewNumber;
//     let productTotal = 0;
//     if (product == 'phone') {
//         productTotal = productNewNumber * 1219;
//     }
//     if (product == 'case') {
//         productTotal = productNewNumber * 59;
//     }
//     document.getElementById(product + '-total').innerText = '$' + productTotal;
// }
/**
 * Phone Event Button Hanlder
 */
// document.getElementById('phone-increse').addEventListener('click', function(){
//     handerProductChange(true);
// })
// document.getElementById('phone-decrese').addEventListener('click', function(){
//     handerProductChange(false)
// })
/**
 * Phone Function
 */

// function handerProductChange(isincrese) {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCountNumber = parseInt(phoneInput.value);
//     // const phoneNewNumber = phoneCountNumber + 1;
//     let phoneNewNumber = phoneCountNumber;
//     if(isincrese == true){
//         phoneNewNumber = phoneCountNumber + 1;
//     }
//     if(isincrese == false && phoneCountNumber > 0){
//         phoneNewNumber = phoneCountNumber - 1;
//     }
//     phoneInput.value = phoneNewNumber;
//     const totalPrice = phoneNewNumber * 1219;
//     document.getElementById('phoneTotal').innerText = '$' + totalPrice;
// }

/**
 * Case Event Button Handler
 */
// document.getElementById('case-increse').addEventListener('click', function(){
//     handerCseChange(true);
// })
// document.getElementById('case-decrese').addEventListener('click', function(){
//     handerCseChange(false);
// })
/**
 * Case Function
 */
// function handerCseChange(isincrese) {
//     const phoneInput = document.getElementById('case-count');
//     const phoneCountNumber = parseInt(phoneInput.value);
//     // const phoneNewNumber = phoneCountNumber + 1;
//     let phoneNewNumber = phoneCountNumber;
//     if(isincrese == true){
//         phoneNewNumber = phoneCountNumber + 1;
//     }
//     if(isincrese == false && phoneCountNumber > 0){
//         phoneNewNumber = phoneCountNumber - 1;
//     }
//     phoneInput.value = phoneNewNumber;
//     const totalPrice = phoneNewNumber * 59;
//     document.getElementById('caseTotal').innerText = '$' + totalPrice;
// }
/**
 * Phone DOM Event Handler
 */
// document.getElementById('phone-increse').addEventListener('click', function(){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCountNumber = parseInt(phoneInput.value);
//     const phoneNewNumber = phoneCountNumber + 1;
//     phoneInput.value = phoneNewNumber;
//     const totalPrice = phoneNewNumber * 1219;
//     document.getElementById('phoneTotal').innerText = '$' + totalPrice;
// })
// document.getElementById('phone-decrese').addEventListener('click', function(){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCountNumber = parseInt(phoneInput.value);
//     const phoneNewNumber = phoneCountNumber - 1;
//     phoneInput.value = phoneNewNumber;
//     const totalPrice = phoneNewNumber * 1219;
//     document.getElementById('phoneTotal').innerText = '$' + totalPrice;
// })
/**
 * Case DOM Event Handler
 */
//  document.getElementById('case-increse').addEventListener('click', function(){
//     const phoneInput = document.getElementById('case-count');
//     const phoneCountNumber = parseInt(phoneInput.value);
//     const phoneNewNumber = phoneCountNumber + 1;
//     phoneInput.value = phoneNewNumber;
//     const totalPrice = phoneNewNumber * 59;
//     document.getElementById('caseTotal').innerText = '$' + totalPrice;
// })
// document.getElementById('case-decrese').addEventListener('click', function(){
//     const phoneInput = document.getElementById('case-count');
//     const phoneCountNumber = parseInt(phoneInput.value);
//     const phoneNewNumber = phoneCountNumber - 1;
//     phoneInput.value = phoneNewNumber;
//     const totalPrice = phoneNewNumber * 59;
//     document.getElementById('caseTotal').innerText = '$' + totalPrice;
// })