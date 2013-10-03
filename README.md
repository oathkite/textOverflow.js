touchScroll.js
===============

スマートフォン、タブレット用のスワイプでdom要素をスクロールするjQueryプラグインです。

##必要な物
jquery(1.8以上)


##サンプル
###html
```html
<ul id="sample">
	<li>Menu1</li>
	<li>Menu2</li>
	<li>Menu3</li>
	<li>Menu4</li>
	<li>Menu5</li>
</ul>
```

```js
$('#sample').touchScroll();
```

touchScrollを指定した要素上で指をx方向へスワイプすると、要素が追従して動きます。
縦方向へスクロールさせる場合は、引数にyを与えてください。

```js
$('#sample').touchScroll('y');
```