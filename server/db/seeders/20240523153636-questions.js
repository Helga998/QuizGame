"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          img: "/img/файл.jpg",
          question: "есть в каждом нашем проекте",
          answer: "файл",
          topic_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/img/запятая.jpg",
          question: "в vs-code работает в команде с точкой",
          answer: "запятая",
          topic_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/img/компьютер.jpg",
          question: "должен быть у каждого програмиста",
          answer: "компьютер",
          topic_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/img/ноутбук.jpg",
          question: "верный друг каждого айтишника",
          answer: "ноутбук",
          topic_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/img/процессор.jpg",
          question: "есть у каждого компьютера",
          answer: "процессор",
          topic_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/img/пиксель.jpg",
          question: "разрешение экрана в ...",
          answer: "пиксель",
          topic_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/img/модем.jpg",
          question: "преобразует сигнал и передает данные",
          answer: "модем",
          topic_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          img: "/img/капуста.jpg",
          question:
            "каждый програмист хочет, чтобы этого у него было оооочень много",
          answer: "капуста",
          topic_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/img/витамины.jpg",
          question: "во время учебы нам обязательно нужно их есть",
          answer: "витамины",
          topic_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/img/клавиатура.jpg",
          question: "чего чаще всего касаются наши пальцы в кампусе",
          answer: "клавитура",
          topic_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/img/курсор.jpg",
          question: "что я часто теряла на мониторе в начале первой фазы",
          answer: "курсор",
          topic_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/img/наушники.png",
          question: 'что "отрезает" нас от внешнего мира',
          answer: "наушники",
          topic_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/img/сон.jpg",
          question: "нам многим этого сейчас не хватает",
          answer: "сон",
          topic_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/img/память.jpg",
          question: "ее объем хочется увеличить",
          answer: "память",
          topic_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
