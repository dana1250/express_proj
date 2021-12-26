const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

    const user = sequelize.define("user", {
      email: {
        type: DataTypes.STRING(256),
        validate: {
          isEmail: true,
        },
        allowNull: true,
        unique: true,
        default: '',
        comment: "이메일",
      },
      username: {
        type: DataTypes.STRING(64),
        allowNull: true,
        default: '',
        comment: "이름",
      },
      password: {
        type: DataTypes.STRING(256),
        allowNull: true,
        default: '',
        comment: "비밀번호",
      },
      phone_number: {
        type: DataTypes.STRING(16),
        allowNull: true,
        default: '',
        comment: "전화번호",
      },
      token: {
        type: DataTypes.STRING(64),
        allowNull: true,
        default: '',
        comment: "사용자 토큰",
      },
      pwErrorCount: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        default: 0,
        comment: "비밀번호 틀린 횟수",
      },
      isPwChange: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        default: 0,
        comment: "비밀번호가 변경되었는지",
      },
      isVerified: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        default: 0,
        comment: "인증 여부",
      },
      isNaver: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        default: 0,
        comment: "네이버 인증",
      },
      isKakao: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        default: 0,
        comment: "카카오 인증",
      },
      isGoogle: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        default: 0,
        comment: "구글 인증",
      },
      lastLoginAt: {
        type: DataTypes.DATE,
        allowNull: true,
        default: 0,
        comment: "마지막 로그인 시점",
      },
    }, {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      tableName: "user", // 테이블 이름
      freezeTableName: true, //테이블 명 복수설정 불가
      timestamps: true, // createAt & updateAt 활성화
      paranoid: true, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
    });
  
    return user;
  };