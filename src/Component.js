import * as React from 'react';
import { testQuery } from './graphql';
import { graphql, withApollo } from 'react-apollo';


function Component(props) {

    console.log(props.data);
    console.log('error', props.data.error)

    return <p>{props.data.test ? props.data.test : 'NOT WORKING'}</p>
}

const ComponentWithData = graphql(testQuery)(Component);

export default withApollo(ComponentWithData);
