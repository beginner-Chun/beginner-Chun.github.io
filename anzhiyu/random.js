var posts=["2024/05/21/20240521/","2024/05/23/20240523/","2024/05/24/20240524/","2024/05/20/20240520/","2024/05/29/20240529/","2024/05/30/20240530/","2024/05/09/Ajax/","2024/05/09/CSS/","2024/05/09/Html/","2024/05/22/Elasticsearch基础篇/","2024/05/24/Elasticsearch进阶篇/","2024/05/09/JavaScript/","2024/05/09/MySQL基础篇/","2024/05/09/MarkDown语法/","2024/05/09/Linux笔记/","2024/05/09/Mybatis-Plus笔记/","2024/05/17/Mybatis基础篇/","2024/05/17/RabbitMQ笔记/","2024/05/09/SQLserver基础篇/","2024/05/20/RabbitMQ进阶篇/","2024/05/06/SSM/","2024/05/20/SpringAi入门篇/","2024/05/09/SpringBoot/","2024/05/06/SpringSecurity/","2024/05/09/TypeScript/","2024/05/15/git/","2024/05/09/redis基础篇/","2024/05/09/Vue2-Vue3/","2024/05/16/SpringCloud笔记/","2024/05/06/redis应用篇/","2024/05/09/docker笔记/","2024/05/19/留候传/","2024/05/02/归去来兮辞/","2024/05/09/webpack/","2024/05/30/前端工程化速通版/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };