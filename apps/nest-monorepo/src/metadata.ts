/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./cat/entities/cat.entity"), { "Cat": { exampleField: { required: true, type: () => Number } } }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String } } }]] } };
};