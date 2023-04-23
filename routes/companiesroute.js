const express = require("express");
const mongoose = require("mongoose");
const companyModel=require("../models/companiesmodel")

const companiesController = express.Router();

companiesController.post("/addcompanies", async (req, res) => {
    const { name, url } = req.body;
  
    try {
       // const _id = await companyModel.find({}).count() + 1

      const rag = await companyModel.findOne({ name });
  
      if (rag) {
        return res
          .status(501)
          .send({ status: 501, message: "company already present!" });
      }
  
      const comp = new companyModel({
        name,
        url,
      });
  
      await comp.save();
      return res
        .status(200)
        .send({ status: 200, message: "company register successfull", comp });
    } catch (error) {
      res.send(error)
    }
  });

  companiesController.get("/getcompanies", async (req, res) => {
    try {
      const comp = await companyModel.find();
      res.send(comp);
    } catch (error) {
      res.send(error)
    }
  });

  module.exports=companiesController