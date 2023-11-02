const e = require('express');
const db = require('../config/db');
const bcrypt = require('bcrypt')

class CSR {
    constructor({ id, contact, name, email, nic, points, password_hash, bank_details, category }) {
        this.id = id;
        this.contact = contact;
        this.name = name;
        this.email = email;
        this.loyalty_points = loyalty_points;
        this.password_hash = password_hash;
        this.category = category;
        this.bank_details = bank_details;
        this.nic = nic;
        this.points = points;
    }

    static async addcsr(name, email, phone, password_hash) {

        //check email exists

        const query1 = 'select * from "CSR" where email=$1';
        const values1 = [email];




        try {
            const res1 = await db.query(query1, values1);
            if (res1.rowCount > 0) {
                return "EMAILEXISTS!";
            }



        } catch (error) {
            console.log(error);
        }


        const salt = await bcrypt.genSalt(10);
        const hashed_pw = await bcrypt.hash(password_hash, salt);

        const query = 'INSERT INTO "CSR" (name, email, phone,passwordhash) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [name, email, phone, password_hash];

        try {
            const result = await db.query(query, values);
            // return new Customer(result.rows[0]);
            if (result.rowCount)
                return true;
            else {
                return false
            }

        } catch (error) {
            console.log(error)
        }
    }


    static async getcsr() {

    


        const query = 'select * from "CSR"';
        // const values = [name, email, phone, password_hash];

        try {
            const result = await db.query(query);
            // return new Customer(result.rows[0]);
            if (result.rowCount)
                return result.rows;
            else {
                return false
            }

        } catch (error) {
            console.log(error)
        }
    }




    // Add other static methods for CRUD operations as needed
}

module.exports = CSR;
