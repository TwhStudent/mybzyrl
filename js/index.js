
function checkPassword() {
    var password = document.getElementById('password-input').value;
    // 这里替换为你实际的暗号
    var correctPassword = "admin";
  
  console.log(password,
      correctPassword
  );
  
    if (password == correctPassword) {
        // 随机数
        var user = Math.random().toString(36).substring(7);
        window.localStorage.setItem("user",user)

        window.location.href = "home.html"
  
  
    } else {
      alert('暗号错误，请重新输入！');
    }
  }


 