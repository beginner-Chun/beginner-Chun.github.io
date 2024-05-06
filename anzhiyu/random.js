var posts=["2024/05/06/SSM/","2024/05/06/SpringSecurity/","2024/05/06/redis应用篇/","2024/05/02/归去来兮辞/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };