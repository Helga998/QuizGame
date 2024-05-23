'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
    'Topics',
    [
      {
        title: 'Dogs',
        img: 'https://w.forfun.com/fetch/12/1239738c501e807ff53564553aebe781.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cats',
        img: 'https://w.forfun.com/fetch/db/dbb74713dd87469436e28714a45b0b39.jpeg',
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
