/**
 * @generated SignedSource<<5c76469e1c70058c6317e836ffb82e67>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ReviewAndCreateStepQuery$variables = {};
export type ReviewAndCreateStepQuery$data = {
  readonly me: {
    readonly id: string;
  };
};
export type ReviewAndCreateStepQuery = {
  response: ReviewAndCreateStepQuery$data;
  variables: ReviewAndCreateStepQuery$variables;
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
    "name": "ReviewAndCreateStepQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ReviewAndCreateStepQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "65086fab260aad01120a0383b947c016",
    "id": null,
    "metadata": {},
    "name": "ReviewAndCreateStepQuery",
    "operationKind": "query",
    "text": "query ReviewAndCreateStepQuery {\n  me {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f123b56d267299de72bff5203cf506a6";

export default node;
