

// Bài 3: Tính diện tích hình vuông khi biết cạnh a.

// let width = 6
// let hinhvuong = width * width;
// console.log(hinhvuong)

// Bài 4: Tính diện tích hình  chữ nhật khi biết 02 cạnh a, b.
// let width = 10
// let height = 12
// let hinhChuNhat = width *height
// console.log(hinhChuNhat)

// Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b
// let a = 12
// let b = 13
// let c = a*b/2
// console.log(c)

// Bài 6: Giải phương trình bậc 1.
// let a = 3
// let b = 6
// let c = -b/a
// if (a == 0) {
//     console.log('phương trình vô nghiệm')
// } else {
//     console.log(c)
// }
// console.log(c)

// Giải phương trình bậc 2.
// let a = 3
// let b = 4
// let c = 5
// let powB = Math.pow(b,2)
// let  d = powB-(4*a*c)
// let x = -b/(2/a)
// let sqrt =Math.sqrt(d)
// let x1 = (-b+sqrt)/(2*a)
// let x2 = (-b-sqrt)/(2*a)
// if (d < 0) {
//     console.log('phương trình vô nghiệm')
// } else if (d === 0) {
//     console.log('phương trình có nghiệm kép' + x)
// } else {
//     console.log('phương trình nghiệm 1' + x1 +
//     'phương trình nghiẹp 2 ' + x2
//     )
// }

// Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không. Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.

// let age = 121
// if (age < 1) {
//     console.log('đm mày có phải là người không?')
// } else if ( age > 120) {
//     console.log('đm mày có phải là người không?')
// }
// else {
//     console.log('điều kiện đúng')
// }


// Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để a,b,c là cạnh của một tam giác là:
//
//     let a = 1
//     let b = 1
//     let c = 2
//     if (a => 0 || b <= 0 || c <= 0 ) {
//         console.log('k phải giác')
//     } else if (a + b > c) {
//         console.log('là hình tam giác')
//         if (b + c > a) {
//             // console.log('là hình tam giác')
//         }
//         if (a + c > b) {
//             console.log('là hình tam giác')
//         }
//     } else {
//         console.log('k phải tam giác')
// }
// Bài 10: Viết chương trình tính giá điện.
// let sanLuong = 350
// let dongGiaBac1 = 1678 * sanLuong
// let dongGiaBac2 = (1678 * 50) + (sanLuong - 50) * 1734
// let dongGiaBac3 = (1678 * 50) + ((sanLuong - 50)  * 1734) +(sanLuong - 100) * 2014
// let dongGiaBac4 =  (1678 * 50) + ((sanLuong - 50)  * 1734) +((sanLuong - 100) * 2014) + (sanLuong - 150) * 2536
// if (sanLuong <= 50) {
//     console.log(dongGiaBac1)
// }else if (sanLuong <=  100) {
//     console.log(dongGiaBac2)
// }else if (sanLuong <=  200) {
//     console.log(dongGiaBac3)
// }else if (sanLuong <=  350) {
//     console.log(dongGiaBac4)
// }
// Bài 11: Viết chương trình tính thuế thu nhập cá nhân.
// let money = 3000
// let mucThue = money*0.05
// let mucThue2 = money*0.1
// // console.log(thue)
// // console.log(money2)
// if (money <= 1000) {
//     console.log(mucThue)
// } else if(money >1000 ) {
//     console.log(mucThue2)
// }
// Bài 12: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.
let money = 1000
let thang = 5
let laiSuatThang6 = money * 0.05 * thang
let laiSuatThang12 = laiSuatThang6 * money  * 0.1 * (thang - 6)
console.log(laiSuatThang12)
let laiSuatThang18 = money * 0.2 * thang
let laiSuatThang24 = money * 0.3 * thang
if (thang <= 6) {
    console.log(laiSuatThang6)
} else if(thang <= 12) {
    console.log(laiSuatThang12)
}else if(thang <= 18) {
    console.log(laiSuatThang18)
}else if(thang <= 24) {
    console.log(laiSuatThang24)
} else {
    console('k cho vay leu leu')
}