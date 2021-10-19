import User from '../models/Users';
import JwtHelper from '../helpers/JwtHelper';

class SessionController {
  async store(req, res, next) {
    try {
      const { email, password } = req.body;

      console.log(req.body);

      const user = await User.findOne({ where: { email } });

      console.log(user);

      if (!User) {
        return res.status(401).json({ error: ' User not found' });
      }
      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Password does not match' });
      }
      const startToken = new JwtHelper();
      const token = await startToken.singAcessToken(user);
      console.log(token);
      const refreshToken = await startToken.singAcessRefreshToken(user);
      console.log(refreshToken);
      return res.json(
        {
          token,
          refreshToken,

        }


      );
    } catch (error) {


      next(error);
    }
  }
}
export default new SessionController();
