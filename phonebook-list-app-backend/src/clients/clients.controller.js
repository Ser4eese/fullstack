"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ClientsController = void 0;
var common_1 = require("@nestjs/common");
var ClientsController = /** @class */ (function () {
    function ClientsController(clientService) {
        this.clientService = clientService;
    }
    ClientsController.prototype.addClient = function (createClientDto) {
        return this.clientService.addClient(createClientDto);
    };
    ClientsController.prototype.getAllClients = function () {
        return this.clientService.getAllClients();
    };
    ClientsController.prototype.getClient = function (id) {
        return this.clientService.getClient(id);
    };
    /* @Put(':id')
     update(@Param('id') id: string) {
         return ;
     }*/
    ClientsController.prototype.remove = function (id) {
        return this.clientService.deleteClient(id);
    };
    __decorate([
        common_1.Post(),
        common_1.HttpCode(common_1.HttpStatus.CREATED),
        __param(0, common_1.Body())
    ], ClientsController.prototype, "addClient");
    __decorate([
        common_1.Get()
    ], ClientsController.prototype, "getAllClients");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], ClientsController.prototype, "getClient");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], ClientsController.prototype, "remove");
    ClientsController = __decorate([
        common_1.Controller('clients')
    ], ClientsController);
    return ClientsController;
}());
exports.ClientsController = ClientsController;
