import { UUID } from 'sequelize';
import Users from '../models/Users';

class ServiceUsers {
    async Createusers(data) {
        console.log('enter create User');


        const result = {
            // id: UUID,
            name: data.name,
            email: data.email,
            password: data.password,
            profile_admin: data.profile_admin,

        };


        const newUser = await Users.create(result);


        return newUser;

    }


}

export default ServiceUsers;
