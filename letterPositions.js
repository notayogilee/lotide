const letterPositions = function(sentance) {
  const results = {};

  for (let i = 0; i < sentance.length; i++) {
    if (results[sentance[i]] === undefined) {
      results[sentance[i]] = [i];
    } else {
      results[sentance[i]].push(i);
    }
  }
  delete results[" "];
  console.log(results);
};

letterPositions("lighthouse in the house");
