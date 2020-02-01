module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('institution', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      },
      cityId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: 'city_id',
      },
      stateId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: 'state_id',
      },
      countryId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: 'country_id',
      },
      nameAr: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        field: 'name_ar',
      },
      nameEn: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        field: 'name_en',
      },
      logo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: true,
      },
      website: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: true,
      },
      notes: {
        type: Sequelize.DataTypes.TEXT('tiny'),
        allowNull: true,
      },
      attachment1: {
        type: Sequelize.DataTypes.TEXT('tiny'),
        allowNull: true,
        comment: 'JSON stringified object of attachment',
      },
      attachment2: {
        type: Sequelize.DataTypes.TEXT('tiny'),
        allowNull: true,
        comment: 'JSON stringified object of attachment',
      },
      addressLine1: {
        type: Sequelize.DataTypes.TEXT('tiny'),
        allowNull: true,
        field: 'address_line1',
      },
      addressLine2: {
        type: Sequelize.DataTypes.TEXT('tiny'),
        allowNull: true,
        field: 'address_line2',
      },
      isReserved: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        field: 'is_reserved',
        comment: '0-not reserved, 1-reserved nursery for dars',
      },
      status: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        comment: '0-inactive,1-active',
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('institution'),
};
