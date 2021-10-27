import CreateUsers from '../services/UsersService';

class UsersController {
  async store(req, res, next) {
    console.log(req);
    try {
      const dataUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profile_admin: false,

      };
      console.log(dataUser);

      const createUser = new CreateUsers();

      const result = await createUser.Createusers(dataUser);

      return res.json({ sucess: true, data: result.name });
    } catch (error) {


      next(error);
    }
  }

  async Createadmin(req, res, next) {

    try {
      const dataUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profile_admin: true,

      };
      console.log(dataUser);

      const createAdmin = new CreateUsers();

      const result = await createAdmin.Createusers(dataUser);

      return res.json({ sucess: true, data: result.name });
    } catch (error) {


      next(error);
    }
  }
}
export default new UsersController();
