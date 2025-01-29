/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./test/dto/create-test.dto"), { "CreateTestDto": {} }], [import("./test/dto/update-test.dto"), { "UpdateTestDto": {} }], [import("./test/entities/test.entity"), { "Test": {} }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String } } }], [import("./test/test.controller"), { "TestController": { "create": { type: String }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: String }, "remove": { type: String } } }]] } };
};