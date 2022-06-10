import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//削除関数
const deleteFromIncopleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
const deleteFromIncopleteList2 = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const pTag = document.createElement("p");
  pTag.innerText = text;

  //button(完了)生成
  const finishButton = document.createElement("button");
  finishButton.innerText = "完了";
  finishButton.addEventListener("click", () => {
    deleteFromIncopleteList(finishButton.parentNode.parentNode);

    const addTarget = finishButton.parentNode.parentNode;
    const text = addTarget.children[0].children[0].innerText;
    const createarea = document.getElementById("complete-list");
    const completeLi = document.createElement("li");
    const completeDiv = document.createElement("div");
    completeDiv.className = "list-row";

    const completeP = document.createElement("p");
    completeP.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      deleteFromIncopleteList2(backButton.parentNode.parentNode);
      createIncompleteList(text);
    });

    completeDiv.appendChild(completeP);
    completeDiv.appendChild(backButton);
    completeLi.appendChild(completeDiv);
    createarea.appendChild(completeLi);
  }); //button(削除)作成

  const deliteButton = document.createElement("button");
  deliteButton.innerText = "削除";
  deliteButton.addEventListener("click", () => {
    //親要素を削除
    deleteFromIncopleteList(deliteButton.parentNode.parentNode);
  });
  //div中にｐ,buttonを入れる

  div.appendChild(pTag);
  div.appendChild(finishButton);
  div.appendChild(deliteButton);

  //li生成
  const li = document.createElement("li");

  //liタグの中にdivタグを入れる

  li.appendChild(div);

  //ulタグにliタグを追加
  document.getElementById("incomplete-list").appendChild(li);
};
