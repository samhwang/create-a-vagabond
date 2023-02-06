/**
 * @generated SignedSource<<33ab46fd47c32cf25ee6ee1994ebe1f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClassSpecificFieldsRefetchQuery$variables = {
  selectedClassId?: string | null;
};
export type ClassSpecificFieldsRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ClassSpecificFields_query">;
};
export type ClassSpecificFieldsRefetchQuery = {
  response: ClassSpecificFieldsRefetchQuery$data;
  variables: ClassSpecificFieldsRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "selectedClassId"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClassSpecificFieldsRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "selectedClassId",
            "variableName": "selectedClassId"
          }
        ],
        "kind": "FragmentSpread",
        "name": "ClassSpecificFields_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClassSpecificFieldsRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                "selections": (v4/*: any*/),
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
            "kind": "Variable",
            "name": "id",
            "variableName": "selectedClassId"
          }
        ],
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
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
                "concreteType": "VagabondClassRoguishFeatConnection",
                "kind": "LinkedField",
                "name": "roguishFeatConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VagabondClassRoguishFeatConnectionEdge",
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
                          (v2/*: any*/)
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
                "args": null,
                "kind": "ScalarField",
                "name": "startingValue",
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "VagabondClassNatureConnection",
                "kind": "LinkedField",
                "name": "natureConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VagabondClassNatureConnectionEdge",
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
                        "selections": (v4/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "natureConnection(first:50)"
              },
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "VagabondClassDriveConnection",
                "kind": "LinkedField",
                "name": "driveConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VagabondClassDriveConnectionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Drive",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": (v4/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "driveConnection(first:50)"
              },
              (v3/*: any*/),
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "VagabondClassClassMoveConnection",
                "kind": "LinkedField",
                "name": "classMoveConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VagabondClassClassMoveConnectionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ClassMove",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": (v4/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "classMoveConnection(first:50)"
              },
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "VagabondClassWeaponSkillConnection",
                "kind": "LinkedField",
                "name": "weaponSkillConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VagabondClassWeaponSkillConnectionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "WeaponSkill",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": (v4/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "weaponSkillConnection(first:50)"
              }
            ],
            "type": "VagabondClass",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "aa4de71d02a51cbd55c1f37fd0cba6fe",
    "id": null,
    "metadata": {},
    "name": "ClassSpecificFieldsRefetchQuery",
    "operationKind": "query",
    "text": "query ClassSpecificFieldsRefetchQuery(\n  $selectedClassId: ID = \"\"\n) {\n  ...ClassSpecificFields_query_2Y8a5A\n}\n\nfragment ClassMoveSelect_class on VagabondClass {\n  name\n  classMoveConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment ClassSpecificFields_query_2Y8a5A on Query {\n  ...RoguishFeatSelect_query\n  node(id: $selectedClassId) {\n    __typename\n    ... on VagabondClass {\n      startingCharm\n      startingCunning\n      startingFinesse\n      startingLuck\n      startingMight\n      ...ClassSpecificFields_useDefaultValue_class\n      ...useStartingPointLeft_class\n      ...NatureSelect_class\n      ...DrivesSelect_class\n      ...ClassMoveSelect_class\n      ...RoguishFeatSelect_class\n      ...WeaponSkillSelect_class\n    }\n    id\n  }\n}\n\nfragment ClassSpecificFields_useDefaultValue_class on VagabondClass {\n  id\n  roguishFeatConnection {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n  startingCharm\n  startingCunning\n  startingFinesse\n  startingLuck\n  startingMight\n  startingValue\n}\n\nfragment DrivesSelect_class on VagabondClass {\n  driveConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment NatureSelect_class on VagabondClass {\n  natureConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment RoguishFeatSelect_class on VagabondClass {\n  roguishFeatConnection {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n\nfragment RoguishFeatSelect_query on Query {\n  roguishFeatConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment WeaponSkillSelect_class on VagabondClass {\n  weaponSkillConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment useStartingPointLeft_class on VagabondClass {\n  startingCharm\n  startingCunning\n  startingFinesse\n  startingLuck\n  startingMight\n}\n"
  }
};
})();

(node as any).hash = "b43d5494039ef4080f1b97e2685ec86c";

export default node;
