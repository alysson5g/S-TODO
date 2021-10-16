import Users from '../models/users';

class CreateUsers {
    async createusers(data) {
        console.log('enter create User');
        try {
            const result = {
                name: data.name,
                email: data.email,
                password: data.password,
                password_hash: data.password_hash,
                profile_admin: data.profile_admin,
                enabled: data.enabled,
            };

            const newUser = await Users.create(result);
            return newUser;
        } catch (error) {
            console.log('error create User');
            return error.message;
        }
    }
}

export default CreateUsers;
