import { expect, test, vi } from 'vitest';

// Función fetchUser modificada para usar la API fetch del navegador
async function fetchUser(userId: number) {
  const response = await fetch(`https://dummyjson.com/users/${userId}`);
  const user = await response.json();
  return user;
}

// Mock de la función global fetch
vi.stubGlobal('fetch', vi.fn());

test('fetchUser returns user data', async () => {
  // Mock de la respuesta
  const mockUser = { id: 1, firstName: 'John', lastName: 'Doe' };
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    json: async () => mockUser,
  });

  const user = await fetchUser(1);
  expect(user).toHaveProperty('firstName');
  expect(user).toHaveProperty('lastName');
  expect(user.firstName).toBe('John');
  expect(user.lastName).toBe('Doe');
});