var Client = require("../../owfs/owfs.js").Client,
	_s = require('underscore.string');

var owfs = new Client("localhost",4304)
/*
 * GET home page.
 */

function isDirectory(item){
	return _s.startsWith(item,"/")?true:false;
}

function isValue(item){
	return !isDirectory(item);
}

exports.index = function(req, res){
	var path =req.params.length>=1?req.params[0]:"/";
	console.log(path)
	owfs.getslash(path, function(items){
		var owlisting = { path : path, directories: items.filter(isDirectory) };
		var values = items.filter(isValue);
		if(values.length > 0){
			owlisting.value = values[0];
		}
		res.format({
	        html: function(){
	            res.render('index', owlisting);
	        },
	 
	        json: function(){
	            res.json(owlisting);
	        }
	    })
	})

};