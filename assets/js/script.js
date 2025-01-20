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

        <div class="comprador">
            <p><strong>Identificação do Comprador</strong></p>
            <p>Nome:________________________________</p>
            <p>Ident.:_____________Org. Emssor:_____</p>
            <p>End.:___________________________________________________________</p>
            <p>Cidade:___________________UF:________</p>
            <p>Telefone:_______________________</p>
            
        </div>
        
        <div class="fornecedor">
            <p><strong>Identificação do Fornecedor</strong></p>
            <p>__________________________</p>
            <p>Data____/____/_____</p>
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
