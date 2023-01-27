/**
 * @generated SignedSource<<0d242d028768ce327de712357e2e294b>>
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
    readonly email: string;
    readonly id: string;
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
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
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
    "cacheID": "0687e004dd773e14fcfb7c3fc6a65adf",
    "id": null,
    "metadata": {},
    "name": "indexPageQuery",
    "operationKind": "query",
    "text": "query indexPageQuery {\n  me {\n    id\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "6444907175497abba26c2232e2c59b04";

export default node;
