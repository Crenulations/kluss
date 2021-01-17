const express = require("express")
const mongoose = require("mongoose")
const api_routes = require("../routes/api_routes")
const primary_routes = require("../routes/primary_routes")

mongoose // Mongo?DB database connection which contains REST API
	.connect("mongodb://localhost:27017/PrimaryData", { useNewUrlParser: true })
	.then(() => {

		const app = express()

    // Set ejs view-engine
    app.set('views', 'kluss/views')
    app.set('view engine', 'ejs')

    // Implement routes
		app.use("/api", api_routes)
		app.use("/", primary_routes)

		app.listen(80, () => {
      console.log("Succesful connection to port 80")
		})
	})
