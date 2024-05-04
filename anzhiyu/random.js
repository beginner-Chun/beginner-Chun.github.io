var posts=["2024/05/02/SpringSecurity/","2024/05/02/归去来兮辞/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };