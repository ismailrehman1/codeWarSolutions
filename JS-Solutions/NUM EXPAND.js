function expandedForm(num) {
  // Your code here
  // 
  function expandedForm(num) {
  let str = String(num);
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") {
      let part = str[i];

      for (let j = i + 1; j < str.length; j++) {
        part += "0";
      }

      result.push(part);
    }
  }

  return result.join(" + ");
}
}
