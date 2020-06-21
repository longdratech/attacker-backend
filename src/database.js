const  mongoose = require('mongoose');

module.exports.connect = function () {
	mongoose.connect('mongodb+srv://kma_attacker:Nguyetdien@123@cluster0-nuac9.azure.mongodb.net/attacker?retryWrites=true&w=majority', {useNewUrlParser: true})
		.then(() => {
			console.log('Connect success database !');
		}).catch((err) => {
			console.log('Connect fail ');
			console.log('Error: ', err);
		});
};

module.exports.disconnect = function () {
	return mongoose.disconnect();
};
