// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.
let input = +prompt('nhập kí tự vào');
function checkSo(){
    if (isNaN(input)){
        document.write("false");
        return;
    }
    else{
        document.write("true");
        return;
    }
};
checkSo();