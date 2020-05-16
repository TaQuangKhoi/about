/*alert
    ("này, người trước màn hình có phải Nguyễn Hồng Ngọc không? Đây là gì? là một thông báo, Bạn có muốn thấy trang web không ? Khôi nhớ ngọc à ?..");
    ; */
//nhớ em nhiều, ở trên là học cách viết một thông báo
//22:27 16 Apr 2020 cannot use ibus-bambo in VS Code

    var n = localStorage.getItem('on_load_counter');

    if (n === null) {
        n = 0;
    }

    n++;

    localStorage.setItem("on_load_counter", n);
nums = n.toString().split('').map(Number);
document.getElementById('CounterVisitor').innerHTML = '';
for (var i of nums) {
  document.getElementById('CounterVisitor').innerHTML += '<span class="counter-item">' + i + '</span>';
}