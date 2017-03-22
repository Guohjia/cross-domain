
app.get('/loadMore', function(req, res) {
	var curIdx=req.query.index
	var len=req.query.length
	var data=[]

	for(var i=0;i<len;i++) {
		data.push('新闻'+(parseInt(curIdx)+i))
	}
    // res.header("Access-Control-Allow-Origin","http://a.me.com:8080"); //这样也是可以的，代表只允许a.me.com:8080这个域名发送请求获取数据，即cors.html所在的域名
    res.header("Access-Control-Allow-Origin","*"); //星号表示允许任何域的请求获取数据
	setTimeout(function() {
		res.send(data);
	}, 2000);

});
