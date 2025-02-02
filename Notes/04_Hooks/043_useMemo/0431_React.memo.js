const prev = {
  color: null,
  result: null
}

function swatch (color) {
  console.log('lol color',color);
}

function reactMemo(color) {
  if(color === prev.color) {
    return prev.result;
  }
  prev.color = color;
  prev.result = swatch(color);
  return prev.result;
}

// when case like below react.Memo is not optimised one because every time it's check and call function

reactMemo("red");
reactMemo("blue");
reactMemo("red");
reactMemo("blue");


// but when continous call is there in that case react memo is good.

reactMemo("red");
reactMemo("red");
reactMemo("blue");
reactMemo("blue");