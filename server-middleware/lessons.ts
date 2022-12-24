/* eslint-disable @typescript-eslint/no-unused-vars */

import { readFileSync, writeFileSync, unlinkSync } from "node:fs";
import * as path from "path";
import { Application, Request, Response } from "express";
import patchObject from "../lib/patchObject";

const dir = path.resolve(path.join(__dirname, "..", "content"));
type TQuery = {title: string; type: string;};
export default function lessons (app: Application) {
    app.get("/lesson", (req:Request, res:Response) => {
        try {
            const { title, type } = req.query as TQuery;
            const content = readLesson(type, title);
            res.json(content);
        } catch (e) {
            res.status(500).json(e);
        }
    });
    app.patch("/lesson", (req:Request, res:Response) => {
        try {
            const { title, type } = req.query as TQuery;
            const { path: keyPath, text } = req.body;
            const content = readLesson(type, title);

            patchObject(content, keyPath, text);

            writeLesson(type, title, content);
            res.json(content);
        } catch (e) {
            res.status(500).json(e);
        }
    });
    app.post("/lesson", (req:Request, res:Response) => {
        try {
            const { title, type } = req.query as TQuery;
            const { defaults } = req.body;
            const content = {
                ...(readLesson(type, "template")),
                ...defaults,
            };

            writeLesson(type, title, content);
            res.json(content);
        } catch (e) {
            res.status(500).json(e);
        }
    });
    app.delete("/lesson", (req:Request, res:Response) => {
        try {
            const { title, type } = req.query as TQuery;
            const deletedFile = path.join(dir, type, `${title}.json`);
            unlinkSync(deletedFile);

            res.sendStatus(200);
        } catch (e) {
            res.status(500).json(e);
        }
    });
}

function readLesson (type: string, fileName:string): Record<string, any> {
    const filePath = path.join(dir, type, `${fileName}.json`);
    return JSON.parse(readFileSync(filePath, { encoding: "utf-8" }));
}

function writeLesson (type: string, fileName:string, content: Record<string, any>):void {
    const filePath = path.join(dir, type, `${fileName}.json`);
    writeFileSync(filePath, JSON.stringify(content, null, 4));
}
