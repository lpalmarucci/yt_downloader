import jwt from 'jsonwebtoken'
import jwtSettings from './jwtSettings'

export default (req, res) => {
	var { cookie } = req.headers;

	console.log(req.headers);
	//non so in caso di più cookie se possa ancora andare bene come gestione (non penso)
	try {
		cookie = cookie.split(';');
	} catch (e) {}
	if (cookie.length > 0) {

		const payload = jwt.decode(cookies.auth);
		var exp = Math.floor(Date.now() / 1000) + 60;
		var newToken = jwt.sign({ ...payload, 'exp': exp }, process.env.SECRET_KEY, {expiresIn: '1h'});
		res.setHeader('Set-Cookie', cookie.serialize('auth', newToken, jwtSettings));
		res.status(200).json({ authorized: true });
	} else{
		res.status(500).send({unable})
	}
}
