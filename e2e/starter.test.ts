import { expect } from "detox";

describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.text("Start search"))).toBeVisible();
  });

  it("should show world screen after tap", async () => {
    await element(by.text("Use demo instance")).tap();
    await device.disableSynchronization();
    await web.element(by.web.id("topNavigatonDropdown")).tap();
  });
});
