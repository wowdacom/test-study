import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});

describe("Login", () => {
  it("renders a message", () => {
    //可以當成初始化的設定，也作為 input
    const wrapper = shallowMount(Login, {
      props: {
        message: "TESTING THE COMPOSITION API",
      },
    });

    expect(wrapper.find(".message").text()).to.include(
      "TESTING THE COMPOSITION API"
    );
  });
});

describe("Login Click Counting", () => {
  it("increments a count when button is clicked", async () => {
    const wrapper = shallowMount(Login, {
      props: { message: "" },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.find(".count").text()).to.include("Count: 1");
  });
});
