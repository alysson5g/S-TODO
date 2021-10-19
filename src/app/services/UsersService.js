import Users from '../models/Users';

class CreateUsers {
    async Createusers(data) {
        console.log('enter create User');

        try {
            const result = {

                name: data.name,
                email: data.email,
                password: data.password,
                profile_admin: data.profile_admin,
                enabled: data.enabled,
            };


            const newUser = await Users.create(result);


            return newUser;
        } catch (error) {
            // console.log('error create User');
            // return error.message;
            throw error;
        }
    }
}

export default CreateUsers;
