document.addEventListener("DOMContentLoaded", function () {
    /* Cadastro de usuários */
    const form = document.getElementById("cadastroForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome").value;
            const data_nasc = document.getElementById("data_nasc").value;
            const email = document.getElementById("email").value;

            const pessoa = { 
                nome, 
                data_nasc, 
                email 
            };

            let pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
            pessoas.push(pessoa);
            localStorage.setItem("pessoas", JSON.stringify(pessoas));

            window.location.href = "listagem.html";
        });
    }

    /* Listagem de usuários */
    function carregarPessoas() {
        const listaPessoas = document.getElementById("listaUsers");
        if (!listaPessoas) return;

        const pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
        listaPessoas.innerHTML = "";

        pessoas.forEach((pessoa, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${pessoa.nome}</td>
                <td>${pessoa.data_nasc}</td>
                <td>${pessoa.email}</td>
                <td>
                    <button onclick="editarPessoa(${index})"><i class="fas fa-edit"></i></button>
                    <button onclick="excluirPessoa(${index})"><i class="fas fa-trash"></i></button>
                </td>
            `;
            listaPessoas.appendChild(row);
        });
    }

    /* Função para excluir usuário */
    function excluirPessoa(index) {
        let pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
        pessoas.splice(index, 1);
        localStorage.setItem("pessoas", JSON.stringify(pessoas));
        carregarPessoas();
    }

    /* Função para editar usuário */
    function editarPessoa(index) {
        let pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
        let pessoa = pessoas[index];

        localStorage.setItem("editIndex", index);
        localStorage.setItem("editPessoa", JSON.stringify(pessoa));
        window.location.href = "index.html";
    }

    /* Botão de voltar */
    function voltar() {
        window.location.href = "index.html";
    }

    /* Tornando funções acessíveis globalmente */
    window.carregarPessoas = carregarPessoas;
    window.excluirPessoa = excluirPessoa;
    window.editarPessoa = editarPessoa;
    window.voltar = voltar;

    /* Carregar lista de usuários ao abrir a página de listagem */
    carregarPessoas();
});