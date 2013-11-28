var filtered_fs = require('./module_filtered_ls.js');

if (process.argv.length < 4) return;

filtered_fs(process.argv[2], process.argv[3], function(err, list) {
	if (err) return err;
	list.forEach(function(e, i, a) {
		console.log(e);
	});
});
