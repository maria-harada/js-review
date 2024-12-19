//4-1
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}

// 4-2
// 以下の手順で作成してください。
// - 1から100までの数字を出力するfor文を作成する。
// - 数が3の倍数でも5の倍数でもある場合、ループ分を中断する。
for (let number = 0; number < 100; number++) {
    if (number % 3 === 0) {
        console.log("break!");
        break;
    } else if (number % 5 === 0) {
        console.log("break");
        break;
    } else {
        console.log(number);
    }
}
