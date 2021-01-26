// Validação Formulário Contatos
function ValidarForumulario() {

    var fnome = document.form.nome;
    var femail = document.form.email;
    var ftelefone = document.form.telefone;
    var fdata = document.form.data;
    var flocalidade = document.form.local;
    var fmensagem = document.form.mensagem;
    if (nome_validacao(fnome, 2, 30)) {
        if (email_validacao(femail)) {
            if (telefone_validacao(ftelefone, 9)) {
                if (data_validacao (fdata)) {
                    if (localidade_validacao(flocalidade)) {
                        if (mensagem_validacao(fmensagem, 200)) {}
                    }    
                }
            } 
        }
    }
    return false;
}

// Validação do campo Nome - Formulário Contatos
function nome_validacao(fnome, p1, p2) {
    var fnome_l = fnome.value.length;
    var letras = /^[A-Za-z ÁÀÃÂÉÈÊÍÌÎÓÒÕÔÚÙÛÇáàãâéèêíìîóòõôúùûç]+$/;
    if (fnome_l == 0) {
        alert("Nome não pode estar vazio!");
        fnome.focus();
        return false;
    } else if (fnome_l >= p2 || fnome_l < p1) {
        alert("Nome tem que ter entre " + p1 + " e " + p2 + " caracteres!");
        fnome.focus();
        return false;
    } else if (fnome.value.match(letras)) {
        return true;
    } else {
        alert("Nome só pode ter caracteres algébricos!");
        fnome.focus();
        return false;
    }
    return true;
}

// Validação do campo E-mail - Formulário Contatos
function email_validacao(femail) {
    var tipomail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (femail.value.match(tipomail)) {
        return true;
    } else {
        alert("E-mail Inválido!");
        femail.focus();
        return false;
    }
}

// Validação do campo Contato - Formulário Contatos
function telefone_validacao(ftelefone, p1) {
    var numerost = /^[0-9]+$/;
    var ftelefone_l = ftelefone.value.length;
    if (ftelefone_l == 0) {
        alert("Contato não pode estar vazio!");
        ftelefone.focus();
        return false;
    } else if (ftelefone_l > p1 || ftelefone_l < p1) {
        alert("Contato tem de ter " + p1 + " números!");
        ftelefone.focus();
        return false;
    } else if (ftelefone.value.match(numerost)) {
        return true;
    } else {
        alert("Contato apenas pode ser preenchido com números!");
        ftelefone.focus();
        return false;
    }
}

// Validação do campo Data do Evento - Formulário Contatos
function data_validacao(fdata) {
    var fdata_l = fdata.value.length;
    if (fdata_l == 0) {
        alert("Data do Evento não pode estar vazia!");
        fdata.focus();
        return false;
    } else {
        return true;
    }
    return true;
}

// Validação do campo Local do Evento - Formulário Contatos
function localidade_validacao(flocalidade) {
    var flocalidade_l = flocalidade.value.length;
    var letras = /^[A-Za-z ÁÀÃÂÉÈÊÍÌÎÓÒÕÔÚÙÛÇáàãâéèêíìîóòõôúùûç]+$/;
    if (flocalidade_l == 0) {
        alert("Local do Evento não pode estar vazio!");
        flocalidade.focus();
        return false;
    } else if (flocalidade.value.match(letras)) {
        return true;
    } else {
        alert("Local do Evento só pode ter caracteres algébricos!");
        flocalidade.focus();
        return false;
    }
    return true;
}

// Validação do campo Mensagem - Formulário Contatos
function mensagem_validacao(fmensagem, p1) {
    var fmensagem_l = fmensagem.value.length;
    var letras = /^[A-Za-z ÁÀÃÂÉÈÊÍÌÎÓÒÕÔÚÙÛÇáàãâéèêíìîóòõôúùûç]+$/;
    if (fmensagem_l == 0) {
        alert("Mensagem não pode estar vazia!");
        fmensagem.focus();
        return false;
    } else if (fmensagem_l > p1) {
        alert("Mensagem só pode ter no máximo " + p1 + " caracteres!");
        fmensagem.focus();
        return false;
    } else if (fmensagem.value.match(letras)) {
        alert("Mensagem submetida! Obrigado");
        return true;
    } else {
        alert("Mensagem só pode ter caracteres algébricos!");
        fmensagem.focus();
        return false;
    }
    return true;
}


