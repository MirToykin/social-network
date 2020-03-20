import React from "react";
import {create, act} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe("Profile status:", () => {
  test("after creation span should contain status", () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="It-kamasutra" />);
    });
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span.children[0]).toBe("It-kamasutra");
  });

  test("after creation span should be displayed", () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="It-kamasutra" />);
    });
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation input shouldn't be displayed", () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="It-kamasutra" />);
    });
    const instance = component.root;
    expect(() => instance.findByType("input")).toThrow();
  });
});