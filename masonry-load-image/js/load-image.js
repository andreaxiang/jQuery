/*思路：判断每一行的图片的高度，哪个最矮就把第4张图片添加到最矮图片的下面,4图片里再看每一列里哪个高度最矮就把第5张添加到那一列最矮图片下面*/


//伪造的数据源，使用　getImages（）获取一页图片数据源
/*var dataSource = {
  getImages:function(){

  }
};*/
var allImages = [];
for(var i=0;i<1000;i++){
  var random = 100+parseInt(Math.random()*200,10);
  allImages.push("https://source.unsplash.com/random/"+random);
}

//每次取图片的操作
function getImages(page,func){
  setTimeout(function(){
    var perPage =20;
    if(!page){page =1}
    func(allImages.slice(perPage*(page-1),perPage*page))
  },100);
  return undefined;
}

getImages(1,function(images){
  var columnHieghts = [0,0,0];
  var count = 0;

  var image = document.createElement("img");
  image.src = images[0];
  column1.appendChild(image);
  image.onload = function(){ //要获取图片的高度只能用onload加载完成
    columnHieghts[0] +=image.height;
    count += 1;
    loadNext(count+1);
  };

  var image1 = document.createElement("img");
  image1.src = images[1];
  column2.appendChild(image1);
  image1.onload = function(){ //要获取图片的高度只能用onload加载完成
    columnHieghts[1] +=image1.height;
    count += 1;
    loadNext(count+1);
  };

  var image2 = document.createElement("img");
  image2.src = images[2];
  column3.appendChild(image2);
  image2.onload = function(){ //要获取图片的高度只能用onload加载完成
    columnHieghts[2] +=image2.height;
    count += 1;
    loadNext(count+1);
  };

  function loadNext(n){
    if(n>3 && images[n]){//前面3张图片已存在 所以n>3
      var imageN = document.createElement("img");
      imageN.src = images[n-1];
      var short = getShortest();
      var column = window["column"+(short+1)];
      column.appendChild(imageN);
      imageN.onload = function(){ //要获取图片的高度只能用onload加载完成
        columnHieghts[short] +=imageN.height;
        count += 1;
        loadNext(count+1);
      };
    }
  }

  //找到一行中高度最矮的那一个追加第下一张图片
  function getShortest(){
    var min =0;   //index
    for(var i=0;i<columnHieghts.length;i++){
      if(columnHieghts[i] < columnHieghts[min]){
        min = i;
      }
    }
    return min;
  }
});







































/*
/!*伪造的数据源，使用　getImags可以得到一页图片*!/
var allImg = [];
for(var i = 0; i< 1000 ;i++){
  var random = 100+parseInt(Math.random()*200,10);
  allImg.slice("img/bg-2"+random);
}
function getImags(page,func){
  setTimeout(function(){
    var perPage = 20;
    if(!page){page = 1}
    func(allImg.slice(perPage*(page-1),perPage*page));
  },1000);
  return undefined;
}
getImags(1,function(images){
  var image1 = document.createElement("img");
  image1.src =image1[0];
  column1.appendChild(image1);
  console.log("开始加载"+ new Date());
  image1.onload = function(){
    columnHeights[1] += image1.height;
    count += 1;
    if(count == 3){
      console.log("可以加载第4张了");
    }else{
      console.log("不可以加载第4张"+count);
    }
  };


  var image2 = document.createElement("img");
  image2.src =image2[0];
  column2.appendChild(image2);
  console.log("开始加载"+ new Date());
  image2.onload = function(){
    console.log("加载成功"+ new Date());
    columnHeights[2] += image2.height;

  };


  var image3 = document.createElement("img");
  image3.src =image3[0];
  column3.appendChild(image3);
  console.log("开始加载"+ new Date());
  image3.onload = function(){
    console.log("加载成功"+ new Date());
    columnHeights[3] += image3.height;
  };

});
*/

