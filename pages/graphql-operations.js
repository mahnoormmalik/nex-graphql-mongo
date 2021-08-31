import gql from "graphql-tag";

export const FIND_CHARITY = gql`
    query CharityFuzzySearch($query: FuzzyFilter){
        charityNameFuzzySearch(input: $query){
            _id
            charity_name
        }
    }
`;

export const FIND_CHARITY1 = gql`
    query CharityFuzzySearch($query: FuzzyFilter){
        charityNameFuzzySearch(input: $query){
            _id
            charity_name
        }
    }
`;

export const FIND_CHARITY_TEST = gql`
    query{
        charityNameFuzzySearch(input: {name: "TRUST"}){
            _id
            charity_name
        }
  }
`

export const FIND_CHARITY_CONST = gql`
    query{
        fuzzySearchTest{
            _id
            charity_name
        }
    }
`