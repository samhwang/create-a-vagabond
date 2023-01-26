/**
 * @generated SignedSource<<3d07c3cc4331373bdd1c01b6772a18b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type indexPageQuery$variables = {};
export type indexPageQuery$data = {
  readonly hello: {
    readonly __typename: "Error";
    readonly message: string;
  } | {
    readonly __typename: "QueryHelloSuccess";
    readonly data: string;
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
    "args": [
      {
        "kind": "Literal",
        "name": "name",
        "value": "You"
      }
    ],
    "concreteType": null,
    "kind": "LinkedField",
    "name": "hello",
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
            "kind": "ScalarField",
            "name": "data",
            "storageKey": null
          }
        ],
        "type": "QueryHelloSuccess",
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
    "storageKey": "hello(name:\"You\")"
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
    "cacheID": "d1a0235c9764d33213d76386070b77d7",
    "id": null,
    "metadata": {},
    "name": "indexPageQuery",
    "operationKind": "query",
    "text": "query indexPageQuery {\n  hello(name: \"You\") {\n    __typename\n    ... on QueryHelloSuccess {\n      data\n    }\n    ... on Error {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c2287a444c6b9c0e26ebd6e34ad7534a";

export default node;
