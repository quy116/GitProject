// Bài 1: Viết chương trình khởi tạo mảng 2 chiều, gồm một bộ các phần tử có sẵn,  in ra các phần tử trong mảng.
// let thongSo = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];
// for (let i = 0; i < thongSo.length; i++){
//     for (let j = 0; j < thongSo[i].length; j++){
//     console.log( thongSo[i][j])
//     }
// }
// for (let i in thongSo)
// {
//     console.log("row " + i);
//     for (let j in thongSo[i])
//     {
//         console.log(" " + thongSo[i][j]);
//     }
// }

// Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược. Ví dụ, nếu một mảng chứa các ký tự  [ 'c', 's', 'c', '2', '6', '1' ] sau khi thực hiện đảo ngược sẽ là "162csc"
// let thongSo = [3, 10, 26, 7];
// let result = []
// for( let i = thongSo.length -1; i >= 0; i--){
//     result.push(thongSo[i])
// }
// console.log(result)
// Bài 3: Viết một chương trình khai báo một mảng ký tự và kích thước của mảng. Chương trình này đếm số ký tự số trong mảng.
// let thongSo = [3, 10, 26, 7,'e','e'];
// let count= 0;
// for (let i = 0; i < thongSo.length; i++){
//     if (!isNaN(thongSo[i])){
//         count += 1
//     }
// }
// console.log(count)
// Bài 4: Viết một chương trình để đếm số từ trong một chuỗi
// let input = window.prompt()
// let newInput = toString()
// let space = ' '
// let count = 0;
//    if (input[i] === space){
// for (var i = 0; i < input.length; i++){
//        count += 1
//    }a
// }
// console.log(count+1)
// Bài 5: Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
// var firstInput = prompt("nhap vao phan tu mang thu nhat");
// var secondInput = prompt("nhap vao phan tu mang thu hai");
// var count = 0;
// for (let i = 0; i < firstInput.length; i++) {
//     if (firstInput.length === secondInput.length && secondInput[i] === firstInput[i]) {
//         count = count + 1;
//         if (count == firstInput.length - 1 && count == secondInput.length - 1) {
//             document.write("hai chuoi nay giong nhau roi do  ");
//             break;
//         }
//     } else {
//         document.write("hai chuoi khong bang nhau");
//         break;
//     }
// }
// Bài 6: Viết chương trình nhập vào một mảng ký tự, tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )
let input =prompt()
let result = []
for (let i = 0; i < input.length; i++) {
    if (input[i] === '-'){
        result.push('_')
    } else {
        result.push(input[i]);
    }
}
document.write(result.join(""));