// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không. Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.
let arrayCharacter = prompt("Nhập mảng ký tự");
let character = prompt("Ký tự cần kiểm tra:");

function checkCharacter(array, character) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === character) {
            count++;
        }
    }
    if (count === 0) {
        count = -1;
    }
    return count;
}

document.write(checkCharacter(arrayCharacter, character));