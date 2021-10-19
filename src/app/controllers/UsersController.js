import CreateUsers from '../services/UsersService';

class UsersController {
    async store(req, res) {
        console.log(req);
        // try {
        const dataUser = {
            name: req.name,
            email: req.email,
            password: req.password,
            profile_admin: true,
            enabled: true,
        };
        console.log(dataUser);

        const createUser = new CreateUsers();

        const newUser = await createUser.createusers(dataUser);

        return res.json(newUser);
        // } catch (error) {
        //     res.status(400).json({ error: error.message });
        throw error.message;
        // }
    }
}
export default new UsersController();