import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';
import * as React from 'react';

import { testQuery } from './graphql';
import { addTypenameToDocument } from 'apollo-client';

import Component from './Component';

/**
 * @return graphql data
 */
function mockGraphql() {

    const GraphQLMocks = [
      {
        request: {
          query: addTypenameToDocument(testQuery)
        },
        result: {
          data: {
            test: 'TESTING'
          }
        }
      }
    ];

    const wrapper = mount(
      <MockedProvider mocks={GraphQLMocks}>
        <Component />
      </MockedProvider>
    );

    return {
      wrapper
    };
}

describe('<Component>', () => {

    it('renders <p> with the text "TESTING', () => {

        const { wrapper } = mockGraphql();

        expect(wrapper.find('p').first().node.innerHTML).toBe('TESTING');
    });
});