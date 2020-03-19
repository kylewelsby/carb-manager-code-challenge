import { shallowMount } from "@vue/test-utils";
import Component from "../../src/components/Rating.vue";

const wrapper = shallowMount(Component, {
  propsData: {
    value: 70,
    count: 200
  }
});

describe("Rating.vue", () => {
  it("displays ratings count", () => {
    expect(wrapper.find(".count").html()).toMatchInlineSnapshot(
      `<div class="count">200 ratings</div>`
    );
  });
  it("displays stars", () => {
    expect(wrapper.find(".stars").html()).toMatchInlineSnapshot(`
      <div class="stars"><svg width="12" height="12" fill="none" class="star" style="fill: url(#gradient1);">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.077 9.644L9.737 12l-.971-4.44L12 4.573l-4.259-.386L6.077 0 4.413 4.187l-4.26.386L3.389 7.56 2.416 12l3.66-2.356z"></path>
          <defs>
            <linearGradient id="gradient1">
              <stop id="stop1" offset="100%" stop-opacity="1"></stop>
              <stop id="stop2" offset="100%" stop-opacity="1"></stop>
              <stop id="stop3" offset="100%" stop-opacity="1"></stop>
              <stop id="stop4" offset="100%" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
        </svg><svg width="12" height="12" fill="none" class="star" style="fill: url(#gradient2);">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.077 9.644L9.737 12l-.971-4.44L12 4.573l-4.259-.386L6.077 0 4.413 4.187l-4.26.386L3.389 7.56 2.416 12l3.66-2.356z"></path>
          <defs>
            <linearGradient id="gradient2">
              <stop id="stop1" offset="100%" stop-opacity="1"></stop>
              <stop id="stop2" offset="100%" stop-opacity="1"></stop>
              <stop id="stop3" offset="100%" stop-opacity="1"></stop>
              <stop id="stop4" offset="100%" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
        </svg><svg width="12" height="12" fill="none" class="star" style="fill: url(#gradient3);">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.077 9.644L9.737 12l-.971-4.44L12 4.573l-4.259-.386L6.077 0 4.413 4.187l-4.26.386L3.389 7.56 2.416 12l3.66-2.356z"></path>
          <defs>
            <linearGradient id="gradient3">
              <stop id="stop1" offset="100%" stop-opacity="1"></stop>
              <stop id="stop2" offset="100%" stop-opacity="1"></stop>
              <stop id="stop3" offset="100%" stop-opacity="1"></stop>
              <stop id="stop4" offset="100%" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
        </svg><svg width="12" height="12" fill="none" class="star" style="fill: url(#gradient4);">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.077 9.644L9.737 12l-.971-4.44L12 4.573l-4.259-.386L6.077 0 4.413 4.187l-4.26.386L3.389 7.56 2.416 12l3.66-2.356z"></path>
          <defs>
            <linearGradient id="gradient4">
              <stop id="stop1" offset="50%" stop-opacity="1"></stop>
              <stop id="stop2" offset="50%" stop-opacity="1"></stop>
              <stop id="stop3" offset="50%" stop-opacity="1"></stop>
              <stop id="stop4" offset="100%" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
        </svg><svg width="12" height="12" fill="none" class="star" style="fill: url(#gradient5);">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.077 9.644L9.737 12l-.971-4.44L12 4.573l-4.259-.386L6.077 0 4.413 4.187l-4.26.386L3.389 7.56 2.416 12l3.66-2.356z"></path>
          <defs>
            <linearGradient id="gradient5">
              <stop id="stop1" offset="0%" stop-opacity="1"></stop>
              <stop id="stop2" offset="0%" stop-opacity="1"></stop>
              <stop id="stop3" offset="0%" stop-opacity="1"></stop>
              <stop id="stop4" offset="100%" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
        </svg></div>
    `);
  });
});
