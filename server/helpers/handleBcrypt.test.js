const bcrypt = require('bcryptjs');
const textPplain = 'enanitos';

describe('pruebas unitarias con jest', () => {
  test('Comprobar si el has es correcto', async () => {
    await expect(bcrypt.hash(textPplain, 10)).resolves.toBe(
      '$2a$10$X/eIlA9VpLDiUHPhixgSruvYE/U6RSRPgxar8xDqYQaGkFp9gJDE2'
    );
  });
});
