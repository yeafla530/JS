

API : Application Programming Interface

웹 API 는 브라우저가 이해할 수 있는 함수

JS 참고사이트 : MDN 사이트

async vs defer



![image-20201012221317950](C:\Users\multicampus\Desktop\세번째프로젝트\JS\image\image-20201012221317950.png)

너무 오랜 시간이 걸림

![image-20201012221417947](C:\Users\multicampus\Desktop\세번째프로젝트\JS\image\image-20201012221417947.png)

사용자가 의미있는 컨텐츠를 보기위해서는 정상적인 페이지 보기 전까지 기다려야 하는 시간이 길다

![image-20201012221513058](C:\Users\multicampus\Desktop\세번째프로젝트\JS\image\image-20201012221513058.png)

페칭이 병렬적으로 실행되기 때문에 다운로드 받는 시간 절약할 수 있음

조작하려하는 시점에 아직 html이 정의되어있지 않을 수 있음

언제든지 js를 사용하기 위해 멈출 수 있기 때문에 여전히 시간이 걸릴 수 있음

![image-20201012221644242](C:\Users\multicampus\Desktop\세번째프로젝트\JS\image\image-20201012221644242.png)

다 다운로드 받아놓고 사용자에게 페이지 보여주고 바로 js실행함

![image-20201012221955995](C:\Users\multicampus\Desktop\세번째프로젝트\JS\image\image-20201012221955995.png)

제일 효율적이고 안전!!

Defer을 사용해라!

