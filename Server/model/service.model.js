const db = require('../config/db');
const bcrypt = require('bcrypt')

class Service {
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


    static async getrevenue() {
        const query = 'SELECT SUM(b.amount) AS total_amount FROM "Service" s INNER JOIN "Bid" b ON s.id = b."serviceId" WHERE s.status = \'completed\'';
        // const values = [id];er



        try {
            const result = await db.query(query);
            //   console.log(result.rows[0]);
            return result.rows[0];

        } catch (error) {
            throw error;
        }
    }

    static async getCompletedGrouped() {
        const query = 'SELECT s.category, COUNT(s.id) AS completed_count  FROM "Service" s   WHERE s.status = \'completed\' GROUP BY s.category';
        // const values = [id];



        try {
            const result = await db.query(query);
            // console.log(result.rows);
            return result.rows;

        } catch (error) {
            throw error;
        }
    }

    static async getTasksByMonth() {
        const query = 'SELECT  EXTRACT(MONTH FROM date) AS month, COUNT(id) AS task_count FROM "Service" WHERE status = \'completed\' GROUP BY EXTRACT(MONTH FROM date) ORDER BY month  ';
        // const values = [id];

        

        try {
            const result = await db.query(query);

           
              
              const transformedResults = {};
              
              // Initialize all months with 0
              for (let i = 1; i <= 12; i++) {
                transformedResults[i] = 0;
              }
              
              // Fill in the task_count from the results
              result.rows.forEach(result => {
                transformedResults[result.month] = parseInt(result.task_count, 10);
              });
              
            //   console.log(transformedResults);
              




            // console.log(result.rows);
            return transformedResults;

        } catch (error) {
            throw error;
        }
    }





    // Add other static methods for CRUD operations as needed
}

module.exports = Service;
