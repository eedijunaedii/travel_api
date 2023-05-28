const verifySignUpController = require('../controller').verifySignUp;
const verifySignController = require('../controller').verifySign;
const statusController = require('../controller').status;
const verifyJwtTokenController = require('../controller').verifyJwtToken;

module.exports = function (app) {

	//User Auth
	app.post('/api/auth/signup',
		[verifySignUpController.checkDuplicateUserNameOrEmail,
			verifySignUpController.checkRolesExisted
		],
		verifySignController.signup);

	app.post('/api/auth/signin', verifySignController.signin);

	//Status
	app.get('/api/status',
		statusController.list);
	app.get('/api/statususer',
		[verifyJwtTokenController.verifyToken],
		statusController.listStatusUser);
	app.get('/api/status/:id',
		[verifyJwtTokenController.verifyToken,
			verifyJwtTokenController.isAdmin
		],
		statusController.getById);
	app.post('/api/status',
		[verifyJwtTokenController.verifyToken,
			verifyJwtTokenController.isAdmin
		],
		statusController.add);
	app.put('/api/status/:id',
		[verifyJwtTokenController.verifyToken,
			verifyJwtTokenController.isAdmin
		],
		statusController.update);
	app.delete('/api/status/:id',
		[verifyJwtTokenController.verifyToken,
			verifyJwtTokenController.isAdmin
		],
		statusController.delete);
}