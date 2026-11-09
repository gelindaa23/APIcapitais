import express from "express";

const app = express();

const PORT = 3000;

const estados = {
    BA: "Salvador",
    DF: "Brasília",
    MG: "Belo Horizonte",
    RJ: "Rio de Janeiro",
    AM: "Manaus",
    SP: "São Paulo",
};

app.get("/estados/:sigla", (req, res) => {

    const sigla = req.params.sigla.toUpperCase() as keyof typeof estados;

    const capital = estados[sigla];

    if (!capital) {
        return res.status(404).json({
            erro: "Estado não encontrado."
        });
    }
    res.status(200).json({
        sigla: sigla,
        capital: capital
    });
});

app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
});