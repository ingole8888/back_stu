const express = require("express");
const mongoose = require("mongoose");
const adModel = require("../models/adsmodel")

const adsController = express.Router();

adsController.post("/addads", async (req, res) => {
    const { companyId, primaryText, headline, description, CTA, imageUrl } = req.body;

    try {
        const rag = await adModel.findOne({ primaryText });

        if (rag) {
            return res
                .status(501)
                .send({ status: 501, message: "ad already present!" });
        }

        const ad = new adModel({
            companyId, primaryText, headline, description, CTA, imageUrl
        });

        await ad.save();
        return res
            .status(200)
            .send({ status: 200, message: "ad register successfull", ad });
    } catch (error) {
        res.send(error)
    }
});

adsController.get("/getads", async (req, res) => {
    try {
        const ad = await adModel.find();
        res.send(ad);
    } catch (error) {
        res.send(error)
    }
});




module.exports = adsController