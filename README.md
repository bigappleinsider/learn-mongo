## where mongo stores it's data
```
    ps -xa | grep mongod
```
## Start & stop
```
    brew services stop mongo
```
## Upgrade mongo
```
brew upgrade mongo
```
## Promises

```js
function startGame() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (counter > 5) {
          resolve();
        } else {
          reject()
        }
      }, 2000);
  });
}
startGame()
  .then(() => alert('You win!'))
  .catch(() => alert('You lost!'));
```
