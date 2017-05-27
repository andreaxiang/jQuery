/*实现自制jquery*/
window.jQuery = function(selectorOrElements){

  var array = [];  //array 既是数组也是对象
  if(typeof selectorOrElements === "string"){
    var elements = document.querySelectorAll(selectorOrElements); //elements is not an array but it is like an array
    //遍历elemetns 保存给array
    for (var i = 0; i < elements.length; i++){
      array.push(elements[i]);
    }
  }else if(selectorOrElements instanceof Array){
    for (var i = 0; i < selectorOrElements.length; i++){
      array.push(selectorOrElements[i]);
    }
  }


  //在return array之前先给数组添加API 供外部直接调用
  array.on = function (eventType, fn){
    /*elements.addEventListener(eventType, fn)*/
    for(var i = 0; i< array.length;i++){
      array[i].addEventListener("click",fn)
    }
    return array;   //方便链式操作
  };
  array.addClass = function (className){
    for(var i=0;i<array.length;i++){
      array[i].classList.add(className)
    }
    return array;   //方便链式操作
  };

  array.removeClass = function (className){
    for(var i=0;i<array.length;i++){
      array[i].classList.remove(className)
    }
    return array;   //方便链式操作
  };

  array.toggleClass = function (className){
    for(var i=0;i<array.length;i++){
      array[i].classList.toggle(className)
    }
    return array;   //方便链式操作
  };

  /*//jQuery的逻辑是只返回第一个*!/
  array.text = function (value){
    if(value === undefined){
      var result = [];
      return array[0].textContent
    }
  };*/

  array.text = function (value){
    if(value === undefined){
      var result = [];
      for(var i=0;i<array.length;i++){
        result.push(array[i].textContent)
      }
      return result
    }else{
      for(var i=0;i<array.length;i++){
        array[i].textContent = value;
      }
      return array;    //方便链式操作
    }
  };

  array.html = function (htmlString){
    if(htmlString === undefined){
      var result = [];
      for(var i=0;i<array.length;i++){
        result.push(array[i].innerHTML)
      }
      return result
    }else{
      for(var i=0;i<array.length;i++){
        array[i].innerHTML = htmlString;
      }
      return array;  //方便链式操作
    }
  };

  array.find = function(selector){
    var array2 = [];
    for(var i=0;i<array.length;i++){
      var elements = array[i].querySelectorAll(selector);
      for(var j=0;j<elements.length;j++){
        array2.push(elements[j])
      }
    }
    /*var 添加了各种API的array = jQuery(array2);*/
    return jQuery(array2);
  };

  return array;
};
window.$ = window.jQuery;

Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help
