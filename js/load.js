window.addEventListener('load',()=>{
    const user = localStorage.getItem('user');
    if(user){
    //   window.location.href = "home.html"
    }else{
    alert("必须先验证身份")
      window.location.href = "index.html"
    }
  })