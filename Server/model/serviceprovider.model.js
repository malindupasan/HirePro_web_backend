const db = require('../config/db');
const bcrypt = require('bcrypt')

class ServiceProvider {
  constructor({ id, contact, name, email, nic,points, password_hash,bank_details,category }) {
    this.id = id;
    this.contact = contact;
    this.name = name;
    this.email = email;
    this.loyalty_points = loyalty_points;
    this.password_hash = password_hash;
    this.category=category;
    this.bank_details = bank_details;
    this.nic = nic;
    this.points = points;
  }

 
 
 
  static async getNoofServiceProviders() {

    const query = 'select count(id) as serviceprovidercount from "ServiceProvider"';
   

    try {
      const result = await db.query(query);
      //   console.log(result.rows[0]);
      return result.rows[0];
    } catch (error) {
      console.log(error);
      
    }

  }



 
  // Add other static methods for CRUD operations as needed
}

module.exports = ServiceProvider;
