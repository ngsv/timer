let args = process.argv.slice(2);

args = args.sort();
console.log(args);

const timer = () => {
  if (args.length !== 0) {
    for (let i = 0; i < args.length; i++) {
      args[i] = Number(args[i]);
      if (args[i] < 0 || isNaN(args[i])) {
        break;
      } else {
        setTimeout(() => process.stdout.write('\x07'), args[i] * 1000);
      }
    }
  }
};

timer();
