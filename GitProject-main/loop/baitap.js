// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.

// for (i = 0; i < 100; i++) {
//     if(i === 99) {
//         break;
//         alert('ban ok')
//     }
// }
// console.log(i)
// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.


// let oC =  parseInt(prompt("Nhập số nhiet do "));
// for (let i = 0; i < oC; i++){
//     if (i <= 20){
//         alert('can tang nhiet do')
//         break;
//     } else if (i => 100) {
//         alert(('can giam nhiet do'))
//         break;
//     }
// }

// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// let n1 = 0
// let n2 = 1
// let nextTerm;
// for(let i = 0; i < 3; i++) {
//     console.log(n1)
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
// }

// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
let n1 = 0
let n2 = 1
let total = 0;
let nextTerm;
for(let i = 0; i < 20; i++) {
    total =   total + n1;
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.log(total)