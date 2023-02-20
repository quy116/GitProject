// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
let a = +prompt(" nhap vao so a");
let b = +prompt(" nhap vao so b");
let c = +prompt(" nhap vao so c");

function checkMin() {
    if (a < b) {
        if (a < c) {
            return a;
        } else {
            return c;
        }
    }else if ( c > b){
        return b;
    }else {
        return c;
    }
};
checkMin();