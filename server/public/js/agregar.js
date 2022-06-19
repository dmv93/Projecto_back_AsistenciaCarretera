const gruaForm = document.getElementById('grua-form');
const gruaId = document.getElementById('grua-id');
const gruaAddress = document.getElementById('grua-address');
// enviar POST para agregar grua
async function addGrua(e) {
  e.preventDefault();
  if (gruaId.value === '' || gruaAddress.value === '') {
    alert('Por favor, llene los campos');
  }
  const sendBody = {
    gruaId: gruaId.value,
    address: gruaAddress.value,
  };
  try {
    const res = await fetch('/grua', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendBody),
    });
    if (res.status === 400) {
      throw Error('La grúa ya existe');
    }
    alert('Grúa agregada');
    window.location.href = '/mapa.html';
  } catch (error) {
    alert(error);
    return;
  }
}
gruaForm.addEventListener('submit', addGrua);
