// Test away!
import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each'; //add this line to all your tests

import Dashboard from "../dashboard/Dashboard";


describe("<Controls />", () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renders expected initial state", () => {
    const { getByText } = render( <Dashboard /> );
    getByText('Close Gate')
    getByText('Lock Gate')
  });

  describe('Toggle Open and Close Gate', () => {
      it("Close as expected", async () => {
        const { getByText } = render( <Dashboard /> );
        const toggleButton = getByText('Close Gate')
    
        await fireEvent.click(toggleButton)
    
        getByText('Open Gate')
      });
    
      it("open as expected", async () => {
        const { getByText } = render( <Dashboard /> );
        const toggleButton = getByText('Close Gate')
    
        await fireEvent.click(toggleButton)
        await fireEvent.click(toggleButton)
    
        getByText('Close Gate')
      }); 
  });

  describe('Toggle lock/unlock Gate', () => {
    it("lock as expected", async () => {
      const { getByText } = render( <Dashboard /> );
      const toggleGate = getByText('Close Gate')
      const toggleLock = getByText('Lock Gate')
        
      await fireEvent.click(toggleGate)
      getByText('Open Gate')
      
      await fireEvent.click(toggleLock)
      getByText('Unlock Gate')
    });
  
    it("unlock as expected", async () => {
        const { getByText } = render( <Dashboard /> );
        const toggleGate = getByText('Close Gate')
        const toggleLock = getByText('Lock Gate')
          
        await fireEvent.click(toggleGate)
        getByText('Open Gate')
        
        await fireEvent.click(toggleLock)
        await fireEvent.click(toggleLock)
        getByText('Lock Gate')
      });
  });

});