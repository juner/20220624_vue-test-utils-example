import { describe, test, expect } from "@jest/globals";
import HelloWorld from "../HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe("HelloWorld.vue", () => {
  test("mount test", () => {
    const mounted = shallowMount(HelloWorld, {
      propsData: { msg: "HelloWorld!" },
    });
    console.debug("html:%o",  mounted.element.innerHTML);
    mounted.element
    expect(mounted.find("h1").text()).toBe("HelloWorld!");
  });
});
