export default async function runner<T>(cb: () => T, ms: number, close = true) {
  let timer: ReturnType<typeof setInterval>;
  if (!close) {
    console.log("Closed");
    return () => clearInterval(timer);
  }
  timer = await setInterval(cb, ms);
}

runner(() => {
  console.log("Yes");
}, 1000).catch(console.log);
