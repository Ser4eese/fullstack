"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ClientsRepository = void 0;
var typeorm_1 = require("typeorm");
var clients_entity_1 = require("./clients.entity");
/*@EntityRepository(Clients)
export class ClientsRepository extends Repository<Clients> {
  createClient = async (createClientDTO: CreateClientDTO) => {
    return await this.save(createClientDTO);
  };
}*/
var ClientsRepository = /** @class */ (function (_super) {
    __extends(ClientsRepository, _super);
    function ClientsRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientsRepository.prototype.createClients = function (createClientDTO) {
        return __awaiter(this, void 0, void 0, function () {
            var first_name, address, last_name, phone, email, datereg, client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        first_name = createClientDTO.first_name, address = createClientDTO.address, last_name = createClientDTO.last_name, phone = createClientDTO.phone, email = createClientDTO.email, datereg = createClientDTO.datereg;
                        client = new clients_entity_1.Clients();
                        client.first_name = first_name;
                        client.address = address;
                        client.last_name = last_name;
                        client.phone = phone;
                        client.email = email;
                        client.datereg = datereg;
                        return [4 /*yield*/, this.save(createClientDTO)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, client];
                }
            });
        });
    };
    ClientsRepository.prototype.addClient = function (createClientDTO, addClient) {
        return __awaiter(this, void 0, void 0, function () {
            var first_name, address, last_name, phone, email, datereg, now;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        first_name = createClientDTO.first_name, address = createClientDTO.address, last_name = createClientDTO.last_name, phone = createClientDTO.phone, email = createClientDTO.email, datereg = createClientDTO.datereg;
                        addClient.first_name = first_name;
                        addClient.address = address;
                        addClient.last_name = last_name;
                        addClient.phone = phone;
                        addClient.email = email;
                        now = new Date();
                        addClient.datereg = now.getFullYear + "-" + now.getMonth + " + " + now.getDay;
                        return [4 /*yield*/, this.save(createClientDTO)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, addClient];
                }
            });
        });
    };
    ClientsRepository = __decorate([
        typeorm_1.EntityRepository(clients_entity_1.Clients)
    ], ClientsRepository);
    return ClientsRepository;
}(typeorm_1.Repository));
exports.ClientsRepository = ClientsRepository;
