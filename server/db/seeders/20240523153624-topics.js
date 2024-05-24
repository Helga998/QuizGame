'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
    'Topics',
    [
      {
        title: 'техвопрос',
        img: 'https://u.9111s.ru/uploads/202201/27/d73333598a114f9c95425f05f785a841.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'из жизни студента',
        img: 'http://www.webquestcreator2.com/majwq/files/files_user/80443/Preguntas.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  )
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
