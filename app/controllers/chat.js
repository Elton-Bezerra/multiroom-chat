module.exports.iniciaChat = function (application, req, res) {
    var dadosForm = req.body;
    req.assert('apelido', 'O apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve ter entre 3 e 15 caracteres').len(3, 15);

    var erros = req.validationErrors();    
    if(erros){
        res.render("index", { validacao: erros, apelido: req.body.apelido });    
        return;
    }

    application.get('io').emit('msgParaCliente', {apelido: dadosForm.apelido, mensagem: ' acabou de entrar no chat.'});
    res.render('chat', {dadosForm: dadosForm});
}

