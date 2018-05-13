# tada

<img src="./img/out.gif" width="100%">

## run

### run server

```
rm -f data.db && go run main.go
```

### run client

```shell
yarn run s
```

if you can use React Native Debugger

```shell
REACT_DEBUGGER="unset ELECTRON_RUN_AS_NODE && open -g 'rndebugger://set-debugger-loc?port=19001' ||" yarn run s
```

## lint

```shell
yarn run lint
```