// Validação Formulário Avaliação
function ValidarForumulario2() {

    var fnome2 = document.form2.nome;
    var femail2 = document.form2.email;
    var ftelefone2 = document.form2.telefone;
    var fsessao2 = document.form2.sessao;
    var fdata2 = document.form2.data;
    var fmensagem2 = document.form2.mensagem;
    if (nome2_validacao(fnome2, 2, 30)) {
        if (email2_validacao(femail2)) {
            if (telefone2_validacao(ftelefone2, 9)) {
                if (sessao2_validacao(fsessao2)) {
                    if (data2_validacao(fdata2)) {
                        if (mensagem2_validacao(fmensagem2, 100)) {}
                    }
                }
            }
        }
    }
    return false;
}

// Validação do campo Nome - Formulário Avaliação
function nome2_validacao(fnome2, p1, p2) {
    var fnome_2 = fnome2.value.length;
    var letras = /^[A-Za-z ÁÀÃÂÉÈÊÍÌÎÓÒÕÔÚÙÛÇáàãâéèêíìîóòõôúùûç]+$/;
    if (fnome_2 == 0) {
        alert("Nome não pode estar vazio!");
        fnome2.focus();
        return false;
    } else if (fnome_2 >= p2 || fnome_2 < p1) {
        alert("Nome tem que ter entre " + p1 + " e " + p2 + " caracteres!");
        fnome2.focus();
        return false;
    } else if (fnome2.value.match(letras)) {
        return true;
    } else {
        alert("Nome só pode ter caracteres algébricos!");
        fnome2.focus();
        return false;
    }
    return true;
}

// Validação do campo E-mail - Formulário Avaliação
function email2_validacao(femail2) {
    var tipomail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (femail2.value.match(tipomail)) {
        return true;
    } else {
        alert("E-mail Inválido!");
        femail2.focus();
        return false;
    }
}

// Validação do campo Contato - Formulário Avaliação
function telefone2_validacao(ftelefone2, p1) {
    var numerost = /^[0-9]+$/;
    var ftelefone_2 = ftelefone2.value.length;
    if (ftelefone_2 == 0) {
        alert("Contato não pode estar vazio!");
        ftelefone2.focus();
        return false;
    } else if (ftelefone_2 > p1 || ftelefone_2 < p1) {
        alert("Contato tem de ter " + p1 + " números!");
        ftelefone2.focus();
        return false;
    } else if (ftelefone2.value.match(numerost)) {
        return true;
    } else {
        alert("Contato apenas pode ser preenchido com números!");
        ftelefone2.focus();
        return false;
    }
}

// Validação do campo Sessão Realizada - Formulário Avaliação
function sessao2_validacao(fsessao2) {
    var fsessao_2 = fsessao2.value.length;
    var letras = /^[A-Za-z ÁÀÃÂÉÈÊÍÌÎÓÒÕÔÚÙÛÇáàãâéèêíìîóòõôúùûç]+$/;
    if (fsessao_2 == 0) {
        alert("Sessão Realizada não pode estar vazia!");
        fsessao2.focus();
        return false;
    } else if (fsessao2.value.match(letras)) {
        return true;
    } else {
        alert("Sessão Realizada só pode ter caracteres algébricos!");
        fsessao2.focus();
        return false;
    }
    return true;
}

// Validação do campo Data da Sessão - Formulário Avaliação
function data2_validacao(fdata2) {
    var fdata_2 = fdata2.value.length;
    if (fdata_2 == 0) {
        alert("Data da Sessão não pode estar vazia!");
        fdata2.focus();
        return false;
    } else {
        return true;
    }
    return true;
}

// Validação do campo Mensagem - Formulário Avaliação
function mensagem2_validacao(fmensagem2, p1) {
    var fmensagem_2 = fmensagem2.value.length;
    var letras = /^[A-Za-z ÁÀÃÂÉÈÊÍÌÎÓÒÕÔÚÙÛÇáàãâéèêíìîóòõôúùûç]+$/;
    if (fmensagem_2 == 0) {
        alert("Mensagem não pode estar vazia!");
        fmensagem2.focus();
        return false;
    } else if (fmensagem_2 > p1) {
        alert("Mensagem só pode ter no máximo " + p1 + " caracteres!");
        fmensagem2.focus();
        return false;
    } else if (fmensagem2.value.match(letras)) {
        alert("Mensagem submetida! Obrigado");
        return true;
    } else {
        alert("Mensagem só pode ter caracteres algébricos!");
        fmensagem2.focus();
        return false;
    }
    return true;
}