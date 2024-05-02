var posts=["2024/05/02/hello-world/","2024/05/02/归去来兮辞/","2024/05/02/SpringSecurity/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };