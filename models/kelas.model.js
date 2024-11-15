import db from "../config/dbConfig.js";
import { DataTypes } from "sequelize";

const Kelas = db.define("kelas", {

    id_kelas: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    
    nama_kelas: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

}, {
  tableName: "kelas",
  timestamps: false,
});

export default Kelas;
