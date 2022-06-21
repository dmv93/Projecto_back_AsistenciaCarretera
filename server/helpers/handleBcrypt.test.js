const rutaFuncion = require('../helpers/handleBcrypt');
const contrasena = "qwer"
const hash = "$2a$10$oIpqkF2n0oHjd8WIPB5LB.O9VF9D8beB7L1COZ4d24Jd/d7eleEuK"





    describe('Comprobar AUTH', () => {
        test('Comprobar si la encriptacion funciona', async () => {
          const data = await rutaFuncion.encrypt(contrasena);
            expect(data).toBe(hash);
        });
        test('Comprobar si la contraseña encriptada es igual a la contraseña en texto plano', async () => {
          const data1 = await rutaFuncion.compare(contrasena, hash);
            expect(data1).toBeTruthy();
          
      });
    });
