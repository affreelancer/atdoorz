const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
const Shop = require("../model/shop");
const sendMail = require("../utils/sendMail");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendShopToken = require("../utils/shopToken");

// Create Shop
exports.createShop = catchAsyncErrors(async (req, res, next) => {
    const { email } = req.body;
    const sellerEmail = await Shop.findOne({ email });
    if (sellerEmail) {
        return next(new ErrorHandler("User already exists", 400));
    }

    const myCloud = await cloudinary.uploader.upload(req.body.avatar, {
        folder: "avatars",
    });

    const seller = {
        name: req.body.name,
        email: email,
        password: req.body.password,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        },
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        zipCode: req.body.zipCode,
    };

    const activationToken = createActivationToken(seller);

    const activationUrl = `http://localhost:3000/shop/activation/${activationToken}`;

    try {
        await sendMail({
            email: seller.email,
            subject: "Activate your Shop",
            message: `Hello ${seller.name}, please click on the link to activate your shop: ${activationUrl}`,
        });
        res.status(201).json({
            success: true,
            message: `please check your email:- ${seller.email} to activate your shop!`,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
});

// Create activation token
const createActivationToken = (seller) => {
    return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
        expiresIn: "10m",
    });
};

// Activate User
exports.activateUser = catchAsyncErrors(async (req, res, next) => {
    const { activation_token } = req.body;
console.log('s1');
    const newSeller = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);

    if (!newSeller) {
        return next(new ErrorHandler("Invalid token", 300));
    }
console.log('verified');

    const { name, email, password, avatar, zipCode, address, phoneNumber } = newSeller;
console.log(name, email, password, avatar, zipCode, address, phoneNumber);
    let seller = await Shop.findOne({ email });

    if (seller) {
        return next(new ErrorHandler("User already exists", 400));
    }

    seller = await Shop.create({
        name,
        email,
        avatar,
        password,
        zipCode,
        address,
        phoneNumber,
    });

    sendShopToken(seller, 201, res);
});

// Login Shop
exports.loginShop = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please provide the all fields!", 400));
    }

    const user = await Shop.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("User doesn't exist!", 400));
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
        return next(
            new ErrorHandler("Please provide the correct information", 400)
        );
    }

    sendShopToken(user, 201, res);
});

// Load Shop
exports.getSeller = catchAsyncErrors(async (req, res, next) => {
    const seller = await Shop.findById(req.seller._id);

    if (!seller) {
        return next(new ErrorHandler("User doesn't exist", 400));
    }

    res.status(200).json({
        success: true,
        seller,
    });
});

// Logout Shop
exports.logoutSeller = catchAsyncErrors(async (req, res, next) => {
    res.cookie("seller_token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        sameSite: "none",
        secure: true,
    });
    res.status(201).json({
        success: true,
        message: "Log out successful!",
    });
});

// Get Shop Info
exports.getShopInfo = catchAsyncErrors(async (req, res, next) => {
    const shop = await Shop.findById(req.params.id);
    res.status(201).json({
        success: true,
        shop,
    });
});

// Update Shop Profile Picture
exports.updateShopAvatar = catchAsyncErrors(async (req, res, next) => {
    let existsSeller = await Shop.findById(req.seller._id);

    const imageId = existsSeller.avatar.public_id;

    await cloudinary.v2.uploader.destroy(imageId);

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 150,
    });

    existsSeller.avatar = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
    };

    await existsSeller.save();

    res.status(200).json({
        success: true,
        seller: existsSeller,
    });
});

// Update Seller Info
exports.updateSellerInfo = catchAsyncErrors(async (req, res, next) => {
    const { name, description, address, phoneNumber, zipCode } = req.body;

    const shop = await Shop.findOne(req.seller._id);

    if (!shop) {
        return next(new ErrorHandler("User not found", 400));
    }

    shop.name = name;
    shop.description = description;
    shop.address = address;
    shop.phoneNumber = phoneNumber;
    shop.zipCode = zipCode;

    await shop.save();

    res.status(201).json({
        success: true,
        shop,
    });
});

// Get All Sellers (Admin)
exports.getAllSellers = catchAsyncErrors(async (req, res, next) => {
    const sellers = await Shop.find().sort({
        createdAt: -1,
    });
    res.status(201).json({
        success: true,
        sellers,
    });
});

// Delete Seller (Admin)
exports.deleteSeller = catchAsyncErrors(async (req, res, next) => {
    const seller = await Shop.findById(req.params.id);

    if (!seller) {
        return next(
            new ErrorHandler("Seller is not available with this id", 400)
        );
    }

    await Shop.findByIdAndDelete(req.params.id);

    res.status(201).json({
        success: true,
        message: "Seller deleted successfully!",
    });
});

// Update Payment Methods
exports.updatePaymentMethods = catchAsyncErrors(async (req, res, next) => {
    const { withdrawMethod } = req.body;

    const seller = await Shop.findByIdAndUpdate(req.seller._id, {
        withdrawMethod,
    });

    res.status(201).json({
        success: true,
        seller,
    });
});

// Delete Withdraw Methods
exports.deleteWithdrawMethods = catchAsyncErrors(async (req, res, next) => {
    const seller = await Shop.findById(req.seller._id);

    if (!seller) {
        return next(new ErrorHandler("Seller not found with this id", 400));
    }

    seller.withdrawMethod = null;

    await seller.save();

    res.status(201).json({
        success: true,
        seller,
    });
});
