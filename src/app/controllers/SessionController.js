import User from '../models/users';
import JwtHelper from '../helpers/JwtHelper';

class SessionController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!User) {
        return res.status(401).json({ error: ' User not found' });
      }
      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Password does not match' });
      }
      const startToken = new JwtHelper();
      const token = await startToken.singAcessToken(user);
      const refreshToken = await startToken.singAcessRefreshToken(user);
      console.log(refreshToken);
      return res.json(
        {
          token,
          refreshToken,

        }


      );
    } catch (error) {
      res.status(400).json({ error: error.message });
      throw error.message;
    }
  }
}
export default new SessionController();
