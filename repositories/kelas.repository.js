import Kelas from "../models/kelas.model.js";

class KelasRepository {
    // Create a new class entry
    async createKelas(data) {
        try {
            const kelas = await Kelas.create(data);
            return kelas;
        } catch (error) {
            throw new Error("Failed to create class: " + error.message);
        }
    }

    // Find all classes
    async findAllKelas() {
        try {
            const kelasList = await Kelas.findAll();
            return kelasList;
        } catch (error) {
            throw new Error("Failed to retrieve classes: " + error.message);
        }
    }

    // Find a class by ID
    async findKelasById(id_kelas) {
        try {
            const kelas = await Kelas.findByPk(id_kelas);
            return kelas;
        } catch (error) {
            throw new Error("Failed to find class: " + error.message);
        }
    }

    // Update a class by ID
    async updateKelas(id_kelas, data) {
        try {
            const [updated] = await Kelas.update(data, {
                where: { id_kelas: id_kelas }
            });
            if (updated) {
                const updatedKelas = await this.findKelasById(id_kelas);
                return updatedKelas;
            }
            throw new Error("Class not found");
        } catch (error) {
            throw new Error("Failed to update class: " + error.message);
        }
    }

    // Delete a class by ID
    async deleteKelas(id_kelas) {
        try {
            const deleted = await Kelas.destroy({
                where: { id_kelas: id_kelas }
            });
            return deleted;
        } catch (error) {
            throw new Error("Failed to delete class: " + error.message);
        }
    }
}

export default new KelasRepository();
