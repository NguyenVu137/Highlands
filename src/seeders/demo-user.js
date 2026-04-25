'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
    //     email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // address: DataTypes.STRING,
    // roleid: DataTypes.STRING,
    // statusId: DataTypes.STRING,
    // image: DataTypes.BLOB('long')
        email: 'nguyenvu4424@gmail.com',
        password: 'Nguyenvu123@',
        firstName: 'Dang Nguyen',
        lastName: 'Vu',
        address: '11 Dinh Phong Phu',
        roleId: 'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};