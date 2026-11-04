// Autenticação SIMULADA (somente frontend).
// Quando o backend (PHP + MySQL) estiver pronto, troque Auth.entrar por uma chamada ao servidor.
var Auth = (function () {
  var CHAVE = 'vittacare_usuario';
  // Usuários de demonstração (em um sistema real, isto fica no banco, com senha em hash)
  var USUARIOS = [
    { nome: 'Administrador', email: 'admin@vittacare.com', senha: '123456' },
    { nome: 'Maria Oliveira', email: 'maria@vittacare.com', senha: '123456' }
  ];
  return {
    entrar: function (email, senha) {
      var achado = USUARIOS.filter(function (u) {
        return u.email.toLowerCase() === email.toLowerCase() && u.senha === senha;
      })[0];
      if (!achado) return false;
      try { sessionStorage.setItem(CHAVE, JSON.stringify({ nome: achado.nome, email: achado.email })); }
      catch (e) { return false; }
      return true;
    },
    usuario: function () {
      try { return JSON.parse(sessionStorage.getItem(CHAVE)); } catch (e) { return null; }
    },
    sair: function () {
      try { sessionStorage.removeItem(CHAVE); } catch (e) {}
    }
  };
})();
