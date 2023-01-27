/**
 * @generated SignedSource<<24f61f923ba6c14fc09158d4dc733c7a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type indexPageQuery$variables = {};
export type indexPageQuery$data = {
  readonly me: {
    readonly __typename: "Error";
    readonly message: string;
  } | {
    readonly __typename: "QueryMeSuccess";
    readonly data: {
      readonly email: string;
      readonly id: string;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type indexPageQuery = {
  response: indexPageQuery$data;
  variables: indexPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "me",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "data",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "type": "QueryMeSuccess",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "message",
            "storageKey": null
          }
        ],
        "type": "Error",
        "abstractKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "indexPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "indexPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9a5e0235640bff406c4cc48cb2865ab6",
    "id": null,
    "metadata": {},
    "name": "indexPageQuery",
    "operationKind": "query",
    "text": "query indexPageQuery {\n  me {\n    __typename\n    ... on QueryMeSuccess {\n      data {\n        id\n        email\n      }\n    }\n    ... on Error {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e15c0bc3ffaf50f75e731dc23513d88f";

export default node;
