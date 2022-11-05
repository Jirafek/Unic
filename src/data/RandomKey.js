let arrWrd = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

export default function randm() {
    let key = '';

    function createKey(arr) {
        return arr[Math.round(0 - 0.5 + Math.random() * (arr.length - 0))]
    }

    for (let i=0; i<6; i++) {
        i < 2 ? key += createKey(arrWrd)
        : key += createKey(arrNum)
    }
    return key;
}