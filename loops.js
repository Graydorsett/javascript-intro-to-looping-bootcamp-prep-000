function maybeTrue() {
  return Math.random() >= 0.5;
}

function forLoop(array){
  for (var i=0; i < 25; i++){
    if(i==1){
      array[i] = "I am 1 strange loop.";
    } else {
      array[i] = 'I am ${i} strange loops';
    }
  }
  return array;
}

function whileLoop(num){
  while(num>0){
    console.log(num);
    num--;
  }
  return 'done';
}


function doWhileLoop(array){
  do {
    array.shift();
  } while (array.length >= 0 && maybeTrue());
  return array;
}
