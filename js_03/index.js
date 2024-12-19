//3-1
const submit_btn = document.getElementById("submit_button");
const result = document.getElementById("result");
const age = 18;
//送信ボタン
submit_btn.addEventListener("click", () => {
    const input_element = document.getElementById("input");
    if (input_element.value > age) {
        result.innerHTML = "成人済みです";
    } else {
        result.innerHTML = "未成年です";
    }
});

//3-2
const seasons_Btn = document.getElementById("seasons_Btn");
const random = document.getElementById("random");

//ランダムボタン
// seasons_Btn.addEventListener("click", () => {
//     const random_number = Math.floor(Math.random() * 13);
//     if (random_number == 3 || random_number == 4 || random_number == 5) {
//         random.innerHTML = "春です！";
//     }
//     if (random_number == 6 || random_number == 7 || random_number == 8) {
//         random.innerHTML = "夏です！";
//     }
//     if (random_number == 9 || random_number == 10 || random_number == 11) {
//         random.innerHTML = "秋です！";
//     }
//     if (random_number == 12 || random_number == 1 || random_number == 2) {
//         random.innerHTML = "冬です！";
//     }
// });

//switch文
seasons_Btn.addEventListener("click", () => {
    const random_number = Math.floor(Math.random() * 13);
    console.log(random_number);

    switch (random_number) {
        case 3:
        case 4:
        case 5:
            random.innerHTML = "春です！";
            break;

        case 6:
        case 7:
        case 8:
            random.innerHTML = "夏です！";
            break;

        case 9:
        case 10:
        case 11:
            random.innerHTML = "秋です！";
            break;

        case 12:
        case 1:
        case 2:
            random.innerHTML = "冬です！";
            break;
        default:
            random.innerHTML = "ゼロ！！";
    }
});

//3-3
const submit_Btn = document.getElementById("submit_Btn");
const result_M = document.getElementById("result_M");

//18より〜
submit_Btn.addEventListener("click", () => {
    const input_Num = document.getElementById("input_Num");

    input_Num.value > age
        ? (result_M.innerHTML = "成人済みです！")
        : (result_M.innerHTML = "未成年です！");
});
