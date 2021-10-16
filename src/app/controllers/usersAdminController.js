import CreateUsers from '../services/usersService';

class UsersController {
    async store(req, res) {
        try {
            const dataUser = {
                name: req.name,
                email: req.email,
                password: req.password,
                password_hash: req.password_hash,
                profile_admin: true,
                enabled: true,
            };

            const createUser = new CreateUsers();

            const newUser = await createUser.createusers(dataUser);

            return res.json(newUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
            throw error.message;
        }
    }
}
export default new UsersController();