module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('institution_contact', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      },
      institutionId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: 'institution_id',
        references: {
          model: 'institution',
          key: 'id',
        },
      },
      type: {
        type: Sequelize.DataTypes.ENUM,
        values: ['primary', 'secondary'],
        allowNull: false,
        defaultValue: 'primary',
      },
      phone_number: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        field: 'deleted_at',
        type: Sequelize.DataTypes.DATE,
      },
    }),

  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('institution_contact'),
};
