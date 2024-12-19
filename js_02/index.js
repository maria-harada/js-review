//取得
const input_GET = document.getElementById("input");
const add_button = document.getElementById("add_button");
const delete_button = document.getElementById("delete_button");
const ul_GET = document.getElementById("list");

//追加 <li id="list_item"></li>
add_button.addEventListener("click", () => {
    //liタグを作成
    const li_Add = document.createElement("li");
    //入力された文字をliタグに記載
    li_Add.innerHTML = input_GET.value;
    //ulタグの中に挿入
    ul_GET.appendChild(li_Add);
});

//削除
// const li_items = document.querySelector("li");
delete_button.addEventListener("click", () => {
    //親要素の最初の子要素を除去
    ul_GET.removeChild(ul_GET.firstChild);
});
