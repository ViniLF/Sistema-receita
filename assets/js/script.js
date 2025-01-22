function generateRecipe() {
    const patientName = document.getElementById('patient-name').value;
    const prescription = document.getElementById('prescription').value;
    const medicationName = document.getElementById('medication-name').value;
    const dosage = document.getElementById('dosage').value;
    const quantity = document.getElementById('quantity').value;
    const dosageAmount = document.getElementById('dosage-amount').value;
    const administration = document.getElementById('administration').value;
    const dosageInstructions = document.getElementById('dosage-instructions').value;

    const recipeContent = `
        <h2 class="title-prescription"><strong>Receituário</strong> ${prescription}</h2>
        <div class="emitente">
            <h3>IDENTIFICAÇÃO DO EMITENTE</h3>
            <p>Nome completo: _____________________________________________________________</p>
            <p>Endereço Completo e Telefone: _________________________________________________</p>
            <p>Cidade: _______________________________ UF: _________________</p>
            <p>CRM: _____________________ UF: _________ Data: ____/____/_____</p>
        </div>
        <div class="name">
            <p><strong>Paciente:</strong> ${patientName}</p>
        </div>
        <h3>Prescrição:</h3>
        <p>${medicationName} ${dosage} ________________ ${quantity}</p>
        <p>Tomar ${dosageAmount} ${administration} ${dosageInstructions}</p>

        <div class="bottom-section">
            <div class="comprador">
                <h2><strong>Identificação do Comprador</strong></h2>
                <div class="inline-group">
                    <label>Nome:</label>
                    <span class="line"></span>
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

    const recipeOutput = document.getElementById('recipe');

    recipeOutput.innerHTML = `
        <div class="recipe-wrapper">
            <div class="recipe">${recipeContent}</div>
            <div class="recipe">${recipeContent}</div>
        </div>
    `;

    document.getElementById('recipe-output').style.display = 'block';
}
