const bcryptjs = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { first_name, last_name, email, password, profile_pic } = req.body;

    const db = req.app.get("db");
  },
};
