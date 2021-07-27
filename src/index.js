import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  createIncomleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.querySelector("#incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncomleteList = (text) => {
  // liタグ作成
  const li = document.createElement("li");

  // divタグ作成
  const div = document.createElement("div");
  div.className = "list-row";

  //  pタグ作成
  const p = document.createElement("p");
  p.innerText = text;

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.firstElementChild.innerText;

    //div以下を初期化
    addTarget.firstElementChild.textContent = null;

    // pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerHTML = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（li）を完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.querySelector("#complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncomleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.firstElementChild.appendChild(p);
    addTarget.firstElementChild.appendChild(backButton);

    // 完了リストに追加
    document.querySelector("#complete-list").appendChild(addTarget);
  });

  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // liタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  //未完了のリストに追加
  document.querySelector("#incomplete-list").appendChild(li);
};

document
  .querySelector("#add-button")
  .addEventListener("click", () => onClickAdd());
