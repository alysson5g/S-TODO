import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';


class users extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    allowNull: false,
                    primaryKey: true,
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV4,
                },
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                profile_admin: Sequelize.BOOLEAN,

            },
            {
                sequelize,

            }
        );

        this.addHook('beforeSave', async (users) => {
            if (users.password) {
                users.password_hash = await bcrypt.hash(users.password, 8);
            }
        });



        return this;
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default users;