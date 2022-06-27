import { describe, test, expect } from "@jest/globals";
import HelloWorld from "../HelloWorld.vue";
import { mount } from "@vue/test-utils";

describe("HelloWorld.vue", () => {
  test("mount test", () => {
    const mounted = mount(HelloWorld, { propsData: { msg: "HelloWorld!" } });
    expect(mounted.find("h1").text()).toBe("HelloWorld!");
  });
});
