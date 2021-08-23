function decorator(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');

    let idx = cache.findIndex((item) => hash === item.hash);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    } else {
      let result = func(...args);
      cache.push({hash: hash, value: result});
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}