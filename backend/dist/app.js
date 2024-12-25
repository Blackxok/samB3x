"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// .env faylini yuklash
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_json_1 = __importDefault(require("./db.json"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4100;
// Middleware
app.use(body_parser_1.default.json());
// Xatoliklarni qayta ishlovchi middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message || 'Ichki server xatosi' });
};
// Router komponentini yaratish
const router = express_1.default.Router();
// Bosh sahifa route
app.get('/', (req, res) => {
    res.status(200).json(db_json_1.default);
});
// /page-find yo'nalishi uchun POST so'rovi
router.post('/page-find', (req, res, next) => {
    try {
        const { firstCategory } = req.body;
        const categoryData = db_json_1.default.page[firstCategory];
        if (!categoryData) {
            return res.status(404).json({ message: 'Kategoriya topilmadi' });
        }
        res.status(200).json(categoryData);
    }
    catch (error) {
        next(error);
    }
});
// /page-find/:id yo'nalishi uchun GET so'rovi
router.get('/page-find/:id', (req, res, next) => {
    try {
        const product = db_json_1.default.productPage.find(c => c._id === req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Mahsulot topilmadi' });
        }
        res.status(200).json(product);
    }
    catch (error) {
        next(error);
    }
});
// Routerni ulash
app.use('/api', router);
// Xatolikni qayta ishlovchi middleware-ni ulash
app.use(errorHandler);
// Serverni ishga tushirish
app.listen(PORT, () => {
    console.log(`Server ${PORT} portida ishga tushdi`);
});
