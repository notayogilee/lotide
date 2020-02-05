const countLetters = function(sentance) {
  let newSentance = Array.from(sentance.replace(/\s/g, ""));
  let counter = {};

  for (let i = 0; i < newSentance.length; i++) {
    if (counter[newSentance[i]] === undefined) {
      counter[newSentance[i]] = 1;
    } else {
      counter[newSentance[i]] += 1;
    }
  }
  console.log(counter);
};
