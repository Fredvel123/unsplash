import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    database: 'images_db',
    password: 'freddy',
    username: 'postgres',
    dialect: 'postgres',
    logging: 'false'
})

const testDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database is connected');
    } catch (err) {
        console.log(err);
    }
}

testDatabase();

export default sequelize