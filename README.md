# react-toast

react component of toast

## install

```
npm install --save rc-toaster
```

## usage

```
import Toast from 'rc-toaster';

Toast.text('this is a Toast');
Toast.text({
  content: <span>this is a Toast</span>,
  mask: false,
  duration: 5,
  onCloseCallBack: function(){
    console.log('has close')
  }
});
```
## API

| 属性 | 说明 | 类型 | 默认值 |
| :---------- | :--- | :--- | :--- |
| content | show contents | string | - |
| mask | show mask | boolean | true |
| prefixCls | style className | string | 'w-toast' |
| duration | Destruction time | number | 3 |
| onCloseCallBack | close callback | function | - |
