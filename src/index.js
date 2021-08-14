import "./styles.css";

const onclick = () => {
  //input 入力したものを取得
  const inputtext = document.getElementById("add-text").value;
  //空にする
  document.getElementById("add-text").value = "";
  createIncomplete(inputtext);
};

const deleteFromIncomplete = (target) => {
  target.remove();
};

const createIncomplete = (text) => {
  //<li></li>を作成
  const li = document.createElement("li");
  // クラス名をつける。
  li.className = "list-row";
  //<p></p>を作成
  const p = document.createElement("p");
  //<p></p>要素に文字を入れる
  p.innerText = text;
  //<li></li>の子要素にpダグを入れる
  li.appendChild(p);
  document.getElementById("incompleate").appendChild(li);

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  li.appendChild(completeButton);
  completeButton.addEventListener("click", () => {
    deleteFromIncomplete(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // 初期化
    addTarget.textContent = null;
    const p = document.createElement("p");
    p.innerText = text;
    addTarget.appendChild(p);
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // 戻すボタン
    backButton.addEventListener("click", () => {
      backButton.parentNode.remove();
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncomplete(text);
    });

    addTarget.appendChild(backButton);
    document.getElementById("complete").appendChild(addTarget);
    // console.log(addTarget);
  });

  const removeButton = document.createElement("button");
  removeButton.innerText = "削除";
  li.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    deleteFromIncomplete(removeButton.parentNode);
  });
};
document.getElementById("add-btn").addEventListener("click", () => {
  onclick();
});
