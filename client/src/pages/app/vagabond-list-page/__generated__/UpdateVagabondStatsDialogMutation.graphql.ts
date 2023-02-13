/**
 * @generated SignedSource<<00c950112fef8683fffe06d9cdbcdbb6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VagabondUpdateStatsInput = {
  charm?: number | null;
  cunning?: number | null;
  finesse?: number | null;
  luck?: number | null;
  might?: number | null;
  vagabondId: string;
};
export type UpdateVagabondStatsDialogMutation$variables = {
  input: VagabondUpdateStatsInput;
};
export type UpdateVagabondStatsDialogMutation$data = {
  readonly vagabondUpdateStats: {
    readonly __typename: "Error";
    readonly message: string;
  } | {
    readonly __typename: "MutationVagabondUpdateStatsSuccess";
    readonly data: {
      readonly vagabond: {
        readonly " $fragmentSpreads": FragmentRefs<"VagabondListItem_vagabond">;
      };
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type UpdateVagabondStatsDialogMutation = {
  response: UpdateVagabondStatsDialogMutation$data;
  variables: UpdateVagabondStatsDialogMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
  "name": "id",
  "storageKey": null
},
v5 = {
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
    "name": "UpdateVagabondStatsDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "vagabondUpdateStats",
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
                "concreteType": "VagabondUpdateStatsPayload",
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
            "type": "MutationVagabondUpdateStatsSuccess",
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
    "name": "UpdateVagabondStatsDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "vagabondUpdateStats",
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
                "concreteType": "VagabondUpdateStatsPayload",
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
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "VagabondClass",
                        "kind": "LinkedField",
                        "name": "class",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "availablePoints",
                        "storageKey": null
                      },
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationVagabondUpdateStatsSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3d6aea0d3b9fb27f0b994b153777a717",
    "id": null,
    "metadata": {},
    "name": "UpdateVagabondStatsDialogMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateVagabondStatsDialogMutation(\n  $input: VagabondUpdateStatsInput!\n) {\n  vagabondUpdateStats(input: $input) {\n    __typename\n    ... on Error {\n      message\n    }\n    ... on MutationVagabondUpdateStatsSuccess {\n      data {\n        vagabond {\n          ...VagabondListItem_vagabond\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment UpdateVagabondStatsDialog_vagabond on Vagabond {\n  id\n  charm\n  cunning\n  finesse\n  luck\n  might\n  availablePoints\n}\n\nfragment VagabondListItem_vagabond on Vagabond {\n  id\n  name\n  class {\n    name\n    id\n  }\n  availablePoints\n  ...UpdateVagabondStatsDialog_vagabond\n}\n"
  }
};
})();

(node as any).hash = "613857ddacaa8e6cd4b8235ac3e81345";

export default node;
