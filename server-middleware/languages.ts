/* eslint-disable @typescript-eslint/no-unused-vars */

import { readdirSync, readFileSync, writeFileSync, unlinkSync } from "node:fs";
import * as path from "path";
import { Application, Request, Response } from "express";

const dir = path.resolve(path.join(__dirname, "..", "locales"));

export default function languages (app: Application) {
    app.get("/languages", (req:Request, res:Response) => {
        try {
            const languagesMap:Record<string, Record<string, any>> = {};
            readdirSync(dir).forEach((file) => {
                const matches = file.match(/^(.*)\.json$/);
                if (matches === null) {
                    return;
                }

                const code:string = matches[1];

                languagesMap[code] = readLanguage(code);
            });
            res.json(languagesMap);
        } catch (e) {
            res.status(500).json(e);
        }
    });
    app.get("/language", (req:Request, res:Response) => {
        try {
            const { lang } = req.query as {lang: string;};
            const content = readLanguage(lang);
            res.json(content);
        } catch (e) {
            res.status(500).json(e);
        }
    });
    app.patch("/language", (req:Request, res:Response) => {
        try {
            const { lang } = req.query as {lang: string;};
            const { path: keyPath, text } = req.body;
            const content = readLanguage(lang);

            let current = content;
            let lastKey = keyPath[0];

            while (keyPath.length) {
                const key = keyPath.shift();
                if (keyPath.length < 1) {
                    lastKey = key;
                } else {
                    current = current[key];
                }
            }

            current[lastKey] = text;

            writeLanguage(lang, content);
            res.json(content);
        } catch (e) {
            res.status(500).json(e);
        }
    });
    app.post("/language", (req:Request, res:Response) => {
        try {
            const content = readLanguage("en");
            writeLanguage(req.query.lang as string, content);
            res.json(content);
        } catch (e) {
            res.status(500).json(e);
        }
    });
    app.delete("/language", (req:Request, res:Response) => {
        try {
            const deletedFile = `${dir}/${req.query.lang}.json`;
            unlinkSync(deletedFile);
            res.sendStatus(200);
        } catch (e) {
            res.status(500).json(e);
        }
    });
}

function readLanguage (fileName:string): Record<string, any> {
    const filePath = `${dir}/${fileName}.json`;
    return JSON.parse(readFileSync(filePath, { encoding: "utf-8" }));
}

function writeLanguage (fileName:string, content: Record<string, any>):void {
    const filePath = `${dir}/${fileName}.json`;
    writeFileSync(filePath, JSON.stringify(content, null, 4));
}
