var posts=["2024/05/20/20240520/","2024/05/23/20240523/","2024/05/24/20240524/","2024/05/21/20240521/","2024/05/29/20240529/","2024/05/30/20240530/","2024/06/02/20240602/","2024/06/03/20240603/","2024/06/05/20240605/","2024/05/09/Ajax/","2024/06/08/20240608/","2024/06/10/20240610/","2024/05/09/CSS/","2024/05/22/Elasticsearch基础篇/","2024/05/24/Elasticsearch进阶篇/","2024/05/09/Html/","2024/07/06/Electron基础篇/","2024/05/09/MarkDown语法/","2024/05/09/JavaScript/","2024/05/09/Linux笔记/","2024/05/09/Mybatis-Plus笔记/","2024/05/17/RabbitMQ笔记/","2024/05/17/Mybatis基础篇/","2024/05/09/SQLserver基础篇/","2024/05/09/MySQL基础篇/","2024/05/20/RabbitMQ进阶篇/","2024/05/06/SSM/","2024/05/09/SpringBoot/","2024/05/20/SpringAi入门篇/","2024/05/06/SpringSecurity/","2024/05/09/TypeScript/","2024/05/09/docker笔记/","2024/05/09/Vue2-Vue3/","2024/05/16/SpringCloud笔记/","2024/05/15/git/","2024/06/22/uni-app基础篇/","2024/05/06/redis应用篇/","2024/05/09/redis基础篇/","2024/05/02/归去来兮辞/","2024/05/30/前端工程化速通版/","2024/05/09/webpack/","2024/05/19/留候传/","2024/06/07/计算机组成原理/","2024/08/28/react/","2024/07/09/操作系统/","2024/06/04/uniapp——微信小程序/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };