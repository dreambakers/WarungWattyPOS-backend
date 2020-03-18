var { User } = require('./user.model');

const signUp = async (req, res) => {
    try {
        const newUser = new User({
            email: req.body.email,
            password: req.body.password,
            type: req.body.userType
        });

        const user = await newUser.save();
        const token = await user.generateAuthToken();
        res.header('x-auth', token).send(user);
    }

    catch (error) {
        console.log(error);
        res.status(400).send({
            alreadyExists: error.alreadyExists || 0,
            success: 0
        });
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.header('x-auth', token).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send({ success: 0, notFound: error.notFound || 0 });
    }
}

const getAllUsersExcept = async ({ user }, res) => {
    try {
        const users = await User.find({_id: { $nin: [user._id] }});
        res.json({
            success: 1,
            users
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            msg: 'An error occured while getting the users'
        });
    }
}

const logout = async ({ user, token }, res) => {
    try {
        await user.removeToken(token);
        res.json({
            success: 1
        });
    } catch (error) {
        console.log('An error occurred logging out the user', error);
    }
}


module.exports = {
    login, signUp, logout, getAllUsersExcept
}