// [Bài tập] Hàm kiểm tra số nguyên tố
// document.write("cac so nguyen to nho hon 10000 la:" + "<br>");
function checkSNT() {
    let count = 0;
    for (let i = 2; i < 10000; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count += 1;
            }
        }
        if (count === 2) {
            document.write(i + "<br>");
        }
        count = 0;
    }
}
// checkSNT();
// Bài 3: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.
// let firstNumber = +prompt("Nhập số thứ nhất: ");
// let secondNumber = +prompt("Nhập số thứ hai: ");
//
// function compare(a, b) {
//     if (a > b) {
//         return ("Số thứ nhất lớn hơn số thứ hai..");
//     } else {
//         return a + b;
//     }
// }
//
// let liken = compare(firstNumber, secondNumber);
// alert(liken);



// Bài 4: Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau để bạn có thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm. Đoạn mã có dạng như sau:

// function addNumbers() {
//     let firstNum = 4;
//     let secondNum = 8;
//     result = firstNum + secondNum;
//     return result;
//
// }
// let result = 0;
// alert(result);
// result = addNumbers();
// alert(addNumbers())
// Bài 5: Tạo một mảng với bảy phần tử dạng chuỗi có giá trị là tên các ngôi sao sau
// let starName = prompt("Nhập tên sao bạn muốn: ");
// let stars1;
// let consTellation2;
//
// function lookForStars(stars) {
//     stars1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
//     consTellation2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
//     let location = -1;
//     for (let i = 0; i < stars1.length; i++) {
//         if (stars === stars1[i]) {
//             location = i;
//             document.write(consTellation2[i]);
//         }
//     }
//     if (location === -1) {
//         document.write("không tìm thấy sao bạn muốn tìm");
//     }
// }
// lookForStars(starName);

// Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// let input = +prompt();
// function squareOfNum() {
//     return input*input
//
// }
// document.write(squareOfNum())
// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
// let banKinh = +prompt('Nhập vào bán kính');
//
// function tinhChuVi(banKinh) {
//     return 2 * banKinh * Math.PI;
// }
//
// let result = tinhChuVi(banKinh);
// document.write("Chu vi là :" + result);