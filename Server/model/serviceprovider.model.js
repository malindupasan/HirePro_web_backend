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
      return result.rows[0];
    } catch (error) {
      console.log(error);
      
    }

  }


  static async getNoCategoryRequests() {

    const query = 'SELECT "categoryReview".id,"categoryReview".providerid,"categoryReview".category,"ServiceProvider".name,"ServiceProvider".contact,"ServiceProvider".email ' +
                  'FROM "categoryReview" INNER JOIN "ServiceProvider" ON "categoryReview".providerid = "ServiceProvider".id ';
   
    try {
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      console.log(error);
    }
  }

  static async addCategory(providerid, category, categoryid) {
    try {
      const query1 = {
          text: 'SELECT category FROM public."ServiceProvider" where id=$1;',
          values : [providerid]
      };
      const taskCategories = await db.query(query1);
      const categories = taskCategories.rows[0].category ?? [];

      const newCategory = category;

      if (!(categories.includes(newCategory))){
          categories.push(newCategory);
      }

      console.log(categories);
      let newValue = "{";

      for ( let i=0 ; i<categories.length ; i++ ){
          newValue += categories[i];
          if ( i !== categories.length-1 ){
              newValue += ",";
          }
      }

      newValue += "}";

      console.log(newValue);

      const query2 = {
          text: 'UPDATE public."ServiceProvider" set category=$1 where id=$2;',
          values : [newValue, providerid]
      };
      const taskUpdate = await db.query(query2);

      const query3 = {
        text: 'DELETE FROM public."categoryReview" WHERE id=$1;',
        values : [categoryid]
      };
      const deleteCategory = await db.query(query3);
      return {message: 'Category Added Successfully'};

    } catch (error) {
      return {error: error.message};
    }
  }

  static async rejectCategory(providerid, category, categoryid) {
    try {
      const query3 = {
        text: 'DELETE FROM public."categoryReview" WHERE id=$1;',
        values : [categoryid]
      };
      const deleteCategory = await db.query(query3);
      return {message: 'Category Rejected Successfully'};

    } catch (error) {
      return {error: error.message};
    }
  }

  static async getSp() {
    try {
      const query3 = {
        text: 'SELECT * FROM public."ServiceProvider" LIMIT 5;',
        values : []
      };
      const deleteCategory = await db.query(query3);
      return deleteCategory.rows;

    } catch (error) {
      return {error: error.message};
    }
  }
 
  // Add other static methods for CRUD operations as needed
}

module.exports = ServiceProvider;
