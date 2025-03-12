document.addEventListener("DOMContentLoaded", function () {
    /* Cadastro de usuários */
    const form = document.getElementById("cadastroForm");

    if (form) {
        // Verifica se há um usuário em edição e os campos ficam preenchidos
        const editIndex = localStorage.getItem("editIndex");
        if (editIndex !== null) {
            const pessoaEditada = JSON.parse(localStorage.getItem("editPessoa"));
            document.getElementById("nome").value = pessoaEditada.nome;
            document.getElementById("data_nasc").value = pessoaEditada.data_nasc;
            document.getElementById("email").value = pessoaEditada.email;
        }

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome").value;
            const data_nasc = document.getElementById("data_nasc").value;
            const email = document.getElementById("email").value;

            let pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];

            if (editIndex !== null) {
                // Atualiza os dados do usuário em edição
                pessoas[editIndex] = { nome, data_nasc, email };
                localStorage.removeItem("editIndex");
                localStorage.removeItem("editPessoa");
            } else {
                // Adiciona um novo usuário
                pessoas.push({ nome, data_nasc, email });
            }

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
