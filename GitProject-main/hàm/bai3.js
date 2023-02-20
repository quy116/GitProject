// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
//
let input = +prompt('nhập vào con số bạn muốn tính giai thừa');
let giaiThua = 1;
function tinhToan() {
    for (let i = 1; i <=input; i++) {
        giaiThua *= i;
    };
    return alert(giaiThua);
};
tinhToan();