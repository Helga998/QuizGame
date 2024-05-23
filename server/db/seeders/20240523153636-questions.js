'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
    'Questions',
    [
      {
        question: 'Dogs1',
        answer: 'yyyyy',
        topic_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Dogs2',
        answer: 'yyyyy',
        topic_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Dogs3',
        answer: 'yyyyy',
        topic_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Dogs4',
        answer: 'yyyyy',
        topic_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Cat1',
        answer: 'yyyyy',
        topic_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Cat2',
        answer: 'yyyyy',
        topic_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Cat3',
        answer: 'yyyyy',
        topic_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Cat4',
        answer: 'yyyyy',
        topic_id: 2,
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
