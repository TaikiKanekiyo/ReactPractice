$("#addTodo").click(function () {
  //addTodoの要素を取得、Clickしたらfunctionを呼び出す
  const inputTodo = $("input").val(); //inputのValue属性を定数inputTodoに代入
  $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>"); //inputtodoの要素をulタグ#todoListに追加(append)する
  $("input").val("");
});
