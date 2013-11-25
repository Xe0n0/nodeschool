fs = require('fs');

filtered_ls = function(dir, ext, callback) {

	var pattern = '\\.' + ext + '$';
	var re = new RegExp(pattern);
	
	fs.readdir(dir, function(err, list) {
		
		if (err) 
		    return callback(err);
		
		var rlist = [];
		list.forEach(function(e, i, array) {
			if (re.test(e))
				rlist.push(e);
		});
		callback(null, rlist);
	});
}; 

module.exports = filtered_ls;
