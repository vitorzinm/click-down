// renomear tarefa inicial
const renomeadorTarefa = document.querySelector('.nome-da-tarefa');

renomeadorTarefa.addEventListener('click', function () {
    let novoNome = prompt('Digite o novo nome para a tarefa:');
    if (novoNome !== null && novoNome !== "") {
        renomeadorTarefa.textContent = novoNome;
    }
});

document.addEventListener('click', function (e) {

    if (e.target.classList.contains('add-subtarefa')) {

        let nomeSub = prompt('Digite o nome da subtarefa:');

        if (nomeSub !== null && nomeSub !== "") {

            const subtarefa = document.createElement('div');
            subtarefa.style.marginTop = '5px';

            subtarefa.innerHTML = `
                <button class="nome-subtarefa">${nomeSub}</button>
                <button class="finalizar-sub">✔</button>
                <button class="renomear-sub">✏</button>
            `;

            const container = e.target.closest('.tarefa').querySelector('.subtarefas');
            container.appendChild(subtarefa);
        }
    }

    if (e.target.classList.contains('finalizar-sub')) {
        const item = e.target.parentElement;
        item.style.textDecoration = 'line-through';
        item.style.opacity = '0.6';
    }

    if (e.target.classList.contains('renomear-sub')) {
        let novoNome = prompt('Novo nome da subtarefa:');
        if (novoNome !== null && novoNome !== "") {
            e.target.parentElement.querySelector('.nome-subtarefa').textContent = novoNome;
        }
    }

    if (e.target.classList.contains('finalizar-tarefa')) {
        const tarefa = e.target.closest('.tarefa');
        tarefa.style.textDecoration = 'line-through';
        tarefa.style.opacity = '0.5';
    }

    if (e.target.classList.contains('renomear-tarefa')) {
        let novoNome = prompt('Novo nome da tarefa:');
        if (novoNome !== null && novoNome !== "") {
            e.target.closest('.tarefa').querySelector('.nome-da-tarefa').textContent = novoNome;
        }
    }

    if (e.target.classList.contains('nome-da-tarefa')) {
        let novoNome = prompt('Digite o novo nome para a tarefa:');
        if (novoNome !== null && novoNome !== "") {
            e.target.textContent = novoNome;
        }
    }
});

document.querySelector('.add-tarefa').addEventListener('click', function () {

    let nomeTarefa = prompt('Digite o nome da nova tarefa:');

    if (nomeTarefa !== null && nomeTarefa !== "") {

        const novaTarefa = document.createElement('div');
        novaTarefa.classList.add('tarefa');

        novaTarefa.innerHTML = `
            <div class="text-1">
                <p class="exibicao-de-progresso">Em Progresso</p>
            </div>

            <div style="padding: 20px;">
                <div class="text-2">
                    <button class="nome-da-tarefa">${nomeTarefa}</button>
                </div>

                <div class="subtarefas"></div>

                <div class="funcoes-tarefa">
                    <hr>
                    <button class="add-subtarefa">+ Adicionar Subtarefa</button>
                    <button class="finalizar-tarefa">✔ Finalizar</button>
                    <button class="renomear-tarefa">✏ Renomear</button>
                </div>
            </div>
        `;

        document.querySelector('.lista-tarefas').appendChild(novaTarefa);
    }
});