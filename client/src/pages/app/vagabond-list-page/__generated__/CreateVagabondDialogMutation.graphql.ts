/**
 * @generated SignedSource<<d091daebe6d8357b8d7217f114a7f808>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VagabondCreateInput = {
  name: string;
};
export type CreateVagabondDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: VagabondCreateInput;
};
export type CreateVagabondDialogMutation$data = {
  readonly vagabondCreate: {
    readonly __typename: "Error";
    readonly message: string;
  } | {
    readonly __typename: "MutationVagabondCreateSuccess";
    readonly data: {
      readonly vagabond: {
        readonly name: string;
        readonly " $fragmentSpreads": FragmentRefs<"VagabondListItem_vagabond">;
      };
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type CreateVagabondDialogMutation = {
  response: CreateVagabondDialogMutation$data;
  variables: CreateVagabondDialogMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
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
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateVagabondDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "vagabondCreate",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "VagabondCreatePayload",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Vagabond",
                    "kind": "LinkedField",
                    "name": "vagabond",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "VagabondListItem_vagabond"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationVagabondCreateSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateVagabondDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "vagabondCreate",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "VagabondCreatePayload",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Vagabond",
                    "kind": "LinkedField",
                    "name": "vagabond",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
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
                        "name": "availablePoints",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "filters": null,
                    "handle": "appendNode",
                    "key": "",
                    "kind": "LinkedHandle",
                    "name": "vagabond",
                    "handleArgs": [
                      {
                        "kind": "Variable",
                        "name": "connections",
                        "variableName": "connections"
                      },
                      {
                        "kind": "Literal",
                        "name": "edgeTypeName",
                        "value": "UserVagabondConnectionEdge"
                      }
                    ]
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationVagabondCreateSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bba2db790eb554fd2591af545941c22f",
    "id": null,
    "metadata": {},
    "name": "CreateVagabondDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateVagabondDialogMutation(\n  $input: VagabondCreateInput!\n) {\n  vagabondCreate(input: $input) {\n    __typename\n    ... on Error {\n      message\n    }\n    ... on MutationVagabondCreateSuccess {\n      data {\n        vagabond {\n          name\n          ...VagabondListItem_vagabond\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment VagabondListItem_vagabond on Vagabond {\n  id\n  name\n  availablePoints\n}\n"
  }
};
})();

(node as any).hash = "c7058a82ba29ec1fe9c06dcabdd24010";

export default node;
