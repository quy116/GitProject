// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
// let count = 0
// let n = 0
// for(let i = 1; i <1000; i++) {
//     if(i % 7 == 0){
//         n += i
//         count++
//         if(count == 30) {
//             break;
//         }
//     }
//     }
// console.log(n)
// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".


    // for(let i = 0; i < 100; i++){
    //     if (i % 3 == 0 && i % 5 == 0 ){
    //         console.log('FizzBuzz')
    //     }
    //     console.log(i)
    // }
 // bai 2
// for (let i=1;i<=H;i++){
//     for (let k=H;k>=i;k--){
//         document.write("&nbsp;&nbsp;");
//     }
//     for (let j=1;j<=i*2-1;j++){
//         // document.write("*");
//         if (i==1||i==H||j==1||j==i*2-1){
//             document.write("*");
//         }else{
//             document.write("&nbsp;&nbsp;")
//         }
//
//     }
//     document.write("<br>");
// }
// document.write("<br>");
// Bài 2: Tính giai thừa của một số nguyên dương
let factorial=+prompt("Nhập Giai Thừa cần Tính");
// do {
//     factorial
// }while (factorial<0);
let giai_Thua=1;
for (let i=1;i<=factorial;i++){
    giai_Thua = giai_Thua * i;
}
document.write("Giai Thừa:" + giai_Thua);
// Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau

