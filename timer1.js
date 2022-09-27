let timers = process.argv.slice(2);

for (const timer of timers) {
  if (timer > 0 && !isNaN(timer)) {
    setTimeout(() => process.stdout.write("BEEP"), (timer * 1000));
    setTimeout(() => process.stdout.write("\n"), (timer * 1000));
  }
}