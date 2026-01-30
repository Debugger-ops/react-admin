// __mocks__/@popperjs/core.ts
const actual = jest.requireActual('@popperjs/core');

const createPopper = jest.fn(() => ({
  state: {},
  destroy: jest.fn(),
  update: jest.fn(),
  forceUpdate: jest.fn(),
}));

export const placements = actual.placements;
export { createPopper };
export default { createPopper, placements };
