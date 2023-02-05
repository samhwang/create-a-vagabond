/**
 * @generated SignedSource<<bf93df10c235e00cebb135c67dbfe11c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type vagabondListPageQuery$variables = {};
export type vagabondListPageQuery$data = {
  readonly me: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"VagabondList_user">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"VagabondList_query">;
};
export type vagabondListPageQuery = {
  response: vagabondListPageQuery$data;
  variables: vagabondListPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v7 = [
  (v0/*: any*/),
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "vagabondListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "VagabondList_user"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "VagabondList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "vagabondListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "UserVagabondConnection",
            "kind": "LinkedField",
            "name": "vagabondConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserVagabondConnectionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Vagabond",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "charm",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cunning",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "finesse",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "luck",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "might",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "availablePoints",
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/),
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__id",
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": "vagabondConnection(first:10)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "VagabondList_user_vagabondConnection",
            "kind": "LinkedHandle",
            "name": "vagabondConnection"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "QueryVagabondClassConnection",
        "kind": "LinkedField",
        "name": "vagabondClassConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QueryVagabondClassConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "VagabondClass",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": "vagabondClassConnection(first:50)"
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "VagabondClassSelect_query_vagabondClassConnection",
        "kind": "LinkedHandle",
        "name": "vagabondClassConnection"
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "QueryRoguishFeatConnection",
        "kind": "LinkedField",
        "name": "roguishFeatConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QueryRoguishFeatConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RoguishFeat",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": (v7/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "roguishFeatConnection(first:50)"
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "id",
            "value": ""
          }
        ],
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v0/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startingCharm",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startingCunning",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startingFinesse",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startingLuck",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startingMight",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "VagabondClassStartingRoguishFeatsConnection",
                "kind": "LinkedField",
                "name": "startingRoguishFeats",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VagabondClassStartingRoguishFeatsConnectionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "RoguishFeat",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v0/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v6/*: any*/),
                "concreteType": "VagabondClassClassNatureConnection",
                "kind": "LinkedField",
                "name": "classNatureConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VagabondClassClassNatureConnectionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Nature",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": (v7/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "classNatureConnection(first:50)"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "drives",
                "storageKey": null
              }
            ],
            "type": "VagabondClass",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"\")"
      }
    ]
  },
  "params": {
    "cacheID": "2f8ab4f50763796ea16565e071974a0b",
    "id": null,
    "metadata": {},
    "name": "vagabondListPageQuery",
    "operationKind": "query",
    "text": "query vagabondListPageQuery {\n  me {\n    id\n    ...VagabondList_user\n  }\n  ...VagabondList_query\n}\n\nfragment ClassSpecificFields_query on Query {\n  ...RoguishFeatSelect_query\n  node(id: \"\") {\n    __typename\n    ... on VagabondClass {\n      startingCharm\n      startingCunning\n      startingFinesse\n      startingLuck\n      startingMight\n      ...ClassSpecificFields_useDefaultValue_class\n      ...useStartingPointLeft_class\n      ...NatureSelect_class\n      ...DrivesSelect_class\n      ...RoguishFeatSelect_class\n    }\n    id\n  }\n}\n\nfragment ClassSpecificFields_useDefaultValue_class on VagabondClass {\n  id\n  startingRoguishFeats {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n  startingCharm\n  startingCunning\n  startingFinesse\n  startingLuck\n  startingMight\n}\n\nfragment CreateVagabondDialog_query on Query {\n  ...VagabondClassSelect_query\n  ...ClassSpecificFields_query\n}\n\nfragment DrivesSelect_class on VagabondClass {\n  drives\n}\n\nfragment NatureSelect_class on VagabondClass {\n  classNatureConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment RoguishFeatSelect_class on VagabondClass {\n  startingRoguishFeats {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n\nfragment RoguishFeatSelect_query on Query {\n  roguishFeatConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment UpdateVagabondStatsDialog_vagabond on Vagabond {\n  id\n  charm\n  cunning\n  finesse\n  luck\n  might\n  availablePoints\n}\n\nfragment VagabondClassSelect_query on Query {\n  vagabondClassConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment VagabondListItem_vagabond on Vagabond {\n  id\n  name\n  charm\n  cunning\n  finesse\n  luck\n  might\n  availablePoints\n  ...UpdateVagabondStatsDialog_vagabond\n}\n\nfragment VagabondList_query on Query {\n  ...CreateVagabondDialog_query\n}\n\nfragment VagabondList_user on User {\n  vagabondConnection(first: 10) {\n    edges {\n      node {\n        ...VagabondListItem_vagabond\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment useStartingPointLeft_class on VagabondClass {\n  startingCharm\n  startingCunning\n  startingFinesse\n  startingLuck\n  startingMight\n}\n"
  }
};
})();

(node as any).hash = "d25416a6080312a8ce988dcae4ea3252";

export default node;
