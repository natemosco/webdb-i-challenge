const express = require("express");

const db = require("../dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then(accounts => {
      //console.log(accounts, 'response from GET /');
      res.status(200).json(accounts);
    })
    .catch(error => {
      console.log(error, "Error from GET accounts");
      res.status(500).json({ errorMessage: "internal error fetching " });
    });
});
router.get("/:id", (req, res) => {
  db.select("*")
    .from("accounts")
    .where({ id: req.params.id })
    .first()
    .then(singleAccount => {
      //console.log(singleAccount, 'response from GET /');
      res.status(200).json(singleAccount);
    })
    .catch(error => {
      console.log(error, "Error from get /");
      res
        .status(500)
        .json({ errorMessage: "internal error fetching get by id" });
    });
});
router.post("/", (req, res) => {
  const accountDetails = req.body;
  db("account")
    .insert(accountDetails, "id")
    .then(ids => {
      //console.log(ids, 'response from POST accounts/');
      db("accounts")
        .where({ id })
        .first()
        .then(account => {
          res.status(200).json(account);
        });
    })
    .catch(error => {
      console.log(error, "Error from POST acctountDetails");
      res
        .status(500)
        .json({ errorMessage: "internal error posting new accountDetails " });
    });
});
router.delete("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .del()
    .then(count => {
      res
        .status(200)
        .json({ message: `Successfully deletes${count} account(s)` });
    })
    .catch(error => {
      console.log(error, "Error from delete account by :id");
      res
        .status(500)
        .json({ errorMessage: "internal error deleting account " });
    });
});
router.put("/:id", (req, res) => {
  const updates = req.body;
  db("accounts")
    .where({ id: req.params.id })
    .update(updates)
    .then(count => {
      res
        .status(200)
        .json({ message: `Success updating ${count} accounts records` });
    })
    .catch(error => {
      console.log(error, "Error from PUT accounts /");
      res
        .status(500)
        .json({ errorMessage: "internal error updating account " });
    });
});
module.exports = router;
