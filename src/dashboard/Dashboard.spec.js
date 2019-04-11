// Test away
import React from "react";
import { render, cleanup } from "react-testing-library";
import 'react-testing-library/cleanup-after-each';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each'; //add this line to all your tests

import Dashboard from "./Dashboard";

afterEach(cleanup);

describe("<Dashboard />", () => {
  it("Matches the snapshot", () => {
    const { container } = render(<Dashboard />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders without issue", () => {
    render(<Dashboard />);
  });

  it("Renders all children", () => {
    render(<Dashboard />);

    expect(document.querySelector(".controls")).toBeTruthy();
    expect(document.querySelector(".display")).toBeTruthy();
  });
});