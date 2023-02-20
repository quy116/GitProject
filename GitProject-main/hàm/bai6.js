// Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không. Nếu là nguyên dương trả về true, ngược lại trả về false.
let input = +prompt('nhập số vào');
function checkNumber() {
    if (input > 0){
        return true;
    } else {
        return false;
    };
};
checkNumber()