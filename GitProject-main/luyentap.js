
// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
//
// var a = 10
// var b = 2
// var c = a / b
// if (c === 5) {
//     console.log("a chia het")
// } else {
//     console.log("khong chia dc ")
// }
// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.

var age = 14
if (age >= 15) {
    console.log("du tuoi hoc lop 10")
} else {
    console.log('ban không đủ điều kiện học lớp 10')
}

// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
var number = 2
if (number >= 2 ) {
    console.log('đây là số lớn')
} else {
    console.log('đây là số nhỏ')
}
// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
 var mot = 1
var hai = 2
var ba = 3
 if (mot > hai && mot > ba ) {
         console.log('mot lớn nhất')
 } else if (hai > ba) {
    console.log('mot lớn nhất')
 } else {
     console.log('c lớn nhất')
 }
// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
var kiemTra = 70
var giuaki = 50
var cuoiKi = 80
let tongdiem = (kiemTra + giuaki + cuoiKi)/3
if (tongdiem > 80) {
    console.log('học sinh gioi ')
} else if (tongdiem > 60) {
    console.log('học sinh khá')
} else (
    console.log('học sinh trâu bò')
)
// Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng/
const product = 'coin'
const price = 20000
const revenue = 10000
let total = price * revenue
if (total > 100000) {
    console.log('doanh thu bán' + product + 'thu được là :' + total)
} else {
    console.log('ế quá sắp phá sản rồi')
}
