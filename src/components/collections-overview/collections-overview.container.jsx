import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionsOverview from './collections-overview';
import Spinner from '../spinner/spinner';


const GET_COLLECTIONS = gql`
    {
        collections {
            id
            title
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`;

const CollectionsOverviewContainer = () => {
    return (
        <Query query={GET_COLLECTIONS} >
            {
                ({ loading, error, data }) => {
                    console.log({loading});
                    console.log({error});
                    console.log({data});

                    return loading ? <Spinner /> : <CollectionsOverview collections={data.collections} />;
                }
            }
        </Query>
    );
};


export default CollectionsOverviewContainer;