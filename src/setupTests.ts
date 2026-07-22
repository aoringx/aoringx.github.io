import "@testing-library/jest-dom";

class IntersectionObserverMock implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds = [];

  disconnect() {}
  observe() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  unobserve() {}
}

Object.defineProperty(globalThis, "IntersectionObserver", {
  configurable: true,
  value: IntersectionObserverMock,
});

Object.defineProperty(window, "scrollTo", {
  configurable: true,
  value: jest.fn(),
});
