// 'tweets' is assigned a value but never used
// 'reject' is defined but never used
const tweets = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
});
