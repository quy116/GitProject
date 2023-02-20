// Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
function check() {
    var a = prompt("nhap day so nguyen bat ki");
    var b = [];
    for (let i = 0; i < a.length; i++) {
        b.unshift(a[i]);
    }
    ;
    document.write(b.join(""));

}

check();