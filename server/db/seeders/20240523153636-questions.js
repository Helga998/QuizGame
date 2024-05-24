'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
    'Questions',
    [
      {
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS',
        question: 'Dogs1',
        answer: 'yyyyy',
        topic_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS',
        question: 'Dogs2',
        answer: 'yyyyy',
        topic_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS',
        question: 'Dogs3',
        answer: 'yyyyy',
        topic_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS',
        question: 'Dogs4',
        answer: 'yyyyy',
        topic_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS',
        question: 'Cat1',
        answer: 'yyyyy',
        topic_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS',
        question: 'Cat2',
        answer: 'yyyyy',
        topic_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS',
        question: 'Cat3',
        answer: 'yyyyy',
        topic_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS',
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
