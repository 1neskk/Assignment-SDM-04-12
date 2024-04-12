import sgbd from "../sgbd.js";

const route = "/filmes";
const entity = "filmes";

function filmes(app) {
    app.get(route, function (req, res) {
        console.log("GET request " + route);
        res.json(sgbd.db[entity]);
    });
    
    app.get(route + "/:id", function (req, res) {
        console.log("GET request " + route + "/:id", req.params);
        res.json(sgbd.db[entity][req.params.id]);
    });
    
    app.post(route, function (req, res) {
        console.log("POST request " + route);
        console.log("body: ", req.body);
        sgbd.db[entity][req.body.filme] = req.body.filme;
        sgbd.write();
        res.json(sgbd.db[entity][req.body.filme]);
    });
    
    app.put(route + "/:id", function (req, res) {
        console.log("PUT request " + route + "/:id", req.params);
        console.log("body: ", req.body);
        sgbd.db[entity][req.params.id] = req.body.filme;
        sgbd.write();
        res.json(sgbd.db[entity][req.params.id]);
    });
    
    app.delete(route + "/:id", function (req, res) {
        console.log("PUT request " + route + "/:id", req.params);
        delete sgbd.db[entity][req.params.id];
        sgbd.write();
        res.json({});
    });
}

export default filmes;
