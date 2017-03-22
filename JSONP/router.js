app.get('/getnews', function(req,res) {
	var curIdx=req.query.index
	var len=req.query.length
	var data=[]

	for(var i=0;i<len;i++) {
		data.push('哈哈'+(parseInt(curIdx)+i))
	}
    var cb=req.query.callback;
    // if(cb) {
    //     res.send(cb + '('+ JSON.stringify(data) + ')');
    // }else {
    //     res.send(data);
    // }
    // console.log(data)
    // console.log(cb+'('+ JSON.stringify(data) + ')')
    res.send(cb+'('+ JSON.stringify(data) + ')')
});
