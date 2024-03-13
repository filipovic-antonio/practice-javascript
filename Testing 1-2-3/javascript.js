const number=function(array){
    return array.map((line, index) => {
        return (index + 1) + ": " + line;
    });
  }
  const result = number(["a", "b", "c", "d","e"]);
  console.log(result);