import express from "express";
import {readDB, writeDB } from "../db.js";
import crypto from "crypto";
import { read } from "fs";

const router = express.Router();

function createID(students) {
    let id;
    do {
        id = crypto.randomBytes(2).toString("hex");
    } while (students.some(student => student.id === id));
    return id;
}

router.post("/add", (req, res) => {
    const {fname, lname, favg} = req.body;
    const db = readDB();
    const id = createID(db.students);
    const student = {
        id: id,
        fname: fname,
        lname: lname,
        favg: favg
    }
    db.students.push(student);
    writeDB(db);
    res.status(201).send("Successfully added user!");
});

router.get("/list", (req, res) => {
    const list = readDB();
    res.send(list.students);
})

export default router;