// 1: Viết một chương trình Javascript để nối tất cả các phần tử trong một mảng chuỗi lại với nhau

// const myColor = ["Red", "Green", "White", "Black"];
// const newColor =myColor.join(',');
// console.log(newColor)

// Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (-) giữa 2  số chẵn
// const input = window.prompt();
// const number = input.toString();
// let result = [number[0]]
// for(let i = 1; i < number.length; i++){
//     if((number[i-1]%2 === 0 && number[i] % 2 === 0))
//     {
//         result.push('-', number[i]);
//     }
//     else
//     {
//         result.push(number[i]);
//     }
// }
// console.log(result.join(' ',))
// Bài 3: Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa
// let str = window.prompt();
// const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const lower = 'abcdefghijklmnopqrstuvwxyz';
// const result = [];
//
// for(let i=0; i < str.length; i++)
// {
//     if(upper.indexOf(str[i]) !== -1)
//     {
//         result.push(str[i].toLowerCase());
//     }
//     else if(lower.indexOf(str[i]) !== -1)
//     {
//         result.push(str[i].toUpperCase());
//     }
//     else
//     {
//         result.push(str[i]);
//     }
// }
// console.log(result.join(''));


 // Từ điển

// let input = window.prompt();
// let english =  ["banana", "apple", "orange", "pen", "pencil", "book"];
// let tiengViet = ["chuối", "táo", "cam", "bút", "bút chì", "sách"];
// let index_eng = 0;
// let result = '';
// for (let i = 0; i < english.length; i++){
//     if (input == english[i]){
//         index_eng = 1;
//         for (let j = 0; j < tiengViet.length; j++){
//             if (index_eng == j ){
//                 result= tiengViet[j]
//             }
//         }
//     }
// }
// document.write(result)

// Bài 1- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

// let number = [1, 2, 12, 16,8,23,5];
// let result = [];
// for(let i = 1; i < number.length; i++){
//     if (number[i] > 10 ){
//         result.push(number[i]);
//
//
//     }
// }
// document.write(result)

// Bài 2- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử khác nhau. Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
// let number = [1, 2, 12, 16, 8, 23, 5];
// // let maxNumber = Math.max.apply(Math, number);
// let bigNumber = number[0];
// let height = 0;
// for (let i = 0;i < number.length; i++){
//     if(bigNumber < number[i]){
//         bigNumber = number[i];
//         height = i;
//     };
// };
// console.log('số lớn nhất là : ' + bigNumber )
// console.log(('ví trí là: ' + height))
// document.write("Giá trị lớn nhất là " +maxNumber+ "<br/>");

// ài 3- Viết chương trình khởi tạo mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó. In ra giá trị trung bình của các phần tử trong mảng.

// let number = [1, 2, 12, 16, 8, 23, 5];
// // let maxNumber = Math.max.apply(Math, number);
// let bigNumber = number[0];
// let averageNumber = 0;
// for (let i = 0;i < number.length; i++){
//     averageNumber += number[i]
//     if(bigNumber < number[i]){
//         bigNumber = number[i];
//
//     };
// };
// console.log('số lớn nhất là : ' + bigNumber )
// console.log(('trung bình: ' + averageNumber))
// Bài 4- Viết chương trình khởi tạo/nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.
// let input = window.prompt()
// for (let i = input.length - 1; i >= 0; i--) {
//     console.log(input[i]);
// }
// Bài 5- Viết chương trình đếm số nguyên âm trong một chuỗi
// let number = [1,2,-3, -2,10]
// let total = 0;
// for(let i = 0; i < number.length; i++){
//     if (number[i] < 0) {
//         total += 1
//
//         console.log(number[i])
//     }
// }
// console.log('tổng số nguyên âm'+ total)

// Bài 6- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V. Chương trình tìm xem V có nằm trong mảng số nguyên không? Nếu V thuộc mảng số nguyên thì in ra "V is in the array" còn lại in ra "V is not in the array".
    let number = [-1,2,4,-5,7,-7,-1000,-200,0,-5,6]
    let input = window.prompt()
    for(let i = 0; i < number.length; i++){
        if (number[i] == input){
            alert("V is in the array")
            break;
        }
        }

alert('do khung')
