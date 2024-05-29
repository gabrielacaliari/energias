
function showFields() {
    const energyType = document.getElementById('energyType').value;

    document.getElementById('kineticFields').classList.add('hidden');
    document.getElementById('potentialGravitationalFields').classList.add('hidden');
    document.getElementById('potentialElasticFields').classList.add('hidden');

    if (energyType === 'kinetic') {
        document.getElementById('kineticFields').classList.remove('hidden');
    } else if (energyType === 'potentialGravitational') {
        document.getElementById('potentialGravitationalFields').classList.remove('hidden');
    } else if (energyType === 'potentialElastic') {
        document.getElementById('potentialElasticFields').classList.remove('hidden');
    }
}

function calculateEnergies() {
    const energyType = document.getElementById('energyType').value;
    let result = '';

    if (energyType === 'kinetic') {
        const mass = parseFloat(document.getElementById('mass').value);
        const velocity = parseFloat(document.getElementById('velocity').value);
        if (isNaN(mass) || isNaN(velocity)) {
            result = 'Por favor, insira valores válidos para massa e velocidade.';
        } else {
            const kineticEnergy = 0.5 * mass * velocity * velocity;
            result = `Energia Cinética: ${kineticEnergy.toFixed(2)} J`;
        }
    } else if (energyType === 'potentialGravitational') {
        const mass = parseFloat(document.getElementById('massGravity').value);
        const gravity = parseFloat(document.getElementById('gravity').value);
        const height = parseFloat(document.getElementById('height').value);
        if (isNaN(mass) || isNaN(gravity) || isNaN(height)) {
            result = 'Por favor, insira valores válidos para massa, gravidade e altura.';
        } else {
            const potentialGravitationalEnergy = mass * gravity * height;
            result = `Energia Potencial Gravitacional: ${potentialGravitationalEnergy.toFixed(2)} J`;
        }
    } else if (energyType === 'potentialElastic') {
        const springConstant = parseFloat(document.getElementById('springConstant').value);
        const displacement = parseFloat(document.getElementById('displacement').value);
        if (isNaN(springConstant) || isNaN(displacement)) {
            result = 'Por favor, insira valores válidos para a constante da mola e o deslocamento.';
        } else {
            const potentialElasticEnergy = 0.5 * springConstant * displacement * displacement;
            result = `Energia Potencial Elástica: ${potentialElasticEnergy.toFixed(2)} J`;
        }
    } else {
        result = 'Por favor, selecione um tipo de energia.';
    }

    document.getElementById('results').innerHTML = `<h2>Resultado:</h2><p>${result}</p>`;
}
