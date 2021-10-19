import CreateUsers from '../services/UsersService';



class UsersController {


    async store(req, res, next) {

        try {
            const dataUser = {

                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                profile_admin: true,
                enabled: true,
            };




            const createUser = new CreateUsers();

            const newUser = await createUser.Createusers(dataUser);

            const result = {
                name: newUser.name,
                email: newUser.email,
            }



            return res.json({ sucess: true, data: result });
        } catch (error) {


            next(error);
        }
    }
}
export default new UsersController();