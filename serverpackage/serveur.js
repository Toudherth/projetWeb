var express = require("express");
const req = require("express/lib/request");
var app= express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});
var MongoClient= require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017";
app.listen(8888);
console.log("Serveur demarré");

const client = new MongoClient(url);


async function main(){
    console.log("OK");
    client.connect()
    .then(
        client => {
            db=  client.db("COVOITURAGESDB"); 

            // connexion 
             app.post("/internaute/connexion", async (req,res) => {
			console.log("/internautes/connexion avec ", req.body);
			let document = await db.collection("internautes").find(req.body).toArray();
			if (document.length == 1)
				res.json({"resultat": 1, "message": "Authentification réussie"});
			else res.json({"resultat": 0, "message": "Email et/ou mot de passe incorrect"});
		        }); 
        // Fonctionnalité 1
        // Ajouter Internaute    
        app.post("/internautes/add", async (req,res) => {
            console.log("/internaute/add avec ", req.body);
            try{
                const document = await db.collection("internautes").insertOne(req.body); //.toArray();
                res.status(200).json(document);
            }catch (error){
                console.error(error);
                res.status(500).json(error);
            }
        });

        // Fonctionnalité 2
        // Ajouter covoiturage   
        app.post("/covoiturages/add", async (req,res) => {
            console.log("/covoiturages/add avec ", req.body);
            try{
            let document = await db.collection("covoiturages").insertOne(req.body); //.toArray();
                res.status(200).json(document);
            }catch (error){
                console.error(error);
                res.status(500).json(error);
            }
        });
          // Fonctionnalité 3 : recherche 
          app.get("/covoiturage/:villedepart/:villearrive/:datejour/:prixmax", async (req, res) => {
            console.log("/covoiturages/" + req.params.villedepart + " - " + req.params.villearrive + " pour le : " + req.params.datejour + " prix : " + req.params.prixmax + "€");
            
            let documents = await db.collection("covoiturages").find({
                villedepart: req.params.villedepart,
                villearrive: req.params.villearrive,
                datejour: req.params.datejour,
                prixmax: req.params.prixmax
            }).toArray();
            
            let listeDocuments = []; // Créer une liste vide
            
            documents.forEach((document) => {
                listeDocuments.push(document); // Ajouter chaque document à la liste
            });
            
            res.json(listeDocuments); // Renvoyer la liste au format JSON
            });

        //Fonctionnalité 4 :
        // Selectionnée Covoiturage et rajouter dans transport 

        app.post("/covoiturages/addtrasport", async(req, res)=>{
            console.log("/transport/add", req.body);
            try{
                const document = await db.collection("transports").insertOne(req.body);  // ajouter transport a partir de la selection d'un covoiturage 
            }catch(error){
                console.error(error);
            }
        });
        
            // Afficher les covoiturages existant
        app.get("/covoiturages", async (req, res) => {
            console.log("/covoiturages/");
            let documents = await db.collection("covoiturages").find().toArray();
            res.json(documents);
        });

        app.get("/internautes/:nom/:prenom", async (req, res) => {
            console.log("/internautes/" + req.params.nom + "/" + req.params.prenom);
            let documents = await db.collection("internautes").find({nom: req.params.nom, prenom: req.params.prenom}).toArray();
            res.json(documents);
        });

      
       
     
       
    });
}
main();   // il faut faire appel a la fonction main 
