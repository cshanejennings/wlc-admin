var ae_csv = require('account-edge-csv');
module.exports = {

    get_supplements: function (req, res) {
		var csv = req.file("inventory_transactions"),
	        filepath = 'csv/',
	        options = {
	          dirname: filepath,
	          saveAs: function (__newFileStream, cb) {
	            cb(null, __newFileStream.filename);
	          }
	        };
	    csv.upload(options, function onUploadComplete (err, files) {
	      var i, file, filepath, l = files.length;
	      if (err) {
	        res.send({
	          error: "File failed to upload"
	        });
	      } else {
	        for (i = 0; i < l; i += 1) {
	          file = files[i];
	          filepath = ".tmp/uploads/" + options.dirname + file.filename;
	          console.log(filepath);
	          ae_csv.parse_csv_file(filepath, function (err, data) {
	          	if (err) {
					res.json({ status:500, error: err });
	          	} else {
	          		require('jsonfile').writeFile('./assets/records/item-transactions.json', data.json, function (error) {
	          			if (error) {
	          				res.json({ status:500, error: err });
	          			} else {
	          				res.json({
								status:200,
								type: req.body.type,
								data: data.json
							});
	          			}
	          		});
	          	}
	          });
	        }
	      }
	    });
    },

    load: function (req, res) {
        require('jsonfile').readFile('./assets/records/item-transactions.json', function (error, obj) {
  			if (error) {
  				res.json({ status:500, error: err });
  			} else {
  				res.json({
					status: 200,
					data: obj
				});
  			}
		});
    }

};