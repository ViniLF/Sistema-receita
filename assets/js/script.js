/**
 * Valida o formulário para garantir que todos os campos obrigatórios sejam preenchidos.
 * @returns {boolean} Retorna true se o formulário for válido, caso contrário, false.
 */
function validateForm() {
    const form = document.getElementById('recipe-form');
    if (!form.checkValidity()) {
        alert('Por favor, preencha todos os campos obrigatórios corretamente.');
        return false;
    }
    return true;
}

/**
 * Gera a receita com base nos dados do formulário e inicia o processo de impressão.
 */
function generateRecipe() {
    if (!validateForm()) {
        return;
    }

    // Captura os valores dos campos do formulário
    const formData = {
        patientName: document.getElementById('patient-name').value,
        prescription: document.getElementById('prescription').value,
        medicationName: document.getElementById('medication-name').value,
        dosage: document.getElementById('dosage').value,
        quantity: document.getElementById('quantity').value,
        instructions: document.getElementById('instructions').value
    };

    // Template para o conteúdo da receita
    const recipeContent = `
        <h2 class="title-prescription"><strong>Receituário</strong> ${formData.prescription}</h2>
        <div class="emitente">
            <h3>IDENTIFICAÇÃO DO EMITENTE</h3>
            <p>Nome completo: _____________________________________________________________</p>
            <p>Endereço Completo e Telefone: _________________________________________________</p>
            <p>Cidade: _______________________________ UF: _________________</p>
            <p>CRM: _____________________ UF: _________ Data: ____/____/_____</p>
        </div>
        <div class="name">
            <p><strong>Paciente:</strong> ${formData.patientName}</p>
        </div>
        <h3 class="presc-title">Prescrição:</h3>
        <p class="first-line">${formData.medicationName} ${formData.dosage} ________________ ${formData.quantity}</p>
        <p class="second-line">${formData.instructions}</p>
        <div class="doctor-signature">
            <hr>
            <p>Assinatura do Médico</p>
        </div>
        <div class="bottom-section">
            <div class="comprador">
                <h2><strong>Identificação do Comprador</strong></h2>
                <div class="inline-group">
                    <label>Nome:</label>
                    <span class="line"></span>
                </div>
                <div class="inline-group">
                    <label>Ident.:</label>
                    <span class="line medium"></span>
                    <label>Org. Emissor:</label>
                    <span class="line short"></span>
                </div>
                <div class="inline-group">
                    <label>End.:</label>
                    <span class="line"></span>
                </div>
                <div class="inline-group">
                    <label>Cidade:</label>
                    <span class="line medium"></span>
                    <label>UF:</label>
                    <span class="line short"></span>
                </div>
                <div class="inline-group">
                    <label>Telefone:</label>
                    <span class="line"></span>
                </div>
            </div>
            <div class="fornecedor">
                <h2><strong>Identificação do Fornecedor</strong></h2>
                <p>__________________________</p>
                <p>Data____/____/_____</p>
            </div>
        </div>
    `;

    // Exibe a receita gerada no output
    const recipeOutput = document.getElementById('recipe');
    recipeOutput.innerHTML = `
        <div class="recipe-wrapper">
            <div class="recipe">${recipeContent}</div>
            <div class="recipe">${recipeContent}</div>
        </div>
    `;

    // Torna a seção de output visível e imprime a receita
    document.getElementById('recipe-output').style.display = 'block';
    window.print();
    document.getElementById('recipe-output').style.display = 'none';
}